# ~HU

## Description

Th is  com m a nd  re tu rns  th e  ta b le  of conﬁ g u re d  Ze b ra Ne t A le r t s e tting s  to th e  h os t.
Re t u r n  Z e b r a Ne t  A le r t  Co n ﬁ g u r a t io n

## Format

```
~HU
E x a m p le : If the ~HU com m a nd  is  s e nt to th e  printe r  w ith  e x is ting  A le r t m e s s a g e s  s e t to g o to e -m a il a nd
S NM P tra ps , th e  d a ta  re tu rne d  w ou ld  look  s om e th ing  lik e  th e  inform a tion b e low . S e e  ^SX  on pa g e
352 .
B,C,Y,Y,ADMIN@COMPANY.COM,0
J,F,Y,Y,,0
C,F,Y,Y,,0
D,F,Y,Y,,0
E,F,Y,N,,0
F,F,Y,N,,0
H,C,Y,N,ADMIN@COMPANY.COM,0
N,C,Y,Y,ADMIN@COMPANY.COM,0
O,C,Y,Y,ADMIN@COMPANY.COM,0
P,C,Y,Y,ADMIN@COMPANY.COM,0
IMPORTA NT: If th e re  a re  no ^SX (a le r ts ) s e t, th e  printe r  w ill not re s pond  to th e  ~HU com m a nd .
Th e  ﬁ r s t line  ind ica te s  th a t cond ition B  (rib b on ou t) is  rou te d  to d e s tina tion C  (e -m a il a d d re s s ).
Th e  ne x t tw o ch a ra cte r s , Y a nd  Y, ind ica te  th a t th e  cond ition s e t a nd  cond ition cle a r  options  h a v e  b e e n
s e t to y e s .
Th e  follow ing  e ntr y  is  th e  d e s tina tion th a t th e  A le r t e -m a il s h ou ld  b e  s e nt to; in th is  e x a m ple  it is
a d m in@ com pa ny .com .
Th e  la s t ﬁ g u re  s e e n in th e  ﬁ r s t line  is  0 , w h ich  is  th e  por t nu m b e r.
E a ch  line  s h ow s  th e  s e tting s  for  a  d iffe re nt A le r t cond ition a s  d e ﬁ ne d  in th e  ^SX com m a nd .
```

## Parameters

See ZPL II Programming Guide.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
