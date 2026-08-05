# ^BT

## Description

Th e  ^BT b a r  cod e  is  th e  s ta nd a rd  for  th e  TC IF ca n ta g  te le com m u nica tions  e q u ipm e nt.
TLC39 Ba r c o d e
Th e  TC IF C LE I cod e , w h ich  is  th e  M icroPD F417  b a rcod e , is  a lw a y s  fou r  colu m ns . Th e  ﬁ rm w a re  m u s t
d e te rm ine  w h a t m od e  to u s e  b a s e d  on th e  nu m b e r  of ch a ra cte r s  to b e  e ncod e d .

## Format

```
^BT
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d
I = inv e r te d
B = b ottom  u p
w1 = w id th  of th e  C od e
39  b a r  cod e
V a lu e s : (in  d o t s ): 1 to 10
De f a u lt : (6 00 d p i p r in t e r s ): 4
De f a u lt : (200-  a n d  300 d p i p r in t e r ): 2
r1 = w id e  to na rrow  b a r
w id th  ra tio th e  C od e  39
b a r  cod e
V a lu e s : 2.0 to 3.0(increments of 0.1)
De f a u lt : 2.0
h1 = h e ig h t of th e  C od e
39  b a r  cod e
V a lu e s : (in  d o t s ): 1 to 9999
De f a u lt : (6 00 d p i p r in t e r ): 120
De f a u lt : (300 d p i p r in t e r ): 60 De f a u lt : (200 d p i p r in t e r ): 40
h2 = row  h e ig h t of th e
M icroPD F417  b a r  cod e
V a lu e s : (in  d o t s ): 1 to 255
De f a u lt : (6 00 d p i p r in t e r ): 8
De f a u lt : (200-  a n d  300 d p i p r in t e r s ): 4
w2 = na rrow  b a r  w id th
of th e  M icroPD F417  b a r
code
V a lu e s : (in  d o t s ): 1 to 10
De f a u lt : (6 00 d p i p r in t e r ): 4
De f a u lt : (200-  a n d  300 d p i p r in t e r s ): 2
Ho w  t o  Pr in t  TLC39 Ba r c o d e
E x a m p le : Th is  is  a n e x a m ple  on h ow  to print TLC 39  b a rcod e . Th e  ca llou ts  id e ntify  th e  k e y  com pone nts
a nd  a re  follow e d  b y  a  d e ta ile d  d e s cription b e low :
Us e  th e  com m a nd  d e fa u lts  to g e t re s u lts  th a t a re  in com plia nce  w ith  TC IF ind u s tr y  s ta nd a rd s ;
re g a rd le s s  of printh e a d  d e ns ity .
1 E CI Nu m b e r. If th e  s e v e nth  ch a ra cte r  is  not a  com m a , only  C od e  39  prints . Th is  m e a ns  if m ore
th a n 6 d ig its  a re  pre s e nt, C od e  39  prints  for  th e  ﬁ r s t s ix  d ig its  (a nd  no M icro-PD F s y m b ol is
printe d ).
• M u s t b e  6 d ig its .
• Firm w a re  g e ne ra te s  inv a lid  ch a ra cte r  e rror  if th e  ﬁ rm w a re  s e e s  a ny th ing  b u t 6 d ig its .
• Th is  nu m b e r  is  not pa d d e d .
2 S e r ia l n u m b e r. Th e  s e ria l nu m b e r  ca n conta in u p to 2 5 ch a ra cte r s  a nd  is  v a ria b le  le ng th . Th e
s e ria l nu m b e r  is  s tore d  in th e  M icro-PD F s y m b ol. If a  com m a  follow s  th e  s e ria l nu m b e r, th e n
a d d itiona l d a ta  is  u s e d  b e low .
• If pre s e nt, m u s t b e  a lph a nu m e ric (le tte r s  a nd  nu m b e r s , no pu nctu a tion).
Th is  v a lu e  is  u s e d  if a  com m a  follow s  th e  E C I nu m b e r.
3 A d d it io n a l d a t a . If pre s e nt, it is  u s e d  for  th ing s  s u ch  a s  a  cou ntr y  cod e .
D a ta  ca nnot e x ce e d  150  b y te s . Th is  inclu d e s  s e ria l nu m b e r  com m a s .
• A d d itiona l d a ta  is  s tore d  in th e  M icro-PD F s y m b ol a nd  a ppe nd e d  a fte r  th e  s e ria l nu m b e r.
A  com m a  m u s t e x is t b e tw e e n e a ch  m a x im u m  of 2 5 ch a ra cte r s  in th e  a d d itiona l ﬁ e ld s .
• A d d itiona l d a ta  ﬁ e ld s  ca n conta in u p to 2 5 a lph a nu m e ric ch a ra cte r s  pe r  ﬁ e ld .
Th e  re s u lt is :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
