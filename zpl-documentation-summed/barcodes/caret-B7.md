# ^B7

## Description

Th e  ^B7 com m a nd  prod u ce s  th e  PD F417  b a rcod e , a  tw o-d im e ns iona l, m u ltirow , continu ou s , s ta ck e d
s y m b olog y . PD F417  is  ca pa b le  of e ncod ing  ov e r  1,0 0 0  ch a ra cte r s  pe r  b a rcod e . It is  id e a lly  s u ite d  for
a pplica tions  re q u iring  la rg e  a m ou nts  of inform a tion a t th e  tim e  th e  b a rcod e  is  re a d .
PDF417 Ba r  Co d e
Th e  b a rcod e  cons is ts  of th re e  to 9 0  s ta ck e d  row s . E a ch  row  cons is ts  of s ta r t a nd  s top pa tte rns  a nd
s y m b ol ch a ra cte r s  ca lle d  c o d e - w o r d s . A  cod e  w ord  cons is ts  of fou r  b a r s  a nd  fou r  s pa ce s . A  th re e -cod e -
w ord  m inim u m  is  re q u ire d  pe r  row .
Th e  PD F417  b a rcod e  is  a ls o ca pa b le  of u s ing  th e  s tru ctu re d  a ppe nd  option (^FM), w h ich  a llow s  y ou  to
e x te nd  th e  ﬁ e ld  d a ta  lim ita tions  b y  printing  m u ltiple  b a rcod e s . For  m ore  inform a tion on u s ing  s tru ctu re d
a ppe nd , s e e  ^FM .
• PD F417  h a s  a  ﬁ x e d  print ra tio.
• Fie ld  d a ta  (^FD) is  lim ite d  to 3K of ch a ra cte r  d a ta .
• If b oth  colu m ns  a nd  row s  a re  s pe ciﬁ e d , th e ir  prod u ct m u s t b e  le s s  th a n 9 2 8.
• No s y m b ol is  printe d  if th e  prod u ct of colu m ns  a nd  row s  is  g re a te r  th a n 9 2 8.
• No s y m b ol is  printe d  if tota l cod e  w ord s  a re  g re a te r  th a n th e  prod u ct of colu m ns  a nd  row s .
• S e ria liz a tion is  not a llow e d  w ith  th is  b a rcod e .
• Th e  tru nca tion fe a tu re  ca n b e  u s e d  in s itu a tions  w h e re  la b e l d a m a g e  is  not lik e ly . Th e  rig h t row
ind ica tor s  a nd  s top pa tte rn a re  re d u ce d  to a  s ing le  m od u le  b a r  w id th . Th e  d iffe re nce  b e tw e e n a  non-
tru nca te d  a nd  a  tru nca te d  b a rcod e  is  s h ow n in th e  pre v iou s  e x a m ple s .
S p e c ia l Co n s id e r a t io n s  f o r /uni00A0^BY /uni00A0W h e n  U s in g  PDF417
W h e n u s e d  w ith  ^B7, th e  pa ra m e te r s  for  th e  ^BY com m a nd  a re :
w = m o d u le  w id t h  (in  d o t s )
V a lu e s : 2 to 10
De f a u lt : 2
r = r a t io
Fix e d  V a lu e : 3 (ra tio h a s  no e ffe ct on PD F417 )
h  = h e ig h t  o f  b a r s  (in  d o t s )
V a lu e s : 1 to 32000
De f a u lt : 10
PD F417  u s e s  th is  only  w h e n row  h e ig h t is  not s pe ciﬁ e d  in th e  ^B7 h pa ra m e te r.
S p e c ia l Co n s id e r a t io n s  f o r  ^FD W h e n  U s in g  PDF417
Th e  ch a ra cte r  s e t s e nt to th e  printe r  w ith  th e  ^FD com m a nd  inclu d e s  th e  fu ll A S C II s e t, e x ce pt for  th os e
ch a ra cte r s  w ith  s pe cia l m e a ning  to th e  printe r.
See Ze b ra  C od e  Pa g e  850  —  La tin C h a ra cte r  S e t on pa g e  1566 , ^C C  ~ C C  on pa g e  152 , and ^C T
~ C T on pa g e  166 .
• C R a nd  LF a re  a ls o v a lid  ch a ra cte r s  for  a ll ^FD s ta te m e nts . Th is  s ch e m e  is  u s e d :
\& = ca rria g e  re tu rn/line  fe e d
\\ = b a ck s la s h  (\ )
• ^CI13 m u s t b e  s e le cte d  to print a  b a ck s la s h  (\ ).

