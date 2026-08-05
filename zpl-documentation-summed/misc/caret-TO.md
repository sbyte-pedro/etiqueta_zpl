# ^TO

## Description

Th e  ^TO com m a nd  is  u s e d  to copy  a n ob je ct or  g rou p of ob je cts  from  one  s tora g e  d e v ice  to a noth e r. It is
s im ila r  to th e  copy  fu nction u s e d  in PC s .
Tr a n s f e r  Ob je c t
S ou rce  a nd  d e s tina tion d e v ice s  m u s t b e  s u pplie d  a nd  m u s t b e  d iffe re nt a nd  v a lid  for  th e  a ction
s pe ciﬁ e d . Inv a lid  pa ra m e te r s  ca u s e  th e  com m a nd  to b e  ig nore d .
Th e  a s te ris k  (*) ca n b e  u s e d  a s  a  w ild  ca rd  for  ob je ct na m e s  a nd  e x te ns ions . For  ins ta nce , ZEBRA.* or
*.GRF a re  a cce pta b le  form s  for  u s e  w ith  th e  ^TO com m a nd .
A t le a s t one  s ou rce  pa ra m e te r  (d, o, or x) a nd  one  d e s tina tion pa ra m e te r  (s, o, or x) m u s t b e  s pe ciﬁ e d . If
only  ^TO is  e nte re d , th e  com m a nd  is  ig nore d .
If th e  d e s tina tion d e v ice  d oe s  not h a v e  e nou g h  fre e  s pa ce  to s tore  th e  ob je ct b e ing  copie d , th e
com m a nd  is  ca nce le d .
Ze b ra  ﬁ le s  (Z:*.*) ca nnot b e  tra ns fe rre d . Th e s e  ﬁ le s  a re  copy rig h te d  b y  Ze b ra  Te ch nolog ie s .
Tr a n s f e r r in g  Ob je c t s
Th e s e  a re  s om e  e x a m ple s  of u s ing  th e  ^TO com m a nd .
E x a m p le : To copy  th e  ob je ct ZLOGO.GRF from  D RA M  to a n optiona l M e m or y  C a rd  a nd  re na m e  it
ZLOGO1.GRF, w rite  th e  follow ing  form a t:
^XA
^TOR:ZLOGO.GRF,B:ZLOGO1.GRF
^XZ
E x a m p le : To copy  th e  ob je ct SAMPLE.GRF from  a n optiona l M e m or y  C a rd  to D RA M  a nd  k e e p th e  s a m e
na m e , w rite  th is  form a t:
^XA
^TOB:SAMPLE.GRF,R:SAMPLE.GRF
^XZ
Tr a n s f e r r in g  Mu lt ip le  Ob je c t s
Th e  a s te ris k  (*) ca n b e  u s e d  to tra ns fe r  m u ltiple  ob je ct ﬁ le s  (e x ce pt *.FNT) from  D RA M  to th e  M e m or y
C a rd . For  e x a m ple , a s s u m e  y ou  h a v e  s e v e ra l ob je ct ﬁ le s  th a t conta in log os . Th e s e  ﬁ le s  a re  na m e d
LOGO1.GRF, LOGO2.GRF, and LOGO3.GRF.
To tra ns fe r  a ll th e s e  ﬁ le s  to th e  m e m or y  ca rd  u s ing  th e  na m e  NE W  ins te a d  of LO G O, pla ce  a n a s te ris k
a fte r  th e  na m e s  NE W  a nd  LO G O  in th e  tra ns fe r  com m a nd . Th is  copie s  a ll ﬁ le s  b e g inning  w ith  LO G O  in
one  com m a nd .
^XA
^TOR:LOGO*.GRF,B:NEW*.GRF
^XZ
D u ring  a  m u ltiple  tra ns fe r, if a  ﬁ le  is  too b ig  to b e  s tore d  on th e  m e m or y  ca rd , th a t ﬁ le  is  s k ippe d . A ll
re m a ining  ﬁ le s  a tte m pt to b e  tra ns fe rre d . A ll ﬁ le s  th a t ca n b e  s tore d  w ith in th e  s pa ce  lim ita tions  a re
tra ns fe rre d , w h ile  oth e r  ﬁ le s  a re  ig nore d .
~ W C
Th e  ~WC com m a nd  is  u s e d  to g e ne ra te  a  printe r  conﬁ g u ra tion la b e l. Th e  printe r  conﬁ g u ra tion la b e l
conta ins  inform a tion a b ou t th e  printe r  s e tu p, s u ch  a s  s e ns or  ty pe , ne tw ork  ID , ZPL m od e , ﬁ rm w a re
v e r s ion, a nd  d e s criptiv e  d a ta  on th e  R:, E:, B:, and A: d e v ice s .
Pr in t  Co n ﬁ g u r a t io n  La b e l

## Format

```
^TO
```

## Parameters

s = s ou rce  d e v ice  of
s tore d  ob je ct
V a lu e s : R:, E:, B:, and A:
De f a u lt : if a  d riv e  is  not s pe ciﬁ e d , a ll ob je cts  a re  tra ns fe rre d  to th e  d riv e  s e t
in pa ra m e te r  s
o = s tore d  ob je ct na m e V a lu e s : a ny  e x is ting  ob je ct conform ing  to Ze b ra  conv e ntions
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , * is  u s e d  —  a ll ob je cts  a re  s e le cte d
x = e x te ns ion V a lu e s : a ny  e x te ns ion conform ing  to Ze b ra  conv e ntions
De f a u lt : if a n e x te ns ion is  not s pe ciﬁ e d , * is  u s e d  —  a ll e x te ns ions  a re
s e le cte d
d = d e s tina tion d e v ice  of
th e  s tore d  ob je ct
V a lu e s : R:, E:, B:, and A:
De f a u lt : a  d e s tina tion m u s t b e  s pe ciﬁ e d
o = na m e  of th e  ob je ct
a t d e s tina tion
V a lu e s : u p to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , th e  na m e  of th e  e x is ting  ob je ct is  u s e d
x = e x te ns ion V a lu e s : a ny  e x te ns ion conform ing  to Ze b ra  conv e ntions
De f a u lt : if a n e x te ns ion is  not s pe ciﬁ e d , th e  e x te ns ion of th e  e x is ting  ob je ct
is  u s e d

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
