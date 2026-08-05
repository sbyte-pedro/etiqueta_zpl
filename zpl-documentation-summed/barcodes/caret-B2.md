# ^B2

## Description

Th e  ^B2 com m a nd  prod u ce s  th e  Inte rle a v e d  2  of 5 b a r  cod e , a  h ig h -d e ns ity , s e lf-ch e ck ing , continu ou s ,
nu m e ric s y m b olog y .
In t e r le a v e d  2 o f  5  Ba r  Co d e
E a ch  d a ta  ch a ra cte r  for  th e  Inte rle a v e d  2  of 5 b a r  cod e  is  com pos e d  of ﬁ v e  e le m e nts : ﬁ v e  b a r s  or  ﬁ v e
s pa ce s . O f th e  ﬁ v e  e le m e nts , tw o a re  w id e , a nd  th re e  a re  na rrow . Th e  b a r  cod e  is  form e d  b y  inte rle a v ing
ch a ra cte r s  form e d  w ith  a ll s pa ce s  into ch a ra cte r s  form e d  w ith  a ll b a r s .
• ^B2 s u ppor ts  print ra tios  of 2 .0 :1 to 3.0 :1.
• Fie ld  d a ta  (^FD) is  lim ite d  to th e  w id th  (or  le ng th , if rota te d ) of th e  la b e l.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a r  cod e  is  re q u ire d , g o to a im g lob a l.org .

## Format

```
^B2
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = b a r  cod e  h e ig h t (in
d ots )
V a lu e s : 1 to 32000
De f a u lt : v a lu e  s e t b y  ^BY
f = print inte rpre ta tion
line
V a lu e s :
Y = y e s
N = no
De f a u lt : Y
g = print inte rpre ta tion
line  a b ov e  cod e
V a lu e s :
Y = y e s
N = no
De f a u lt : N
e = ca lcu la te  a nd  print
M od  10  ch e ck  d ig it
V a lu e s :
Y = y e s
N = no
De f a u lt : N
E x a m p le
Th is  is  a n e x a m ple  of a n Inte rle a v e d  2  of 5 b a r  cod e :
Th e  tota l nu m b e r  of d ig its  in a n Inte rle a v e d  2  of 5 b a r  cod e  m u s t b e  e v e n. Th e  printe r  a u tom a tica lly
a d d s  a  le a d ing  0  (z e ro) if a n od d  nu m b e r  of d ig its  is  re ce iv e d .
Th e  Inte rle a v e d  2  of 5 b a r  cod e  u s e s  th e  M od  10  ch e ck -d ig it s ch e m e  for  e rror  ch e ck ing . For  m ore
inform a tion on M od  10  ch e ck  d ig its , s e e  M od  10  C h e ck  D ig it on pa g e  1591 .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
