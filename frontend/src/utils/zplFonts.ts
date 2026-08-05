export const ZPL_FONTS: { name: string; label: string; cssFamily: string }[] = [
  { name: '0', label: '0 — Swiss 721 (default)',  cssFamily: 'Arial, Helvetica, sans-serif' },
  { name: 'A', label: 'A — Zebra font A',         cssFamily: 'Arial, Helvetica, sans-serif' },
  { name: 'B', label: 'B — Zebra font B',         cssFamily: 'Arial Narrow, Arial, sans-serif' },
  { name: 'D', label: 'D — Zebra font D',         cssFamily: 'Arial, Helvetica, sans-serif' },
  { name: 'F', label: 'F — Zebra font F',         cssFamily: '"Courier New", monospace' },
  { name: 'G', label: 'G — Zebra font G',         cssFamily: '"Times New Roman", serif' },
  { name: 'P', label: 'P — Zebra font P',         cssFamily: '"Times New Roman", serif' },
];

export function cssFontFamily(fontName?: string): string {
  return ZPL_FONTS.find(f => f.name === fontName)?.cssFamily ?? ZPL_FONTS[0].cssFamily;
}
