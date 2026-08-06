export interface ZplFont {
  name: string;
  label: string;
  cssFamily: string;
  fontWeight: 'normal' | 'bold';
  textTransform: 'none' | 'uppercase';
}

export const ZPL_FONTS: ZplFont[] = [
  { name: '0', label: '0 — Swiss 721 (default)',  cssFamily: 'Arial, Helvetica, sans-serif',          fontWeight: 'normal', textTransform: 'none'      },
  { name: 'A', label: 'A — Zebra font A',         cssFamily: '"Courier New", "Lucida Console", monospace', fontWeight: 'normal', textTransform: 'none' },
  { name: 'B', label: 'B — Zebra font B',         cssFamily: '"Courier New", monospace',               fontWeight: 'bold',   textTransform: 'uppercase' },
  { name: 'D', label: 'D — Zebra font D',         cssFamily: '"Courier New", monospace',               fontWeight: 'normal', textTransform: 'none'      },
  { name: 'F', label: 'F — Zebra font F',         cssFamily: '"Courier New", monospace',               fontWeight: 'normal', textTransform: 'none'      },
  { name: 'G', label: 'G — Zebra font G',         cssFamily: '"Courier New", monospace',               fontWeight: 'normal', textTransform: 'none'      },
  { name: 'P', label: 'P — Zebra font P',         cssFamily: 'Arial, Helvetica, sans-serif',          fontWeight: 'normal', textTransform: 'none'      },
];

export function getZplFont(fontName?: string): ZplFont {
  return ZPL_FONTS.find(f => f.name === fontName) ?? ZPL_FONTS[0];
}

export function cssFontFamily(fontName?: string): string {
  return getZplFont(fontName).cssFamily;
}
