# ^JI

## Description

^JI w ork s  m u ch  lik e  th e  ~JI com m a nd . B oth  com m a nd s  a re  s e nt to th e  printe r  to initia liz e  th e  Ze b ra
B A S IC  Inte rpre te r.
S t a r t  Z BI (Z e b r a  BA S IC In t e r p r e t e r )
Id e ntiﬁ e s  fe a tu re s  th a t a re  a v a ila b le  in printe r s  w ith  ﬁ rm w a re  v e r s ion V60 .16.2 Z, V53.16.2 Z, or  la te r.
In inte ra ctiv e  m od e , ^JI ca n b e  s e nt th rou g h  one  of th e  com m u nica tion por ts  (s e ria l, pa ra lle l, or
E th e rne t) to initia liz e  th e  printe r  to re ce iv e  ZB I com m a nd s . Th is  com m a nd  ca n b e  s e nt from  one  of th e
Ze b ra  s oftw a re  u tilitie s , s u ch  a s  ZTools , or  from  a  te rm ina l e m u la tion prog ra m .
W h e n th e  com m a nd  is  re ce iv e d , th e  printe r  re s pond s  b y  s e nd ing  a  ZB I h e a d e r  b a ck  to th e  cons ole ,
a long  w ith  th e  prog ra m  v e r s ion nu m b e r. Th is  ind ica te s  th a t th e  inte rpre te r  is  a ctiv e .
W h e n th e  printe r  is  tu rne d  on, it ca n re ce iv e  ZPL II com m a nd s  a nd  la b e l form a ts . How e v e r, for  th e
printe r  to re cog niz e  ZB I com m a nd s  a nd  prog ra m s , it m u s t b e  initia liz e d  u s ing  ^JI or ~JI.
O nly  one  ZB I inte rpre te r  ca n b e  a ctiv e  in th e  printe r  a t a  tim e . If a  s e cond  ^JI or ~JI com m a nd  is
re ce iv e d  w h ile  th e  inte rpre te r  is  ru nning , th e  com m a nd  is  ig nore d .
Th e  inte rpre te r  is  d e a ctiv a te d  b y  e nte ring  one  of tw o com m a nd s :
ZPL a t th e  ZB I prom pt
~JQ a t a n a ctiv e  ZPL por t

## Format

```
^JId:o.x,b,c,d
```

## Parameters

d  = loca tion of
prog ra m  to ru n a fte r
initia liz a tion
V a lu e s : R:, E:, B:, and A:
De f a u lt : loca tion m u s t b e  s pe ciﬁ e d
o = na m e  of
prog ra m  to ru n a fte r
initia liz a tion
V a lu e s : a ny  v a lid  prog ra m  na m e
De f a u lt : na m e  m u s t b e  s pe ciﬁ e d
x  = e x te ns ion of
prog ra m  to ru n a fte r
initia liz a tion
Fix e d  V a lu e : .BAS, .BAE
NOTE : .BAE is  only  s u ppor te d  in ﬁ rm w a re  v e r s ion V60 .16.0 Z or  la te r
b  = cons ole  control V a lu e s :
Y = cons ole  on
N = cons ole  off
De f a u lt : Y
c = e ch oing  control V a lu e s :
Y = e ch o on
N = e ch o off
De f a u lt : Y
d  = m e m or y
a lloca tion for  ZB I *
V a lu e s : 20K to 1024K
De f a u lt : 50K
* Th is  pa ra m e te r  is  only  a v a ila b le  on printe r s  w ith  ﬁ rm w a re  V60 .12 .0 .x  or  e a rlie r.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
