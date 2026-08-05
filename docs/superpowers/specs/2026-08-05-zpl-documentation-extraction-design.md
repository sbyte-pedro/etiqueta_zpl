# ZPL Documentation Extraction — Design Spec
Date: 2026-08-05

## Goal

Extract ZPL II command documentation from `zpl-zbi2-pg-en.pdf` into a structured, navigable reference at `zpl-documentation-summed/`. The output serves two purposes:

1. **Learning** — understand how ZPL commands work and interact with each other
2. **App reference** — understand what commands are possible vs. what etiqueta_zpl currently implements

## Scope

ZPL II commands only (`^` and `~` prefixed commands from the ZPL section). Stops before ZBI 2, Network, RFID, and SGD sections. ~300+ individual commands.

## Folder Structure

```
zpl-documentation-summed/
├── index.md                 # master table: command | group | one-line description
├── label-control/           # ^XA, ^XZ, ^XB, ^XF, ^XG, ^XS — label start/end/format control
├── layout/                  # ^FO, ^LH, ^LL, ^LR, ^PO, ^FW — positioning, orientation
├── text/                    # ^A, ^CF, ^FD, ^FS, ^FT, ^FB — fonts, field data, text blocks
├── barcodes/                # ^B0–^BZ, ^BY — all barcode commands
├── graphics/                # ^GB, ^GC, ^GD, ^GE, ^GF — boxes, circles, diagonals, graphics
├── data-fields/             # ^FN, ^FV, ^FR, ^FP, ^SF, ^SN — field variables, serialization
├── print-control/           # ^PQ, ^PR, ^PM, ^PF, ^PH — quantity, rate, mirror, pause
└── misc/                    # everything else: host status, config, utilities
```

Each file inside a folder is named after the command it documents, e.g. `barcodes/^B3.md`.

## Per-Command File Format

```markdown
# ^B3 — Code 39 Barcode

## Description
What the command does, when to use it, any important notes or constraints.

## Format
^B3o,e,h,f,g

## Parameters
| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| o | N, R, I, B | N | Field orientation |
| e | Y, N | N | Print check digit |
| h | 1–32000 | 10 | Bar code height (dots) |
| f | Y, N | Y | Print interpretation line |
| g | Y, N | N | Print interp. line above code |

## Example
\`\`\`zpl
^XA
^FO50,50^B3N,N,100,Y,N^FD123456^FS
^XZ
\`\`\`

## Related Commands
- ^BY — sets bar width and ratio (apply before ^B3)
- ^FO — sets field origin
- ^FD / ^FS — wraps the barcode data
```

The **Related Commands** section is critical — it links commands and explains interaction order/dependencies.

## Command Classification Table

| Group | Commands |
|-------|----------|
| label-control | ^XA, ^XB, ^XF, ^XG, ^XS, ^XZ, ^ZZ |
| layout | ^FO, ^FT, ^FW, ^LH, ^LL, ^LR, ^PO, ^LS, ^LT |
| text | ^A, ^CF, ^FD, ^FB, ^FH, ^FN, ^FS, ^FV, ^FX |
| barcodes | ^B0–^B9, ^BA–^BZ, ^BY |
| graphics | ^GB, ^GC, ^GD, ^GE, ^GF |
| data-fields | ^FR, ^FP, ^SF, ^SN, ^FL, ^FM |
| print-control | ^PF, ^PH, ^PQ, ^PR, ^PM, ^PN, ^PW |
| misc | all remaining ZPL II commands |

## Extraction Agent Design

- **Tool:** Python with `pypdf` library, reads PDF page by page
- **Boundary detection:** Each new ZPL command starts with its command code as a heading (e.g. `^A`, `^B3`); the agent detects these transitions to split content per command
- **Per command:** extracts description, format line, parameters table, and examples from the raw PDF text
- **Classification:** uses the lookup table above; unrecognized commands fall into `misc/`
- **Output:** writes one `.md` file per command to the correct subfolder; appends one row to `index.md` per command
- **Dual-variant commands:** some commands have both `^` and `~` forms documented on the same page (e.g. `^PH ~PH`). These get a single file named after the `^` form (e.g. `^PH.md`) and document both variants inside.
- **Stopping condition:** stops processing when it detects the ZBI 2 section heading

## index.md Format

```markdown
# ZPL II Command Index

| Command | Group | Description |
|---------|-------|-------------|
| ^A | text | Specifies the font for a text field |
| ^B3 | barcodes | Code 39 barcode |
| ^BY | barcodes | Bar code field default (sets bar width and ratio) |
| ^FO | layout | Field origin — sets x,y position of next field |
...
```
