# ^FM

## Description

Th e  ^FM com m a nd  a llow s  y ou  to control th e  pla ce m e nt of b a r  cod e  s y m b ols .
Mu lt ip le  Fie ld  Or ig in  Lo c a t io n s
It d e s ig na te s  ﬁ e ld  loca tions  for  th e  PD F417  (^B7) a nd  M icroPD F417  (^BF) b a r  cod e s  w h e n th e
s tru ctu re d  a ppe nd  ca pa b ilitie s  a re  u s e d . Th is  a llow s  printing  m u ltiple  b a r  cod e s  from  th e  s a m e  s e t of
te x t inform a tion.
Th e  s tru ctu re d  a ppe nd  ca pa b ility  is  a  w a y  of e x te nd ing  th e  te x t printing  ca pa city  of b oth  b a r  cod e s . If a
s tring  e x te nd s  b e y ond  w h a t th e  d a ta  lim ita tions  of th e  b a r  cod e  a re , it ca n b e  printe d  a s  a  s e rie s : 1 of 3, 2
of 3, 3 of 3. S ca nne r s  re a d  th e  inform a tion a nd  re concile  it into th e  orig ina l, u ns e g m e nte d  te x t.
Th e  ^FM com m a nd  trig g e r s  m u ltiple  b a r  cod e  printing  on th e  s a m e  la b e l w ith  ^B7 and ^BF only . W h e n
u s e d  w ith  a ny  oth e r  com m a nd s , it is  ig nore d .
e x ce e d e d . For  e x a m ple , b a r  cod e  2  of 3 prints  once  1 of 3 h a s  re a ch e d  th e  m a x im u m  a m ou nt of d a ta
it ca n h old . S pe cify ing  th re e  ﬁ e ld s  d oe s  not e ns u re  th a t th re e  b a r  cod e s  print; e nou g h  ﬁ e ld  d a ta  to ﬁ ll
th re e  b a r  cod e  ﬁ e ld s  h a s  to b e  prov id e d .
Th e  nu m b e r  of th e  x,y pa ir s  ca n e x ce e d  th e  nu m b e r  of b a r  cod e s  g e ne ra te d . How e v e r, if too fe w  a re
d e s ig na te d , no s y m b ols  print.

## Format

```
^FM
```

## Parameters

x1 = x -a x is  loca tion of
ﬁ r s t s y m b ol (in d ots )
V a lu e s :
0 to 32000e = e x clu d e  th is  b a r  cod e  from  printing
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d /uni00A0a  v a lu e  m u s t b e  s pe ciﬁ e d
y1 = y -a x is  loca tion of
ﬁ r s t s y m b ol (in d ots )
V a lu e s :
0 to 32000e = e x clu d e  th is  b a r  cod e  from  printing
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
x2 = x -a x is  loca tion of
s e cond  s y m b ol (in d ots )
V a lu e s :
0 to 32000e = e x clu d e  th is  b a r  cod e  from  printing
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
y2 = y -a x is  loca tion of
s e cond  s y m b ol (in d ots )
V a lu e s :
0 to 32000e = e x clu d e  th is  b a r  cod e  from  printing
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
… = continu a tion of X ,Y
pa ir s
Ma x im u m  n u m b e r  o f  p a ir s : 60
E x a m p le : Th is  e x a m ple  s h ow s  y ou  h ow  to g e ne ra te  th re e  b a r  cod e s  w ith  th e  te x t “Ze b ra  Te ch nolog ie s
C orpora tion s triv e s  to b e … ” w ou ld  ne e d  to b e  re pe a te d  s e v e n tim e s , w h ich  inclu d e s  2 87 0  ch a ra cte r s  of
d a ta  (inclu d ing  s pa ce s ) b e tw e e n ^FD and ^FS:
1 Th e  e llips e  is  not pa r t of th e  cod e . It ind ica te s  th a t th e  te x t ne e d s  to b e  re pe a te d  s e v e n tim e s ,
a s  m e ntione d  in th e  e x a m ple  d e s cription.
E x a m p le : Th is  e x a m ple  a s s u m e s  a  m a x im u m  of th re e  b a r  cod e s , w ith  b a r  cod e  2  of 3 om itte d :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
