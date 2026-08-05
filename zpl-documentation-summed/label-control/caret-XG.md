# ^XG

## Description

Th e  ^XG com m a nd  is  u s e d  to re ca ll one  or  m ore  g ra ph ic im a g e s  for  printing . Th is  com m a nd  is  u s e d
in a  la b e l form a t to m e rg e  g ra ph ics , s u ch  a s  com pa ny  log os  a nd  pie ce  pa r ts , w ith  te x t d a ta  to form  a
com ple te  la b e l.
Re c a ll Gr a p h ic
A n im a g e  ca n b e  re ca lle d  a nd  re s iz e d  a s  m a ny  tim e s  a s  ne e d e d  in e a ch  form a t. O th e r  im a g e s  a nd  d a ta
m ig h t b e  a d d e d  to th e  form a t.

## Format

```
^XGd:o.x,mx,my
```

## Parameters

d = s ou rce  d e v ice  of
s tore d  im a g e
V a lu e s : R:, E:, B:, and A:
De f a u lt : s e a rch  priority  (R:, E:, B:, and A:)
o = na m e  of s tore d
im a g e
V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion l Fix e d  V a lu e : .GRF
mx = m a g niﬁ ca tion
fa ctor  on th e  x -a x is
V a lu e s : 1 to 10
De f a u lt :1
my = m a g niﬁ ca tion
fa ctor  on th e  y -a x is
V a lu e s : 1 to 10
De f a u lt :1
E x a m p le : Th is  is  a n e x a m ple  of u s ing  th e  ^XG com m a nd  to re ca ll th e  im a g e  SAMPLE.GRF from  D RA M  a nd
print it in ﬁ v e  d iffe re nt s iz e s  in ﬁ v e  d iffe re nt loca tions  on th e  s a m e  la b e l:
^XA
^FO100,100^XGR:SAMPLE.GRF,1,1^FS
^FO100,200^XGR:SAMPLE.GRF,2,2^FS
^FO100,300^XGR:SAMPLE.GRF,3,3^FS
^FO100,400^XGR:SAMPLE.GRF,4,4^FS
^FO100,500^XGR:SAMPLE.GRF,5,5^FS
^XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
