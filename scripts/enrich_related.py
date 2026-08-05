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
