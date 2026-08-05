# ^B8

## Description

Th e  ^B8 com m a nd  is  th e  s h or te ne d  v e r s ion of th e  E A N-13 b a rcod e . E A N is  a n a crony m  for  E u rope a n
A r ticle  Nu m b e ring . E a ch  ch a ra cte r  in th e  E A N-8 b a rcod e  is  com pos e d  of fou r  e le m e nts : tw o b a r s  a nd
tw o s pa ce s .
E A N- 8 Ba r c o d e
• ^B8 s u ppor ts  a  ﬁ x e d  ra tio.
• Fie ld  d a ta  (^FD) is  lim ite d  to e x a ctly  s e v e n ch a ra cte r s . ZPL II a u tom a tica lly  pa d s  or  tru nca te s  on th e
le ft w ith  z e ros  to a ch ie v e  th e  re q u ire d  nu m b e r  of ch a ra cte r s .
• W h e n u s ing  JA N-8 (Ja pa ne s e  A r ticle  Nu m b e ring ), a  s pe cia liz e d  a pplica tion of E A N-8, th e  ﬁ r s t tw o
non-z e ro d ig its  s e nt to th e  printe r  a re  a lw a y s  49.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a r  cod e  is  re q u ire d , g o to a im g lob a l.org .

## Format

```
^B8
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = b a r  cod e  h e ig h t (in
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
De f a u lt : N
E x a m p le
Th is  is  a n e x a m ple  of a n E A N-8 b a rcod e :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
