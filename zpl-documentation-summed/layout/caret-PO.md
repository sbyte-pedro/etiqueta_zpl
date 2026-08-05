# ^PO

## Description

Th e  ^PO com m a nd  inv e r ts  th e  la b e l form a t 1 80  d e g re e s . Th e  la b e l a ppe a r s  to b e  printe d  u ps id e  d ow n.
If th e  orig ina l la b e l conta ins  com m a nd s  s u ch  a s  ^LL, ^LS, ^LT and ^PF, th e  inv e r te d  la b e l ou tpu t is
a ffe cte d  d iffe re ntly .
Pr in t  Or ie n t a t io n
th e  printe r  is  u s e d .
Once the ^PO com m a nd  is  s e nt, th e  s e tting  is  re ta ine d  u ntil a noth e r  ^PO com m a nd  is  re ce iv e d , or  th e
printe r  is  tu rne d  off.
Th e  N v a lu e  for  th e  a pa ra m e te r  is  not s u ppor te d  on th e  HC 10 0 ™  printe r.

## Format

```
^POa
```

## Parameters

a = inv e r t th e  la b e l 1 80
d e g re e s
V a lu e s :
N = norm a l/uni00A0
I = inv e r t
De f a u lt : N
E x a m p le
Th is  is  a n e x a m ple  of printing  a  la b e l a t 1 80  d e g re e s :
Th e  ^POI com m a nd  inv e r ts  th e  x ,y  coord ina te s . A ll im a g e  pla ce m e nt is  re la tiv e  to th e s e  inv e r te d
coord ina te s . Th e re fore , a  d iffe re nt ^LH (La b e l Hom e ) ca n b e  u s e d  to m ov e  th e  print b a ck  onto th e  la b e l.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
