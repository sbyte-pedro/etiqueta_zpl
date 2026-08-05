# ^BU

## Description

Th e  ^BU com m a nd  prod u ce s  a  ﬁ x e d  le ng th , nu m e ric s y m b olog y . It is  prim a rily  u s e d  in th e  re ta il ind u s tr y
for  la b e ling  pa ck a g e s . Th e  UPC -A  b a rcod e  h a s  11 d a ta  ch a ra cte r s . Th e  6 d ot/m m , 12  d ot/m m , a nd  2 4
d ot/m m  printh e a d s  prod u ce  th e  UPC -A  b a rcod e  (UPC /E A N s y m b olog ie s ) a t 10 0  pe rce nt s iz e . How e v e r,
a n 8 d ot/m m  printh e a d  prod u ce s  th e  UPC /E A N s y m b olog ie s  a t a  m a g niﬁ ca tion fa ctor  of 7 7  pe rce nt.
U PC- A  Ba r c o d e
• ^BU s u ppor ts  a  ﬁ x e d  print ra tio.
• Fie ld  d a ta  (^FD) is  lim ite d  to e x a ctly  11 ch a ra cte r s . ZPL II a u tom a tica lly  tru nca te s  or  pa d s  on th e  le ft
w ith  z e ros  to a ch ie v e  th e  re q u ire d  nu m b e r  of ch a ra cte r s .
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a rcod e  is  re q u ire d , g o to w w w .a im g lob a l.org .
inform a tion on M od  10 , s e e  M od  10  C h e ck  D ig it on pa g e  1591 .

## Format

```
^BU
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = B a rcod e  h e ig h t (in
d ots )
V a lu e s : 1 to 9999
De f a u lt : v a lu e  s e t b y  ^BY
f = print inte rpre ta tion
line
V a lu e s :
N = no
Y = y e s
De f a u lt : Y
g = print inte rpre ta tion
line  a b ov e  cod e
V a lu e s :
N = no
Y = y e s
De f a u lt : N
e = print ch e ck  d ig it V a lu e s :
N = no
Y = y e s
De f a u lt : Y
Th e  font s ty le  of th e  inte rpre ta tion line  d e pe nd s  on th e  m od u lu s  (w id th  of na rrow  b a r) s e le cte d  in ^BY.
Ze ro is  not a llow e d .
• 6  d o t /m m  p r in t e r : a  m od u lu s  of 2  d ots  or  g re a te r  prints  w ith  a n O C R-B  inte rpre ta tion line ; a  m od u lu s  of 1
d ot prints  font A .
• 8 d o t /m m  p r in t e r : a  m od u lu s  of 3 d ots  or  g re a te r  prints  w ith  a n O C R-B  inte rpre ta tion line ; a  m od u lu s  of 1
or  2  d ots  prints  font A .
• 12 d o t /m m  p r in t e r : a  m od u lu s  of 5 d ots  or  g re a te r  prints  w ith  a n O C R-B  inte rpre ta tion line ; a  m od u lu s  of 1,
2 , 3, or  4 d ots  prints  font A .
• 24 d o t /m m  p r in t e r : a  m od u lu s  of 9  d ots  or  g re a te r  prints  w ith  a n O C R-B  inte rpre ta tion line ; a  m od u lu s  of 1
to 8 d ots  prints  font A .
E x a m p le
Th is  is  a n e x a m ple  of a  UPC -A  b a rcod e  w ith  e x te ns ion:

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
