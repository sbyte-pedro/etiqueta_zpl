# ^LS

## Description

Th e  ^LS com m a nd  a llow s  for  com pa tib ility  w ith  Z-130  printe r  form a ts  th a t a re  s e t for  le s s  th a n fu ll la b e l
w id th . It is  u s e d  to s h ift a ll ﬁ e ld  pos itions  to th e  le ft s o th e  s a m e  com m a nd s  u s e d  on a  Z-130  or  Z-2 2 0
Printe r  ca n b e  u s e d  on oth e r  Ze b ra  printe r s .
La b e l S h if t
To d e te rm ine  th e  v a lu e  for  th e  ^LS com m a nd , u s e  th is  form u la :
Z-130 and Z-220 values for ^LHx + ^FOx
(d is ta nce  from  e d g e  of la b e l) = printe r  v a lu e  for  ^LSa
If th e  print pos ition is  le s s  th a n 0 , s e t ^LS to 0 .
pos itiv e  u nle s s  pre ce d e d  b y  a  ne g a tiv e  s ig n (-).
To b e  com pa tib le  w ith  e x is ting  Ze b ra  printe r s , th is  com m a nd  m u s t com e  b e fore  th e  ﬁ r s t ^FS (Fie ld
S e pa ra tor) com m a nd . O nce  y ou  h a v e  is s u e d  a n ^LS com m a nd , th e  s e tting  is  re ta ine d  u ntil y ou  tu rn off
th e  printe r  or  s e nd  a  ne w  ^LS com m a nd  to th e  printe r.

## Format

```
^LSa
IMPORTA NT: Th e  a b ility  to s a v e  th e  ^LS com m a nd  d e pe nd s  on th e  v e r s ion of ﬁ rm w a re .
```

## Parameters

a = s h ift le ft v a lu e  (in
d ots )
V a lu e s : -9999 to 9999
In it ia l V a lu e  a t  Po w e r  U p : 0

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
