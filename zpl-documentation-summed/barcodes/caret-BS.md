# ^BS

## Description

Th e  ^BS com m a nd  is  th e  tw o-d ig it a nd  ﬁ v e -d ig it a d d -on u s e d  prim a rily  b y  pu b lis h e r s  to cre a te  b a rcod e s
for  IS B Ns  (Inte rna tiona l S ta nd a rd  B ook  Nu m b e r s ). Th e s e  e x te ns ions  a re  h a nd le d  a s  s e pa ra te  b a r  cod e s .
U PC/E A N E x t e n s io n s
Th e  ^BS com m a nd  is  d e s ig ne d  to b e  u s e d  w ith  th e  UPC -A  b a rcod e  (^BU) a nd  th e  UPC -E  b a rcod e  (^B9).
• ^BS s u ppor ts  a  ﬁ x e d  print ra tio.
• Fie ld  d a ta  (^FD) is  lim ite d  to e x a ctly  tw o or  ﬁ v e  ch a ra cte r s . ZPL II a u tom a tica lly  tru nca te s  or  pa d s  on
th e  le ft w ith  z e ros  to a ch ie v e  th e  re q u ire d  nu m b e r  of ch a ra cte r s .
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a rcod e  is  re q u ire d , g o to w w w .a im g lob a l.org .

## Format

```
^BSo,h,f,g
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
V a lu e s : 1 to 32000
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
De f a u lt : Y
E x a m p le
Th is  is  a n e x a m ple  of a  UPC /E A N Tw o-d ig it b a rcod e :
E x a m p le
Th is  is  a n e x a m ple  of a  UPC /E A N Fiv e -d ig it b a rcod e :
C a re  s h ou ld  b e  ta k e n in pos itioning  th e  UPC /E A N e x te ns ion w ith  re s pe ct to th e  UPC -A  or  UPC -E  cod e
to e ns u re  th e  re s u lting  com pos ite  cod e  is  w ith in th e  UPC  s pe ciﬁ ca tion.
E x a m p le
For  UPC  cod e s , w ith  a  m od u le  w id th  of 2 (d e fa u lt), th e  ﬁ e ld  orig in offs e ts  for  th e  e x te ns ion a re :
Th is  is  a n e x a m ple  of a  UPC -A :
E x a m p le
Th is  is  a n e x a m ple  of a  UPC -E :
A d d itiona lly , th e  b a rcod e  h e ig h t for  th e  e x te ns ion s h ou ld  b e  2 7  d ots  (0 .135 inch e s ) s h or te r  th a n th a t of
th e  prim a r y  cod e . A  prim a r y  UPC  cod e  h e ig h t of 1 83 d ots  (0 .9 0 0  inch e s ) re q u ire s  a n e x te ns ion h e ig h t of
155 d ots  (0 .7 65 inch e s ).
E x a m p le
Th is  e x a m ple  illu s tra te s  h ow  to cre a te  a  norm a l UPC -A  b a rcod e  for  th e  v a lu e  7 0 0 0 0 0 2 19 8 w ith  a n
e x te ns ion e q u a l to 0 4414:

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
