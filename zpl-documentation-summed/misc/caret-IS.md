# ^IS

## Description

Th e  ^IS com m a nd  is  u s e d  w ith in a  la b e l form a t to s a v e  th a t form a t a s  a  g ra ph ic im a g e  ra th e r  th a n a s
a  ZPL II s cript. It is  ty pica lly  u s e d  tow a rd  th e  e nd  of a  s cript. Th e  s a v e d  im a g e  ca n la te r  b e  re ca lle d  w ith
v ir tu a lly  no form a tting  tim e  a nd  ov e rla id  w ith  v a ria b le  d a ta  to form  a  com ple te  la b e l.
Im a g e  S a v e
Us ing  th is  te ch niq u e  to ov e rla y  th e  im a g e  of cons ta nt inform a tion w ith  th e  v a ria b le  d a ta  g re a tly
incre a s e s  th e  th rou g h pu t of th e  la b e l form a t.
IMPORTA NT: See ^IL.

## Format

```
^ISd:o.x,p
~JA
```

## Parameters

d = loca tion of th e
s tore d  ob je ct
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = ob je ct na m e V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion V a lu e s : .GRF or .PNG
De f a u lt : .GRF
p = print im a g e  a fte r
s toring
V a lu e s :
N = no
Y = y e s
De f a u lt : Y
E x a m p le
Th is  is  a n e x a m ple  of u s ing  th e  ^IS com m a nd  to s a v e  a  la b e l form a t to D RA M . Th e  na m e  u s e d  to s tore
th e  g ra ph ic is  SAMPLE2.GRF.
~ JA
Th e  ~JA com m a nd  ca nce ls  a ll form a t com m a nd s  in th e  b u ffe r. It a ls o ca nce ls  a ny  b a tch e s  th a t a re
printing .
Cancel All
Th e  printe r  s tops  a fte r  th e  cu rre nt la b e l is  ﬁ nis h e d  printing . A ll inte rna l b u ffe r s  a re  cle a re d  of d a ta  a nd
the DA TA  LE D  tu rn off.
S u b m itting  th is  com m a nd  to th e  printe r  s ca ns  th e  b u ffe r  a nd  d e le te s  only  th e  d a ta  b e fore  th e  ~JA in the
inpu t b u ffe r  —  it d oe s  not s ca n th e  re m a ind e r  of th e  b u ffe r  for  a d d itiona l ~JA com m a nd s .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
