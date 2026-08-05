# ^SF

## Description

Th e  ^SF com m a nd  a llow s  y ou  to s e ria liz e  a  s ta nd a rd  ^FD s tring . Th e  m a x im u m  s iz e  of th e  m a s k  a nd
incre m e nt s tring  is  3K com b ine d .
S e r ia liz a t io n  Fie ld  (w it h  a  S t a n d a r d  ^FD S t r in g )
In ﬁ rm w a re  v e r s ion x .14 a nd  la te r, s tring s  a re  s e ria liz e d  from  th e  la s t ch a ra cte r  in th e  b a ck ing  s tore  w ith
re g a rd  to th e  a lig nm e nt of th e  m a s k  a nd  incre m e nt s tring s . For  com b ining  s e m a ntic clu s te r s  th a t d o not
g e t incre m e nte d , th e  m a s k  ch a ra cte r  %  ne e d s  to b e  a d d e d  to th e  incre m e nt s tring .

## Format

```
^SFa,b
```

## Parameters

a = m a s k  s tring Th e  m a s k  s tring  s e ts  th e  s e ria liz a tion s ch e m e . Th e  le ng th  of th e  s tring
m a s k  d e ﬁ ne s  th e  nu m b e r  of ch a ra cte r s  (or  in ﬁ rm w a re  v e r s ion x .14
a nd  la te r, com b ining  s e m a ntic clu s te r s ) in th e  cu rre nt ^FD s tring  to b e
s e ria liz e d . Th e  m a s k  is  a lig ne d  to th e  ch a ra cte r s  (or  in ﬁ rm w a re  v e r s ion
x .14 a nd  la te r, com b ining  s e m a ntic clu s te r s ) in th e  ^FD s tring  s ta r ting
w ith  th e  rig h t-m os t (or  in ﬁ rm w a re  x .14 a nd  la te r, la s t) in th e  b a ck ing  s tore
pos ition.
Ma s k  S t r in g  p la c e h o ld e r s :D
or d –  D e cim a l nu m e ric 0 – 9
H or h –  He x a d e cim a l 0 – 9  plu s  a -f or  A -F
O or o –  O cta l 0 – 7
A or a –  A lph a b e tic A – Z or  a – z
N or n –  A lph a nu m e ric 0 – 9  plu s  A – Z or  a – z
% –  Ig nore  ch a ra cte r  or  s k ip
b = incre m e nt s tring Th e  incre m e nt s tring  is  th e  v a lu e  to b e  a d d e d  to th e  ﬁ e ld  on e a ch
la b e l. Th e  d e fa u lt v a lu e  is  e q u iv a le nt to a  d e cim a l v a lu e  of one . Th e
s tring  is  com pos e d  of a ny  ch a ra cte r s  (or  in ﬁ rm w a re  v e r s ion x .14 a nd
la te r, com b ining  s e m a ntic clu s te r s ) d e ﬁ ne d  in th e  s e ria l s tring . Inv a lid
ch a ra cte r s  (or  in ﬁ rm w a re  v e r s ion x .14 a nd  la te r, com b ining  s e m a ntic
clu s te r s ) a re  a s s u m e d  to b e  e q u a l to a  v a lu e  of z e ro in th a t ch a ra cte r s  (or
in ﬁ rm w a re  v e r s ion x .14 a nd  la te r, com b ining  s e m a ntic clu s te r s ) pos ition.
Th e  incre m e nt v a lu e  for  a lph a b e tic s tring s  s ta r ts  w ith  ‘A’ or ‘a’ as the
z e ro pla ce h old e r. Th is  m e a ns  to incre m e nt a n a lph a b e tic ch a ra cte r  (or
in ﬁ rm w a re  v e r s ion x .14 a nd  la te r, com b ining  s e m a ntic clu s te r) b y  one , a
v a lu e  of ‘B’ or ‘b’ m u s t b e  in th e  incre m e nt s tring .
For  ch a ra cte r s  th a t d o not g e t incre m e nte d , th e  % ch a ra cte r  ne e d s  to b e  a d d e d  to th e  incre m e nt s tring .
E x a m p le : Th is  is  a n e x a m ple  of s e ria liz ing  a  ^FD s tring . Th e  ZPL II cod e  g e ne ra te s  th re e  s e pa ra te  la b e ls  a s
s e e n in G e ne ra te d  La b e ls :
Th is  m a s k  h a s  th e  ﬁ r s t ch a ra cte r s  (or  in ﬁ rm w a re  v e r s ion x .14 a nd  la te r, th e  ﬁ r s t com b ining  s e m a ntic
clu s te r s ) a s  a lph a nu m e ric (nn = 12 ), a nd  th e  la s t d ig it is  u ppe rca s e  a lph a b e tic (A ). Th e  d e cim a l v a lu e  of
th e  incre m e nt nu m b e r  is  e q u iv a le nt to 5 (F). Th e  nu m b e r  of la b e ls  g e ne ra te d  d e pe nd s  on th e  nu m b e r
s pe ciﬁ e d  b y  th e  ^PQ com m a nd .
In a  s im ila r  ins ta nce , th e  ^FD s tring  cou ld  b e  re pla ce d  w ith  e ith e r  of th e  ^FD s tring s  b e low  to g e ne ra te  a
s e rie s  of la b e ls , d e te rm ine d  b y  ^PQ.
Us ing  th is  ZPL cod e :
^FDBL0000^SFAAdddd,1
Th e  print s e q u e nce  on th is  s e rie s  of la b e ls  is :
BL0000, BL0001,...BL0009, BL0010,...
BL0099, BL0100,...BL9999, BM0000...
Us ing  th is  ZPL cod e :
^FDBL00-0^SFAAdd%d,1%1
Th e  print s e q u e nce  on th is  s e rie s  of la b e ls  is :
BL00-0, BL01-1, BL02-2,...BL09-9,
BL11-0, BL12-1...
Im por ta nt note s  a b ou t m a s k ing  for  ﬁ rm w a re  v e r s ion V60 .14.x , V50 .14.x , or  la te r:
• A  s ing le  %  m a s k s  a n e ntire  com b ining  s e m a ntic clu s te r  ra th e r  th a n a  s ing le  cod e  point.
• Th e  m a s k  s tring  a nd  incre m e nt s tring  s h ou ld  b e  a lig ne d  a t th e  la s t cod e  point in th e ir  re s pe ctiv e
b a ck ing  s tore s .
• C ontrol a nd  b id ire ctiona l ch a ra cte r s  d o not re q u ire  a  m a s k  a nd  a re  ig nore d  for  s e ria liz a tion
pu rpos e s .
Th e  follow ing  e x a m ple s  s h ow  th e  im por ta nce  of ca pita liz a tion a nd  loca tion w ith in th e  m a s k .
E x a m p le  1
In th is  e x a m ple , th e  printe r  cy cle s  w ith  e v e r y  tw o printe d  la b e ls  a nd  a lte rna te s  b e tw e e n H (pos ition
1 8), a nd  th e n Z (pos ition 36). W ith  n or  N, th e  s e ria l nu m b e r  incre m e nts  from  0  - 9  a nd  a – z  or  A – Z (36
pos itions  ov e ra ll). W ith  e a ch  com ple te d  cy cle , th e  s e cond  clu s te r  (nn) incre m e nts  one  pos ition (from  0 0 ,
0 1, 0 2  … ) pe r  cy cle :
E x a m p le  2
In th is  e x a m ple , low e rca s e  i incre m e nts  w ith  a  m a s k  s tring  of nnN. Noth ing  ch a ng e s  b e ca u s e  th e  ﬁ r s t
clu s te r  (Z) ne v e r  trig g e r s  th e  s e cond  clu s te r  (z z ) to ch a ng e .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
