export const ZPL_FONTS: { name: string; label: string; cssFamily: string }[] = [
  { name: '0', label: '0 — Swiss 721 (default)',  cssFamily: 'Arial, Helvetica, sans-serif' },
  { name: 'A', label: 'A — Zebra font A',         cssFamily: '"Courier New", "Lucida Console", monospace' },
  { name: 'B', label: 'B — Zebra font B',         cssFamily: '"Courier New", monospace' },
  { name: 'D', label: 'D — Zebra font D',         cssFamily: '"Courier New", monospace' },
  { name: 'F', label: 'F — Zebra font F',         cssFamily: '"Courier New", monospace' },
  { name: 'G', label: 'G — Zebra font G',         cssFamily: '"Courier New", monospace' },
  { name: 'P', label: 'P — Zebra font P',         cssFamily: 'Arial, Helvetica, sans-serif' },
];

export function cssFontFamily(fontName?: string): string {
  return ZPL_FONTS.find(f => f.name === fontName)?.cssFamily ?? ZPL_FONTS[0].cssFamily;
}
