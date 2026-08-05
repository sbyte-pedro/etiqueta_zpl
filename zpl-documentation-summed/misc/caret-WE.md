# ^WE

## Description

Us e  th is  com m a nd  to com m a nd  e na b le  W ire d  E q u iv a le nt Priv a cy  (W E P) m od e  a nd  s e t W E P v a lu e s .
W E P is  a  s e cu rity  protocol for  w ire le s s  loca l a re a  ne tw ork s  (W LA Ns ).
S e t  W E P Mo d e
NOTE :
• Th e  ^WE com m a nd  is  prov id e d  only  for  b a ck w a rd -com pa tib ility  w ith  printe r s  u s ing
ﬁ rm w a re  prior  to V50 .15.x , V53.15.x , or  X 60 .15.x . For  th e s e  ﬁ rm w a re  v e r s ions  a nd  la te r, u s e
^W X  o n  p a g e  425  to s e t th e  s e cu rity  ty pe  a nd  re la te d  pa ra m e te r s .
• Th is  com m a nd  d oe s  not a pply  to printe r s  ru nning  Link -O S  v 6 or  la te r  v e r s ions .
B e  ca re fu l to inclu d e  th e  e x a ct nu m b e r  of com m a s  re q u ire d  for  th is  com m a nd  w h e n s e tting  e ncr y ption
k e y s  (pa ra m e te r s  e th rou g h  h). A  m is s ing  or  e x tra  com m a  w ill ca u s e  th e  k e y s  to b e  s tore d  in th e  w rong
s lots  a nd  ca n pre v e nt th e  printe r  from  joining  th e  w ire le s s  ne tw ork .

## Format

```
^WEa,b,c,d,e,f,g,h
^WLa,b,c
~WL
Fig u r e  17/uni00A0/uni00A0/uni00A0/uni00A0 Ne tw ork  C onﬁ g u ra tion La b e l
```

## Parameters

