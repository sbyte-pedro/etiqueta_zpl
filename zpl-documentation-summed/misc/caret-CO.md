# ^CO

## Description

Th e  ^CO com m a nd  is  u s e d  to ch a ng e  th e  s iz e  of th e  ch a ra cte r  ca ch e . B y  d e ﬁ nition, a  c h a r a c t e r  c a c h e
(re fe rre d  to a s  ca ch e ) is  a  por tion of th e  D RA M  re s e r v e d  for  s toring  s ca la b le  ch a ra cte r s . A ll printe r s  h a v e
a  d e fa u lt 40 K ca ch e  th a t is  a lw a y s  tu rne d  on. Th e  m a x im u m  s ing le  ch a ra cte r  s iz e  th a t ca n b e  s tore d ,
w ith ou t ch a ng ing  th e  s iz e  of th e  ca ch e , is  450  d ots  b y  450  d ots .
Ca c h e  On
Th e re  a re  tw o ty pe s  of fonts  u s e d  in Ze b ra  printe r s : b itm a ppe d  a nd  s ca la b le . Le tte r s , nu m b e r s ,
a nd  s y m b ols  in a  b itm a ppe d  font h a v e  a  ﬁ x e d  s iz e  (for  e x a m ple : 10  points , 12  points , 14 points ). B y
com pa ris on, s ca la b le  fonts  a re  not ﬁ x e d  in s iz e .
B e ca u s e  th e ir  s iz e  is  ﬁ x e d , b itm a ppe d  fonts  ca n b e  m ov e d  q u ick ly  to th e  la b e l. In contra s t, s ca la b le  fonts
a re  m u ch  s low e r  b e ca u s e  e a ch  ch a ra cte r  is  b u ilt on a n a s -ne e d e d  b a s is  b e fore  it is  m ov e d  to th e  la b e l.
B y  s toring  s ca le d  ch a ra cte r s  in a  ca ch e , th e y  ca n b e  re ca lle d  a t a  m u ch  fa s te r  s pe e d .
Th e  nu m b e r  of ch a ra cte r s  th a t ca n b e  s tore d  in th e  ca ch e  d e pe nd s  on tw o fa ctor s : th e  s iz e  of th e  ca ch e
(m e m or y ) a nd  th e  s iz e  of th e  ch a ra cte r  (in points ) b e ing  s a v e d . Th e  la rg e r  th e  point s iz e , th e  m ore  s pa ce
in th e  ca ch e  it u s e s . Th e  d e fa u lt ca ch e  s tore s  e v e r y  s ca la b le  ch a ra cte r  th a t is  re q u e s te d  for  u s e  on a
la b e l. If th e  s a m e  ch a ra cte r, w ith  th e  s a m e  rota tion a nd  s iz e  is  u s e d  a g a in, it is  q u ick ly  re trie v e d  from
ca ch e .
It is  pos s ib le  th a t a fte r  a  w h ile  th e  print ca ch e  cou ld  b e com e  fu ll. O nce  th e  ca ch e  is  fu ll, s pa ce  for  ne w
ch a ra cte r s  is  ob ta ine d  b y  e lim ina ting  a n e x is ting  ch a ra cte r  from  th e  print ca ch e . E x is ting  ch a ra cte r s  a re
e lim ina te d  b y  d e te rm ining  h ow  ofte n th e y  h a v e  b e e n u s e d . Th is  is  d one  a u tom a tica lly . For  e x a m ple , a
2 8-point Q  th a t w a s  u s e d  only  once  w ou ld  b e  a  g ood  ca nd id a te  for  e lim ina tion from  th e  ca ch e .
M a x im u m  s iz e  of a  s ing le  print ca ch e  ch a ra cte r  is  150 0  d ots  b y  150 0  d ots . Th is  w ou ld  re q u ire  a  ca ch e
of 2 7 4K. W h e n th e  ca ch e  is  too s m a ll for  th e  d e s ire d  s ty le , s m a lle r  ch a ra cte r s  m ig h t a ppe a r  b u t la rg e r
ch a ra cte r s  d o not. If pos s ib le , incre a s e  th e  s iz e  of th e  ca ch e .
a re  los t. M e m or y  u s e d  for  th e  ca ch e  re d u ce s  th e  s pa ce  a v a ila b le  for  la b e l b itm a ps , g ra ph ic, a nd  fonts .
S om e  A s ia n fonts  re q u ire  a n inte rna l w ork ing  b u ffe r  th a t is  m u ch  la rg e r  th a n th e  norm a l ca ch e . S ince
m os t fonts  d o not re q u ire  th is  la rg e r  b u ffe r, it is  now  a  s e le cta b le  conﬁ g u ra tion option. Printing  w ith  th e
A s ia n fonts  g re a tly  re d u ce s  th e  printe r  m e m or y  a v a ila b le  for  la b e ls , g ra ph ics , fonts , form a ts , a nd  la b e l
b itm a ps .
NOTE : If y ou  h a v e  ﬁ rm w a re  x .12  or  g re a te r  th is  com m a nd  is  not re q u ire d  b e ca u s e  th e  printe r
ﬁ rm w a re  a u tom a tica lly  e x pa nd s  th e  s iz e  of th e  ch a ra cte r  ca ch e  a s  ne e d e d .

