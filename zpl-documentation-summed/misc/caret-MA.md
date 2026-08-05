# ^MA

## Description

Th e  ^MA com m a nd  controls  h ow  th e  printe r  is s u e s  printe d  m a inte na nce  a le r ts . M a inte na nce  a le r ts  a re
la b e ls  th a t print w ith  a  w a rning  th a t ind ica te s  th e  printh e a d  ne e d s  to b e  cle a ne d  or  ch a ng e d .
S e t  Ma in t e n a n c e  A le r t s
Th is  com m a nd  is  a v a ila b le  only  for  printe r s  w ith  ﬁ rm w a re  v e r s ion V60 .15.x , V50 .15.x , or  la te r.
• X i4, RX i4
• ZM 40 0 /ZM 60 0 , RZ40 0 /RZ60 0
• S 4M  w ith  v 53.15.5Z or  la te r
• G -S e rie s
IMPORTA NT: ^MA s e tting s  d o not im pa ct or  a ffe ct th e  fu nctiona lity  of th e  X i4 S u pplie s  W a rning
s y s te m .
A ny  v a lu e s  ou ts id e  th e  s pe ciﬁ e d  ra ng e  a re  ig nore d .
Th e  inte nt of th is  com m a nd  is  to ca u s e  a  la b e l to print w h e n th e  d e ﬁ ne d  th re s h old  is  re a ch e d .

## Format

```
^MA
```

## Parameters

type = ty pe  of a le r t V a lu e s :
• R = h e a d  re pla ce m e nt
• C = h e a d  cle a ning
De f a u lt : Th is  pa ra m e te r  m u s t b e  s pe ciﬁ e d  a s  R or  C  for  print,
printlabel_threshold, and frequency to b e  s a v e d . How e v e r, units
w ill a lw a y s  b e  s e t.
print = d e te rm ine s
if th e  a le r t prints  a
label
V a lu e s :
• Y = print a  la b e l
• N = d o not print a  la b e l
De f a u lt : N
printlabel
threshold= the
d is ta nce  w h e re  th e
ﬁ r s t a le r t occu r s
V a lu e s :
• R = h e a d  re pla ce m e nt (u nit of m e a s u re m e nt for  h e a d  is  k m  w ith  a  ra ng e
of 0  to 150  k m )
• C = cle a n h e a d  w ith  a  ra ng e  of 10 0  to 2 0 0 0  m e te r s .
• 0 = off (w h e n s e t to 0 , th e  s e le cte d  a le r t is  d is a b le d ; oth e r w is e , it is
e na b le d .
De f a u lt : R = 50  k m  (1,9 68,50 0  inch e s ) a nd  C = 0  (off).
frequency =
d is ta nce  b e fore
re is s u ing  th e  a le r t
Th e  u nit of m e a s u re m e nt is  in m e te r s . Th e  ra ng e  is  0  to 2 0 0 0 . Th e  ra ng e  for
G -S e rie s  printe r s  is  0  or  5 to 2 0 0 0  m e te r s . W h e n s e t to 0, th e  a le r t la b e l is
only  printe d  on pow e r-u p or  w h e n th e  printe r  is  re s e t.
De f a u lt : 0 (print on pow e r-u p).
units = od om e te r
a nd  printh e a d
m a inte na nce
com m a nd s
Th e  u nits  pa ra m e te r  re por ts  u nits  of th e  od om e te r  a nd  printh e a d
m a inte na nce  com m a nd s , a s  follow s : ~HQOD,~HQPH,~WQOD, ~WQPH.
V a lu e s :
• C = ce ntim e te r s  (d is pla y s  a s : cm)
• I = inch e s  (d is pla y s  a s :/uni00A0  ")
• M = m e te r s  (d is pla y s  a s : M)
De f a u lt : I
E x a m p le : Th is  e x a m ple  s e ts  th e  printe d  h e a d  cle a ning  m e s s a g e  to print a fte r  ﬁ v e  m e te r s  a nd  to re pe a t
e v e r y  one  m e te r  a fte r  th a t u ntil a  ~ROC com m a nd  is  is s u e d .
Th e  E a rly  W a rning  M a inte na nce  s e tting  m u s t b e  O N. To e na b le  th e  m a inte na nce  a le r t s y s te m  on th e  G -
S e rie s ™  printe r  th e  ^JH com m a nd  is  u s e d ; on oth e r  Ze b ra  printe r s , th e  front pa ne l ca n a ls o b e  u s e d .
To s e t ^MA to print ou t a  la b e l ﬂ a g g ing  th e  ne e d  to cle a n th e  h e a d , ty pe :
^XA^MAC,Y,5,1^XZ
W h e n th e  th re s h old  is  m e t, a  la b e l w ill print ind ica ting  th a t th e  h e a d  ne e d s  to b e  cle a ne d .
For  th is  e x a m ple , th e  m e s s a g e  on th e  la b e l look s  lik e  th is :
For  d e ta ils  on re s e tting  th e  u nits  of m e a s u re , s e e  ~HQ  e x a m ple s .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
