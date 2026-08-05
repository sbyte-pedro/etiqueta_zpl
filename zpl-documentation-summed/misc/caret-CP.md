# ^CP

## Description

Th e  ^CP com m a nd  ca u s e s  th e  printe r  to m ov e  a  printe d  la b e l ou t of th e  pre s e nte r  a re a  in one  of s e v e ra l
w a y s .
Re m o v e  La b e l
S u p p o r t e d  De v ic e s :
• KR40 3

## Format

```
^CPa
^CTa or ~CTa
```

## Parameters

a = k ios k  pre s e nt m od e V a lu e s :
0 = E je ct pre s e nte d  pa g e
1 = Re tra cts  pre s e nte d  pa g e
2 = Ta k e s  th e  a ction d e ﬁ ne d  b y  c pa ra m e te r  of ^KV com m a nd .
De f a u lt : none /uni00A0Th e  com m a nd  is  ig nore d  if pa ra m e te r s  a re  m is s ing  or  inv a lid .
^CT ~ CT
Th e  ^CT and ~CT com m a nd s  a re  u s e d  to ch a ng e  th e  control com m a nd  pre ﬁ x . Th e  d e fa u lt pre ﬁ x  is  th e
tild e  (~ ).
Ch a n g e  Tild e
a = ch a ng e  control
com m a nd  ch a ra cte r
V a lu e s : a ny  A S C II ch a ra cte r
De f a u lt : a  pa ra m e te r  is  re q u ire d . If a  pa ra m e te r  is  not e nte re d , th e  ne x t
ch a ra cte r  re ce iv e d  is  th e  ne w  control com m a nd  ch a ra cte r.
E x a m p le : Th is  is  a n e x a m ple  of h ow  to ch a ng e  th e  control com m a nd  pre ﬁ x  from  a  ^ to a  +:
^XA
^CT+
^XZ
+HS

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
