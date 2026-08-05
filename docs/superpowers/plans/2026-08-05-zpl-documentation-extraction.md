# ZPL Documentation Extraction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract all ZPL II commands from `zpl-zbi2-pg-en.pdf` into structured markdown files under `zpl-documentation-summed/`, one file per command, grouped by functional category.

**Architecture:** A single Python extraction script reads the PDF page by page (pages 60–444, which is PDF pages 59–443 zero-indexed), detects command boundaries by looking for lines that are just a command code (`^XX` or `~XX`), accumulates text per command, then writes one `.md` file per command into the correct subfolder. A classification lookup table maps each known command to its group; unknowns go to `misc/`. The script also builds `index.md` as it goes.

**Tech Stack:** Python 3, `pypdf` library (already installed), standard `os`/`re`/`pathlib` modules.

## Global Constraints

- Output directory: `zpl-documentation-summed/` at project root
- PDF path: `zpl-zbi2-pg-en.pdf` at project root
- PDF zero-indexed pages 59–443 (PDF pages 60–444) contain ZPL II commands; stop before page 444 (ZBI section starts at page 445)
- One `.md` file per command, named exactly after the command (e.g. `^FO.md`, `~JA.md`)
- Dual-variant commands (e.g. `^PH ~PH` documented together) → single file named after `^` form, documents both variants
- Per-command format: Description, Format, Parameters table, Example, Related Commands
- `index.md`: master table with columns Command | Group | Description
- No external dependencies beyond `pypdf`

---

### Task 1: Create output folder structure and scaffolding script

**Files:**
- Create: `zpl-documentation-summed/label-control/.keep`
- Create: `zpl-documentation-summed/layout/.keep`
- Create: `zpl-documentation-summed/text/.keep`
- Create: `zpl-documentation-summed/barcodes/.keep`
- Create: `zpl-documentation-summed/graphics/.keep`
- Create: `zpl-documentation-summed/data-fields/.keep`
- Create: `zpl-documentation-summed/print-control/.keep`
- Create: `zpl-documentation-summed/misc/.keep`
- Create: `scripts/extract_zpl_docs.py`

**Interfaces:**
- Produces: `scripts/extract_zpl_docs.py` — runnable Python script consumed by Tasks 2 and 3

- [ ] **Step 1: Create the output subfolders**

```bash
mkdir -p zpl-documentation-summed/label-control
mkdir -p zpl-documentation-summed/layout
mkdir -p zpl-documentation-summed/text
mkdir -p zpl-documentation-summed/barcodes
mkdir -p zpl-documentation-summed/graphics
mkdir -p zpl-documentation-summed/data-fields
mkdir -p zpl-documentation-summed/print-control
mkdir -p zpl-documentation-summed/misc
touch zpl-documentation-summed/label-control/.keep
touch zpl-documentation-summed/layout/.keep
touch zpl-documentation-summed/text/.keep
touch zpl-documentation-summed/barcodes/.keep
touch zpl-documentation-summed/graphics/.keep
touch zpl-documentation-summed/data-fields/.keep
touch zpl-documentation-summed/print-control/.keep
touch zpl-documentation-summed/misc/.keep
mkdir -p scripts
```

- [ ] **Step 2: Create the extraction script skeleton**

Create `scripts/extract_zpl_docs.py` with this content:

```python
import re
import os
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
    lines = raw.splitlines()

    # First non-empty, non-heading line is used as description seed
    desc_lines = []
    format_lines = []
    param_lines = []
    example_lines = []
    related = []

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

    example_section = ""
    if example_block:
        example_section = f"""
## Example

```zpl
{example_block}
```
"""

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
{example_section if example_block else "_No example extracted. See ZPL II Programming Guide._"}

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
```

- [ ] **Step 3: Verify the script is syntactically valid**

```bash
python -m py_compile scripts/extract_zpl_docs.py && echo "OK"
```

Expected: `OK`

- [ ] **Step 4: Commit**

```bash
git add scripts/extract_zpl_docs.py zpl-documentation-summed/
git commit -m "feat: add ZPL doc extraction script and output folder structure"
```

---

### Task 2: Run the extraction and verify output

**Files:**
- Modify: `scripts/extract_zpl_docs.py` (fix any parsing issues found during verification)
- Create: `zpl-documentation-summed/index.md` (generated)
- Create: `zpl-documentation-summed/**/*.md` (generated, one per command)

**Interfaces:**
- Consumes: `scripts/extract_zpl_docs.py` from Task 1
- Produces: all `.md` files and `index.md` in `zpl-documentation-summed/`

- [ ] **Step 1: Run the extraction script**

```bash
python scripts/extract_zpl_docs.py
```

Expected output: something like:
```
Reading zpl-zbi2-pg-en.pdf...
  385 pages loaded.
Splitting into commands...
  ~280 commands found.
  wrote ^A -> text/
  wrote ^B0 -> barcodes/
  ...
Done. ~280 files written + index.md
```

If the script errors, fix the error in `scripts/extract_zpl_docs.py` and re-run.

- [ ] **Step 2: Spot-check key command files**

Open and read these three files to verify correct content was extracted:

```bash
cat "zpl-documentation-summed/layout/caret-FO.md"
cat "zpl-documentation-summed/barcodes/caret-B3.md"
cat "zpl-documentation-summed/label-control/caret-XA.md"
```

Each file should have a non-empty Description section and a Format section showing the command syntax. If sections are empty or garbled, investigate the `build_markdown()` function in the script — the section-detection logic uses keyword matching on PDF-extracted text which may need tuning for the spaced-out PDF font rendering (e.g. `"Fo r m a t"` vs `"Format"`).

- [ ] **Step 3: Check the index**

```bash
cat zpl-documentation-summed/index.md | head -30
```

Expected: a markdown table with 200+ rows, each with a command, its group, and a description.

- [ ] **Step 4: Verify command count is reasonable**

```bash
find zpl-documentation-summed -name "*.md" ! -name "index.md" | wc -l
```

Expected: between 200 and 350 files. If significantly fewer (< 100), the boundary detection in `split_into_commands()` is too strict — check the `CMD_HEADING` regex. If exactly 1, the heading was never matched — print the first 20 lines of a raw page to debug:

```python
import pypdf
reader = pypdf.PdfReader('zpl-zbi2-pg-en.pdf')
text = reader.pages[59].extract_text()
for i, line in enumerate(text.splitlines()[:25]):
    print(repr(line))
```

Adjust `CMD_HEADING` regex or the `stripped in (...)` skip logic based on what you see.

- [ ] **Step 5: Fix any parsing issues and re-run if needed**

Common issues to watch for:
- **Spaced characters in headings**: PDF text may render as `^F O` instead of `^FO`. If so, add a pre-processing step to collapse spaces within command tokens:
  ```python
  # In clean() or before CMD_HEADING match:
  stripped = re.sub(r'(\^|~)\s*([A-Z0-9])\s*([A-Z0-9]?)\s*([A-Z0-9]?)', 
                    lambda m: m.group(1)+''.join(filter(None,[m.group(2),m.group(3),m.group(4)])), 
                    stripped)
  ```
- **Section keywords spaced out**: `"Fo r m a t"` is already handled in `build_markdown()` with both spaced and normal forms. If new variants appear, add them to the conditional checks.
- **Multi-page commands**: The accumulator already handles these — pages are concatenated before splitting.

After any fix, delete generated files and re-run:
```bash
find zpl-documentation-summed -name "*.md" -delete
python scripts/extract_zpl_docs.py
```

- [ ] **Step 6: Commit the generated documentation**

```bash
git add zpl-documentation-summed/
git commit -m "feat: generate ZPL II command documentation from PDF"
```

---

### Task 3: Enrich Related Commands sections

The extraction script fills Related Commands with a generic placeholder. This task enriches the most important commands with real cross-links.

**Files:**
- Modify: `scripts/enrich_related.py` (new script)
- Modify: `zpl-documentation-summed/**/*.md` (selected files updated)

**Interfaces:**
- Consumes: all `.md` files from Task 2
- Produces: updated `.md` files with real Related Commands sections for the core command set

- [ ] **Step 1: Create the enrichment script**

Create `scripts/enrich_related.py`:

