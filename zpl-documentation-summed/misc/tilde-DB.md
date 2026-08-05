# ~DB

## Description

Th e  ~DB com m a nd  s e ts  th e  printe r  to re ce iv e  a  d ow nloa d e d  b itm a p font a nd  d e ﬁ ne s  na tiv e  ce ll s iz e ,
b a s e line , s pa ce  s iz e , a nd  copy rig h t.
Do w n lo a d  Bit m a p  Fo n t
Th is  com m a nd  cons is ts  of tw o por tions , a  ZPL II com m a nd  d e ﬁ ning  th e  font a nd  a  s tru ctu re d  d a ta
s e g m e nt th a t d e ﬁ ne s  e a ch  ch a ra cte r  of th e  font.

## Format

```
~DB
```

## Parameters

d = d riv e  to s tore  font V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = na m e  of font V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion Fo r m a t : .FNT
a = orie nta tion of na tiv e
font
Fix e d  V a lu e : norm a l
h = m a x im u m  h e ig h t of
ce ll (in d ots )
V a lu e s : 1 to 32000
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
w = m a x im u m  w id th  of
ce ll (in d ots )
V a lu e s : 1 to 32000
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
base = d ots  from  top of
ce ll to ch a ra cte r  b a s e line
V a lu e s : 1 to 32000
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
space = w id th  of
s pa ce  or  non-e x is te nt
ch a ra cte r s
V a lu e s : 1 to 32000
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
#char = nu m b e r  of
ch a ra cte r s  in font
V a lu e s : 1 to 256 (m u s t m a tch  th e  ch a ra cte r s  b e ing  d ow nloa d e d )
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
© = copy rig h t h old e r V a lu e s : 1 to 63 a lph a nu m e ric ch a ra cte r s
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
data = s tru ctu re d  A S C II
d a ta  th a t d e ﬁ ne s  e a ch
ch a ra cte r  in th e  font
Th e  # s y m b ol s ig niﬁ e s  ch a ra cte r  cod e  pa ra m e te r s , w h ich  a re  s e pa ra te d
w ith  pe riod s . Th e  ch a ra cte r  cod e  is  from  1 to 4 ch a ra cte r s  to a llow  for
la rg e  inte rna tiona l ch a ra cte r  s e ts  to b e  d ow nloa d e d  to th e  printe r.
Th e  d a ta  s tru ctu re  is :
#xxxx.h.w.x.y.i.data
#xxxx = ch a ra cte r  cod e
h = b itm a p h e ig h t (in d ot row s )
w = b itm a p w id th  (in d ot row s )
x = x -offs e t (in d ots )
y = y -offs e t (in d ots )
i = ty pe s e tting  m otion d is pla ce m e nt (w id th , inclu d ing  inte r  ch a ra cte r
g a p of a  pa r ticu la r  ch a ra cte r  in th e  font)
data = h e x a d e cim a l b itm a p d e s cription
E x a m p le : Th is  is  a n e x a m ple  of h ow  to u s e  th e  ~DB com m a nd . It s h ow s  th e  ﬁ r s t tw o ch a ra cte r s  of a  font
b e ing  d ow nloa d e d  to D RA M .
~DBR:TIMES.FNT,N,5,24,3,10,2,ZEBRA 1992,
#0025.5.16.2.5.18.
OOFF
OOFF
FFOO
FFOO
FFFF
#0037.4.24.3.6.26.
OOFFOO
OFOOFO
OFOOFO
OOFFOO

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
