# ^XF

## Description

Th e  ^XF com m a nd  re ca lls  a  s tore d  form a t to b e  m e rg e d  w ith  v a ria b le  d a ta . Th e re  ca n b e  m u ltiple  ^XF
com m a nd s  in one  form a t, a nd  th e y  ca n b e  loca te d  a ny w h e re  w ith in th e  cod e .
Re c a ll Fo r m a t
W h e n re ca lling  a  s tore d  form a t a nd  m e rg ing  d a ta  u s ing  th e  ^FN (Fie ld  Nu m b e r) fu nction, th e  ca lling
form a t m u s t conta in th e  ^FN com m a nd  to m e rg e  th e  d a ta  prope rly .
W h ile  u s ing  s tore d  form a ts  re d u ce s  tra ns m is s ion tim e , no form a tting  tim e  is  s a v e d . Th e  ZPL II form a t
b e ing  re ca lle d  is  s a v e d  a s  te x t s tring s  th a t ne e d  to b e  form a tte d  a t print tim e .

## Format

```
^XF
```

## Parameters

d = s ou rce  d e v ice  of
s tore d  im a g e
V a lu e s : R:, E:, B:, and A:
De f a u lt : s e a rch  priority  (R:, E:, B:, and A:)
o = na m e  of s tore d
im a g e
V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion l Fix e d  V a lu e : .ZPL
For  a  com ple te  e x a m ple  of th e  ^DF and ^XF com m a nd , s e e E x e rcis e  6: ^D F a nd  ^X F - D ow nloa d  Form a t
a nd  Re ca ll Form a t.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
