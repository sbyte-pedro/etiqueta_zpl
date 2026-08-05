# ^LL

## Description

Th e  ^LL com m a nd  d e ﬁ ne s  th e  le ng th  of th e  la b e l. Th is  com m a nd  is  ne ce s s a r y  w h e n u s ing  continu ou s
m e d ia  (m e d ia  not d iv id e d  into s e pa ra te  la b e ls  b y  g a ps , s pa ce s , notch e s , s lots , or  h ole s ). Th is  com m a nd  is
not pe r s is te nt a cros s  a  pow e r  cy cle  u nle s s  a  ^JUS is  re ce iv e d .
S e e  a ls o z pl.la b e l_le ng th _a lw a y s  on pa g e  1091 .
La b e l Le n g t h
To a ffe ct th e  cu rre nt la b e l a nd  b e  com pa tib le  w ith  e x is ting  printe r s , ^LL m u s t com e  b e fore  th e  ﬁ r s t
^FS (Fie ld  S e pa ra tor) com m a nd . O nce  y ou  h a v e  is s u e d  ^LL, th e  s e tting  is  re ta ine d  u ntil y ou  tu rn off th e
printe r  or  s e nd  a  ne w  ^LL com m a nd .
Fo r  6  d o t /m m  p r in t h e a d s ... La b e l le ng th  in inch e s  x  152 .4 (d ots /inch ) = y
Fo r  8 d o t /m m  p r in t h e a d s ... La b e l le ng th  in inch e s  x  2 0 3.2  (d ots /inch ) = y
Fo r  12 d o t /m m  p r in t h e a d s ... La b e l le ng th  in inch e s  x  30 4.8 (d ots /inch ) = y
Fo r  24 d o t /m m  p r in t h e a d s ... La b e l le ng th  in inch e s  x  60 9.6 (d ots /inch ) = y
Va lu e s  for  y d e pe nd  on th e  m e m or y  s iz e . If th e  e nte re d  v a lu e  for  y e x ce e d s  th e  a cce pta b le  lim its , th e
b ottom  of th e  la b e l is  cu t off. Th e  la b e l a ls o s h ifts  d ow n from  top to b ottom .
If m u ltiple  ^LL com m a nd s  a re  is s u e d  in th e  s a m e  la b e l form a t, th e  la s t ^LL com m a nd  a ffe cts  th e  ne x t
la b e l u nle s s  it is  prior  to th e  ﬁ r s t ^FS.
Th is  com m a nd  is  ig nore d  on th e  HC 10 0 ™  printe r.

## Format

```
^LL
```

## Parameters

y = D e ﬁ ne s  th e  la b e l le ng th .
V a lu e s : 1 to 32000, not to e x ce e d  th e  m a x im u m  la b e l s iz e .
W h ile  th e  printe r  a cce pts  a ny  v a lu e  for  th is  pa ra m e te r, th e  a m ou nt of
m e m or y  ins ta lle d  d e te rm ine s  th e  m a x im u m  le ng th  of th e  la b e l.
De f a u lt : ty pica lly  s e t th rou g h  th e  LC D  (if a pplica b le ), or  to th e  m a x im u m
la b e l le ng th  ca pa b ility  of th e  printe r.
x = S pe ciﬁ e s  w h e th e r  th e  la b e l/uni00A0le ng th  a pplie s  to a ll m e d ia , inclu d ing  G a p a nd
M a rk .
V a lu e s : N or Y, n or y is  a ls o a cce pte d .
• N m e a ns  th a t th e  ^LL le ng th  a pplie s  only  to continu ou s  m e d ia .
• Y m e a ns  th a t th e  ^LL le ng th  a pplie s  to a ll m e d ia , inclu d ing  G a p a nd
M a rk .
De f a u lt : N. If no v a lu e  is  pre s e nt, th e  cu rre nt s e tting  is  le ft u nch a ng e d .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^XA` — ^LL is set inside a label format to define label length
- `^PW` — ^PW sets label width; ^LL sets label length
