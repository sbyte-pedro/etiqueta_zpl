# ^WS

## Description

Us e  th is  com m a nd  to s e t th e  w ire le s s  ra d io ca rd  v a lu e s  for  E S S ID , O pe ra ting  M od e , a nd  C a rd  Pre a m b le .
S e t  W ir e le s s  Ra d io  Ca r d  V a lu e s

## Format

```
^WS
```

## Parameters

e = E S S ID  v a lu e V a lu e s : A ny  v a lu e  u p to 32  ch a ra cte r s , inclu d ing  a ll A S C II a nd  E x te nd e d
A S C II ch a ra cte r s , inclu d ing  th e  s pa ce  ch a ra cte r. W h e n th is  pa ra m e te r  is
le ft b la nk , th e  E S S ID  is  not ch a ng e d .
De f a u lt : 12 5
o = ope ra ting  m od e V a lu e s : I (Infra s tru ctu re ), A  (A d h oc)
De f a u lt : I
p = w ire le s s  ra d io ca rd
pre a m b le
V a lu e s :
L = long
S = s h or t
De f a u lt : L
h  = w ire le s s  pu ls e
Th is  pa ra m e te r  is
s u ppor te d  in ﬁ rm w a re
v e r s ion V60 .15.x , V50 .15.x ,
R6x .15.x , R53.15.x , ZS Px ,
or  la te r.
A d d s  a  pu ls e  to th e  ne tw ork  tra fﬁ c g e ne ra te d  b y  th e  printe r. Th is  pu ls e
is  ne ce s s a r y  w ith  s om e  ne tw ork  conﬁ g u ra tions  to k e e p th e  printe r
online .V a lu e s :
0 = d is a b le d
1 = e na b le d
De f a u lt : 1
i = w ire le s s  pu ls e  inte r v a l
Th is  pa ra m e te r  is
s u ppor te d  in ﬁ rm w a re
v e r s ion V60 .15.x , V50 .15.x ,
R6x .15.x , R53.15.x , ZS Px ,
or  la te r.
S e ts  th e  inte r v a l a t w h ich  th e  w ire le s s  pu ls e  is  s e nt w h e n th e  w ire le s s
pu ls e  fe a tu re  is  e na b le d .
V a lu e s : 5 to 30 0  s e cond s
De f a u lt : 15
j = ch a nne l m a s k
Th is  pa ra m e te r  is
s u ppor te d  in ﬁ rm w a re
v e r s ion X 60 .15.x , V50 .15.x ,
or  la te r.
For  com m only  u s e d  ch a nne l m a s k s , s e e  Ta b le  13 o n  p a g e  424.
V a lu e s : 4 He x a d e cim a l d ig its  pre ce d e d  b y  “0 x ” (0 x 0 0 0 0  to 0 x FFFF)
De f a u lt : 0 x 7 FF
k  = inte rna tiona l m od e
Th is  pa ra m e te r  is
s u ppor te d  in ﬁ rm w a re
v e r s ion X 60 .15.x , V50 .15.x ,
or  la te r.
In inte rna tiona l m od e , th e  printe r  u s e s  th e  ch a nne l s e t b y  th e  a cce s s
point.
V a lu e s : 0  (D is a b le d ), 1 (E na b le d )
De f a u lt : 0
Re g io n Ch a n n e l Ma s k
Unite d  S ta te s , C a na d a , La tin A m e rica 0 x 7 FF
E u rope , M id d le  E a s t, A frica , oth e r 0 x 1FFF
Ja pa n 0 x 3FFF
Ta b le  14/uni00A0/uni00A0/uni00A0/uni00A0 C h a nne l M a s k  S e tting s

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
