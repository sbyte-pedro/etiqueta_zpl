import re
import pypdf
from pathlib import Path

PDF_PATH = "zpl-zbi2-pg-en.pdf"
OUT_DIR = Path("zpl-documentation-summed")

# PDF zero-indexed page range for ZPL II commands
ZPL_START_PAGE = 59   # page 60 in PDF (^A command)
ZPL_END_PAGE = 443    # exclusive; page 444 is last ZPL page before ZBI at 445

# Maps command prefix -> subfolder name.
# Commands not listed here go to misc/.
CLASSIFICATION = {
    "^XA": "label-control", "^XB": "label-control", "^XF": "label-control",
    "^XG": "label-control", "^XS": "label-control", "^XZ": "label-control",
    "^ZZ": "label-control",
    "^FO": "layout", "^FT": "layout", "^FW": "layout", "^LH": "layout",
    "^LL": "layout", "^LR": "layout", "^PO": "layout", "^LS": "layout",
    "^LT": "layout",
    "^A": "text", "^CF": "text", "^FD": "text", "^FB": "text",
    "^FH": "text", "^FN": "text", "^FS": "text", "^FV": "text", "^FX": "text",
    "^B0": "barcodes", "^B1": "barcodes", "^B2": "barcodes", "^B3": "barcodes",
    "^B4": "barcodes", "^B5": "barcodes", "^B6": "barcodes", "^B7": "barcodes",
    "^B8": "barcodes", "^B9": "barcodes", "^BA": "barcodes", "^BB": "barcodes",
    "^BC": "barcodes", "^BD": "barcodes", "^BE": "barcodes", "^BF": "barcodes",
    "^BI": "barcodes", "^BJ": "barcodes", "^BK": "barcodes", "^BL": "barcodes",
    "^BO": "barcodes", "^BP": "barcodes", "^BQ": "barcodes", "^BR": "barcodes",
    "^BS": "barcodes", "^BT": "barcodes", "^BU": "barcodes", "^BX": "barcodes",
    "^BY": "barcodes", "^BZ": "barcodes",
    "^GB": "graphics", "^GC": "graphics", "^GD": "graphics",
    "^GE": "graphics", "^GF": "graphics",
    "^FR": "data-fields", "^FP": "data-fields", "^SF": "data-fields",
    "^SN": "data-fields", "^FL": "data-fields", "^FM": "data-fields",
    "^PF": "print-control", "^PH": "print-control", "^PQ": "print-control",
    "^PR": "print-control", "^PM": "print-control", "^PN": "print-control",
    "^PW": "print-control",
}

# Regex: a line that is ONLY a command code (^ or ~ followed by 1-3 uppercase
# alphanumeric chars, optionally with a second variant separated by space)
CMD_HEADING = re.compile(r'^([~^][A-Z0-9]{1,3})(?:\s+[~^][A-Z0-9]{1,3})?$')


def classify(cmd: str) -> str:
    return CLASSIFICATION.get(cmd, "misc")


def clean(text: str) -> str:
    """Collapse spaced-out characters from PDF extraction."""
    # Remove trailing page numbers (lone digits on a line)
    text = re.sub(r'\n\d{1,4}\s*$', '', text, flags=re.MULTILINE)
    return text.strip()


def extract_pages(pdf_path: str, start: int, end: int) -> list[str]:
    reader = pypdf.PdfReader(pdf_path)
    pages = []
    for i in range(start, end):
        text = reader.pages[i].extract_text() or ""
        pages.append(text)
    return pages


def split_into_commands(pages: list[str]) -> list[tuple[str, str]]:
    """
    Returns list of (command_code, raw_text) tuples.
    command_code is e.g. '^FO', raw_text is everything on that command's pages.
    """
    commands = []
    current_cmd = None
    current_lines = []

    for page_text in pages:
        lines = page_text.splitlines()
        for line in lines:
            stripped = line.strip()
            # Skip the section header that appears on every page
            if stripped in ("ZPL Commands", "ZPL C om m a nd s"):
                continue
            m = CMD_HEADING.match(stripped)
            if m:
                if current_cmd:
                    commands.append((current_cmd, "\n".join(current_lines)))
                current_cmd = m.group(1)
                current_lines = [stripped]
            else:
                if current_cmd:
                    current_lines.append(line)

    if current_cmd:
        commands.append((current_cmd, "\n".join(current_lines)))

    return commands


