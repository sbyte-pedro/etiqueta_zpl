# ^BM

## Description

Th e  ^BM com m a nd  is  a  pu ls e -w id th  m od u la te d , continu ou s , non-s e lf-ch e ck ing  s y m b olog y . It is  a  v a ria nt
of th e  Ple s s e y  b a rcod e  (^BP).
MS I Ba r  Co d e
E a ch  ch a ra cte r  in th e  M S I b a rcod e  is  com pos e d  of e ig h t e le m e nts : fou r  b a r s  a nd  fou r  a d ja ce nt s pa ce s .
• ^BM s u ppor ts  a  print ra tio of 2 .0 :1 to 3.0 :1.
• For  th e  b a rcod e  to b e  v a lid , ﬁ e ld  d a ta  (^FD) is  lim ite d  to 1 to 14 d ig its  w h e n pa ra m e te r  e is B, C, or D.
^FD is  lim ite d  to 1 to 13 d ig its  w h e n th e  pa ra m e te r  e is A, plu s  a  q u ie t z one .
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a r  cod e  is  re q u ire d , re fe r  to w w w .a im g lob a l.org .

## Format

```
^BMo,e,h,f,g,e2
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
e = ch e ck  d ig it s e le ction V a lu e s :
A = no ch e ck  d ig its
B = 1 Mod 10
C = 2 Mod 10
D = 1 Mod 11 and 1 Mod 10
De f a u lt : B
h = B a rcod e  h e ig h t (in
d ots )
V a lu e s :
1 to 32000
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
e2 = ins e r ts  ch e ck  d ig it
into th e  inte rpre ta tion
line
V a lu e s :
N = no
Y = y e s
De f a u lt : N
E x a m p le
Th is  is  a n e x a m ple  of a n M S I b a rcod e :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
