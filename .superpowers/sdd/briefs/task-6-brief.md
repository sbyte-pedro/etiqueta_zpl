# Task 6: Element Components

## Context
Task 6 of 10 — Zebra Label Designer. Frontend scaffold is complete (Task 5). You are creating the 5 visual element components that render on the canvas.

## Global Constraints
- TypeScript strict mode
- Project root: `c:/Pedro/projects/etiqueta_zpl`
- All components in `frontend/src/components/elements/`
- All take props: `element: DesignElement` and `scale: number` (scale = dots-per-px, default 2)

## Files to Create

All files in `c:/Pedro/projects/etiqueta_zpl/frontend/src/components/elements/`

### `TextElement.tsx`
```typescript
import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function TextElement({ element, scale }: Props) {
  const fontSize = ((element.fontSize ?? 30) * scale) / 2;
  return (
    <div
      style={{
        width: element.width * scale,
        height: element.height * scale,
        fontSize: Math.max(8, fontSize),
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      {element.value || 'Text'}
    </div>
  );
}
```

### `BarcodeElement.tsx`
```typescript
import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function BarcodeElement({ element, scale }: Props) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    try {
      JsBarcode(ref.current, element.value || '000000', {
        format: 'CODE128',
        width: 1.5,
        height: (element.height * scale) - 20,
        displayValue: true,
        fontSize: 10,
        margin: 0,
      });
    } catch (e) {
      // invalid barcode value — render blank
    }
  }, [element.value, element.height, scale]);

  return (
    <div style={{ width: element.width * scale, height: element.height * scale, overflow: 'hidden' }}>
      <svg ref={ref} style={{ width: '100%' }} />
    </div>
  );
}
```

### `QRCodeElement.tsx`
```typescript
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function QRCodeElement({ element, scale }: Props) {
  const [src, setSrc] = useState('');
  const size = Math.min(element.width, element.height) * scale;

  useEffect(() => {
    QRCode.toDataURL(element.value || 'https://example.com', { width: size, margin: 1 })
      .then(setSrc)
      .catch(() => setSrc(''));
  }, [element.value, size]);

  return (
    <div style={{ width: element.width * scale, height: element.height * scale }}>
      {src && <img src={src} alt="QR" style={{ width: size, height: size }} />}
    </div>
  );
}
```

### `RectElement.tsx`
```typescript
import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function RectElement({ element, scale }: Props) {
  return (
    <div style={{
      width: element.width * scale,
      height: element.height * scale,
      border: '2px solid black',
      background: 'transparent',
    }} />
  );
}
```

### `ImagePlaceholder.tsx`
```typescript
import React from 'react';
import { DesignElement } from '../../types';

interface Props { element: DesignElement; scale: number; }

export function ImagePlaceholder({ element, scale }: Props) {
  return (
    <div style={{
      width: element.width * scale,
      height: element.height * scale,
      border: '2px dashed #aaa',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#aaa',
      fontSize: 12,
      userSelect: 'none',
    }}>
      Image
    </div>
  );
}
```

## Steps
1. Ensure directory `frontend/src/components/elements/` exists
2. Create all 5 files with exact content above
3. Commit: `git add frontend/src/components/elements/ && git commit -m "feat: element components (text, barcode, qr, rect, image placeholder)"`

No build or test step needed — these components will be verified visually in Task 9 when the full app runs.

## Report File
Write your full report to: `c:/Pedro/projects/etiqueta_zpl/.superpowers/sdd/briefs/task-6-report.md`

## Report Contract
- Status: DONE | DONE_WITH_CONCERNS | NEEDS_CONTEXT | BLOCKED
- Files created
- Git commit hash
- Any concerns (TypeScript errors, missing imports, etc.)
