# ^BE

## Description

Th e  ^BE com m a nd  is  s im ila r  to th e  UPC -A  b a rcod e . It is  w id e ly  u s e d  th rou g h ou t E u rope  a nd  Ja pa n in
th e  re ta il m a rk e tpla ce .
E A N- 13 Ba r c o d e
Th e  E A N-13 b a rcod e  h a s  12  d a ta  ch a ra cte r s , one  m ore  d a ta  ch a ra cte r  th a n th e  UPC -A  cod e . A n E A N-13
s y m b ol conta ins  th e  s a m e  nu m b e r  of b a r s  a s  th e  UPC -A  b u t e ncod e s  a  13th  d ig it into a  pa rity  pa tte rn of
th e  le ft-h a nd  s ix  d ig its . Th is  13th  d ig it, in com b ina tion w ith  th e  12 th  d ig it, re pre s e nts  a  cou ntr y  cod e .
• ^BE s u ppor ts  ﬁ x e d  print ra tios .
• Fie ld  d a ta  (^FD) is  lim ite d  to e x a ctly  12  ch a ra cte r s . ZPL II a u tom a tica lly  tru nca te s  or  pa d s  on th e  le ft
w ith  z e ros  to a ch ie v e  th e  re q u ire d  nu m b e r  of ch a ra cte r s .
• W h e n u s ing  JA N-13 (Ja pa ne s e  A r ticle  Nu m b e ring ), a  s pe cia liz e d  a pplica tion of E A N-13, th e  ﬁ r s t tw o
non-z e ro d ig its  s e nt to th e  printe r  m u s t b e  49.
NOTE : Us e  Inte rle a v e d  2  of 5 for  UC C  a nd  E A N 14.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a rcod e  is  re q u ire d , re fe r  to w w w .a im g lob a l.org .
inform a tion on M od  10 , s e e  M od  10  C h e ck  D ig it on pa g e  1591 .

## Format

```
^BE
```

## Parameters

o = orie nta tion V a lu e :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = b a rcod e  h e ig h t (in
d ots )
V a lu e :
1 to 32000
De f a u lt : v a lu e  s e t b y  ^BY
f = print inte rpre ta tion
line
V a lu e :
N = no
Y = y e s
De f a u lt : Y
g = print inte rpre ta tion
line  a b ov e  cod e
V a lu e s :
N = no
Y = y e s
De f a u lt : N
E x a m p le
Th is  is  a n e x a m ple  of a n E A N-13 b a rcod e :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
