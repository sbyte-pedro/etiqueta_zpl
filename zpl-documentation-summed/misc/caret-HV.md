# ^HV

## Description

Us e  th is  com m a nd  to re tu rn d a ta  from  s pe ciﬁ e d  ﬁ e ld s , a long  w ith  a n optiona l A S C II h e a d e r, to th e  h os t
com pu te r. You  ca n u s e  th is  com m a nd  w ith  a ny  ﬁ e ld  th a t h a s  b e e n a s s ig ne d  a  nu m b e r  w ith  th e  ^FN and
^RF com m a nd s .
Ho s t  V e r iﬁ c a t io n

## Format

```
^HV
```

## Parameters

#/uni00A0 = ﬁ e ld  nu m b e r
s pe ciﬁ e d  w ith  a noth e r
com m a nd
Th e  v a lu e  a s s ig ne d  to th is  pa ra m e te r  s h ou ld  b e  th e  s a m e  a s  th e  one  u s e d
in a noth e r  com m a nd .
V a lu e s : 0 to 9999
De f a u lt : 0
n = nu m b e r  of b y te s  to
b e  re tu rne d
V a lu e s : 1 to 256
De f a u lt : 64
h = h e a d e r  to b e  re tu rne d
w ith  th e  d a ta
D e lim ite r  ch a ra cte r s  te rm ina te  th e  s tring . Th is  ﬁ e ld  is  Fie ld  He x  (^FH)
ca pa b le .
V a lu e s : 0 to 3072 b y te s
De f a u lt : no h e a d e r
t = te rm ina tion Th is  ﬁ e ld  is  Fie ld  He x  (^FH) ca pa b le .
V a lu e s : 0  to 30 7 2  ch a ra cte r s
a = com m a nd  a pplie s  to W h e n ^PQ is  g re a te r  th a n 1 or  if a  v oid  la b e l occu r s , s e nd  one  re s pons e
for  a  la b e l form a t or  one  for  e v e r y  la b e l printe d .
V a lu e s :
• F = Form a t
• L = La b e l
De f a u lt : F
Th e  follow ing  cod e :
^XA
.
.
.
^FH_^HV0,8,EPC[,]_0D_0A,L^FS
^PQ2
^XZ
W ou ld  re tu rn d a ta  s im ila r  to th is :
EPC[12345678]
EPC[55554444]

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
