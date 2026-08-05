# ^MI

## Description

Th e  ^MI com m a nd  controls  th e  conte nt of m a inte na nce  a le r t m e s s a g e s , w h ich  a re  re m ind e r s  printe d  b y
th e  printe r  to ins tru ct th e  ope ra tor  to cle a n or  re pla ce  th e  printh e a d .
S e t  Ma in t e n a n c e  In f o r m a t io n  Me s s a g e
Th is  com m a nd  is  a v a ila b le  only  for  printe r s  w ith  ﬁ rm w a re  v e r s ion V60 .15.x , V50 .15.x , or  la te r.

## Format

```
^MI
```

## Parameters

type = id e ntiﬁ e s  th e
ty pe  of a le r t
V a lu e s :
• R = h e a d  re pla ce m e nt
• C = h e a d  cle a ning
De f a u lt : R
message = m e s s a g e
th a t prints  on th e  la b e l
w h e n a  m a inte na nce
a le r t occu r s
Th e  m a x im u m  le ng th  of e a ch  m e s s a g e  is  63 ch a ra cte r s . A ll ch a ra cte r s
follow ing  th e  com m a  a nd  pre ce d ing  th e  ne x t tild e  (~) or  ca ra t (^) d e ﬁ ne  th e
m e s s a g e  s tring . C om m a s  (,) a re  not a llow e d  in th e  m e s s a g e .
De f a u lt :
• HEAD CLEANING = ple a s e  cle a n printh e a d
• HEAD REPLACEMENT = ple a s e  re pla ce  printh e a d
E x a m p le
Th is  e x a m ple  s e ts  th e  printh e a d  (h e a d ) re pla ce m e nt w a rning  m e s s a g e . Printing  of th is  m e s s a g e  is
controlle d  b y  th e  ^MA com m a nd .
1. To cu s tom iz e  th e  te x t of th is  la b e l, ty pe  s om e th ing  lik e  th is :
^XA^MIR,PRINT HEAD NEEDS REPLACEMENT - CALL EXT 1000^XZ
Th e  la b e l prints  w h a te v e r  y ou  prog ra m  it to s a y .
2 . For  th is  e x a m ple , th e  m e s s a g e  on th e  la b e l look s  lik e  th is :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