## Format

```
^B7
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a lR = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = b a r  cod e  h e ig h t
for  ind iv id u a l row s  (in
d ots )
V a lu e s : 1 to h e ig h t of la b e l
De f a u lt : v a lu e  s e t b y  ^BY
Th is  nu m b e r  m u ltiplie d  b y  th e  m od u le  e q u a ls  th e  h e ig h t of th e  ind iv id u a l row s
in d ots . If th is  nu m b e r  is  not s pe ciﬁ e d , th e  ov e ra ll b a rcod e  h e ig h t, d iv id e d
b y  th e  nu m b e r  of row s , e q u a ls  th e  h e ig h t of th e  ind iv id u a l row s  in d ots ,
w h e re  th e  ov e ra ll b a rcod e  h e ig h t is  d e ﬁ ne d  b y  th e  ^BY com m a nd . 1 is  not a
re com m e nd e d  v a lu e .
s = s e cu rity  le v e l V a lu e s : 1 to 8 (e rror  d e te ction a nd  corre ction)
De f a u lt : 0 (e rror  d e te ction only )
Th is  d e te rm ine s  th e  nu m b e r  of e rror  d e te ction a nd  corre ction cod e  w ord s  to
b e  g e ne ra te d  for  th e  s y m b ol. Th e  d e fa u lt le v e l prov id e s  only  e rror  d e te ction
w ith ou t corre ction. Incre a s ing  th e  s e cu rity  le v e l a d d s  incre a s ing  le v e ls  of
e rror  corre ction a nd  incre a s e s  th e  s y m b ol s iz e .
c = nu m b e r  of d a ta
colu m ns  to e ncod e
V a lu e s : 1 to 30
De f a u lt : 1:2 (row -to-colu m n a s pe ct ra tio)
You  ca n s pe cify  th e  nu m b e r  of cod e -w ord  colu m ns  g iv ing  control ov e r  th e
w id th  of th e  s y m b ol.
r = nu m b e r  of row s
to e ncod e
V a lu e s : 3 to 90
De f a u lt : 1:2 (row -to-colu m n a s pe ct ra tio)
You  ca n s pe cify  th e  nu m b e r  of s y m b ol row s  g iv ing  control ov e r  th e  h e ig h t
of th e  s y m b ol. For  e x a m ple , w ith  no row  or  colu m n v a lu e s  e nte re d , 7 2
cod e  w ord s  w ou ld  b e  e ncod e d  into a  s y m b ol of s ix  colu m ns  a nd  12  row s .
D e pe nd ing  on cod e  w ord s , th e  a s pe ct ra tio is  not a lw a y s  e x a ct.
t = tru nca te  rig h t
row  ind ica tor s  a nd
s top pa tte rn
V a lu e s :
N = no tru nca tion
Y = pe r form  tru nca tion
De f a u lt : N
E x a m p le s
Th is  is  a n e x a m ple  of a  PD F417  b a rcod e :
Th is  is  a n e x a m ple  of a  PD F417  w ith ou t a nd  w ith  tru nca tion s e le cte d :
Th is  e x a m ple  s h ow s  th e  ^B7 com m a nd  u s e d  w ith  ﬁ e ld  h e x  (^FH) ch a ra cte r s :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
