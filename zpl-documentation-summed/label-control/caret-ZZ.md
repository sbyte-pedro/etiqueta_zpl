# ^ZZ

## Description

Th e  ^ZZ com m a nd  pla ce s  th e  printe r  in a n id le  or  s h u td ow n m od e .
Pr in t e r  S le e p
Z PL Ne t w o r k  Co m m a n d s
Z PL Ne t w o r k  Co m m a n d s
Th is  s e ction conta ins  ZPL com m a nd s  for  w ire d  a nd  w ire le s s  print s e r v e r s .
^K C
Th e  ^KC com m a nd  a llow s  th e  print s e r v e r  to h a v e  its  ow n clie nt id e ntiﬁ e r  (C ID ).
S e t  Clie n t  Id e n t iﬁ e r  (Op t io n  6 1)

## Format

```
^ZZ
```

## Parameters

t = nu m b e r  of s e cond
(id le  tim e ) prior  to
s h u td ow n
V a lu e s : 0 to 999999 –  s e tting  0 d is a b le s  a u tom a tic s h u td ow n
De f a u lt : la s t pe rm a ne ntly  s a v e d  v a lu e  or  0
b = la b e l s ta tu s  a t
s h u td ow n
V a lu e s :
Y = ind ica te s  to s h u td ow n w h e n la b e ls  a re  s till q u e u e d
N = ind ica te s  a ll la b e ls  m u s t b e  printe d  b e fore  s h u tting  d ow n
De f a u lt : N
a = e na b le  or  d is a b le V a lu e s :
0 = d is a b le  (d e fa u lt)
1 = e na b le d , u s e  M A C  a d d re s s
2 = e na b le d , A S C II v a lu e
3 = e na b le d , HE X  v a lu e
De f a u lt : 0
b = d e v ice V a lu e s :
0 = a ll d e v ice s
1 = w ire le s s
2 = e x te rna l w ire d
3 = inte rna l w ire d
De f a u lt : 1
c = pre ﬁ x  (optiona l) V a lu e s : 11 A S C II ch a ra cte r s  or  2 2  h e x a d e cim a l v a lu e s .
Th e  pre ﬁ x  ca n b e  cle a re d  b y  d e fa u lting  th e  ne tw ork  s e tting s  on th e
printe r.
d = id e ntiﬁ e r V a lu e s : 60  A S C II ch a ra cte r s  or  12 0  h e x a d e cim a l v a lu e s . M inim u m  ﬁ e ld
le ng th  is  2  b y te s .
Th e  s u fﬁ x  ca n b e  cle a re d  b y  d e fa u lting  th e  ne tw ork  s e tting s  on th e
printe r.
Th is  a pplie s  only  to th e  X i4, RX i4, ZM 40 0 , ZM 60 0 , RZ40 0 , or  RZ60 0  printe r s  w h e n it is  u s e d  w ith  th e
e x te rna l Ze b ra Ne t 10 /10 0  print s e r v e r  u s ing  ﬁ rm w a re  v 1.1.5 or  la te r.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
