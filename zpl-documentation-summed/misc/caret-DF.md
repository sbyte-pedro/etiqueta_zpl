# ^DF

## Description

Th e  ^DF com m a nd  s a v e s  ZPL II form a t com m a nd s  a s  te x t s tring s  to b e  la te r  m e rg e d  u s ing  ^XF w ith
v a ria b le  d a ta . Th e  form a t to b e  s tore d  m ig h t conta in ﬁ e ld  nu m b e r  (^FN) com m a nd s  to b e  re fe re nce d
w h e n re ca lle d .
Do w n lo a d  Fo r m a t
W h ile  th e  u s e  of s tore d  form a ts  re d u ce s  tra ns m is s ion tim e , no form a tting  tim e  is  s a v e d — th is  com m a nd
s a v e s  ZPL II a s  te x t s tring s  form a tte d  a t print tim e .
E nte r  th e  ^DF s tore d  form a t com m a nd  im m e d ia te ly  a fte r  th e  ^XA com m a nd , th e n e nte r  th e  form a t
com m a nd s  to b e  s a v e d .
d iffe re nt g ra ph ics .
If tw o g ra ph ics  w ith  th e  s a m e  na m e  a re  s e nt to th e  printe r, th e  ﬁ r s t g ra ph ic is  e ra s e d  a nd  re pla ce d  b y
th e  s e cond  g ra ph ic.

## Format

```
^DFd:o.x
~DGd:o.x,t,w,data
```

## Parameters

d = d e v ice  to s tore  th e
im a g e
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = im a g e  na m e V a lu e s : 1 to 16 a lph a nu m e ric ch a ra cte r s  w ith  a  ﬁ le  ty pe  of 1 to 3
a lph a nu m e ric ch a ra cte r s  s e pa ra te d  b y  a  "."
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d .
x = e x te ns ion Fo r m a t : .ZPL
For  a  com ple te  e x a m ple  of th e  ^DF and ^XF com m a nd , s e e  E x e rcis e  6: ^D F a nd  ^X F —  D ow nloa d
Form a t a nd  Re ca ll Form a t on pa g e  57 .
E x a m p le
Th is  e x a m ple  is  g e ne ra te d  u s ing  th e  ^XF com m a nd  to re ca ll th is  form a t:
~ DG
Th e  ~DG com m a nd  d ow nloa d s  a n A S C II He x  re pre s e nta tion of a  g ra ph ic im a g e . If .GRF is not the
s pe ciﬁ e d  ﬁ le  e x te ns ion, .GRF is  a u tom a tica lly  a ppe nd e d .
Do w n lo a d  Gr a p h ic s
For  m ore  s a v ing  a nd  loa d ing  options  w h e n d ow nloa d ing  ﬁ le s , s e e  ~ D Y on pa g e  181.
d = d e v ice  to s tore  th e
im a g e
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = im a g e  na m e V a lu e s :
1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion Fo r m a t : .GRF
t = tota l nu m b e r  of
b y te s  in th e  g ra ph ic
S e e  th e  form u la  in th e  e x a m ple s  b e low .
w = nu m b e r  of b y te s  pe r
row
S e e  th e  form u la  in th e  e x a m ple s  b e low .
data = A S C II
h e x a d e cim a l s tring
d e ﬁ ning  im a g e
Th e  d a ta  s tring  d e ﬁ ne s  th e  im a g e  a nd  is  a n A S C II h e x a d e cim a l
re pre s e nta tion of th e  im a g e . E a ch  ch a ra cte r  re pre s e nts  a  h oriz onta l
nib b le  of fou r  d ots .
Th is  is  th e  k e y  for  th e  e x a m ple s  th a t follow :
x = w id th  of th e  g ra ph ic in m illim e te r s
y = h e ig h t of th e  g ra ph ic in m illim e te r s
z = d ots /m m  = print d e ns ity  of th e  printe r  b e ing  prog ra m m e d
8 = b its /b y te
Th e s e  a re  s om e  e x a m ple s  re la te d  to th e  ~DG com m a nd :
E x a m p le : To d e te rm ine  th e  t pa ra m e te r  u s e  th is  form u la :
(x z /8) x  y z  = tota lb y te s
E x a m p le : To d e te rm ine  th e  corre ct t pa ra m e te r  for  a  g ra ph ic 8 m m  w id e , 16 m m  h ig h , a nd  a  print d e ns ity  of
8 d ots /m m , u s e  th is  form u la :
8 x  12 8 = 10 2 4
t = 10 2 4
Ra is e  a n y  p o r t io n  o f  a  b y t e  t o  t h e  n e x t  w h o le  b y t e .
E x a m p le : To d e te rm ine  th e  w pa ra m e te r  (th e  w id th  in te rm s  of b y te s  pe r  row ), u s e  th is  form u la :
x z /8 = (tota lb y te s )/(row )
w = 8
E x a m p le : To d e te rm ine  th e  corre ct w pa ra m e te r  for  a  g ra ph ic 8 m m  w id e  a nd  a  print d e ns ity  of 8 d ots /m m ,
u s e  th is  form u la :
(8 x  8)/8 = 8 b y te s
w = 8
Ra is e  a n y  p o r t io n  o f  a  b y t e  t o  t h e  n e x t  w h o le  b y t e .
Pa ra m e te r  w is  th e  ﬁ r s t v a lu e  in th e  t ca lcu la tion.
Th e  d a ta  pa ra m e te r  is  a  s tring  of h e x a d e cim a l nu m b e r s  s e nt a s  a  re pre s e nta tion of th e  g ra ph ic im a g e .
E a ch  h e x a d e cim a l ch a ra cte r  re pre s e nts  a  h oriz onta l nib b le  of fou r  d ots . For  e x a m ple , if th e  ﬁ r s t fou r
d ots  of th e  g ra ph ic im a g e  a re  w h ite  a nd  th e  ne x t fou r  b la ck , th e  d ot-b y -d ot b ina r y  cod e  is  0 0 0 0 1111. Th e
h e x a d e cim a l re pre s e nta tion of th is  b ina r y  v a lu e  is  0 F. Th e  e ntire  g ra ph ic im a g e  is  cod e d  in th is  w a y , a nd
th e  com ple te  g ra ph ic im a g e  is  s e nt a s  one  continu ou s  s tring  of h e x a d e cim a l v a lu e s .
E x a m p le : Th is  is  a n e x a m ple  of u s ing  th e  ~DG com m a nd  to loa d  a  ch e ck e rb oa rd  pa tte rn into D RA M . Th e
na m e  u s e d  to s tore  th e  g ra ph ic is  SAMPLE.GRF:

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
