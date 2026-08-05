# ^LT

## Description

Th e  ^LT com m a nd  m ov e s  th e  e ntire  la b e l form a t a  m a x im u m  of 12 0  d ot row s  u p or  d ow n from  its
cu rre nt pos ition, in re la tion to th e  top e d g e  of th e  la b e l. A  ne g a tiv e  v a lu e  m ov e s  th e  form a t tow a rd s  th e
top of th e  la b e l; a  pos itiv e  v a lu e  m ov e s  th e  form a t a w a y  from  th e  top of th e  la b e l.
La b e l To p
Th is  com m a nd  ca n b e  u s e d  to ﬁ ne -tu ne  th e  pos ition of th e  ﬁ nis h e d  la b e l w ith ou t h a v ing  to ch a ng e  a ny
of th e  e x is ting  pa ra m e te r s .
IMPORTA NT: For  s om e  printe r  m od e ls , it is  pos s ib le  to re q u e s t a  ne g a tiv e  v a lu e  la rg e  e nou g h
to ca u s e  th e  m e d ia  to b a ck u p into th e  printe r  a nd  b e com e  u nth re a d e d  from  th e  pla te n. Th is
cond ition ca n re s u lt in a  printe r  e rror  or  u npre d icta b le  re s u lts .
Th e  La b e l Top v a lu e  s h ow n on th e  front pa ne l of th e  printe r  is  d ou b le  th e  v a lu e  u s e d  in th e  ZPL form a t.
Th e  ^LT com m a nd  d oe s  not ch a ng e  th e  m e d ia  re s t pos ition.

## Format

```
^LT
```

## Parameters

x = la b e l top (in d ot
row s )
V a lu e s :
HC 10 0 : 0 to 120
X iIIIPlu s  60 0 d pi: -240 to 240
A ll oth e r  Ze b ra  printe r s : -120 to 120
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d  or  th e  com m a nd  is  ig nore d

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
