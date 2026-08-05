# ^CI

## Description

Th e  ^CI com m a nd  e na b le s  y ou  to ca ll u p th e  inte rna tiona l ch a ra cte r  s e t y ou  w a nt to u s e  for  printing .
You  ca n m ix  ch a ra cte r  s e ts  on a  la b e l.
Ch a n g e  In t e r n a t io n a l Fo n t /E n c o d in g
Ze b ra  printe r s  ca n print fonts  u s ing  inte rna tiona l ch a ra cte r  s e ts : U.S .A .1, U.S .A .2 , UK, Holla nd , D e nm a rk /
Nor w a y , S w e d e n/Finla nd , G e rm a ny , Fra nce  1, Fra nce  2 , Ita ly , S pa in, a nd  s e v e ra l oth e r  s e ts , inclu d ing  th e
Unicod e  ch a ra cte r  s e t.
A  ch a ra cte r  w ith in a  font ca n b e  re m a ppe d  to a  d iffe re nt nu m e rica l pos ition.
In x .14 v e r s ion of ﬁ rm w a re  a nd  la te r, th is  com m a nd  a llow s  ch a ra cte r  re m a pping  w h e n th e  pa ra m e te r  a =
0 -13.

## Format

```
^CIa,s1,d1,s2,d2,...
```

## Parameters