def build_markdown(cmd: str, raw: str) -> tuple[str, str]:
    """
    Returns (one_line_description, markdown_content).
    Parses raw text into Description / Format / Parameters / Example / Related Commands sections.
    """
    lines = clean(raw).splitlines()

    # First non-empty, non-heading line is used as description seed
    desc_lines = []
    format_lines = []
    param_lines = []
    example_lines = []

    section = "description"
    for line in lines[1:]:  # skip the heading line (cmd code itself)
        l = line.strip()
        if not l:
            continue
        low = l.lower()
        if low.startswith("fo r m a t") or low.startswith("format"):
            section = "format"
            continue
        if low.startswith("pa r a m e t e r") or low.startswith("parameter"):
            section = "params"
            continue
        if low.startswith("e x a m ple") or low.startswith("example"):
            section = "example"
            continue
        if low.startswith("co m m e n t") or low.startswith("comment"):
            section = "description"  # comments fold back into description
            continue

        if section == "description":
            desc_lines.append(l)
        elif section == "format":
            format_lines.append(l)
        elif section == "params":
            param_lines.append(l)
        elif section == "example":
            example_lines.append(l)

    one_liner = desc_lines[0] if desc_lines else f"{cmd} command"
    # Truncate one-liner to ~120 chars for index
    if len(one_liner) > 120:
        one_liner = one_liner[:117] + "..."

    description_block = "\n".join(desc_lines) if desc_lines else f"See ZPL II Programming Guide for {cmd}."
    format_block = "\n".join(format_lines) if format_lines else f"{cmd}"
    params_block = "\n".join(param_lines) if param_lines else "See ZPL II Programming Guide."
    example_block = "\n".join(example_lines) if example_lines else ""

    example_body = (
        f"```zpl\n{example_block}\n```"
        if example_block
        else "_No example extracted. See ZPL II Programming Guide._"
    )

    md = f"""# {cmd}

## Description

{description_block}

## Format

```
{format_block}
```

## Parameters

{params_block}

## Example

{example_body}

## Related Commands

_See index.md for commands in the same group._
"""
    return one_liner, md


def write_command(cmd: str, md: str) -> None:
    group = classify(cmd)
    folder = OUT_DIR / group
    # Sanitize filename: replace ^ and ~ with nothing, e.g. ^FO -> FO.md
    safe_name = cmd.replace("^", "caret-").replace("~", "tilde-")
    filepath = folder / f"{safe_name}.md"
    filepath.write_text(md, encoding="utf-8")


def write_index(entries: list[tuple[str, str, str]]) -> None:
    """entries: list of (cmd, group, one_liner)"""
    entries.sort(key=lambda e: e[0])
    rows = "\n".join(
        f"| {cmd} | {group} | {desc} |"
        for cmd, group, desc in entries
    )
    content = f"""# ZPL II Command Index

| Command | Group | Description |
|---------|-------|-------------|
{rows}
"""
    (OUT_DIR / "index.md").write_text(content, encoding="utf-8")


def main():
    print(f"Reading {PDF_PATH}...")
    pages = extract_pages(PDF_PATH, ZPL_START_PAGE, ZPL_END_PAGE)
    print(f"  {len(pages)} pages loaded.")

    print("Splitting into commands...")
    commands = split_into_commands(pages)
    print(f"  {len(commands)} commands found.")

    index_entries = []
    for cmd, raw in commands:
        one_liner, md = build_markdown(cmd, raw)
        write_command(cmd, md)
        group = classify(cmd)
        index_entries.append((cmd, group, one_liner))
        print(f"  wrote {cmd} -> {group}/")

    write_index(index_entries)
    print(f"Done. {len(commands)} files written + index.md")


if __name__ == "__main__":
    main()
