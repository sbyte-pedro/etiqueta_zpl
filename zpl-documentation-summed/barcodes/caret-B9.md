# ^B9

## Description

Th e  ^B9 com m a nd  prod u ce s  a  v a ria tion of th e  UPC  s y m b olog y  u s e d  for  th e  nu m b e r  s y s te m  0 . It is  a
s h or te ne d  v e r s ion of th e  UPC -A  b a rcod e , w h e re  z e ros  a re  s u ppre s s e d , re s u lting  in cod e s  th a t re q u ire
le s s  printing  s pa ce .
U PC- E  Ba r c o d e
Th e  6/uni00A0d ot/m m , 12 /uni00A0d ot/m m  a nd  2 4/uni00A0d ot/m m  printh e a d s  prod u ce  th e  UPC  a nd  E A N s y m b olog ie s  a t 10 0
pe rce nt of th e ir  s iz e . How e v e r, a n 8/uni00A0d ot/m m  printh e a d  prod u ce s  th e  UPC  a nd  E A N s y m b olog ie s  a t a
m a g niﬁ ca tion fa ctor  of 7 7  pe rce nt.
E a ch  ch a ra cte r  in a  UPC -E  b a rcod e  is  com pos e d  of fou r  e le m e nts : tw o b a r s  a nd  tw o s pa ce s . Th e  ^BY
com m a nd  m u s t b e  u s e d  to s pe cify  th e  w id th  of th e  na rrow  b a r.
• ^B9 s u ppor ts  a  ﬁ x e d  ra tio.
• Fie ld  d a ta  (^FD) is  lim ite d  to e x a ctly  10  ch a ra cte r s , re q u iring  a  ﬁ v e -d ig it m a nu fa ctu re r’s  cod e  a nd  a
ﬁ v e -d ig it prod u ct cod e .
• W h e n u s ing  th e  z e ro-s u ppre s s e d  v e r s ions  of UPC, y ou  m u s t e nte r  th e  fu ll 10 -ch a ra cte r  s e q u e nce .
ZPL II ca lcu la te s  a nd  prints  th e  s h or te ne d  v e r s ion.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a rcod e  is  re q u ire d , re fe r  to a im g lob a l.org .

## Format

```
^B9,h,f,g,e
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = b a rcod e  h e ig h t (in
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
e = print ch e ck  d ig it V a lu e s :
N = no
Y = y e s
De f a u lt : Y
E x a m p le
Th is  is  a n e x a m ple  of a  UPC -E  b a rcod e :
Ru le s  f o r  Pr o p e r  Pr o d u c t  Co d e  Nu m b e r s
• If th e  la s t th re e  d ig its  in th e  m a nu fa ctu re r’s  nu m b e r  a re  0 0 0 , 10 0 , or  2 0 0 , v a lid  prod u ct cod e
nu m b e r s  a re  0 0 0 0 0  to 0 0 9 9 9.
• If th e  la s t th re e  d ig its  in th e  m a nu fa ctu re r’s  nu m b e r  a re  30 0 , 40 0 , 50 0 , 60 0 , 7 0 0 , 80 0 , or  9 0 0 , v a lid
prod u ct cod e  nu m b e r s  a re  0 0 0 0 0  to 0 0 0 9 9.
• If th e  la s t tw o d ig its  in th e  m a nu fa ctu re r’s  nu m b e r  a re  10 , 2 0 , 30 , 40 , 50 , 60 , 7 0 , 80 , or  9 0 , v a lid
prod u ct cod e  nu m b e r s  a re  0 0 0 0 0  to 0 0 0 0 9.
• If th e  m a nu fa ctu re r’s  nu m b e r  d oe s  not e nd  in z e ro (0 ), v a lid  prod u ct cod e  nu m b e r s  a re  0 0 0 0 5 to
0 0 0 0 9.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
