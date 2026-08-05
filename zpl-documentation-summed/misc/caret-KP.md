# ^KP

## Description

Th e  ^KP com m a nd  is  u s e d  to d e ﬁ ne  th e  pa s s w ord  th a t m u s t b e  e nte re d  to a cce s s  th e  control pa ne l
s w itch e s  a nd  LC D  S e tu p M od e .
IMPORTA NT: Th is  com m a nd  d oe s  not w ork  w h e n th e  printe r  is  in Prote cte d  M od e .
W ith  Prote cte d  M od e , u s e  JS O N-form a tte d  Prote ct com m a nd s  w ith  th e  S G D
display.password.current ins te a d . Th e  inform a tion b e low  a s s u m e s  th a t y ou r  printe r  is
not in Prote cte d  M od e .
For  m ore  inform a tion a b ou t th e  front pa ne l pa s s w ord , re fe r  to th e  Ze b ra  Link -O S  PrintS e cu re  Printe r
A d m inis tra tion G u id e .
De ﬁ n e  Pa s s w o r d

## Format

```
^KPa,b
```

## Parameters

a = m a nd a tor y  fou r-d ig it
pa s s w ord
V a lu e s : 0000 to 9999 (fou r  d ig its )
De f a u lt :
• Fo r  p r in t e r s  p u r c h a s e d  in  t h e  E ME A  r e g io n  a f t e r  A u g u s t  1, 2025 : Th e  d e fa u lt v a lu e  is
e m pty  a nd  m u s t b e  s e t b e fore  it ca n b e  u s e d  on th e  printe r.
• Fo r  a ll o t h e r  p r in t e r s : 1234
b = pa s s w ord  le v e l
(a pplica b le  to th e  S 4M
printe r  only )
V a lu e s : 1, 2 , 3, 4
De f a u lt : 3
E x a m p le : Th is  e x a m ple  s h ow s  h ow  to s e t a  ne w  pa s s w ord  of 5678:
^XA
^KP5678
^XZ
E x a m p le  (a p p lic a b le  t o  t h e  S 4M p r in t e r  o n ly ): Th is  e x a m ple  s h ow s  h ow  to s e t th e  front pa ne l pa s s w ord  to 5678 at a
s pe ciﬁ c pa s s w ord  le v e l (le v e l 2 ):
^XA
^KP5678,2
^XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
