# ^B4

## Description

Th e  ^B4 com m a nd  cre a te s  a  m u lti-row , continu ou s , v a ria b le -le ng th  s y m b olog y  ca pa b le  of e ncod ing  th e
fu ll 12 8-ch a ra cte r  A S C II s e t. It is  id e a lly  s u ite d  for  a pplica tions  re q u iring  la rg e  a m ou nts  of d a ta  in a  s m a ll
s pa ce .
Co d e  49 Ba r c o d e
Th e  cod e  cons is ts  of tw o to e ig h t row s . A  row  cons is ts  of a  le a d ing  q u ie t z one , fou r  s y m b ol ch a ra cte r s
e ncod ing  e ig h t cod e  ch a ra cte r s , a  s top pa tte rn, a nd  a  tra iling  q u ie t z one . A  s e pa ra tor  b a r  w ith  a  h e ig h t
of one  m od u le  s e pa ra te s  e a ch  row . E a ch  s y m b ol ch a ra cte r  e ncod e s  tw o ch a ra cte r s  from  a  s e t of C od e
49  ch a ra cte r s .
• ^B4 h a s  a  ﬁ x e d  print ra tio.
• Row s  ca n b e  s ca nne d  in a ny  ord e r.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a rcod e  is  re q u ire d , g o to a im g lob a l.org .

## Format

```
^B4o,h,f,m
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = h e ig h t m u ltiplie r  of
ind iv id u a l row s
V a lu e s : 1 to h e ig h t of la b e l
De f a u lt : v a lu e  s e t b y  ^BY
Th is  nu m b e r  m u ltiplie d  b y  th e  m od u le  e q u a ls  th e  h e ig h t of th e  ind iv id u a l
row s  in d ots . 1 is  not a  re com m e nd e d  v a lu e .
f = print inte rpre ta tion
line
V a lu e s :
N = no line  printe d
A = print inte rpre ta tion line  a b ov e  cod e
B = print inte rpre ta tion line  b e low  cod e
De f a u lt : N
W h e n th e  ﬁ e ld  d a ta  e x ce e d s  tw o row s , e x pe ct th e  inte rpre ta tion line  to
e x te nd  b e y ond  th e  rig h t e d g e  of th e  b a rcod e  s y m b ol.
m = s ta r ting  m od e V a lu e s :
0 = Re g u la r  A lph a nu m e ric M od e
1 = M u ltiple  Re a d  A lph a nu m e ric
2 = Re g u la r  Nu m e ric M od e
3 = G rou p A lph a nu m e ric M od e
4 = Re g u la r  A lph a nu m e ric S h ift 1
5 = Re g u la r  A lph a nu m e ric S h ift 2
A = A u tom a tic M od e . Th e  printe r  d e te rm ine s  th e  s ta r ting  m od e  b y
a na ly z ing  th e  ﬁ e ld  d a ta .
De f a u lt : A
E x a m p le
Th is  is  a n e x a m ple  of a  C od e  49  b a rcod e :
Co d e  49 Fie ld  Da t a  Ch a r a c t e r  S e t
Th e  ^FD d a ta  s e nt to th e  printe r  w h e n u s ing  s ta r ting  m od e s  0  to 5 is  b a s e d  on th e  C od e  49  Inte rna l
C h a ra cte r  S e t. Th is  is  s h ow n in th e  ﬁ r s t colu m n of th e  C od e  49  ta b le  on th e  pre v iou s  pa g e . Th e s e
ch a ra cte r s  a re  C od e  49  control ch a ra cte r s :
: ; < = > ?
Va lid  ﬁ e ld  d a ta  m u s t b e  s u pplie d  w h e n u s ing  m od e s  0  to 5. S h ifte d  ch a ra cte r s  a re  s e nt a s  a  tw o-
ch a ra cte r  s e q u e nce  of a  s h ift ch a ra cte r  follow e d  b y  a  ch a ra cte r  in th e  u ns h ifte d  ch a ra cte r  s e t.
To e ncod e  a  low e rca s e  a, s e nd  a > (S h ift 2 ) follow e d  b y  a n u ppe rca s e  A. If inte rpre ta tion line  printing
is  s e le cte d , a  low e rca s e  a  prints  in th e  inte rpre ta tion line . Th is  re ﬂ e cts  w h a t th e  ou tpu t from  th e
s ca nne r  re a d s . C od e  49  u s e s  u ppe rca s e  a lph a nu m e ric ch a ra cte r s  only .
If a n inv a lid  s e q u e nce  is  d e te cte d , th e  C od e  49  form a tte r  s tops  inte rpre ting  ﬁ e ld  d a ta  a nd  prints  a
s y m b ol w ith  th e  d a ta  u p to th e  inv a lid  s e q u e nce . Th e s e  a re  e x a m ple s  of inv a lid  s e q u e nce s :
• Te rm ina ting  nu m e ric m od e  w ith  a ny  ch a ra cte r s  oth e r  th a n 0  to 9  or  a  Nu m e ric S pa ce .
• S ta r ting  in M od e  4 (Re g u la r  A lph a nu m e ric S h ift 1) a nd  th e  ﬁ r s t ﬁ e ld  d a ta  ch a ra cte r  is  not in th e  S h ift
1 s e t.
• S ta r ting  in M od e  5 (Re g u la r  A lph a nu m e ric S h ift 2 ) a nd  th e  ﬁ r s t ﬁ e ld  d a ta  ch a ra cte r  is  not in th e  S h ift
2  s e t.
• S e nd ing  S h ift 1 follow e d  b y  a  ch a ra cte r  not in th e  S h ift 1 s e t.
• S e nd ing  S h ift 2  follow e d  b y  a  ch a ra cte r  not in th e  S h ift 2  s e t.
• S e nd ing  tw o S h ift 1 or  S h ift 2  control ch a ra cte r s .
A d v a n t a g e s  o f  U s in g  t h e  Co d e  49 A u t o m a t ic  Mo d e
Us ing  th e  d e fa u lt (A u tom a tic M od e ) com ple te ly  e lim ina te s  th e  ne e d  for  s e le cting  th e  s ta r ting  m od e
or  m a nu a lly  pe r form ing  ch a ra cte r  s h ifts . Th e  A u tom a tic M od e  a na ly z e s  th e  incom ing  A S C II s tring ,
d e te rm ine s  th e  prope r  m od e , pe r form s  a ll ch a ra cte r  s h ifts , a nd  com pa cts  th e  d a ta  for  m a x im u m
e fﬁ cie ncy .
Nu m e ric M od e  is  s e le cte d  or  s h ifte d  only  w h e n ﬁ v e  or  m ore  continu ou s  d ig its  a re  fou nd . Nu m e ric
pa ck a g ing  prov id e s  no s pa ce  a d v a nta g e  for  nu m e ric s tring s  cons is ting  of fe w e r  th a n e ig h t ch a ra cte r s .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