a = d e s ire d
ch a ra cte r  s e t
NOTE : Note :
Th e s e
pa ra m e te r s
a re  only
v a lid
w h e n th e
pa ra m e te r
a = 1 - 13
A cce pte d  v a lu e s  a re  0 - 12 a re  Ze b ra  C od e  Pa g e  850  w ith  s pe ciﬁ c ch a ra cte r
re pla ce m e nts . For  d e ta ils , s e e  Inte rna tiona l C h a ra cte r  S e ts  on pa g e  159
and/or Ze b ra  C od e  Pa g e  12 52 —  La tin C h a ra cte r  S e t on pa g e  1570 .
V a lu e s :
• 0 = S ing le  B y te  E ncod ing  - U.S .A . 1 C h a ra cte r  S e t
• 1 = S ing le  B y te  E ncod ing  - U.S .A . 2  C h a ra cte r  S e t
• 2 = S ing le  B y te  E ncod ing  - U.K. C h a ra cte r  S e t
• 3 = S ing le  B y te  E ncod ing  - Holla nd  C h a ra cte r  S e t
• 4 = S ing le  B y te  E ncod ing  - D e nm a rk /Nor w a y  C h a ra cte r  S e t
• 5 = S ing le  B y te  E ncod ing  - S w e d e n/Finla nd  C h a ra cte r  S e t
• 6 = S ing le  B y te  E ncod ing  - G e rm a ny  C h a ra cte r  S e t
• 7 = S ing le  B y te  E ncod ing  - Fra nce  1 C h a ra cte r  S e t
• 8 = S ing le  B y te  E ncod ing  - Fra nce  2  C h a ra cte r  S e t
• 9 = S ing le  B y te  E ncod ing  - Ita ly  C h a ra cte r  S e t
• 10 = S ing le  B y te  E ncod ing  - S pa in C h a ra cte r  S e t
• 11 = S ing le  B y te  E ncod ing  - M is ce lla ne ou s  C h a ra cte r  S e t
• 12 = S ing le  B y te  E ncod ing  - Ja pa n (A S C II w ith  Ye n s y m b ol) C h a ra cte r
S e t
• 13 = Ze b ra  C od e  Pa g e  850  (s e e  Ze b ra  C od e  Pa g e  850  —  La tin C h a ra cte r
S e t on pa g e  1566 )
• 14 = D ou b le  B y te  A s ia n E ncod ing s
• 15 = S h ift-JIS
• 16 = E UC -JP a nd  E UC -C N
a = d e s ire d
ch a ra cte r
s e t(continu e d )
Va lu e s  2 8 to 30  a re
s u ppor te d  only  in
ﬁ rm w a re  v e r s ion
V60 .14.x , V50 .14.x , or
la te r.
Va lu e s  31 to 36 a re
s u ppor te d  only  in
ﬁ rm w a re  v e r s ion
x .16.x  or  la te r.
• 17 = D e pre ca te d  - UC S -2  B ig  E nd ia n
• 18 to 23 = Re s e r v e d
• 24 = S ing le  B y te  A s ia n E ncod ing
• 25 = Re s e r v e d
• 26 = M u ltib y te  A s ia n E ncod ing s  w ith  A S C II Tra ns pa re ncy
1, 4
• 27 = Ze b ra  C od e  Pa g e  12 52  (s e e  Ze b ra  C od e  Pa g e  12 52 —  La tin
C h a ra cte r  S e t on pa g e  1570 )
• 28 = Unicod e  (UTF-8 e ncod ing ) - Unicod e  C h a ra cte r  S e t
• 29 = Unicod e  (UTF-16 B ig -E nd ia n e ncod ing ) - Unicod e  C h a ra cte r  S e t
• 30 = Unicod e  (UTF-16 Little -E nd ia n e ncod ing ) - Unicod e  C h a ra cte r  S e t
• 31 = Ze b ra  C od e  Pa g e  12 50  (s e e  Ze b ra  C od e  Pa g e  12 50  —  C e ntra l a nd
E a s te rn E u rope a n La tin C h a ra cte r  S e t on pa g e  1568) is  s u ppor te d  for
s ca la b le  fonts , s u ch  a s  Font 0 , or  a  d ow nloa d e d  Tru e Ty pe  font. B itm a ppe d
fonts  (inclu d ing  fonts  A -H) d o not  fu lly  s u ppor t Ze b ra  C od e  Pa g e  12 50 . Th is
v a lu e  is  s u ppor te d  only  on Ze b ra  G -S e rie s ™ /uni00A0printe r s .
• 33 = C od e  Pa g e  12 51
• 34 = C od e  pa g e  12 53
• 35 = C od e  Pa g e  12 54
• 36 = C od e  Pa g e  12 55
Initia l Va lu e  a t Pow e r  Up:0
s1 = s ou rce  1
(ch a ra cte r  ou tpu t
im a g e )
V a lu e s : d e cim a ls  0 to 255
d1 = d e s tina tion 1
(ch a ra cte r  inpu t)
V a lu e s : d e cim a ls  0 to 255
s2 = s ou rce  2
(ch a ra cte r  ou tpu t
im a g e )
V a lu e s : d e cim a ls  0 to 255
d2 = d e s tina tion 2
(ch a ra cte r  inpu t)
V a lu e s : d e cim a ls  0 to 255
… = continu a tion of
pa tte rn
Up to 2 56 s ou rce  a nd  d e s tina tion pa ir s  ca n b e  e nte re d  in th is  com m a nd .
1./uni00A0Th e  e ncod ing  is  controlle d  b y  th e  conv e r s ion ta b le  (*.DAT). Th e  corre ct ta b le  m u s t b e  pre s e nt for
th e  conv e r s ion to fu nction. Th e  ta b le  g e ne ra te d  b y  ZTools ™  is  th e  Tru e Ty pe  font's  inte rna l e ncod ing
(Unicod e ).
2 ./uni00A0S h ift-JIS  e ncod ing  conv e r ts  S h ift-JIS  to JIS  a nd  th e n look s  u p th e  JIS  conv e r s ion in JIS.DAT. Th is
ta b le  m u s t b e  pre s e nt for  S h ift-JIS  to fu nction.
3./uni00A0Th e  ^CI17 com m a nd  h a s  b e e n d e pre ca te d , a long  w ith  th e  ^F8 and ^F16 com m a nd s  th a t a re
re q u ire d  for  th e  ^CI17 com m a nd  to fu nction. Th e  re com m e nd e d  re pla ce m e nt is  th e  ^CI28-30
com m a nd s .
4./uni00A0S u ppor ts  A S C II tra ns pa re ncy  for  A s ia n e ncod ing s . 7 F a nd  le s s  a re  tre a te d  a s  s ing le -b y te  ch a ra cte r s .
80  to FE  is  tre a te d  a s  th e  ﬁ r s t b y te  of a  2 -b y te  ch a ra cte r  80 0 0  to FE FF in th e  e ncod ing  ta b le  for
Unicod e .
80  to FF cou ld  m e a n a  q u a d  b y te  in G B 1 80 30 . Th e ^CI26 com m a nd  ca n a ls o b e  u s e d  to s u ppor t th e
G B  1 80 30  a nd  B ig 5 HKS C S  e ncod ing s . Th e  G B  1 80 30  u s e s  th e  GB18030.DAT e ncod ing  ta b le  a nd
B IG 5 HKS C S  u s e s  th e  BIG5HK.DAT e ncod ing  ta b le .
Th e  ^CI17 com m a nd  h a s  b e e n d e pre ca te d , a long  w ith  th e ^F8 and ^F16 com m a nd s  th a t a re  re q u ire d
for  th e  ^CI17 com m a nd  to fu nction. Th e  re com m e nd e d  re pla ce m e nt is  th e  ^CI28-30 com m a nd s .
W e  re com m e nd  th a t a  ^CI com m a nd  (or  Unicod e  B O M ) is  inclu d e d  a t th e  b e g inning  of e a ch  ZPL s cript.
Th is  is  im por ta nt w h e n ZPL s cripts  w ith  d iffe re nt e ncod ing s  a re  b e ing  s e nt to a  s ing le  printe r. To a s s is t in
th e  inte rle a v ing  of e ncod ing  s ch e m e s , th e  printe r  m a inta ins  tw o e ncod ing  s ta te s  (^CI0 - 28 and ^CI29
- 30). It a u tom a tica lly  a ck now le d g e s  w h e n it s h ou ld  s w itch  e ncod ing  s ta te s , a llow ing  it to d is ting u is h
b e tw e e n e ncod ing s , a nd  m a inta ins  a  ^CI for  e a ch , b u t e nd ia nne s s  is  s h a re d .
E x a m p le : Th is  e x a m ple  re m a ps  th e  E u ro s y m b ol (2 1) d e cim a l to th e  d olla r  s ig n v a lu e  (36) d e cim a l. W h e n
th e  d olla r  s ig n ch a ra cte r  is  s e nt to th e  printe r, th e  E u ro s y m b ol prints :
Th e  font s e le cte d  d e te rm ine s  th e  s h a pe  a nd  re s olu tion of th e  printe d  s y m b ol.
In t e r n a t io n a l Ch a r a c t e r  S e t s
NOTE : Note : ^CI 13 = US  k e y b oa rd

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
