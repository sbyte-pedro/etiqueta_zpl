# Task 4 Report: Express Routes + Preview Proxy

## Status: DONE

## File Created
- `backend/src/routes/zpl.ts` — 79 lines, 3 endpoints: POST /generate-zpl, POST /parse-zpl, POST /preview

## Smoke Test Output

### POST /api/generate-zpl
Request:
```json
{"labelWidth":800,"labelHeight":1200,"elements":[{"id":"1","type":"text","x":80,"y":80,"width":200,"height":40,"value":"Hello","fontSize":34,"fontName":"0"}]}
```
Response:
```json
{"zpl":"^XA\n^PW800\n^LL1200\n^FO80,80^A0N,34,34^FDHello^FS\n^XZ"}
```
PASS — matches expected output exactly.

### POST /api/parse-zpl
Request:
```json
{"zpl":"^XA\n^PW800\n^LL1200\n^FO80,80^A0N,34,34^FDHello^FS\n^XZ"}
```
Response:
```json
{"labelWidth":800,"labelHeight":1200,"elements":[{"id":"parsed-1","type":"text","x":80,"y":80,"width":200,"height":44,"value":"Hello","fontSize":34,"fontName":"0"}],"unknownCommands":["^XA\n","^PW800\n","^LL1200\n","^FS\n"]}
```
PASS — returns elements array with 1 text element. Note: unknownCommands includes structural tokens (^XA, ^PW, ^LL, ^FS) due to parser's regex design — this is existing behavior from Task 3, not introduced here.

### POST /api/preview
Not live-tested (would require Labelary API reachability), but proxy code is in place with correct dpi conversion and error handling.

## Git Commit Hash
`bf03d8b`

## Concerns
- The parser's `unknownCommands` array includes structural commands (^XA, ^PW, ^LL, ^FS) because the Task 3 parser regex doesn't fully exclude them. This is pre-existing behavior, not a Task 4 issue.
- Labelary preview endpoint uses `8dpmm` resolution in the URL but converts using 203dpi — the two values are consistent (8 dots/mm × 25.4 mm/in ≈ 203 dpi).