a = e ncr y ption m od e V a lu e s :
OFF
40 = 40 -b it e ncr y ption
128 = 12 8-b it e ncr y ption
De f a u lt : OFF
b = e ncr y ption ind e x Te lls  th e  printe r  w h ich  e ncr y ption k e y  to u s e .
V a lu e s :
1 = Ke y  1
2 = Ke y  2
3 = Ke y  3
4 = Ke y  4
De f a u lt : 1
c = a u th e ntica tion ty pe V a lu e s : O  (O pe n S y s te m ), S  (S h a re d  Ke y )
O = O pe n S y s te m
S = S h a re d  Ke y
De f a u lt : O
NOTE : If y ou  e na b le  S h a re d  Ke y  a u th e ntica tion w ith  E ncr y ption
M od e  s e t to OFF, th is  v a lu e  re s e ts  to O (O pe n).
d = e ncr y ption k e y
s tora g e
V a lu e s : H (He x  k e y  s tora g e ), S  (s tring  k e y  s tora g e )
H = He x  k e y  s tora g e
S = S tring  k e y  s tora g e
De f a u lt : H
e , f, g , h  = e ncr y ption k e y s
1/uni00A0th rou g h  4
V a lu e s : Th e  a ctu a l v a lu e  for  th e  e ncr y ption k e y
Th e  e ncr y ption m od e  a ffe cts  w h a t ca n b e  e nte re d  for  th e  e ncr y ption
k e y s :
• For  40 -b it, e ncr y ption k e y s  ca n b e  s e t to a ny  5 h e x  pa ir s  or  a ny  10
a lph a nu m e ric ch a ra cte r s .
• For  12 8-b it, e ncr y ption k e y s  ca n b e  s e t to a ny  13 h e x  pa ir s  or  a ny  2 6
a lph a nu m e ric ch a ra cte r s .
NOTE : W h e n u s ing  h e x  s tora g e , d o not a d d  a  le a d ing  0 x  on th e
W E P/uni00A0k e y .
E x a m p le : Th is  e x a m ple  s e ts  e ncr y ption to 40 -b it, a ctiv a te s  e ncr y ption k e y  1, a nd  s e ts  e ncr y ption k e y  1 to
th e  s tring  12345.
^WE40,,,,12345
In th is  e x a m ple , th e  E ncr y ption Ind e x , A u th e ntica tion Ty pe , a nd  E ncr y ption Ke y  S tora g e  pa ra m e te r s
a re  le ft b la nk  w ith  com m a s  a s  pla ce h old e r s  for  th e  ﬁ e ld s . Th e  printe r  u s e s  th e  d e fa u lt v a lu e s  for  th e s e
pa ra m e te r s .
E x a m p le : Th is  e x a m ple  s e ts  e ncr y ption to 12 8-b it, a ctiv a te s  e ncr y ption k e y  2 , a nd  s e ts  e ncr y ption k e y s  1
a nd  2  to h e x  v a lu e s .
^WE128,2,,H,12345678901234567890123456,98765432109876543210987654
Th e  v a lu e  for  e ncr y ption k e y  1 is  s tore d  a nd  ca n b e  a ctiv a te d  in th e  fu tu re  b y  th e  follow ing  com m a nd :
^WE128,1
E x a m p le : Th is  e x a m ple  s e ts  e ncr y ption to 12 8-b it, a ctiv a te s  e ncr y ption k e y  4, a nd  s e ts  e ncr y ption k e y  4 to
a  h e x  v a lu e .
^WE128,4,,H,,,,98765432109876543210987654
Va lu e s  a re  not re q u ire d  for  e ncr y ption k e y s  1 th rou g h  3 w h e n s e tting  e ncr y ption k e y  4. In th is
a = mode V a lu e s : O FF, O N
De f a u lt : O FF
b = u s e r  na m e V a lu e s : A ny  1 to 32  a lph a nu m e ric inclu d ing  s pe cia l ch a ra cte r s
De f a u lt : u s e r
c = pa s s w ord V a lu e s : A ny  1 to 32  a lph a nu m e ric inclu d ing  s pe cia l ch a ra cte r s
De f a u lt : pa s s w ord
~ W L -  Pr in t  Ne t w o r k
G e ne ra te s  a  ne tw ork  conﬁ g u ra tion la b e l (Ne tw ork  C onﬁ g u ra tion La b e l).
Pr in t  Ne t w o r k  Co n ﬁ g u r a t io n  La b e l

## Example

```zpl
A ny  pre v iou s ly  s tore d  v a lu e s  for  th e s e  e ncr y ption k e y s  d o not ch a ng e .
NOTE : im p o r t a n t : M a k e  s u re  th a t y ou  inclu d e  th e  e x a ct nu m b e r  of com m a s  re q u ire d  to g e t to th e
s lot for  e ncr y ption k e y  4 (pa ra m e te r  h ).
^W L -  S e t  Le a p
Us e  th is  com m a nd  to e na b le  C is co
®
Lig h tw e ig h t E x te ns ib le  A u th e ntica tion Protocol (LE A P) m od e  a nd
s e t pa ra m e te r s . LE A P is  u s e r  a u th e ntica tion m e th od  th a t is  a v a ila b le  w ith  s om e  w ire le s s  ra d io ca rd s .
S e t  LE A P Pa r a m e t e r s
NOTE : Th e  ^WL com m a nd  is  prov id e d  only  for  b a ck w a rd -com pa tib ility  w ith  printe r s  u s ing
ﬁ rm w a re  prior  to V50 .15.x  or  X 60 .15.x . For  th e s e  ﬁ rm w a re  v e r s ions  a nd  la te r, u s e  ^W X  o n  p a g e  425
to s e t th e  s e cu rity  ty pe  a nd  re la te d  pa ra m e te r s .
```

## Related Commands

_See index.md for commands in the same group._
