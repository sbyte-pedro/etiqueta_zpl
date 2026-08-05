# ^MN

## Description

Th is  com m a nd  s pe ciﬁ e s  th e  m e d ia  ty pe  b e ing  u s e d  a nd  th e  b la ck  m a rk  offs e t in d ots .
Me d ia  Tr a c k in g
Th is  b u lle te d  lis t s h ow s  th e  ty pe s  of m e d ia  a s s ocia te d  w ith  th is  com m a nd :
• C ontinu ou s  M e d ia  –  th is  m e d ia  h a s  no ph y s ica l ch a ra cte ris tic (s u ch  a s  a  w e b , notch , pe r fora tion,
b la ck  m a rk ) to s e pa ra te  la b e ls . La b e l le ng th  is  d e te rm ine d  b y  th e  ^LL com m a nd .
• C ontinu ou s  M e d ia , v a ria b le  le ng th  –  s a m e  a s  C ontinu ou s  M e d ia , b u t if por tions  of th e  printe d  la b e l
fa ll ou ts id e  of th e  d e ﬁ ne d  la b e l le ng th , th e  la b e l s iz e  w ill a u tom a tica lly  b e  e x te nd e d  to conta in th e m .
Th is  la b e l le ng th  e x te ns ion a pplie s  only  to th e  cu rre nt la b e l. Note  th a t ^MNV s till re q u ire s  th e  u s e  of
the ^LL com m a nd  to d e ﬁ ne  th e  initia l d e s ire d  la b e l le ng th .
• Non-continu ou s  M e d ia  –  th is  m e d ia  h a s  s om e  ty pe  of ph y s ica l ch a ra cte ris tic (s u ch  a s  w e b , notch ,
pe r fora tion, b la ck  m a rk ) to s e pa ra te  th e  la b e ls .
Th is  com m a nd  is  ig nore d  on th e  HC 10 0 ™  printe r.

## Format

```
^MNa,b
```

## Parameters

a = m e d ia  b e ing  u s e d V a lu e s :
N = continu ou s  m e d ia
Y = non-continu ou s  m e d ia  w e b  s e ns ing
1, 2
W = non-continu ou s  m e d ia  w e b  s e ns ing
,1, 2
M = non-continu ou s  m e d ia  m a rk  s e ns ing
A = a u to-d e te cts  th e  ty pe  of m e d ia  d u ring  ca lib ra tion
1, 3
V = continu ou s  m e d ia , v a ria b le  le ng th
De f a u lt : a  v a lu e  m u s t b e  e nte re d  or  th e  com m a nd  is  ig nore d
b = b la ck  m a rk  offs e t in
d ots
Th is  s e ts  th e  e x pe cte d  loca tion of th e  m e d ia  m a rk  re la tiv e  to th e  point of
s e pa ra tion b e tw e e n d ocu m e nts . If s e t to 0 , th e  m e d ia  m a rk  is  e x pe cte d  to
b e  fou nd  a t th e  point of s e pa ra tion. (i.e ., th e  pe r fora tion, cu t point, e tc.)A ll
v a lu e s  a re  lis te d  in d ots . Th is  pa ra m e te r  is  ig nore d  u nle s s  th e  a pa ra m e te r
is  s e t to M. If th is  pa ra m e te r  is  m is s ing , th e  d e fa u lt v a lu e  is  u s e d .
V a lu e s :
-80 to 283 for  d ire ct-th e rm a l only  printe r s
-240 to 566 for  60 0  d pi printe r s
-75 to 283 for  KR40 3 printe r s
-120 to 283 for  a ll oth e r  printe r s
De f a u lt : 0
1./uni00A0Prov id e s  th e  s a m e  re s u lt.
2 ./uni00A0Th is  v a lu e  is  not s u ppor te d  on th e  KR40 3 printe r.
3./uni00A0Th is  pa ra m e te r  is  s u ppor te d  only  on G -s e rie s  printe r s .
4./uni00A0Th is  pa ra m e te r  is  s u ppor te d  only  on th e  KR40 3 printe r.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
