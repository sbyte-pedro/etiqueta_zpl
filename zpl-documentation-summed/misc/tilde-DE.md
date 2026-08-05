# ~DE

## Description

Th e  ~DE com m a nd  is  u s e d  to d ow nloa d  ch a ra cte r  e ncod ing  tra ns la tion ta b le s  to a  printe r. Th is  is
e s s e ntia l for  printing  non-s ta nd a rd  or  fore ig n la ng u a g e  ch a ra cte r s , pa r ticu la rly  w h e n u s ing  Tru e Ty pe
fonts .
Do w n lo a d  E n c o d in g
Th e  s ta nd a rd  e ncod ing  for  Tru e Ty pe  W ind ow s  fonts  is  a lw a y s  Unicod e . Th e  ZPL II ﬁ e ld  d a ta  m u s t b e
conv e r te d  from  s om e  oth e r  e ncod ing  to Unicod e  th a t th e  Ze b ra  printe r  u nd e r s ta nd s . Th e  re q u ire d
tra ns la tion ta b le s  a re  prov id e d  w ith  font pa ck s . S om e  ta b le s  ca n b e  d ow nloa d e d  from  z e b ra .com .
w ith  th e  s oftw a re .
For  a s s is ta nce  w ith  e d iting  or  a d d ing  m a pping s  to .DAT ta b le s , Ze b ra Ne t B rid g e  inclu d e s  a  .DAT ta b le
e d itor  in th e  font w iz a rd .
E ncod ing  s ch e m e  for  th e  d a ta  s e nt to th e  printe r  is  th e  s e cond  fou r  ch a ra cte r, a nd  th e  e ncod ing  s ch e m e
for  th e  font is  th e  ﬁ r s t fou r  ch a ra cte r s  th rou g h ou t th e  .DAT ﬁ le . Th e  d a ta  m u s t b e  ord e re d  b y  th e  s e cond
fou r  ch a ra cte r s  (th e  e ncod ing  ta b le ).
E x a m p le :Th is  is  a n e x a m ple  of a  .DAT ta b le . Th e  ta b le  b e low  th e  e x a m ple  id e ntiﬁ e s  th e  e le m e nts :
~DEE:EXAMPLE.DAT,16,
00310041
00320042
00330043
00340044
D a ta  m u s t h a v e  0 0 41, 0 0 42 , 0 0 43, a nd  0 0 44 in ord e r. M u ltiple  pa ir s  ca n b e  on th e  s a m e  line .
1 Inpu t s tre a m  w ith  0041 w ill b e  m a ppe d  to 0 0 31. Th e  printe r  prints  "1".
2 Inpu t s tre a m  w ith  0042 w ill b e  m a ppe d  to 0 0 32 . Th e  printe r  prints  "2 ".
3 Inpu t s tre a m  w ith  0043 w ill b e  m a ppe d  to 0 0 33. Th e  printe r  prints  "3".
4 Inpu t s tre a m  w ith  0044 w ill b e  m a ppe d  to 0 0 34. Th e  printe r  prints  "4".

## Format

```
~DEd:o.x,s,data
```

## Parameters

d = loca tion of ta b le V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = na m e  of ta b le V a lu e s : a ny  v a lid  na m e , u p to 8 ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion Fo r m a t : .DAT
s = ta b le  s iz e V a lu e s : th e  nu m b e r  of m e m or y  b y te s  re q u ire d  to h old  th e  Ze b ra
d ow nloa d a b le  form a t of th e  font
De f a u lt : if a n incorre ct v a lu e  or  no v a lu e  is  e nte re d , th e  com m a nd  is
ig nore d
data = d a ta  s tring V a lu e s : a  s tring  of A S C II h e x a d e cim a l v a lu e s
De f a u lt : if no d a ta  is  e nte re d , th e  com m a nd  is  ig nore d
E x a m p le : Th is  is  a n e x a m ple  of h ow  to d ow nloa d  th e  re q u ire d  tra ns la tion ta b le :
~DER:JIS.DAT,27848,300021213001... (27848 two-digit hexadecimal values)

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
