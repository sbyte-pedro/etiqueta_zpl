# ^CD

## Description

Th e  ^CD and ~CD com m a nd s  a re  u s e d  to ch a ng e  th e  d e lim ite r  ch a ra cte r. Th is  ch a ra cte r  is  u s e d  to
s e pa ra te  pa ra m e te r  v a lu e s  a s s ocia te d  w ith  s e v e ra l ZPL II com m a nd s . Th e  d e fa u lt d e lim ite r  is  a  com m a
(,).
Ch a n g e  De lim it e r

## Format

```
^CD
```

## Parameters

a = d e lim ite r  ch a ra cte r
ch a ng e
V a lu e s : a ny  A S C II ch a ra cte r
De f a u lt : a  pa ra m e te r  is  re q u ire d . If a  pa ra m e te r  is  not e nte re d , th e  ne x t
ch a ra cte r  re ce iv e d  is  th e  ne w  pre ﬁ x  ch a ra cte r.
E x a m p le : Th is  s h ow s  h ow  to ch a ng e  th e  ch a ra cte r  d e lim ite r  to a  s e m i-colon (;):
^XA
^FO10,10
^GB10,10,3
^XZ
^XA
^CD;
^FO10;10
^GB10;10;3
^XZ
To s a v e , th e  JUS com m a nd  is  re q u ire d . He re  is  a n e x a m ple  u s ing  JUS:
~CD;
^XA^JUS^XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
