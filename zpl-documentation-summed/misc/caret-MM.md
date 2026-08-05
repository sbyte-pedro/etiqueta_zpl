# ^MM

## Description

Th e  ^MM com m a nd  d e te rm ine s  th e  a ction th e  printe r  ta k e s  a fte r  a  la b e l or  g rou p of la b e ls  h a s  printe d .
Pr in t  Mo d e
NOTE : Re fe r  to th e  Us e r  G u id e  for  y ou r  printe r  to d e te rm ine  w h ich  print m od e s  a re  s u ppor te d  b y
y ou r  printe r.
re s u lts .
Th is  com m a nd  is  ig nore d  on th e  HC 10 0 ™  printe r.

## Format

```
^MMa,b
```

## Parameters

a = d e s ire d  m od e V a lu e s :
T = Te a r-off
a
P = Pe e l-off (not a v a ila b le  on S -30 0 )
a
R = Re w ind  (d e pe nd s  on printe r  m od e l)
A = A pplica tor  (d e pe nd s  on printe r  m od e l)
a
C = C u tte r  (d e pe nd s  on printe r  m od e l)
D = D e la y e d  cu tte r
a
F = RFID
a
L = Re s e r v e d
a , b
U = Re s e r v e d
a , b
K = Kios k
c
De f a u lt : Th e  v a lu e s  a v a ila b le  for  pa ra m e te r  a d e pe nd  on th e  printe r  b e ing  u s e d
a nd  w h e th e r  it s u ppor ts  th e  option.
For  RFID  printe r s :A = R110 PA X 4 print e ng ine sF = oth e r  RFID  printe r s
b = pre pe e l s e le ct V a lu e s :
N = no
Y = y e s
De f a u lt : N
Th e  com m a nd  is  ig nore d  if pa ra m e te r s  a re  m is s ing  or  inv a lid . Th e  cu rre nt
v a lu e  of th e  com m a nd  re m a ins  u nch a ng e d . Th is  option is  not s u ppor te d  b y
Link -O S  printe r s .
a . Th is  v a lu e  is  s u ppor te d  on th e  KR0 3 or  ZD 50 0 R printe r.
b . Th is  v a lu e  is  s u ppor te d  only  on th e  ZM 40 0  a nd  ZM  60 0  printe r s .
c. Th is  v a lu e  is  s u ppor te d  only  on th e  KR40 3 printe r.
Th is  lis t id e ntiﬁ e s  th e  d iffe re nt m od e s  of ope ra tion:
• Te a r-off —  a fte r  printing , th e  la b e l a d v a nce s  s o th e  w e b  is  ov e r  th e  te a r  b a r. Th e  la b e l, w ith  line r
a tta ch e d , ca n b e  torn off m a nu a lly .
• Pe e l-off —  a fte r  printing , th e  la b e l m ov e s  for w a rd  a nd  a ctiv a te s  a  La b e l A v a ila b le  S e ns or. Printing
s tops  u ntil th e  la b e l is  m a nu a lly  re m ov e d  from  th e  printe r.
• Pow e r  Pe e l –  line r  a u tom a tica lly  re w ind s  u s ing  a n optiona l inte rna l re w ind  s pind le .
• Va lu e  Pe e l –  line r  fe e d s  d ow n th e  front of th e  printe r  a nd  is  m a nu a lly  re m ov e d .
• Pre pe e l –  a fte r  e a ch  la b e l is  m a nu a lly  re m ov e d , th e  printe r  fe e d s  th e  ne x t la b e l for w a rd  to pre pe e l
a  s m a ll por tion of th e  la b e l a w a y  from  th e  line r  m a te ria l. Th e  printe r  th e n b a ck fe e d s  a nd  prints  th e
la b e l. Th e  pre pe e l fe a tu re  a s s is ts  in th e  prope r  pe e l ope ra tion of s om e  m e d ia  ty pe s .
• Re w ind  —  th e  la b e l a nd  line r  a re  re w ou nd  on a n (optiona l) e x te rna l re w ind  d e v ice . Th e  ne x t la b e l is
pos itione d  u nd e r  th e  printh e a d  (no b a ck fe e d  m otion).
• A pplica tor  —  w h e n u s e d  w ith  a n a pplica tion d e v ice , th e  la b e l m ov e  fa r  e nou g h  for w a rd  to b e
re m ov e d  b y  th e  a pplica tor  a nd  a pplie d  to a n ite m . Th is  a pplie s  only  to printe r s  th a t h a v e  a pplica tor
por ts  a nd  th a t a re  b e ing  u s e d  in a  print-a nd -a pply  s y s te m .
• C u tte r  —  a fte r  printing , th e  m e d ia  fe e d s  for w a rd  a nd  is  a u tom a tica lly  cu t into pre d e te rm ine d  le ng th s .
• D e la y e d  cu tte r  —  W h e n th e  printe r  is  in th e  D e la y e d  C u t PRINT M O D E , it w ill cu t th e  la b e l w h e n it
re ce iv e s  th e  ~JK (D e la y e d  C u t) com m a nd . To a ctiv a te  th e  ~JK com m a nd , th e  printe r 's  PRINT M O D E
m u s t b e  s e t to D e la y e d  C u t a nd  th e re  m u s t b e  a  la b e l w a iting  to b e  cu t. W h e n th e  printe r  is  not in th e
D e la y e d  C u t PRINT M O D E , th e  printe r  w ill not cu t th e  la b e l w h e n it re ce iv e s  th e  ~JK com m a nd .
NOTE : S e nd  ~JK in a  s e pa ra te  ﬁ le  - it ca nnot b e  s e nt a t th e  e nd  of a  s e t of com m a nd s .
Th e  D e la y e d  C u t fe a tu re  ca n b e  a ctiv a te d :
• th rou g h  PRINT M O D E  on th e  printe r’s  control pa ne l
• w ith  a  ^MMD com m a nd
• RFID  —  incre a s e s  th rou g h pu t tim e  w h e n printing  b a tch e s  of RFID  la b e ls  b y  e lim ina ting  b a ck fe e d
b e tw e e n la b e ls .
• Kios k  —  a fte r  printing , th e  m e d ia  is  m ov e d  in a  pre s e nta tion pos ition, m os t a pplica tions  m a inta in a
loop of m e d ia  in th e  printe r.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
