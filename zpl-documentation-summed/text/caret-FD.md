# ^FD

## Description

Th e  ^FD com m a nd  d e ﬁ ne s  th e  d a ta  s tring  for  a  ﬁ e ld . Th e  ﬁ e ld  d a ta  ca n b e  a ny  printa b le  ch a ra cte r
e x ce pt th os e  u s e d  a s  com m a nd  pre ﬁ x e s  (^ and ~).
Fie ld  Da t a
In RFID  printe r s , it ca n a ls o b e  u s e d  to s pe cify  pa s s w ord s  to w rite  to ta g s .
pa g e  153 and ^C T ~ C T on pa g e  166 . Th e  ne w  pre ﬁ x  ch a ra cte r s  ca nnot b e  printe d .
C h a ra cte r s  w ith  cod e s  a b ov e  12 7 , or  th e  ^ and ~ ch a ra cte r s , ca n b e  printe d  u s ing  th e  ^FH and ^FD
com m a nd s .
• ^CI13 m u s t b e  s e le cte d  to print a  b a ck s la s h  (\ ).
For  inform a tion on u s ing  s oft h y ph e ns , s e e  ^FB  on pa g e  186.

## Format

```
^FD
```

## Parameters

a =
• d a ta  to b e  printe d  (a ll
printe r s ), or
• a  pa s s w ord  to b e
w ritte n to a  RFID  ta g
(r ﬁ d  printe r s )
V a lu e s : a ny  d a ta  s tring  u p to 30 7 2  b y te s
De f a u lt : none — a  s tring  of ch a ra cte r s  m u s t b e  e nte re d

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
