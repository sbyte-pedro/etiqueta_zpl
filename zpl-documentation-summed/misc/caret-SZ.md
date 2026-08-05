# ^SZ

## Description

Th e  ^SZ com m a nd  is  u s e d  to s e le ct th e  prog ra m m ing  la ng u a g e  u s e d  b y  th e  printe r. Th is  com m a nd
g iv e s  y ou  th e  a b ility  to print la b e ls  form a tte d  in b oth  ZPL a nd  ZPL II.
S e t  Z PL Mo d e
Th is  com m a nd  re m a ins  a ctiv e  u ntil a noth e r  ^SZ com m a nd  is  s e nt to th e  printe r  or  th e  printe r  is  tu rne d
off.
~ TA
Th e  ~TA com m a nd  le ts  y ou  a d ju s t th e  re s t pos ition of th e  m e d ia  a fte r  a  la b e l is  printe d , w h ich  ch a ng e s
th e  pos ition a t w h ich  th e  la b e l is  torn or  cu t.
Te a r - o f f  A d ju s t  Po s it io n

## Format

```
IMPORTA NT: Th e s e  a re  s om e  im por ta nt fa cts  a b ou t th is  com m a nd :
• For  60 0  d pi printe r s , th e  s te p s iz e  d ou b le s .
• If th e  nu m b e r  of ch a ra cte r s  is  le s s  t h a n  3, th e  com m a nd  is  ig nore d .
```

## Parameters

a = ZPL v e r s ion V a lu e s :
1 = ZPL
2 = /uni00A0ZPL II
De f a u lt : 2
### = ch a ng e  in m e d ia
re s t pos ition (3-d ig it
v a lu e  in d ot row s  m u s t b e
u s e d .)
V a lu e s :
–120 to120
0 to 120 (on th e  HC 10 0 )
De f a u lt : la s t pe rm a ne nt v a lu e  s a v e d

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
