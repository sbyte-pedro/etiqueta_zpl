# ^KV

## Description

Th e  ^KV com m a nd  s e ts  s e v e ra l pa ra m e te r s  th a t a ffe ct th e  printe r s  ope ra tion w h e n ^MM is  s e t to K -
Kios k  m od e
K io s k  V a lu e s
S u p p o r t e d  De v ic e s :
• KR40 3

## Format

```
^KVa,b,c,d,e
```

## Parameters

a  = k ios k  cu t a m ou nt V a lu e s :
0  = norm a l cu t
10 -60  = pa r tia l cu t, v a lu e  = m m  of m e d ia  le ft u ncu t
De f a u lt : 0
Th is  pa ra m e te r  is  ig nore d  if it is  m is s ing  or  inv a lid . Th e  cu rre nt v a lu e  of
th e  pa ra m e te r  re m a ins  u nch a ng e d .
b  = k ios k  cu t m a rg in V a lu e s :
2  - 9  = m m  of d is ta nce
De f a u lt :
9 = m m  of d is ta nce
Th is  pa ra m e te r  is  ig nore d  if it is  m is s ing  or  inv a lid . Th e  cu rre nt v a lu e  of
th e  pa ra m e te r  re m a ins  u nch a ng e d .
c = k ios k  pre s e nt ty pe V a lu e s :
0  = E je ct pa g e  w h e n ne w  pa g e  is  printe d
1 = Re tra ct pa g e  w h e n ne w  pa g e  is  printe d
2  = D o noth ing  w h e n ne w  pa g e  is  printe d
De f a u lt : 0
Th is  pa ra m e te r  is  ig nore d  if it is  m is s ing  or  inv a lid . Th e  cu rre nt v a lu e  of
th e  pa ra m e te r  re m a ins  u nch a ng e d .
d  = k ios k  pre s e nt tim e ou t V a lu e s :
0 – 30 0  = If la b e l is  not ta k e n, re tra ct la b e l w h e n tim e ou t e x pire s . Tim e ou t
is  in s e cond s . Ze ro (0 ) ind ica te s  th a t th e re  is  no tim e ou t. Th e  la b e l w ill
s ta y  pre s e nte d  u ntil re m ov e d  m a nu a lly  or  a  ne w  la b e l is  printe d .
De f a u lt : 0
Th is  pa ra m e te r  is  ig nore d  if it is  m is s ing  or  inv a lid . Th e  cu rre nt v a lu e  of
th e  pa ra m e te r  re m a ins  u nch a ng e d .
e  = pre s e nte r  loop le ng th V a lu e s :
0  = pa pe r  is  fe d  s tra ig h t th rou g h  th e  pre s e nte r
3-10 2 3 = loop le ng th  in m m .
De f a u lt : 400
40 0 = g iv e s  a  loop of a pprox im a te ly  40 0 m m
Th is  pa ra m e te r  is  ig nore d  if it is  m is s ing  or  inv a lid . Th e  cu rre nt
v a lu e  of th e  pa ra m e te r  re m a ins  u nch a ng e d . . If th is  is  g re a te r  th a n
loop_le ng th _m a x  (s e e  S G D  m e d ia .pre s e nt.loop_le ng th _m a x ) th e n it w ill
b e  s e t e q u a l to loop_le ng th _m a x .
K io s k  Pr in t in g  E x a m p le s
Th e  follow ing  e x a m ple s  d e m ons tra te  th e  u s e  of th e  ^KV, ^CN, ^PN and ^CP com m a nd s  w ith  80  m m
w id e  continu ou s  m e d ia  a nd  th e  printe r  s e t to Kios k  M od e  (^MMK).
E x a m p le : In th is  e x a m ple , th e  ^KV com m a nd  is  s e t to th e  follow ing :
• C u t - Fu ll C u t
• C u t M a rg in - 9  m m
• Pre s e nt Ty pe  - E je ct pa g e  w h e n th e  ne x t pa g e  is  printe d
• Pre s e nt Tim e ou t - 6 s e cond s  a fte r  printing , if th e  d ocu m e nt is  not ta k e n, it w ill b e  re tra cte d
• Pre s e nte r  Loop Le ng th  - No loop
^XA
^MMK
^KV0,9,0,6,0
^FO50,50^A0N,50,50^FDZebra Technologies^FS
^CN1
^PN0
^XZ
NOTE : Th e  ^C N1 com m a nd  (C u t Now ) is  inclu d e d  to e ns u re  th a t a  fu ll cu t is  d one . Th e  ^PN0
(Pre s e nt Now ) com m a nd  is  inclu d e d  to e ns u re  th a t th e  m e d ia  is  e je cte d  w h e n th e  u s e r  pu lls  on
th e  le a d ing  e d g e  of th e  m e d ia . In th is  e x a m ple , if th e  u s e r  d oe s  not pu ll on th e  le a d ing  e d g e  of
th e  s e cond  d ocu m e nt, it w ill b e  re tra cte d .
E x a m p le : Th is  e x a m ple  conta ins  only  one  ch a ng e  from  th e  E x a m ple  1 - th e  Pre s e nte r  Loop Le ng th  is  now
10 0 m m , a nd  tw o d ocu m e nts  w ill b e  printe d  ins te a d  of one .
^XA
^MMK
^KV0,9,2,6,100
^FO50,50^A0N,50,50^FDZebra Technologies^FS
^CN1^PN0
^PQ2
^XZ
E x a m p le : In th is  e x a m ple , tw o d ocu m e nts  w ill b e  printe d , e a ch  one  w ill b e  e je cte d  from  th e  printe r.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
