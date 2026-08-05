# ^MP

## Description

Th e  ^MP com m a nd  is  u s e d  to d is a b le  th e  v a riou s  m od e  fu nctions  on th e  control pa ne l. O nce  d is a b le d ,
th e  s e tting s  for  th e  pa r ticu la r  m od e  fu nction ca n no long e r  b e  ch a ng e d  a nd  th e  LE D  a s s ocia te d  w ith
th e  fu nction d oe s  not lig h t.
Mo d e  Pr o t e c t io n
B e ca u s e  th is  com m a nd  h a s  only  one  pa ra m e te r, e a ch  m od e  m u s t b e  d is a b le d  w ith  a n ind iv id u a l ^MP
com m a nd .

## Format

```
^MPa
```

## Parameters

a = m od e  to prote ct V a lu e s :
D = d is a b le  D a rk ne s s  M od e
P = d is a b le  Pos ition M od e
C = d is a b le  C a lib ra tion M od e
E = e na b le  a ll m od e s
S = d is a b le  a ll m od e  s a v e s  (m od e s  ca n b e  a d ju s te d  b u t v a lu e s  a re  not
s a v e d )
W = d is a b le  Pa u s e
F = d is a b le  Fe e d
X = d is a b le  C a nce l
M = d is a b le  m e nu  ch a ng e s
De f a u lt : a  v a lu e  m u s t b e  e nte re d  or  th e  com m a nd  is  ig nore d
E x a m p le : Th is  e x a m ple  s h ow s  th e  ZPL cod e  th a t d is a b le s  m od e s  D  a nd  C. It a ls o s h ow s  th e  e ffe cts  on th e
conﬁ g u ra tion la b e l b e fore  a nd  a fte r  th e  ZPL cod e  is  s e nt:
^XA
^MPD
^MPC
^XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
