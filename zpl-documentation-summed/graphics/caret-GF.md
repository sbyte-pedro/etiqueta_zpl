# ^GF

## Description

Th e  ^GF com m a nd  a llow s  y ou  to d ow nloa d  g ra ph ic ﬁ e ld  d a ta  d ire ctly  into th e  printe r’s  b itm a p s tora g e
a re a . Th is  com m a nd  follow s  th e  conv e ntions  for  a ny  oth e r  ﬁ e ld , m e a ning  a  ﬁ e ld  orie nta tion is  inclu d e d .
Th e  g ra ph ic ﬁ e ld  d a ta  ca n b e  pla ce d  a t a ny  loca tion w ith in th e  b itm a p s pa ce .
Gr a p h ic  Fie ld

## Format

```
^GFa,b,c,d,data
```

## Parameters

a = com pre s s ion ty pe V a lu e s :
A = A S C II h e x a d e cim a l (follow s  th e  form a t for  oth e r  d ow nloa d  com m a nd s )
B = b ina r y  (d a ta  s e nt a fte r  th e  c pa ra m e te r  is  s trictly  b ina r y )
C = com pre s s e d  b ina r y  (d a ta  s e nt a fte r  th e  c pa ra m e te r  is  in com pre s s e d
b ina r y  form a t. Th e  d a ta  is  com pre s s e d  on th e  h os t s id e  u s ing  Ze b ra ’s
com pre s s ion a lg orith m . Th e  d a ta  is  th e n d e com pre s s e d  a nd  pla ce d  d ire ctly
into th e  b itm a p.)
De f a u lt : A
b = b ina r y  b y te  cou nt V a lu e s : 1 to 99999
Th is  is  th e  tota l nu m b e r  of b y te s  to b e  tra ns m itte d  for  th e  tota l im a g e  or
th e  tota l nu m b e r  of b y te s  th a t follow  pa ra m e te r  d. For  A S C II d ow nloa d , th e
pa ra m e te r  s h ou ld  m a tch  pa ra m e te r  c. O u t-of-ra ng e  v a lu e s  a re  s e t to th e
ne a re s t lim it.
De f a u lt : com m a nd  is  ig nore d  if a  v a lu e  is  not s pe ciﬁ e d
c = g ra ph ic ﬁ e ld
count
V a lu e s : 1 to 9 9 9 9 9
Th is  is  th e  tota l nu m b e r  of b y te s  com pris ing  th e  g ra ph ic form a t (w id th  x
h e ig h t), w h ich  is  s e nt a s  pa ra m e te r  d. C ou nt d iv id e d  b y  b y te s  pe r  row  g iv e s
th e  nu m b e r  of line s  in th e  im a g e . Th is  nu m b e r  re pre s e nts  th e  s iz e  of th e
im a g e , not ne ce s s a rily  th e  s iz e  of th e  d a ta  s tre a m  (s e e  d).
De f a u lt : com m a nd  is  ig nore d  if a  v a lu e  is  not s pe ciﬁ e d
d = b y te s  pe r  row V a lu e s : 1 to 9 9 9 9 9
Th is  is  th e  nu m b e r  of b y te s  in th e  d ow nloa d e d  d a ta  th a t com pris e  one  row  of
th e  im a g e .
De f a u lt : com m a nd  is  ig nore d  if a  v a lu e  is  not s pe ciﬁ e d
data = d a ta V a lu e s :
A S CII h e x a d e c im a l d a t a : 00 to FF
A  s tring  of A S C II h e x a d e cim a l nu m b e r s , tw o d ig its  pe r  im a g e  b y te . C R
a nd  LF ca n b e  ins e r te d  a s  ne e d e d  for  re a d a b ility . Th e  nu m b e r  of tw o-d ig it
nu m b e r  pa ir s  m u s t m a tch  th e  a b ov e  cou nt. A ny  nu m b e r s  s e nt a fte r  cou nt
is  s a tis ﬁ e d  a re  ig nore d . A  com m a  in th e  d a ta  pa d s  th e  cu rre nt line  w ith  00
(w h ite  s pa ce ), m inim iz ing  th e  d a ta  s e nt. ~DN or  a ny  ca re t or  tild e  ch a ra cte r
pre m a tu re ly  a b or ts  th e  d ow nloa d .
Bin a r y  d a t a : S trictly  b ina r y  d a ta  is  s e nt from  th e  h os t. A ll control pre ﬁ x e s  a re
ig nore d  u ntil th e  tota l nu m b e r  of b y te s  ne e d e d  for  th e  g ra ph ic form a t is  s e nt.
E x a m p le : Th is  e x a m ple  d ow nloa d s  8,0 0 0  tota l b y te s  of d a ta  a nd  pla ce s  th e  g ra ph ic d a ta  a t loca tion
10 0 ,10 0  of th e  b itm a p. Th e  d a ta  s e nt to th e  printe r  is  in A S C II form .
^FO100,100^GFA,8000,8000,80,ASCII data
E x a m p le : Th is  e x a m ple  d ow nloa d s  8,0 0 0  tota l b y te s  of d a ta  a nd  pla ce s  th e  g ra ph ic d a ta  a t loca tion
10 0 ,10 0  of th e  b itm a p. Th e  d a ta  s e nt to th e  printe r  is  in b ina r y  form .
^FO100,100^GFB,8000,8000,80,Binary data

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^FO` — positions the graphic field
- `^FS` — closes the ^GF field
- `~DG` — ~DG downloads a graphic; ^GF recalls it