## Format

```
^COa,b,c
```

## Parameters

a = ca ch e  on V a lu e s :
N = no
Y = y e s
De f a u lt : Y
b = a m ou nt of a d d itiona l
m e m or y  to b e  a d d e d  to
ca ch e  (in K)
V a lu e s : 1 to 9999
De f a u lt : 40
c = ca ch e  ty pe V a lu e s :
0 = ca ch e  b u ffe r  (norm a l fonts )
1 = inte rna l b u ffe r  (re com m e nd e d  for  A s ia n fonts )
De f a u lt : 0
E x a m p le : To re s iz e  th e  print ca ch e  to 62 K, a s s u m ing  a  2 2 K e x is ting  ca ch e :
^COY,40
E x a m p le : To re s iz e  th e  print ca ch e  to 10 0 K, a s s u m ing  a  2 2 K e x is ting  ca ch e :
^COY,78
Pr in t  Ca c h e  Pe r f o r m a n c e
For  printing  la rg e  ch a ra cte r s , m e m or y  a d d e d  to th e  ca ch e  b y  th e  ^CO com m a nd  is  not ph y s ica lly  a d d e d
to th e  2 2 K ca ch e  a lre a d y  in th e  printe r. In th e  s e cond  e x a m ple  a b ov e , th e  re s u lting  10 0 K ca ch e  is
a ctu a lly  tw o s e pa ra te  b lock s  of m e m or y , 2 2 K a nd  7 8K.
B e ca u s e  la rg e  ch a ra cte r s  ne e d  contig u ou s  b lock s  of m e m or y , a  ch a ra cte r  re q u iring  a  ca ch e  of 9 0 K
w ou ld  not b e  com ple te ly  s tore d  b e ca u s e  ne ith e r  por tion of th e  10 0 K ca ch e  is  b ig  e nou g h . Th e re fore , if
la rg e  ch a ra cte r s  a re  ne e d e d , th e  ^CO com m a nd  s h ou ld  re ﬂ e ct th e  a ctu a l s iz e  of th e  ca ch e  y ou  ne e d .
Incre a s ing  th e  s iz e  of th e  ca ch e  im prov e s  th e  pe r form a nce  in printing  s ca la b le  fonts . How e v e r, th e
pe r form a nce  d e cre a s e s  if th e  s iz e  of th e  ca ch e  b e com e s  la rg e  a nd  conta ins  too m a ny  ch a ra cte r s . Th e
pe r form a nce  g a ine d  is  los t b e ca u s e  of th e  tim e  inv olv e d  s e a rch ing  th e  ca ch e  for  e a ch  ch a ra cte r.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
