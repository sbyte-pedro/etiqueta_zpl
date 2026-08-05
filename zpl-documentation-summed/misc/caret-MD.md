# ^MD

## Description

Th e  ^MD com m a nd  a d ju s ts  th e  d a rk ne s s  re la tiv e  to th e  cu rre nt d a rk ne s s  s e tting .
Me d ia  Da r k n e s s

## Format

```
^MD
```

## Parameters

a = m e d ia  d a rk ne s s
le v e l
V a lu e s : -30 to 30, d e pe nd ing  on cu rre nt v a lu e
In it ia l V a lu e  a t  Po w e r  U p : 0 If no v a lu e  is  e nte re d , th is  com m a nd  is  ig nore d .
E x a m p le : Th e s e  e x a m ple s  s h ow  s e tting  th e  printe r  to d iffe re nt d a rk ne s s  le v e ls :
• If th e  cu rre nt v a lu e  (v a lu e  on conﬁ g u ra tion la b e l) is  16, e nte ring  th e  com m a nd  ^MD-9 d e cre a s e s  th e
v a lu e  to 7 .
• If th e  cu rre nt v a lu e  (v a lu e  on conﬁ g u ra tion la b e l) is  1, e nte ring  th e  com m a nd  ^MD15 incre a s e s  th e
v a lu e  to 16.
• If th e  cu rre nt v a lu e  (v a lu e  on conﬁ g u ra tion la b e l) is  2 5, e nte ring  th e  com m a nd  ^MD10 incre a s e s  only
th e  v a lu e  to 30 , w h ich  is  th e  m a x im u m  v a lu e  a llow e d .
E a ch  ^MD com m a nd  is  tre a te d  s e pa ra te ly  in re la tion to th e  cu rre nt v a lu e  a s  printe d  on th e  conﬁ g u ra tion
la b e l.
NOTE : O n Ze b ra  G -S e rie s ™  printe r s  th e  v a lu e  s e t w ith  th e  ^MD com m a nd  is  pe r s is te nt a cros s
pow e r  cy cle s .
IMPORTA NT: Th e  d a rk ne s s  s e tting  ra ng e  for  th e  &X iIIIPlu s ;, X i4, a nd  RX i4 is  0  to 30  in incre m e nts
of 0 .1. Th e  ﬁ rm w a re  is  s e tu p s o th a t th e  ^M D  a nd  ~ S D  com m a nd s  (ZPL d a rk ne s s  com m a nd s )
a cce pts  th a t ra ng e  of s e tting s .
E x a m p le : Th e s e  a re  e x a m ple s  of th e  X iIIIPlu s , X i4, a nd  RX i4 D a rk ne s s  S e tting :
^MD8.3
~SD8.3
E x a m p le : For  e x a m ple , th is  is  w h a t w ou ld  h a ppe n if tw o ^MD com m a nd s  w e re  re ce iv e d :
A s s u m e  th e  cu rre nt v a lu e  is  15. A n ^MD-6 com m a nd  is  re ce iv e d  th a t ch a ng e s  th e  cu rre nt v a lu e  to 9.
A noth e r  com m a nd , ^MD2, is  re ce iv e d . Th e  cu rre nt v a lu e  ch a ng e s  to 17 .
Th e  tw o ^MD com m a nd s  a re  tre a te d  ind iv id u a lly  in re la tion to th e  cu rre nt v a lu e  of 15.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
