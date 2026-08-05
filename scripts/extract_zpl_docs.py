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


PAGE_HEADERS = {
    "ZPL Commands",
    "ZPL C om m a nd s",
    "ZPL Ne tw ork  C om m a nd s",
}


def _first_content_line(page_text: str) -> str:
    """Return the first non-empty, non-page-header line of a page."""
    for line in page_text.splitlines():
        stripped = line.strip()
        if stripped and stripped not in PAGE_HEADERS:
            return stripped
    return ""


def split_into_commands(pages: list[str]) -> list[tuple[str, str]]:
    """
    Returns list of (command_code, raw_text) tuples, one per unique command.

    A command boundary is only recognised when the command code appears as the
    FIRST content line of a page (i.e. immediately after the repeating page
    header "ZPL C om m a nd s").  Command codes that appear mid-page are part
    of example code blocks and are ignored as boundaries.

    When the same command starts on multiple pages (e.g. ^XZ appears as page-
    start on page 245 as a code-example continuation and again on page 374 as
    the real docs), the fragment with the most content is kept.
    """
    # Pass 1: collect all page-start command boundaries.
    # We still accumulate across all pages for multi-page commands.
    all_fragments: list[tuple[str, str]] = []
    current_cmd: str | None = None
    current_lines: list[str] = []

    for page_text in pages:
        first = _first_content_line(page_text)
        m = CMD_HEADING.match(first) if first else None
        if m:
            # New command starts at this page
            if current_cmd is not None:
                all_fragments.append((current_cmd, "\n".join(current_lines)))
            current_cmd = m.group(1)
            # Collect all non-header lines of this page as the start of the content
            current_lines = []
            for line in page_text.splitlines():
                stripped = line.strip()
                if stripped in PAGE_HEADERS:
                    continue
                current_lines.append(line)
        else:
            # Continuation page: append all non-header lines
            if current_cmd is not None:
                for line in page_text.splitlines():
                    stripped = line.strip()
                    if stripped in PAGE_HEADERS:
                        continue
                    current_lines.append(line)

    if current_cmd is not None:
        all_fragments.append((current_cmd, "\n".join(current_lines)))

    # Deduplicate: prefer fragments where the Format section references this
    # command (strongest signal), then any fragment with a Format section,
    # then fall back to the longest fragment.
    # This prevents large example code blocks from displacing real docs.
    def _score(cmd: str, raw: str) -> tuple[int, int, int]:
        lower = raw.lower()
        cmd_lower = cmd.lower()
        # Check for "Format : ^CMD" or "Fo r m a t : ^CMD" pattern
        has_own_format = int(
            f"fo r m a t  : {cmd_lower}" in lower
            or f"fo r m a t : {cmd_lower}" in lower
            or f"format : {cmd_lower}" in lower
            or f"format: {cmd_lower}" in lower
        )
        has_format = int("fo r m a t" in lower or "format" in lower)
        return (has_own_format, has_format, len(raw))

    best: dict[str, str] = {}
    for cmd, raw in all_fragments:
        if cmd not in best or _score(cmd, raw) > _score(cmd, best[cmd]):
            best[cmd] = raw

    # Return in first-seen order
    seen: list[str] = []
    for cmd, _ in all_fragments:
        if cmd not in seen:
            seen.append(cmd)

    return [(cmd, best[cmd]) for cmd in seen]


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
    folder.mkdir(parents=True, exist_ok=True)
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
