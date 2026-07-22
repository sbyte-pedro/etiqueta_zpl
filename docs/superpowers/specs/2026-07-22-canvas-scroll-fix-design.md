# Canvas Scroll Fix

**Date:** 2026-07-22

## Problem

The canvas area does not scroll when the label is larger than the viewport (e.g. when zoomed in). Content overflows instead of being scrollable.

## Root Cause

`Canvas.tsx` outer wrapper uses `flex-1 overflow-auto`. Its parent in `App.tsx` is `overflow-hidden` but not a flex container, so `flex-1` resolves to nothing — the wrapper has no constrained height, and `overflow-auto` has nothing to trigger against.

## Fix

In `frontend/src/components/Canvas.tsx` line 119, change the outer wrapper class from:

```
flex-1 overflow-auto bg-gray-100 p-4
```

to:

```
h-full overflow-auto bg-gray-100 p-4
```

`h-full` inherits the explicit height from the `overflow-hidden` parent, giving `overflow-auto` a boundary to scroll within.

## Scope

- **File:** `frontend/src/components/Canvas.tsx`
- **Change:** One class swap (`flex-1` → `h-full`) on one element
- **Side effects:** None — no layout elsewhere is affected