```python
from pathlib import Path

OUT_DIR = Path("zpl-documentation-summed")

# Map: command filename (without extension) -> list of (related_cmd, relationship note)
RELATED = {
    "caret-XA": [
        ("^XZ", "closes the label format opened by ^XA"),
        ("^FO", "first command inside a format to position a field"),
        ("^PQ", "placed before ^XZ to set print quantity"),
    ],
    "caret-XZ": [
        ("^XA", "opens the label format that ^XZ closes"),
        ("^PQ", "set quantity before ^XZ"),
    ],
    "caret-FO": [
        ("^XA", "label format must be open"),
        ("^FD", "provides the data for the field positioned by ^FO"),
        ("^FS", "closes the field opened after ^FO"),
        ("^LH", "^FO coordinates are relative to ^LH home position"),
        ("^A", "set font before ^FO for text fields"),
    ],
    "caret-FD": [
        ("^FO", "must precede ^FD to set field position"),
        ("^FS", "closes the ^FD field"),
        ("^A", "set font before the field for text"),
        ("^B3", "replace ^FD data with barcode command + ^FD for barcodes"),
    ],
    "caret-FS": [
        ("^FD", "^FS closes the field data opened by ^FD"),
        ("^FO", "^FO + ^FD + ^FS is the canonical field triplet"),
    ],
    "caret-A": [
        ("^CF", "^CF sets the default font; ^A overrides it for one field"),
        ("^FD", "^A must appear before the ^FD it applies to"),
        ("^FO", "^FO positions the field ^A will render into"),
    ],
    "caret-CF": [
        ("^A", "^A overrides ^CF for a single field"),
    ],
    "caret-BY": [
        ("^B3", "^BY must precede the barcode command to set bar width"),
        ("^BC", "^BY sets width/ratio for ^BC (Code 128)"),
        ("^B8", "^BY sets width/ratio for ^B8 (EAN-8)"),
        ("^FO", "^FO positions the barcode field"),
    ],
    "caret-B3": [
        ("^BY", "set bar width and ratio before ^B3"),
        ("^FO", "positions the barcode"),
        ("^FD", "provides the barcode data"),
        ("^FS", "closes the barcode field"),
    ],
    "caret-BC": [
        ("^BY", "set bar width before ^BC"),
        ("^FO", "positions the barcode"),
        ("^FD", "provides the barcode data"),
        ("^FS", "closes the barcode field"),
    ],
    "caret-GB": [
        ("^FO", "^FO sets the origin of the graphic box"),
        ("^FS", "closes the ^GB field"),
        ("^LR", "^LR Y inverts the graphic box fill"),
    ],
    "caret-GC": [
        ("^FO", "sets the center origin of the circle"),
        ("^FS", "closes the field"),
    ],
    "caret-FT": [
        ("^FO", "^FO and ^FT are alternative field-origin commands; ^FT uses absolute coordinates"),
    ],
    "caret-LH": [
        ("^FO", "all ^FO coordinates are relative to ^LH"),
        ("^XA", "^LH is set inside a label format"),
    ],
    "caret-LL": [
        ("^XA", "^LL is set inside a label format to define label length"),
        ("^PW", "^PW sets label width; ^LL sets label length"),
    ],
    "caret-PQ": [
        ("^XA", "^PQ is placed before ^XZ"),
        ("^XZ", "^PQ before ^XZ triggers the print quantity"),
    ],
    "caret-PR": [
        ("^XA", "^PR is set inside a label format"),
        ("^PQ", "combine with ^PQ to control print speed and quantity"),
    ],
    "caret-SN": [
        ("^FO", "^FO positions the serial number field"),
        ("^FS", "closes the ^SN field"),
        ("^PQ", "use ^PQ to print multiple labels with incrementing serial numbers"),
    ],
    "caret-GF": [
        ("^FO", "positions the graphic field"),
        ("^FS", "closes the ^GF field"),
        ("tilde-DG", "~DG downloads a graphic; ^GF recalls it"),
    ],
}


def enrich(cmd_stem: str, relations: list) -> None:
    # Find the file across all subdirs
    matches = list(OUT_DIR.rglob(f"{cmd_stem}.md"))
    if not matches:
        print(f"  SKIP {cmd_stem}.md (not found)")
        return
    path = matches[0]
    content = path.read_text(encoding="utf-8")

    related_lines = "\n".join(
        f"- `{cmd}` — {note}" for cmd, note in relations
    )
    new_section = f"## Related Commands\n\n{related_lines}\n"

    # Replace placeholder section
    if "## Related Commands" in content:
        content = content.split("## Related Commands")[0].rstrip() + "\n\n" + new_section
    else:
        content = content.rstrip() + "\n\n" + new_section

    path.write_text(content, encoding="utf-8")
    print(f"  enriched {path}")


def main():
    for cmd_stem, relations in RELATED.items():
        enrich(cmd_stem, relations)
    print("Done.")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Run the enrichment script**

```bash
python scripts/enrich_related.py
```

Expected: each line prints `enriched zpl-documentation-summed/<group>/<cmd>.md`

- [ ] **Step 3: Spot-check an enriched file**

```bash
cat "zpl-documentation-summed/layout/caret-FO.md"
```

The Related Commands section should now list `^XA`, `^FD`, `^FS`, `^LH`, `^A` with their relationship notes — not the generic placeholder.

- [ ] **Step 4: Commit**

```bash
git add zpl-documentation-summed/ scripts/enrich_related.py
git commit -m "feat: enrich related-commands sections for core ZPL II commands"
```

---

### Task 4: Final review and cleanup

**Files:**
- Modify: `zpl-documentation-summed/index.md` (verify completeness)
- Modify: `scripts/extract_zpl_docs.py` (minor cleanup if needed)

**Interfaces:**
- Consumes: all output from Tasks 2 and 3
- Produces: final committed documentation ready for use

- [ ] **Step 1: Verify index completeness**

```bash
python -c "
import re
from pathlib import Path
lines = Path('zpl-documentation-summed/index.md').read_text(encoding='utf-8').splitlines()
cmd_lines = [l for l in lines if l.startswith('|') and '^' in l or '~' in l]
print(f'{len(cmd_lines)} commands in index')
"
```

Expected: 200+ commands. If significantly fewer, re-run extraction after debugging.

- [ ] **Step 2: Check for any empty Description sections**

```bash
python -c "
from pathlib import Path
empty = []
for f in Path('zpl-documentation-summed').rglob('*.md'):
    if f.name == 'index.md':
        continue
    content = f.read_text(encoding='utf-8')
    if '## Description' in content:
        after = content.split('## Description')[1].split('##')[0].strip()
        if not after or 'See ZPL II Programming Guide' in after:
            empty.append(f.name)
print(f'{len(empty)} files with empty/placeholder descriptions:')
for name in empty[:20]:
    print(' ', name)
"
```

For any command that has only a placeholder description, you can open the relevant PDF page manually and add the description by editing the file directly. This is expected for some very short commands — acceptable to leave as-is for now.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "docs: finalize ZPL II command documentation extraction"
```
