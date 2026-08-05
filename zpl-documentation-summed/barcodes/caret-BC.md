# ^BC

## Description

Th e  ^BC com m a nd  cre a te s  th e  C od e  12 8 b a rcod e , a  h ig h -d e ns ity , v a ria b le  le ng th , continu ou s ,
a lph a nu m e ric s y m b olog y . It w a s  d e s ig ne d  for  com ple x ly  e ncod e d  prod u ct id e ntiﬁ ca tion.
Co d e  128 Ba r c o d e  (S u b s e t s  A , B, a n d  C)
C od e  12 8 h a s  th re e  s u b s e ts  of ch a ra cte r s . Th e re  a re  10 6 e ncod e d  printing  ch a ra cte r s  in e a ch  s e t, a nd
e a ch  ch a ra cte r  ca n h a v e  u p to th re e  d iffe re nt m e a ning s , d e pe nd ing  on th e  ch a ra cte r  s u b s e t b e ing  u s e d .
E a ch  C od e  12 8 ch a ra cte r  cons is ts  of s ix  e le m e nts : th re e  b a r s  a nd  th re e  s pa ce s .
• ^BC s u ppor ts  a  ﬁ x e d  print ra tio.
• Fie ld  d a ta  (^FD) is  lim ite d  to th e  w id th  (or  le ng th , if rota te d ) of th e  la b e l.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a rcod e  is  re q u ire d , re fe r  to a im g lob a l.org .

## Format

