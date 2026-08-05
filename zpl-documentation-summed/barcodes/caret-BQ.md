# ^BQ

## Description

Th e  ^BQ com m a nd  prod u ce s  a  m a trix  s y m b olog y  cons is ting  of a n a rra y  of nom ina lly  s q u a re  m od u le s
a rra ng e d  in a n ov e ra ll s q u a re  pa tte rn. A  u niq u e  pa tte rn a t th re e  of th e  s y m b ol’s  fou r  corne r s  a s s is ts  in
d e te rm ining  b a rcod e  s iz e , pos ition, a nd  inclina tion.
Q R Co d e  Ba r c o d e
A  w id e  ra ng e  of s y m b ol s iz e s  is  pos s ib le , a long  w ith  fou r  le v e ls  of e rror  corre ction. Us e r-s pe ciﬁ e d
m od u le  d im e ns ions  prov id e  a  w id e  v a rie ty  of s y m b ol prod u ction te ch niq u e s .
QR C od e  M od e l 1 is  th e  orig ina l s pe ciﬁ ca tion, w h ile  QR C od e  M od e l 2  is  a n e nh a nce d  form  of th e
s y m b olog y . M od e l 2  prov id e s  a d d itiona l fe a tu re s  a nd  ca n b e  a u tom a tica lly  d iffe re ntia te d  from  M od e l 1.
M od e l 2  is  th e  re com m e nd e d  m od e l a nd  s h ou ld  norm a lly  b e  u s e d .
Th is  b a rcod e  is  printe d  u s ing  ﬁ e ld  d a ta  s pe ciﬁ e d  in a  s u b s e q u e nt ^FD s tring .
E ncod a b le  ch a ra cte r  s e ts  inclu d e  nu m e ric d a ta , a lph a nu m e ric d a ta , 8-b it b y te  d a ta , a nd  Ka nji
ch a ra cte r s .
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a rcod e  is  re q u ire d , re fe r  to w w w .a im g lob a l.org .

## Format

```
^BQa,b,c,d,e
```

## Parameters

