# ^WP

## Description

Us e  th is  com m a nd  to s e t th e  fou r-d ig it w ire le s s  pa s s w ord  (not th e  s a m e  a s  th e  g e ne ra l printe r
pa s s w ord ). If th e  w ire le s s  pa s s w ord  is  0000, th e  W ire le s s  a nd  W ire le s s  Plu s  print s e r v e r s  ru n in a n
“u nprote cte d ” m od e , w h ich  m e a ns  th a t y ou  d o not ne e d  to e nte r  th e  w ire le s s  pa s s w ord  th rou g h  th e
control pa ne l to v ie w  or  m od ify  w ire le s s  s e tting s .
S e t  W ir e le s s  Pa s s w o r d
NOTE : Th is  com m a nd  d oe s  not a pply  to th e  S 4M .
If a  w ire le s s  pa s s w ord  is  s e t, th e  v a lu e s  for  th e  follow ing  pa ra m e te r s  w ill not a ppe a r  th rou g h  th e  control
pa ne l u ntil th e  w ire le s s  pa s s w ord  is  e nte re d :
• M A C  A d d re s s
• ESSID
• W LA N S e cu rity
• W E P Ty pe
• W E P Ind e x
• Re s e t Ne tw ork

## Format

```
^W Pa ,b
^W Ra ,b ,c,d ,e
~WR
```

## Parameters

a = old  w ire le s s  pa s s w ord V a lu e s : 0 0 0 0  th rou g h  9 9 9 9
De f a u lt : 0 0 0 0
b = ne w  w ire le s s
pa s s w ord
V a lu e s : 0 0 0 0  th rou g h  9 9 9 9
De f a u lt : 0 0 0 0
^W R -  S e t  Tr a n s m it
Us e  th is  com m a nd  to ch a ng e  th e  tra ns m is s ion ra te  for  80 2 .11b  w ire le s s  print s e r v e r s .
S e t  Tr a n s m it  Ra t e
a = ra te  1 S e ts  th e  1 M b /s  tra ns m it ra te .Y (O n), N (O ff)
b = ra te  2 S e ts  th e  2  M b /s  tra ns m it ra te .Y (O n), N (O ff)
c = ra te  5.5 S e ts  th e  5.5 M b /s  tra ns m it ra te .Y (O n), N (O ff)
d = ra te  11 S e ts  th e  11 M b /s  tra ns m it ra te .Y (O n), N (O ff)
e = tra ns m it pow e r 1, 5, 2 0 , 30 , 50 , 10 0
NOTE : Th is  com m a nd  is  not v a lid  for  Link -O S  printe r s  a nd  is  only  s u ppor te d  in s e le cte d  oth e r
m od e ls .
~ W R -  Re s e t  W ir e le s s
Us e  th is  com m a nd  to re initia liz e  th e  w ire le s s  ra d io ca rd  a nd  th e  print s e r v e r  (w ire d  or  w ire le s s ) w h e n th e
W ire le s s  or  W ire le s s  Plu s  print s e r v e r  is  ru nning . Th e  com m a nd  a ls o ca u s e s  a ny  w ire le s s  ra d io ca rd  in
th e  printe r  to re a s s ocia te  to th e  w ire le s s  ne tw ork .
Re s e t  W ir e le s s  Ra d io  Ca r d  a n d  Pr in t  S e r v e r

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
