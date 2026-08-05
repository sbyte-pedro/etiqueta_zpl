# ^IM

## Description

Th e  ^IM com m a nd  pe r form s  a  d ire ct m ov e  of a n im a g e  from  s tora g e  a re a  into th e  b itm a p. Th e
com m a nd  is  id e ntica l to th e  ^XG com m a nd  (Re ca ll G ra ph ic), e x ce pt th e re  a re  no s iz ing  pa ra m e te r s .
Im a g e  Mo v e
Th e  d iffe re nce  b e tw e e n ^IM and ^XG: ^IM d oe s  not h a v e  m a g niﬁ ca tion, a nd  th e re fore  m ig h t re q u ire
le s s  form a tting  tim e . How e v e r, to ta k e  a d v a nta g e  of th is , th e  im a g e  m u s t b e  a t a  8-,  16‑,  or  32 -b it
b ou nd a r y .

## Format

```
^IMd:o.x
```

## Parameters

d = loca tion of s tore d
ob je ct
V a lu e s : R:, E:, B:, and A:
De f a u lt : s e a rch  priority
o = ob je ct na m e V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion Fix e d  V a lu e : .GRF, .PNG
E x a m p le : Th is  e x a m ple  m ov e s  th e  im a g e  SAMPLE.GRF from  D RA M  a nd  prints  it in s e v e ra l loca tions  in its
orig ina l s iz e .
^XA
^FO100,100^IMR:SAMPLE.GRF^FS
^FO100,200^IMR:SAMPLE.GRF^FS
^FO100,300^IMR:SAMPLE.GRF^FS
^FO100,400^IMR:SAMPLE.GRF^FS
^FO100,500^IMR:SAMPLE.GRF^FS
^XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