a = ﬁ e ld  orie nta tion V a lu e s : norm a l (^FW h a s  no e ffe ct on rota tion)
b = model V a lu e s : 1 (orig ina l) a nd  2 (e nh a nce d  –  re com m e nd e d )
De f a u lt : 2
c = m a g niﬁ ca tion fa ctor V a lu e s :
1 to 100
De f a u lt :
1 on 150 d pi printe r s
2 on 200 d pi printe r s
3 on 300 d pi printe r s
6 on 600 d pi printe r s
d = e rror  corre ction V a lu e s :
H = u ltra -h ig h  re lia b ility  le v e l
Q = h ig h -re lia b ility  le v e l
M = s ta nd a rd  le v e l
L = h ig h -d e ns ity  le v e l
De f a u lt : Q = if e m ptyM = inv a lid  v a lu e s
e = mask value V a lu e s : 0 - 7 De f a u lt : 7
E x a m p le
Th is  is  a n e x a m ple  of a  QR C od e  b a rcod e :
O n th e  pa g e s  th a t follow  a re  s pe ciﬁ c com m a nd s  for  form a tting  th e  ^BQ com m a nd  w ith  th e  ^FD
s ta te m e nts  th a t conta in th e  inform a tion to b e  cod e d .
Q R S w it c h e s  (f o r m a t t e d  in t o  t h e  ^FD ﬁ e ld  d a t a)
Th e re  a re  4 s w itch  ﬁ e ld s  th a t a re  a llow e d , s om e  w ith  a s s ocia te d  pa ra m e te r s  a nd  s om e  w ith ou t. Tw o of
th e s e  ﬁ e ld s  a re  a lw a y s  pre s e nt, one  is  optiona l, a nd  one ’s  pre s e nce  d e pe nd s  on th e  v a lu e  of a noth e r. Th e
s w itch e s  a re  a lw a y s  pla ce d  in a  ﬁ x e d  ord e r. Th e  fou r  s w itch e s , in ord e r, a re :
M ix e d  m od e  <D >iijjx x , O ptiona l (note  th a t th is  s w itch  e nd s  w ith  a  com m a  “,”)
E rror  corre ction le v e l <H, Q, M , L> M a nd a tor y
D a ta  inpu t <A , M >, M a nd a tor y  (note  th a t th is  s w itch  e nd s  w ith  a  com m a  “,”)
C h a ra cte r  M od e  <N, A , B d d d d , K> C ond itiona l (pre s e nt if d a ta  inpu t is  M )
Mix e d  m o d e  (Op t io n a l)
= D  - a llow s  m ix ing  of d iffe re nt ty pe s  of ch a ra cte r  m od e s  in one  cod e .
ii = cod e  No. –  a  2 -d ig it nu m b e r  in th e  ra ng e  of 0 1 to 16
Va lu e  = s u b tra cte d  from  th e  Nth  nu m b e r  of th e  d iv id e d  cod e  (m u s t b e  tw o d ig its ).
jj = No. of d iv is ions  –  a  2 -d ig it nu m b e r  in th e  ra ng e  0 2  to 16
Nu m b e r  of d iv is ions  (m u s t b e  tw o d ig its ).
x x  = pa rity  d a ta  –  a  2 -d ig it h e x a d e cim a l ch a ra cte r  in th e  ra ng e  0 0  to FF
Pa rity  d a ta  v a lu e  is  ob ta ine d  b y  ca lcu la ting  th e  inpu t d a ta  (th e  orig ina l inpu t d a ta  b e fore /uni00A0d iv id e d  b y te -
b y -b y te  th rou g h  th e  E X -O R ope ra tion).
, = th e  m ix e d  m od e  s w itch , w h e n pre s e nt, is  te rm ina te d  w ith  a  com m a
E r r o r  Co r r e c t io n  Le v e l (Re q u ir e d )
= H, Q, M , or  L
H = u ltra -h ig h  re lia b ility  le v e l
Q = h ig h -re lia b ility  le v e l
M  = s ta nd a rd  le v e l (d e fa u lt)
L = h ig h -d e ns ity  le v e l
Da t a  In p u t  (Re q u ir e d )
= A  or  M  follow e d  b y  a  com m a
A  = A u tom a tic Inpu t (d e fa u lt). C h a ra cte r  M od e  is  not s pe ciﬁ e d .
D a ta  ch a ra cte r  s tring  JIS 8 u nit, S h ift JIS . W h e n th e  inpu t m od e  is  A u tom a tic Inpu t, th e  b ina r y  cod e s  of
0 x 80  to 0 x 9 F a nd  0 x E 0  to 0 x FF ca nnot b e  s e t.
M  = M a nu a l Inpu t. C h a ra cte r  M od e  m u s t b e  s pe ciﬁ e d .
Tw o ty pe s  of d a ta  inpu t m od e s  e x is t: A u tom a tic (A ) a nd  M a nu a l (M ). If A  is  s pe ciﬁ e d , th e
ch a ra cte r  m od e  d oe s  not ne e d  to b e  s pe ciﬁ e d . If M  is  s pe ciﬁ e d , th e  ch a ra cte r  m od e  m u s t b e
s pe ciﬁ e d .
C h a ra cte r  M od e  (Re q u ire d  w h e n d a ta  inpu t = M )
= N, A , B x x x x , or  K
N = nu m e ric: d ig its  0  –  9
A  = a lph a nu m e ric: d ig its  0  –  9, u ppe r  ca s e  le tte r s  A  –  Z, s pa ce , a nd  $% *+ -./:) (45 ch a ra cte r s )
B x x x x  = 8-b it b y te  m od e . Th e  ‘x x x x ’ is  th e  nu m b e r  of ch a ra cte r s  a nd  m u s t b e  e x a ctly  4 d e cim a l d ig its .
Th is  h a nd le s  th e  8-b it La tin/Ka na  ch a ra cte r  s e t in a ccord a nce  w ith  JIS  X  0 2 0 1 (ch a ra cte r  v a lu e s  0 x 0 0
to 0 x FF).
K = Ka nji —  h a nd le s  only  Ka nji ch a ra cte r s  in a ccord a nce  w ith  th e  S h ift JIS  s y s te m  b a s e d  on JIS  X
0 2 0 8. Th is  m e a ns  th a t a ll pa ra m e te r s  a fte r  th e  ch a ra cte r  m od e  K s h ou ld  b e  16-b it ch a ra cte r s . If th e re
a re  a ny  8-b it ch a ra cte r s  (s u ch  a s  A S C II cod e ), a n e rror  occu r s .
Th e  d a ta  to b e  e ncod e d  follow s  im m e d ia te ly  a fte r  th e  la s t s w itch .
Co n s id e r a t io n s  f o r  ^FD W h e n  U s in g  t h e  Q R Co d e :
QR S w itch e s  (form a tte d  into th e  ^FD  ﬁ e ld  d a ta )
m ix e d  m o d e  <D>
D = a llow s  th e  m ix ing  of d iffe re nt ty pe s  of ch a ra cte r  m od e s  in one  cod e .
c o d e  No . <01 16 >
Va lu e  = s u b tra cte d  from  th e  Nth  nu m b e r  of th e  d iv id e d  cod e  (m u s t b e  tw o d ig its ).
No . o f  d iv is io n s  <02 16 >
Nu m b e r  of d iv is ions  (m u s t b e  tw o d ig its ).
p a r it y  d a t a  <1 b y t e >
Pa rity  d a ta  v a lu e  is  ob ta ine d  b y  ca lcu la ting  a t th e  inpu t d a ta  (th e  orig ina l inpu t d a ta  b e fore  b e ing
d iv id e d  b y te -b y -b y te  th rou g h  th e  E X -O R ope ra tion).
e r r o r  c o r r e c t io n  le v e l <H, Q , M, L>
H = u ltra -h ig h  re lia b ility  le v e l
Q = h ig h -re lia b ility  le v e l
M = s ta nd a rd  le v e l (d e fa u lt)
L = h ig h -d e ns ity  le v e l
c h a r a c t e r  Mo d e  <N, A , B, K >
N = nu m e ric
A = a lph a nu m e ric
Bxxxx = 8-b it b y te  m od e . Th is  h a nd le s  th e  8-b it La tin/Ka na  ch a ra cte r  s e t in a ccord a nce  w ith  JIS  X
0 2 0 1 (ch a ra cte r  v a lu e s  0 x 0 0  to 0 x FF).
xxxx = nu m b e r  of d a ta  ch a ra cte r s  is  re pre s e nte d  b y  tw o b y te s  of B C D  cod e .
K = Ka nji —  h a nd le s  only  Ka nji ch a ra cte r s  in a ccord a nce  w ith  th e  S h ift JIS  s y s te m  b a s e d  on JIS  X
0 2 0 8. Th is  m e a ns  th a t a ll pa ra m e te r s  a fte r  th e  ch a ra cte r  m od e  K  s h ou ld  b e  16-b it ch a ra cte r s . If th e re
a re  a ny  8-b it ch a ra cte r s  (s u ch  a s  A S C II cod e ), a n e rror  occu r s .
d a t a  c h a r a c t e r  s t r in g  <Da t a >
Follow s  ch a ra cte r  m od e  or  it is  th e  la s t s w itch  in th e  ^FD s ta te m e nt.
d a t a  in p u t  <A , M>
A = A u tom a tic Inpu t (d e fa u lt). D a ta  ch a ra cte r  s tring  JIS 8 u nit, S h ift JIS . W h e n th e  inpu t m od e  is
A u tom a tic Inpu t, th e  b ina r y  cod e s  of 0 x 80  to 0 x 9 F a nd  0 x E 0  to 0 x FF ca nnot b e  s e t.
M = M a nu a l Inpu t
Tw o ty pe s  of d a ta  inpu t m od e s  e x is t: A u tom a tic (A ) a nd  M a nu a l (M ). If A  is  s pe ciﬁ e d , th e  ch a ra cte r
m od e  d oe s  not ne e d  to b e  s pe ciﬁ e d . If M  is  s pe ciﬁ e d , th e  ch a ra cte r  m od e  m u s t b e  s pe ciﬁ e d .
^FD Fie ld  Da t a  (No r m a l Mo d e )
A u tom a tic D a ta  Inpu t (A ) w ith  S w itch e s
^FD
<error correction level>A,
<data character string>
^FS
QR C od e , norm a l m od e  w ith  a u tom a tic d a ta  inpu t.
1 Q = e rror  corre ction le v e l
2 A, = a u tom a tic s e tting
3 d a ta  s tring  ch a ra cte r
Ma n u a l Da t a  In p u t  (M) w it h  S w it c h e s
^FD
<error correction level>M,
<character mode><data character string>

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
