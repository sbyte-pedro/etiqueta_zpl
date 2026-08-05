# ^JJ

## Description

Th e  ^JJ com m a nd  a llow s  y ou  to control a n online  v e riﬁ e r  or  a pplica tor  d e v ice .
S e t  A u x ilia r y  Po r t

## Format

```
^JJa,b,c,d,e,f
```

## Parameters

a = ope ra tiona l m od e  for
a u x ilia r y  por t
V a lu e s :
0 = off
1 = re print on e rror — th e  printe r  s tops  on a  la b e l w ith  a  v e riﬁ ca tion e rror.
W h e n PA U S E  is  pre s s e d , th e  la b e l re prints  (if ^JZ is  s e t to re print). If a  b a r
cod e  is  ne a r  th e  u ppe r  e d g e  of a  la b e l, th e  la b e l fe e d s  ou t fa r  e nou g h  for
th e  b a r  cod e  to b e  v e riﬁ e d  a nd  th e n b a ck fe e d s  to a llow  th e  ne x t la b e l to
b e  printe d  a nd  v e riﬁ e d .
2 = m a x im u m  th rou g h pu t— th e  printe r  s tops  w h e n a  v e riﬁ ca tion e rror  is
d e te cte d . Th e  printe r  s ta r ts  printing  th e  ne x t la b e l w h ile  th e  v e riﬁ e r  is  s till
ch e ck ing  th e  pre v iou s  la b e l. Th is  m od e  prov id e s  m a x im u m  th rou g h pu t,
b u t d oe s  not a llow  th e  printe r  to s top im m e d ia te ly  on a  la b e l w ith  a
v e riﬁ ca tion e rror.
De f a u lt : 0
b = a pplica tion m od e V a lu e s :
0 = off
1 = E nd  Print s ig na l norm a lly  h ig h , a nd  low  only  w h e n th e  printe r  is
m ov ing  th e  la b e l for w a rd .
2 = E nd  Print s ig na l norm a lly  low , a nd  h ig h  only  w h e n th e  printe r  is
m ov ing  th e  la b e l for w a rd .
3 = E nd  Print s ig na l norm a lly  h ig h , a nd  low  for  2 0  m s  w h e n a  la b e l h a s
b e e n printe d  a nd  pos itione d .
4 = E nd  Print s ig na l norm a lly  low , a nd  h ig h  for  2 0  m s  w h e n a  la b e l h a s
b e e n printe d  a nd  pos itione d .
De f a u lt : 0
NOTE : Th e  S e t/G e t/D o com m a nd  d e v ice .a pplica tor.e nd _print on
pa g e  671 controls  th e  s a m e  s e tting  a s  th e  b pa ra m e te r.
c = a pplica tion m od e
s ta r t s ig na l print
V a lu e s :
p = Pu ls e  M od e  –  S ta r t Print s ig na l m u s t b e  d e -a s s e r te d  b e fore  it ca n b e
a s s e r te d  for  th e  ne x t la b e l.
l = Le v e l M od e  –  S ta r t Print s ig na l d oe s  not ne e d  to b e  d e -a s s e r te d  to
print th e  ne x t la b e l. A s  long  a s  th e  S ta r t Print s ig na l is  low  a nd  a  la b e l is
form a tte d , a  la b e l prints .
De f a u lt : 0
d = a pplica tion la b e l
e rror  m od e
V a lu e s :
e = e rror  m od e — th e  printe r  a s s e r ts  th e  S e r v ic e  Re q u ir e d  s ig na l (s v ce _re q  -
pin 10 ) on th e  a pplica tion por t, e nte r s  into Pa u s e  M od e , a nd  d is pla y s  a n
e rror  m e s s a g e  on th e  LC D .
f = Fe e d  M od e — a  b la nk  la b e l prints  w h e n th e  w e b  is  not fou nd  w h e re
e x pe cte d  to s y nc th e  printe r  to th e  m e d ia .
De f a u lt : f
e = re print m od e V a lu e s :
e = e na b le d — th e  la s t la b e l re prints  a fte r  th e  s ig na l is  a s s e r te d . If a
la b e l is  ca nce le d , th e  la b e l to b e  re printe d  is  a ls o ca nce le d . Th is  m od e
cons u m e s  m ore  m e m or y  b e ca u s e  th e  la s t printe d  la b e l is  not re le a s e d
u ntil it re prints .
d = d is a b le d — printe r  ig nore s  th e  Re print s ig na l.
De f a u lt : d
f = rib b on low  m od e V a lu e s :
e = e na b le d  –  printe r  w a rning  is s u e d  w h e n rib b on low .
d = d is a b le d  –  printe r  w a rning  not is s u e d  w h e n rib b on low .
De f a u lt : e

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
