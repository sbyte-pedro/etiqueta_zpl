# ~JS

## Description

Th e  ~JS com m a nd  is  u s e d  to control th e  b a ck fe e d  s e q u e nce . Th is  com m a nd  ca n b e  u s e d  on printe r s
w ith  or  w ith ou t b u ilt-in cu tte r s . Th is  com m a nd  is  ig nore d  on th e  HC 10 0  printe r.
Ch a n g e  Ba c k f e e d  S e q u e n c e
Th e s e  a re  th e  prim a r y  a pplica tions :
• to a llow  prog ra m m ing  of th e  re s t point of th e  cu t e d g e  of continu ou s  m e d ia .
• prov id e  im m e d ia te  b a ck fe e d  a fte r  pe e l-off w h e n th e  printe r  is  u s e d  in a  print/a pply  a pplica tion
conﬁ g u ra tion.
Th is  com m a nd  s ta y s  in e ffe ct only  u ntil th e  printe r  is  tu rne d  off, a  ne w  ~JS com m a nd  is  s e nt, or  th e
s e tting  is  ch a ng e d  on th e  control pa ne l. W h e n a  ~JS com m a nd  is  e ncou nte re d , it ov e rrid e s  th e  cu rre nt
control pa ne l s e tting  for  th e  B a ck fe e d  S e q u e nce .
Th e  m os t com m on w a y  of e lim ina ting  b a ck fe e d  is  to ope ra te  in Re w ind  M od e . Re w ind  M od e  d oe s  not
b a ck fe e d  a t a ll. A fte r  a  la b e l prints , th e  le a d ing  e d g e  of th e  ne x t la b e l is  pla ce d  a t th e  print line . Th is
e lim ina te s  th e  ne e d  to b a ck fe e d  a nd  d oe s  not introd u ce  a  non printa b le  a re a  a t th e  le a d ing  e d g e  or
b ottom  of th e  la b e l. It a ls o d oe s  not a llow  th e  la b e l to b e  ta k e n from  th e  printe r  b e ca u s e  it is  not fe d  ou t
from  u nd e r  th e  printh e a d .
Ru nning  in a noth e r  m od e  w ith  b a ck fe e d  tu rne d  off a llow s  th e  la b e l to b e  re m ov e d  a nd  e lim ina te s  th e
tim e -re d u ction of th e  b a ck fe e d  s e q u e nce .
is  ca lcu la te d  b e fore  th e  ne x t la b e l is  printe d . For  e x a m ple , a  v a lu e  of 40  m e a ns  40  pe rce nt of th e
b a ck fe e d  ta k e s  pla ce  a fte r  th e  la b e l is  cu t or  re m ov e d . Th e  re m a ining  60  pe rce nt ta k e s  pla ce  b e fore  th e
ne x t la b e l is  printe d .
Th e  v a lu e  for  th is  com m a nd  is  a ls o re ﬂ e cte d  in th e  B a ck fe e d  pa ra m e te r  on th e  printe r  conﬁ g u ra tion
la b e l.
For  ~JSN —  th e  B a ck fe e d  pa ra m e te r  is  lis te d  a s  D E FA ULT
For  ~JSA —  or  10 0 %  th e  B a ck fe e d  pa ra m e te r  is  lis te d  a s  A FTE R
For  ~JSB —  or  0 %  th e  B a ck fe e d  pa ra m e te r  is  lis te d  a s  B E FO RE
For  ~JS10 —  10 %  of th e  b a ck fe e d  ta k e s  pla ce  a fte r  th e  la b e l is  cu t or  re m ov e d . Th e  re m a ining  9 0 %
ta k e s  pla ce  b e fore  th e  ne x t la b e l is  printe d .

## Format

```
~JSb
```

## Parameters

b = b a ck fe e d  ord e r  in
re la tion to printing
A — 10 0  pe rce nt b a ck fe e d  a fte r  printing  a nd  cu tting
B — 0  pe rce nt b a ck fe e d  a fte r  printing  a nd  cu tting , a nd  10 0  pe rce nt
b e fore  printing  th e  ne x t la b e l
N — norm a l —  9 0  pe rce nt b a ck fe e d  a fte r  la b e l is  printe d
O — off —  tu rn b a ck fe e d  off com ple te ly
10 to 90 /uni00A0— pe rce nta g e  v a lu e
Th e  v a lu e  e nte re d  m u s t b e  a  m u ltiple  of 10 . Va lu e s  not d iv is ib le  b y  10
a re  rou nd e d  to th e  ne a re s t a cce pta b le  v a lu e . For  e x a m ple , ~JS55 is
a cce pte d  a s  60  pe rce nt b a ck fe e d .
De f a u lt : N

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
