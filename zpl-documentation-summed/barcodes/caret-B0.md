# ^B0

## Description

Th e  ^B0 com m a nd  cre a te s  a  tw o-d im e ns iona l m a trix  s y m b olog y  m a d e  u p of s q u a re  m od u le s  a rra ng e d
a rou nd  a  b u lls -e y e  pa tte rn a t th e  ce nte r.
A z t e c  Ba r c o d e  Pa r a m e t e r s
NOTE : Th e  A z te c b a rcod e  w ork s  w ith  ﬁ rm w a re  v e r s ion V60 .13.0 .11A  a nd  V50 .13.2  or  la te r.

## Format

```
^B0a,b,c,d,e,f,g
```

## Parameters

a = orie nta tion V a lu e s :
N = norm a l
R = rota te d
I = inv e r te d  1 80  d e g re e s
B = re a d  from  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
b = m a g niﬁ ca tion fa ctor V a lu e s : 1 to 10
De f a u lt :
1 on 150 d pi printe r s
2 on 200 d pi printe r s
3 on 300 d pi printe r s
6 on 600 d pi printe r s
c = e x te nd e d  ch a nne l
inte rpre ta tion cod e
ind ica tor
V a lu e s :
Y = if d a ta  conta ins  E C IC s
N = if d a ta  d oe s  not conta in E C IC s
De f a u lt : N
d = e rror  control
a nd  s y m b ol s iz e /ty pe
ind ica tor
V a lu e s :
0 = d e fa u lt e rror  corre ction le v e l
01 to 99 = e rror  corre ction pe rce nta g e  (m inim u m )
101 to 104 = 1 to 4-la y e r  com pa ct s y m b ol
201 to 232 = 1 to 32 -la y e r  fu ll-ra ng e  s y m b ol
300 = a  s im ple  A z te c “Ru ne ”
De f a u lt : 0
e = m e nu  s y m b ol
ind ica tor
V a lu e s :
Y = if th is  s y m b ol is  to b e  a  m e nu  (b a r  cod e  re a d e r  initia liz a tion) s y m b ol
N = if it is  not a  m e nu  s y m b ol
De f a u lt : N
f = nu m b e r  of s y m b ols
for  s tru ctu re d  a ppe nd
V a lu e s : 1 th rou g h  26
De f a u lt : 1
g = optiona l ID  ﬁ e ld  for
s tru ctu re d  a ppe nd
Th e  ID  ﬁ e ld  is  a  te x t s tring  w ith  a  2 4-ch a ra cte r  m a x im u m
De f a u lt : no ID
E x a m p le
Th is  is  a n e x a m ple  of th e  ^B0 com m a nd :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