```
^BCo,h,f,g,e,m
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = b a rcod e  h e ig h t (in
d ots )
V a lu e s : 1 to 32000
De f a u lt : v a lu e  s e t b y  ^BY
f = print inte rpre ta tion
line
V a lu e s : Y (y e s ) or  N (no)
De f a u lt : Y
Th e  inte rpre ta tion line  ca n b e  printe d  in a ny  font b y  pla cing  th e  font
com m a nd  b e fore  th e  b a rcod e  com m a nd .
g = print inte rpre ta tion
line  a b ov e  cod e
V a lu e s : Y (y e s ) or  N (no)
De f a u lt : N
e = UC C  ch e ck  d ig it V a lu e s : Y (tu rns  on) or  N (tu rns  off)
M od  10 3 ch e ck  d ig it is  a lw a y s  th e re . It ca nnot b e  tu rne d  on or  off. M od  10
a nd  10 3 a ppe a r  tog e th e r  w ith  e tu rne d  on.
De f a u lt : N
m = mode V a lu e s :
N = no s e le cte d  m od e
U = UC C  C a s e  M od e
• M ore  th a n 19  d ig its  in ^FD or ^SN a re  e lim ina te d .
• Fe w e r  th a n 19  d ig its  in ^FD or  ^S N a d d  z e ros  to th e  rig h t to b ring  th e
cou nt to 19. Th is  prod u ce s  a n inv a lid  inte rpre ta tion line .
A = /uni00A0A u tom a tic M od e
Th is  a na ly z e s  th e  d a ta  s e nt a nd  a u tom a tica lly  d e te rm ine s  th e  b e s t
pa ck ing  m e th od . Th e  fu ll A S C II ch a ra cte r  s e t ca n b e  u s e d  in th e  ^FD
s ta te m e nt —  th e  printe r  d e te rm ine s  w h e n to s h ift s u b s e ts . A  s tring  of fou r
or  m ore  nu m e ric d ig its  ca u s e s  a n a u tom a tic s h ift to S u b s e t C.
D = UC C /E A N M od e  (x .11.x  a nd  ne w e r  ﬁ rm w a re )
Th is  a llow s  d e a ling  w ith  UC C /E A N w ith  a nd  w ith ou t ch a ine d  a pplica tion
id e ntiﬁ e r s . Th e  cod e  s ta r ts  in th e  a ppropria te  s u b s e t follow e d  b y  FNC 1
to ind ica te  a  UC C /E A N 12 8 b a rcod e . Th e  printe r  a u tom a tica lly  s trips
ou t pa re nth e s e s  a nd  s pa ce s  for  e ncod ing  b u t prints  th e m  in th e  h u m a n-
re a d a b le  s e ction. Th e  printe r  a u tom a tica lly  d e te rm ine s  if a  ch e ck  d ig it
is  re q u ire d , ca lcu la te s  it, a nd  prints  it. A u tom a tica lly  s iz e s  th e  h u m a n
re a d a b le .
De f a u lt : N
E x a m p le : Th is  is  a n e x a m ple  of a  C od e  12 8 b a rcod e :
Fig u r e  2/uni00A0/uni00A0/uni00A0/uni00A0 C od e  12 8 B a rcod e
Co d e  128 S u b s e t s
Th e  C od e  12 8 ch a ra cte r  s u b s e ts  a re  re fe rre d  to a s  S u b s e t A , S u b s e t B , a nd  S u b s e t C. A  s u b s e t ca n b e
s e le cte d  in th e s e  w a y s :
• A  s pe cia l Inv oca tion C od e  ca n b e  inclu d e d  in th e  ﬁ e ld  d a ta  (^FD) s tring  a s s ocia te d  w ith  th a t
b a rcod e .
• Th e  d e s ire d  S ta r t C od e  ca n b e  pla ce d  a t th e  b e g inning  of th e  ﬁ e ld  d a ta . If no S ta r t C od e  is  e nte re d ,
S u b s e t B  is  u s e d .
To ch a ng e  s u b s e ts  w ith in a  b a rcod e , pla ce  th e  Inv oca tion C od e  a t th e  a ppropria te  points  w ith in th e  ﬁ e ld
d a ta  (^FD) s tring . Th e  ne w  s u b s e t s ta y s  in e ffe ct u ntil ch a ng e d  w ith  th e  Inv oca tion C od e . For  e x a m ple , in
S u b s e t C, >7 in th e  ﬁ e ld  d a ta  ch a ng e s  th e  S u b s e t to A .
Th e  follow ing  ta b le  s h ow s  th e  C od e  12 8 Inv oca tion C od e s  a nd  S ta r t C h a ra cte r s  for  th e  th re e  s u b s e ts .
In v o c a t io n  Co d e De c im a l V a lu e S u b s e t  A  Ch a r a c t e r S u b s e t  B Ch a r a c t e r S u b s e t  C Ch a r a c t e r
>< 62
>0 30 > >
>= 9 4 ~
>1 9 5 USQ DEL
>2 9 6 FNC  3 FNC  3
>3 97 FNC  2 FNC  2
>4 9 8 S HIFT S HIFT
>5 9 9 C O D E  C C O D E  C
>6 10 0 C O D E  B FNC  4 C O D E  B
>7 101 FNC  4 C O D E  A C O D E  A
>8 102 FNC  1 FNC  1 FNC  1
S t a r t  Ch a r a c t e r s
>9 103 S ta r t C od e A (Nu m e ric Pa ir s
g iv e  A lph a /
Nu m e rics )
>: 10 4 S ta r t C od e B (Norm a l A lph a /
Nu m e ric)
>; 10 5 S ta t C od e C (A ll Nu m e ric(0 0  -
9 9)
Ta b le  2/uni00A0/uni00A0/uni00A0/uni00A0 C od e  12 8 Inv oca tion C h a ra cte r s
Th e  follow ing  ta b le  s h ow s  th e  ch a ra cte r  s e ts  for  C od e  12 8:
V a lu e Co d e A Co d e B Co d e C V a lu e Co d e A Co d e B Co d e C
0 SP SP 0 0 53 U U 53
1 ! ! 01 54 V V 54
2 '' '' 02 55 W W 55
3 # # 03 56 X X 56
4 $ $ 0 4 57 Y Y 57
5 % % 0 5 58 Z Z 58
6 & & 0 6 59 [ [ 59
7 ' ' 0 7 60 \ \ 60
8 ( ( 0 8 61 ] ] 61
9 ) ) 0 9 62 ^ ^ 62
10 * * 10 63 _ _ 63
Ta b le  3/uni00A0/uni00A0/uni00A0/uni00A0 C od e /uni00A012 8/uni00A0C h a ra cte r  S e ts
V a lu e Co d e A Co d e B Co d e C V a lu e Co d e A Co d e B Co d e C
11 + + 11 64 NUL . 64
12 , , 12 65 SOH a 65
13 - - 13 66 S TX b 66
14 . . 14 67 ETX c 67
15 / / 15 68 E OT d 68
16 0 0 16 69 ENQ e 69
17 1 1 17 7 0 A C K f 7 0
1 8 2 2 1 8 71 B E L g 71
19 3 3 19 72 BS h 72
20 4 4 20 73 HT i 73
2 1 5 5 2 1 7 4 LF j 7 4
2 2 6 6 2 2 7 5 V T k 7 5
2 3 7 7 2 3 7 6 FF l 7 6
2 4 8 8 2 4 7 7 C R m 7 7
2 5 9 9 2 5 7 8 SO n 7 8
26 : : 26 7 9 SI o 7 9
27 ; ; 27 80 DLE p 80
2 8 < < 2 8 81 DC1 q 81
29 = = 29 82 DC2 r 82
30 > > 30 83 DC3 s 83
31 ? ? 31 84 DC4 t 84
32 @ @ 32 85 NAK u 85
33 A A 33 86 S YN v 86
34 B B 34 87 ETB w 87
35 C C 35 88 C A N x 88
36 D D 36 89 EM y 89
37 E E 37 9 0 SUB z 9 0
38 F F 38 91 ESC { 91
39 G G 39 92 FS | 92
40 H H 40 93 GS } 93
41 I I 41 9 4 RS ~ 9 4
42 J J 42 9 5 US DEL 9 5
43 K K 43 9 6 FNC 3 FNC 3 9 6
Ta b le  3/uni00A0/uni00A0/uni00A0/uni00A0 C od e /uni00A012 8/uni00A0C h a ra cte r  S e ts /uni00A0(C ontinu e d )
V a lu e Co d e A Co d e B Co d e C V a lu e Co d e A Co d e B Co d e C
44 L L 44 97 FNC 2 FNC 2 97
45 M M 45 9 8 S HIFT S HIFT 9 8
46 N N 46 9 9 C od e C C od e C 9 9
47 O O 47 10 0 C od e B FNC 4 C od e B
48 P P 48 101 FNC 4 C od e A C od e A
49 Q Q 49 102 FNC 1 FNC 1 FNC 1
50 R R 50 103 S TA RT
(C od e A )
51 S S 51 10 4 S TA RT
(C od e B )
52 T T 52 10 5 S TA RT
(C od e C)
Ta b le  3/uni00A0/uni00A0/uni00A0/uni00A0 C od e /uni00A012 8/uni00A0C h a ra cte r  S e ts /uni00A0(C ontinu e d )
E x a m p le : Th e  follow ing  ﬁ g u re s  a re  e x a m ple s  of id e ntica l b a rcod e s .
Fig u r e  3/uni00A0/uni00A0/uni00A0/uni00A0 S u b s e t B  w ith  no S ta r t C h a ra cte r
Fig u r e  4/uni00A0/uni00A0/uni00A0/uni00A0 S u b s e t B  w ith  S ta r t C h a ra cte r
E x a m p le : B e ca u s e  C od e  12 8 S u b s e t B  is  th e  m os t com m only  u s e d  s u b s e t, ZPL II d e fa u lts  to S u b s e t B  if no
s ta r t ch a ra cte r  is  s pe ciﬁ e d  in th e  d a ta  s tring .
Th is  ﬁ g u re  is  a n e x a m ple  of s w itch ing  from  S u b s e t C  to B  to A .
Fig u r e  5 /uni00A0/uni00A0/uni00A0/uni00A0 S w itch ing  from  S u b s e t C  to B  to A
Ho w /uni00A0^BC/uni00A0W o r k s  W it h in  a  Z PL II S c r ip t
^XA –  th e  ﬁ r s t com m a nd  s ta r ts  th e  la b e l form a t.
^FO100,75 –  th e  s e cond  com m a nd  s e ts  th e  ﬁ e ld  orig in a t 10 0  d ots  a cros s  th e  x -a x is  a nd  7 5 d ots  d ow n
th e  y -a x is  from  th e  u ppe r-le ft corne r.
^BCN,100,Y,N,N –  th e  th ird  com m a nd  ca lls  for  a  C od e  12 8 b a rcod e  to b e  printe d  w ith  no rota tion (N)
a nd  a  h e ig h t of 10 0  d ots . A n inte rpre ta tion line  is  printe d  (Y) b e low  th e  b a rcod e  (N). No UC C  ch e ck  d ig it
is  u s e d  (N).
^FDCODE128^FS (Fig u re  A ) ^FD>:CODE128^FS (Fig u re  B ) –  th e  ﬁ e ld  d a ta  com m a nd  s pe ciﬁ e s  th e
conte nt of th e  b a rcod e .
^XZ –  th e  la s t com m a nd  e nd s  th e  ﬁ e ld  d a ta  a nd  ind ica te s  th e  e nd  of th e  la b e l.
Th e  inte rpre ta tion line  prints  b e low  th e  cod e  w ith  th e  UC C  ch e ck  d ig it tu rne d  off.
Th e  ^FD com m a nd  for  Fig u re  A  d oe s  not s pe cify  a ny  s u b s e t, s o S u b s e t B  is  u s e d . In Fig u re  B , th e  ^FD
com m a nd  s pe ciﬁ ca lly  ca lls  S u b s e t B  w ith  th e  >: S ta r t C od e . A lth ou g h  ZPL II d e fa u lts  to C od e  B , it is
g ood  pra ctice  to inclu d e  th e  Inv oca tion C od e s  in th e  com m a nd .
C od e  12 8 –  S u b s e t B  is  prog ra m m e d  d ire ctly  a s  A S C II te x t, e x ce pt for  v a lu e s  g re a te r  th a n 9 4 d e cim a l
a nd  a  fe w  s pe cia l ch a ra cte r s  th a t m u s t b e  prog ra m m e d  u s ing  th e  inv oca tion cod e s . Th os e  ch a ra cte r s
a re :
^ > ~
Co d e  128 –  S u b s e t s  A  a n d  C
C od e  12 8, S u b s e ts  A  a nd  C  a re  prog ra m m e d  in pa ir s  of d ig its , 0 0  to 9 9, in th e  ﬁ e ld  d a ta  s tring . For
d e ta ils , s e e  Ta b le  2 /uni00A0/uni00A0/uni00A0/uni00A0C od e  12 8 Inv oca tion C h a ra cte r s  on pa g e  96 .
In S u b s e t A , e a ch  pa ir  of d ig its  re s u lts  in a  s ing le  ch a ra cte r  b e ing  e ncod e d  in th e  b a rcod e ; in S u b s e t C,
ch a ra cte r s  a re  printe d  a s  e nte re d . Fig u re  E  b e low  is  a n e x a m ple  of S u b s e t A  (>9  is  th e  S ta r t C od e  for
S u b s e t A ).
Noninte g e r s  prog ra m m e d  a s  th e  ﬁ r s t ch a ra cte r  of a  d ig it pa ir  (D 2 ) a re  ig nore d . How e v e r, noninte g e r s
prog ra m m e d  a s  th e  s e cond  ch a ra cte r  of a  d ig it pa ir  (2 D ) inv a lid a te  th e  e ntire  d ig it pa ir, a nd  th e  pa ir  is
ig nore d . A n e x tra  u npa ire d  d ig it in th e  ﬁ e ld  d a ta  s tring  ju s t b e fore  a  cod e  s h ift is  a ls o ig nore d .
Th e  ﬁ g u re s  b e low  a re  e x a m ple s  of S u b s e t C. Notice  th a t th e  b a rcod e s  a re  id e ntica l.
Fig u r e  6 /uni00A0/uni00A0/uni00A0/uni00A0 S u b s e t C  w ith  Norm a l D a ta
Fig u r e  7/uni00A0/uni00A0/uni00A0/uni00A0 S u b s e t C  w ith  Ig nore d  A lph a  C h a ra cte r
In th e  prog ra m  cod e  for  th e  follow ing  ﬁ g u re , th e  D  is  ig nore d , a nd  th e  2  is  pa ire d  w ith  th e  4.
Fig u r e  8/uni00A0/uni00A0/uni00A0/uni00A0 S u b s e t A
Th e  U CC/E A N-128 S y m b o lo g y
Th e  s y m b olog y  s pe ciﬁ e d  for  th e  re pre s e nta tion of A pplica tion Id e ntiﬁ e r  d a ta  is  UC C /E A N-12 8, a  v a ria nt
of C od e  12 8, e x clu s iv e ly  re s e r v e d  for  E A N Inte rna tiona l a nd  th e  Uniform  C od e  C ou ncil (UC C).
NOTE : It is  not inte nd e d  to b e  u s e d  for  d a ta  to b e  s ca nne d  a t th e  point of s a le  in re ta il ou tle ts .
UC C /E A N-12 8 offe r s  s e v e ra l a d v a nta g e s . It is  one  of th e  m os t com ple te , a lph a nu m e ric, one -d im e ns iona l
s y m b olog ie s  a v a ila b le  tod a y . Th e  u s e  of th re e  d iffe re nt ch a ra cte r  s e ts  (A , B , a nd  C), fa cilita te s  th e
e ncod ing  of th e  fu ll 12 8 A S C II ch a ra cte r  s e t. C od e  12 8 is  one  of th e  m os t com pa ct line a r  b a rcod e
s y m b olog ie s . C h a ra cte r  s e t C  e na b le s  nu m e ric d a ta  to b e  re pre s e nte d  in a  d ou b le -d e ns ity  m od e . In
th is  m od e , tw o d ig its  a re  re pre s e nte d  b y  only  one  s y m b ol ch a ra cte r  s a v ing  v a lu a b le  s pa ce . Th e  cod e
is  conca te na te d . Th a t m e a ns  th a t m u ltiple  A Is  a nd  th e ir  ﬁ e ld s  m a y  b e  com b ine d  into a  s ing le  b a rcod e .
Th e  cod e  is  a ls o v e r y  re lia b le . C od e  12 8 s y m b ols  u s e  tw o ind e pe nd e nt s e lf-ch e ck ing  fe a tu re s  w h ich
im prov e s  printing  a nd  s ca nning  re lia b ility .
UC C /E A N-12 8 b a rcod e s  a lw a y s  conta in a  s pe cia l non-d a ta  ch a ra cte r  k now n a s  fu nction 1 (FNC  1),
w h ich  follow s  th e  s ta r t ch a ra cte r  of th e  b a rcod e . It e na b le s  s ca nne r s  a nd  proce s s ing  s oftw a re  to a u to-
d is crim ina te  b e tw e e n UC C /E A N-12 8 a nd  oth e r  b a rcod e  s y m b olog ie s , a nd  s u b s e q u e ntly  only  proce s s
re le v a nt d a ta .
Th e  UC C /E A N-12 8 b a rcod e  is  m a d e  u p of a  le a d ing  q u ie t z one , a  C od e  12 8 s ta r t ch a ra cte r  A , B , or  C, a n
FNC  1 ch a ra cte r, D a ta  (A pplica tion Id e ntiﬁ e r  plu s  d a ta  ﬁ e ld ), a  s y m b ol ch e ck  ch a ra cte r, a  s top ch a ra cte r,
a nd  a  tra iling  q u ie t z one .
UC C /E A N a nd  UC C /12 8 a re  a  cou ple  of w a y s  y ou 'll h e a r  s om e one  re fe r  to th e  cod e . Th is  ju s t ind ica te s
th a t th e  cod e  is  s tru ctu re d  a s  d icta te d  b y  th e  a pplica tion id e ntiﬁ e r s  th a t a re  u s e d .
S S C C  (S e ria l S h ipping  C onta ine r  C od e ) form a tte d  follow ing  th e  d a ta  s tru ctu re  la y ou t for  A pplica tion
Id e ntiﬁ e r  0 0 . S e e  Ta b le  4/uni00A0/uni00A0/uni00A0/uni00A0UC C /E A N A pplica tion Id e ntiﬁ e r  on pa g e  103 . It cou ld  b e  0 0  w h ich  is  th e
S S C C  cod e . Th e  cu s tom e r  ne e d s  to le t u s  k now  w h a t a pplica tion id e ntiﬁ e r s  a re  u s e d  for  th e ir  b a rcod e
s o w e  ca n h e lp th e m .
Th e re  a re  s e v e ra l w a y s  of w riting  th e  cod e  to print th e  cod e  to th e  A pplica tion Id e ntiﬁ e r  '0 0 ' s tru ctu re .
U s in g  N f o r  t h e  Mo d e  (m ) Pa r a m e t e r
Th is  e x a m ple  s h ow s  w ith  a pplica tion id e ntiﬁ e r  0 0  s tru ctu re :
Fig u r e  9/uni00A0/uni00A0/uni00A0/uni00A0 N for  th e  M  Pa ra m e te r
• >;>8' s e ts  it to s u b s e t C, fu nction 1
• '0 0 ' is  th e  a pplica tion id e ntiﬁ e r  follow e d  b y  '17  ch a ra cte r s ', th e  ch e ck  d ig it is  s e le cte d  u s ing  th e  'Y' for
th e  (e ) pa ra m e te r  to a u tom a tica lly  print th e  2 0 th  ch a ra cte r.
• y ou  a re  not lim ite d  to 19  ch a ra cte r s  w ith  th e  m od e  s e t to N
U s in g  U  f o r  t h e  Mo d e  (m ) Pa r a m e t e r
Th e  e x a m ple  s h ow s  th e  a pplica tion id e ntiﬁ e r  0 0  form a t:
Fig u r e  10/uni00A0/uni00A0/uni00A0/uni00A0 U for  th e  M  Pa ra m e te r
UC C  C a s e  M od e
• C h oos ing  U s e le cts  UC C  C a s e  m od e . You  w ill h a v e  e x a ctly  19  ch a ra cte r s  a v a ila b le  in ^FD.
• S u b s e t C  u s ing  FNC 1 v a lu e s  a re  a u tom a tica lly  s e le cte d .
• C h e ck  d ig it is  a u tom a tica lly  ins e r te d .
U s in g  D f o r  t h e  Mo d e  (m ) Pa r a m e t e r
Th is  e x a m ple  s h ow s  a pplica tion id e ntiﬁ e r  0 0  form a t ((x .11.x  or  la te r):
Fig u r e  11/uni00A0/uni00A0/uni00A0/uni00A0 D  for  th e  M  Pa ra m e te r
(0  a t th e  e nd  of ﬁ e ld  d a ta  is  a  b og u s  ch a ra cte r  th a t is  ins e r te d  a s  a  pla ce h old e r  for  th e  ch e ck  d ig it th e
printe r  w ill a u tom a tica lly  ins e r t.
• S u b s e t C  u s ing  FNC 1 v a lu e s  a re  a u tom a tica lly  s e le cte d .
• Pa re nth e s e s  a nd  s pa ce s  ca n b e  in th e  ﬁ e ld  d a ta . '0 0 ' a pplica tion id e ntiﬁ e r, follow e d  b y  17  ch a ra cte r s ,
follow e d  b y  a  b og u s  ch e ck  d ig it pla ce h old e r.
• C h e ck  d ig it is  a u tom a tica lly  ins e r te d . Th e  printe r  w ill a u tom a tica lly  ca lcu la te  th e  ch e ck  d ig it a nd  pu t
it into th e  b a rcod e  a nd  inte rpre ta tion line .
• Th e  inte rpre ta tion line  w ill a ls o s h ow  th e  pa re nth e s e s  a nd  s pa ce s  b u t w ill s trip th e m  ou t from  th e
a ctu a l b a rcod e .
Pr in t in g  t h e  In t e r p r e t a t io n  Lin e
Th is  e x a m ple  s h ow s  printing  th e  inte rpre ta tion in a  d iffe re nt font w ith  ﬁ rm w a re  x .11.x  or  la te r:
Fig u r e  12/uni00A0/uni00A0/uni00A0/uni00A0 Inte rpre ta tion Line
Th e  font com m a nd  (^A0N,40,30) ca n b e  a d d e d  a nd  ch a ng e d  to a lte r  th e  font a nd  s iz e  of th e
inte rpre ta tion line .
W it h  ﬁ r m w a r e  v e r s io n  la t e r  t h a n  x .10.x
• A  s e pa ra te  te x t ﬁ e ld  ne e d s  to b e  w ritte n.
• Th e  inte rpre ta tion line  ne e d s  to b e  tu rne d  off.
• ^A0N,50,40 is  th e  font a nd  s iz e  s e le ction for  th e  s e pa ra te  te x t ﬁ e ld .
• You  h a v e  to m a k e  s u re  y ou  e nte r  th e  corre ct ch e ck  d ig it in th e  te x t ﬁ e ld .
• C re a ting  a  s e pa ra te  te x t ﬁ e ld  a llow s  y ou  to form a t th e  inte rpre ta tion line  w ith  pa re nth e s e s  a nd
s pa ce s .
Fig u r e  13/uni00A0/uni00A0/uni00A0/uni00A0 Firm w a re  O ld e r  Th a n X .10 .X
A p p lic a t io n  Id e n t iﬁ e r s  —  U CC/E A N A PPLICA TION IDE NTIFIE R
A n A pplica tion Id e ntiﬁ e r  is  a  pre ﬁ x  cod e  u s e d  to id e ntify  th e  m e a ning  a nd  th e  form a t of th e  d a ta  th a t
follow s  it (d a ta  ﬁ e ld ).
Th e re  a re  A Is  for  id e ntiﬁ ca tion, tra ce a b ility , d a te s , q u a ntity , m e a s u re m e nts , loca tions , a nd  m a ny  oth e r
ty pe s  of inform a tion.
For  e x a m ple , th e  A I for  b a tch  nu m b e r  is  10 , a nd  th e  b a tch  nu m b e r  A I is  a lw a y s  follow e d  b y  a n
a lph a nu m e ric b a tch  cod e  not to e x ce e d  2 0  ch a ra cte r s .
Th e  UC C /E A N A pplica tion Id e ntiﬁ e r s  prov id e  a n ope n s ta nd a rd  th a t ca n b e  u s e d  a nd  u nd e r s tood  b y  a ll
com pa nie s  in th e  tra d ing  ch a in, re g a rd le s s  of th e  com pa ny  th a t orig ina lly  is s u e d  th e  cod e s .
NOTE : Ta b le  4/uni00A0/uni00A0/uni00A0/uni00A0UC C /E A N A pplica tion Id e ntiﬁ e r  on pa g e  103  is  a  pa r tia l ta b le  s h ow ing  th e
a pplica tion id e ntiﬁ e r s . For  m ore  cu rre nt a nd  com ple te  inform a tion, s e a rch  th e  Inte rne t for  U CC
A p p lic a t io n  Id e n t iﬁ e r .
Da t a  Co n t e n t AI Plu s  Th e  Fo llo w in g  Da t a  S t r u c t u r e
S e ria l S h ipping  C onta ine r  C od e  (S S C C) 0 0 e x a ctly  1 8 d ig its
S h ipping  C onta ine r  C od e 01 e x a ctly  14 d ig its
B a tch  Nu m b e r s 10 u p to 2 0  a lph a nu m e rics
Prod u ction D a te  (YYM M D D ) 11 e x a ctly  6 d ig its
Pa ck a g ing  D a te  (YYM M D D ) 13 e x a ctly  6 d ig its
S e ll B y  D a te  (YYM M D D ) 15 e x a ctly  6 d ig its
E x pira tion D a te  (YYM M D D ) 17 e x a ctly  6 d ig its
Prod u ct Va ria nt 20 e x a ctly  2  d ig its
S e ria l Nu m b e r 2 1 u p to 2 0  a lph a nu m e rics
HIB C C  Qu a ntity , D a te , B a tch  a nd  Link 2 2 u p to 2 9  a lph a nu m e rics
Lot Nu m b e r 2 3 u p to 19  a lph a nu m e rics
Qu a ntity  E a ch 30
Ne t W e ig h t (Kilog ra m s ) 310 e x a ctly  6 d ig its
Le ng th , M e te r s 311 e x a ctly  6 d ig its
W id th  or  D ia m e te r  (M e te r s ) 312 e x a ctly  6 d ig its
D e pth s  (M e te r s ) 313 e x a ctly  6 d ig its
A re a  (S q . M e te r s ) 314 e x a ctly  6 d ig its
Volu m e  (Lite r s ) 315 e x a ctly  6 d ig its
Volu m e  (C u b ic M e te r s ) 316 e x a ctly  6 d ig its
Ne t W e ig h t (Pou nd s ) 32 0 e x a ctly  6 d ig its
C u s tom e r  PO  Nu m b e r 40 0 u p to 2 9  a lph a nu m e rics
S h ip To (D e liv e r  To) Loca tion C od e  u s ing  E A N 13 or  D UNS
Nu m b e r  w ith  le a d ing  z e ros
410 e x a ctly  13 d ig its
Ta b le  4/uni00A0/uni00A0/uni00A0/uni00A0 UC C /E A N A pplica tion Id e ntiﬁ e r
Da t a  Co n t e n t AI Plu s  Th e  Fo llo w in g  Da t a  S t r u c t u r e
B ill To (Inv oice  To) Loca tion C od e  u s ing  E A N 13 or  D UNS
Nu m b e r  w ith  le a d ing  z e ros
411 e x a ctly  13 d ig its
Pu rch a s e  from 412 e x a ctly  13 d ig its
S h ip To (D e liv e r  To) Pos ta l C od e  w ith in s ing le  pos ta l
a u th ority
420 u p to 9  a lph a nu m e rics
S h ip To (D e liv e r  To) Pos ta l C od e  w ith  3-d ig it IS O  C ou ntr y
C od e  Pre ﬁ x
42 1 3 d ig its  plu s  u p to 9
a lph a nu m e rics
Roll Prod u cts  - w id th , le ng th , core  d ia m e te r, d ire ction a nd
s plice s
80 0 1 e x a ctly  14 d ig its
E le ctronic S e ria l nu m b e r  for  ce llu la r  m ob ile  ph one 80 0 2 u p to 2 0  a lph a nu m e rics
Plu s  one  d ig it for  le ng th  ind ica tion.
Plu s  one  d ig it for  d e cim a l point ind ica tion.
Ta b le  4/uni00A0/uni00A0/uni00A0/uni00A0 UC C /E A N A pplica tion Id e ntiﬁ e r /uni00A0(C ontinu e d )
For  d a te  ﬁ e ld s  th a t only  ne e d  to ind ica te  a  y e a r  a nd  m onth , th e  d a y  ﬁ e ld  is  s e t to 00.
Ch a in in g  s e v e r a l a p p lic a t io n  id e n t iﬁ e r s  (ﬁ r m w a r e  x .11.x  o r  la t e r )
Th e  FNC 1, w h ich  is  inv ok e d  b y  >8, is  ins e r te d  ju s t b e fore  th e  A Is  s o th a t th e  s ca nne r s  re a d ing  th e  cod e
s e e  th e  FNC 1 a nd  k now  th a t a n A I follow s .
E x a m p le : Th is  is  a n e x a m ple  w ith  th e  m od e  pa ra m e te r  s e t to A (a u tom a tic):
^XA
^BY2,2.5,193
^FO33,400
^BCN,,N,N,N,A
^FD>;>80204017773003486100008535>8910001>837252^FS
^FT33,625^AEN,0,0^FD(02)04017773003486(10)0008535(91)0001(37)252^FS
^XZ
E x a m p le : Th is  is  a n e x a m ple  w ith  th e  m od e  pa ra m e te r  s e t to U:
^XA
^BY3,2.5,193
^FO33,200
^BCN,,N,N,N,U
^FD>;>80204017773003486>8100008535>8910001>837252^FS
^FT33,455^A0N,30,30^FD(02)04017773003486(10)0008535(91)0001(37)252^FS
^XZ
E x a m p le : Th is  is  a n e x a m ple  w ith  th e  m od e  pa ra m e te r  s e t to D *:
^XA
^PON
^LH0,0
^BY2,2.5,145
^FO218,343
^BCB,,Y,N,N,D
^FD(91)0005886>8(10)0000410549>8(99)05^FS
^XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^BY` — set bar width before ^BC
- `^FO` — positions the barcode
- `^FD` — provides the barcode data
- `^FS` — closes the barcode field
