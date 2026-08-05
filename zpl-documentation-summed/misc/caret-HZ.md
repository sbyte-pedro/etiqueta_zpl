# ^HZ

## Description

Th e  ^HZ com m a nd  is  u s e d  for  re tu rning  printe r  d e s cription inform a tion in X M L form a t. Th e  printe r
re tu rns  inform a tion on form a t pa ra m e te r s , ob je ct d ire ctorie s , ind iv id u a l ob je ct d a ta , a nd  print s ta tu s
inform a tion.
Dis p la y  De s c r ip t io n  In f o r m a t io n

## Format

```
^HZb
^HZO,d:o.x,l
```

## Parameters

b = d is pla y  d e s cription
to re tu rn
V a lu e s :
a = d is pla y  a ll inform a tion
f = d is pla y  printe r  form a t s e tting  inform a tion
l = d is pla y  ob je ct d ire ctor y  lis ting  inform a tion
o = d is pla y  ind iv id u a l ob je ct d a ta  inform a tion
r = d is pla y  printe r  s ta tu s  inform a tion
De f a u lt : if th e  v a lu e  is  m is s ing  or  inv a lid , th e  com m a nd  is  ig nore d
d = loca tion of s tore d
ob je ct
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = ob je ct na m e V a lu e s : 1 to 8, or 1 to 16 a lph a nu m e ric ch a ra cte r s  b a s e d  on pa ra m e te r  l.
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNOWN is  u s e d .
x = e x te ns ion S u ppor te d  e x te ns ions  for  ob je cts  (pa ra m e te r  o) inclu d e :
.FNT —  font
.GRF —  g ra ph ic
.PNG —  com pre s s e d  g ra ph ic
.ZPL —  s tore d  form a t
.DAT —  e ncod ing  ta b le
.ZOB —  d ow nloa d a b le  ob je ct
.STO —  A le r t d a ta  ﬁ le
l = long  ﬁ le na m e
support
V a lu e s :
Y = Ye s
If Y, th e  ob je ct d a ta  s tore s  th e  ﬁ le na m e  a s  16 ch a ra cte r s . Th e  d a ta  is  only
com pa tib le  w ith  ﬁ rm w a re  v e r s ion V60 .13.0 .5, or  la te r.
N = No
If N, th e  ob je ct d a ta  s tore s  th e  ﬁ le na m e  a s  8 ch a ra cte r s . Th e  d a ta  is
for w a rd  a nd  b a ck w a rd  com pa tib le  w ith  a ll v e r s ions  of ﬁ rm w a re .
De f a u lt : N
E x a m p le : Th is  e x a m ple  s h ow s  th e  ob je ct d a ta  inform a tion for  th e  ob je ct SAMPLE.GRF loca te d  on R:.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
