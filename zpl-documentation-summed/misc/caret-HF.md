# ^HF

## Description

Th e  ^HF com m a nd  s e nd s  s tore d  form a ts  to th e  h os t.
Ho s t  Fo r m a t

## Format

```
^HFd,o,x
```

## Parameters

d = d e v ice  to re ca ll
im a g e
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = im a g e  na m e V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion Fix e d  V a lu e : .ZPL
E x a m p le : Th is  e x a m ple  s h ow s  th e  s e q u e nce  a nd  re s u lts .
Us ing  a  te rm ina l e m u la tor, y ou  d ow nloa d  th is  cod e  to th e  printe r:
^XA
^DFB:FILE1.ZPL
^FO100,100^A0,100
^FDTEST^FS
^XZ
Th e n/uni00A0y ou /uni00A0s e nd /uni00A0th is /uni00A0cod e /uni00A0to/uni00A0th e /uni00A0printe r:
^XA
^HFB:FILE1.ZPL
^XZ
Th e /uni00A0te rm ina l/uni00A0e m u la tor /uni00A0re tu rns /uni00A0th is /uni00A0cod e :
^XA^DFFILE1,
^FO100,100^A0,100^FDTEST^FS
^XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
