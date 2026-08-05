# ^FC

## Description

Th e  ^FC com m a nd  is  u s e d  to s e t th e  clock  ind ica tor s  (d e lim ite r s ) a nd  th e  clock  m od e  for  u s e  w ith  th e
Re a l-Tim e  C lock  h a rd w a re . Th is  com m a nd  m u s t b e  inclu d e d  w ith in e a ch  la b e l ﬁ e ld  com m a nd  s tring
e a ch  tim e  th e  Re a l-Tim e  C lock  v a lu e s  a re  re q u ire d  w ith in th e  ﬁ e ld .
Fie ld  Clo c k
(^SN) fu nctions  w ith  (^FC) ca pa b ilitie s .
For  m ore  d e ta ils  on th e  Re a l Tim e  C lock , s e e  Re a l Tim e  C lock   on pa g e  1613 .

## Format

```
^FCa,b,c
```

## Parameters

a = prim a r y  clock
ind ica tor  ch a ra cte r
V a lu e s : a ny  A S C II ch a ra cte r
De f a u lt : %
b  = s e cond a r y  clock
ind ica tor  ch a ra cte r
V a lu e s : a ny  A S C II ch a ra cte r
De f a u lt : none — th is  v a lu e  ca nnot b e  th e  s a m e  a s  a or c
c = th ird  clock  ind ica tor
ch a ra cte r
V a lu e s : a ny  A S C II ch a ra cte r
De f a u lt : none — th is  v a lu e  ca nnot b e  th e  s a m e  a s  a or b
E nte ring  th e s e  ZPL com m a nd s  s e ts  th e  prim a r y  clock  ind ica tor  to % , th e  s e cond a r y  clock  ind ica tor  to { ,
a nd  th e  th ird  clock  ind ica tor  to #. Th e  re s u lts  a re  printe d  on a  la b e l w ith  Prim a r y , S e cond a r y , a nd  Th ird
a s  ﬁ e ld  d a ta .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
