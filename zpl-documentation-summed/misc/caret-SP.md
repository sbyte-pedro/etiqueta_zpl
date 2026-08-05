# ^SP

## Description

Th e  ^SP com m a nd  a llow s  a  la b e l to s ta r t printing  a t a  s pe ciﬁ e d  point b e fore  th e  e ntire  la b e l h a s  b e e n
com ple te ly  form a tte d . O n e x tre m e ly  com ple x  la b e ls , th is  com m a nd  ca n incre a s e  th e  ov e ra ll th rou g h pu t
of th e  print.
S t a r t  Pr in t
Th e  com m a nd  w ork s  a s  follow s : S pe cify  th e  d ot row  a t w h ich  th e  ^SP com m a nd  is  to b e g in. Th is
cre a te s  a  la b e l s e g m e nt. O nce  th e  ^SP com m a nd  is  proce s s e d  a ll inform a tion in th a t s e g m e nt prints .
D u ring  th e  printing  proce s s , a ll of th e  com m a nd s  a fte r  th e  ^SP continu e  to b e  re ce iv e d  a nd  proce s s e d
b y  th e  printe r.
If th e  s e g m e nt a fte r  th e  ^SP com m a nd  (or  th e  re m a ind e r  of th e  la b e l) is  re a d y  for  printing , a nd  m e d ia
m otion d oe s  not s top. If th e  ne x t s e g m e nt is  not re a d y , th e  printe r  s tops  m id -la b e l a nd  w a its  for  th e  ne x t
s e g m e nt to b e  com ple te d . Pre cis e  pos itioning  of th e  ^SP com m a nd  re q u ire s  a  tria l-a nd -e rror  proce s s , a s
it d e pe nd s  prim a rily  on print s pe e d  a nd  la b e l com ple x ity .
Th e  ^SP com m a nd  ca n b e  e ffe ctiv e ly  u s e d  to d e te rm ine  th e  w or s t pos s ib le  print q u a lity . You  ca n
d e te rm ine  w h e th e r  u s ing  th e  ^SP com m a nd  is  a ppropria te  for  th e  pa r ticu la r  a pplica tion b y  u s ing  th is
proce d u re .
If y ou  s e nd  th e  la b e l form a t u p to th e  ﬁ r s t ^SP com m a nd  a nd  th e n w a it for  printing  to s top b e fore
s e nd ing  th e  ne x t s e g m e nt, th e  printe d  la b e l is  a  s a m ple  of th e  w or s t pos s ib le  print q u a lity . It d rops  a ny
ﬁ e ld  th a t is  ou t of ord e r.
If th e  proce d u re  a b ov e  is  u s e d , th e  e nd  of th e  la b e l form a t m u s t b e :
^SP#^FS

## Format

```
^SP
```

## Parameters

a = d ot row  to s ta r t
printing
V a lu e s : 0 to 32000
De f a u lt : 0
E x a m p le : In th is  e x a m ple , a  la b e l 80 0  d ot row s  in le ng th  u s e s  ^SP500. S e g m e nt 1 prints  w h ile  com m a nd s
in S e g m e nt 2  a re  b e ing  re ce iv e d  a nd  form a tte d .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
