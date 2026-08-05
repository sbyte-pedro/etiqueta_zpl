# ^WX

## Description

Us e  th is  com m a nd  to conﬁ g u re  th e  w ire le s s  s e cu rity  s e tting s  for  y ou r  printe r. Va lu e s  e nte re d  for  th is
com m a nd  m u s t m a tch  w h a t is  conﬁ g u re d  on y ou r  W LA N a nd  m u s t b e  s u ppor te d  b y  th e  w ire le s s  ra d io
ca rd  th a t y ou  a re  u s ing .
Co n ﬁ g u r e  W ir e le s s  S e c u r it ie s
Th e  ^WX com m a nd  re pla ce s  ind iv id u a l ZPL com m a nd s  for  d iffe re nt s e cu rity  ty pe s .
NOTE :
W h e n u s ing  ce r tiﬁ ca te  ﬁ le s , y ou r  printe r  s u ppor ts :
• Us ing  Priv a cy  E nh a nce d  M a il (PE M ) form a tte d  ce r tiﬁ ca te  ﬁ le s .
• Us ing  th e  clie nt ce r tiﬁ ca te  a nd  priv a te  k e y  a s  tw o ﬁ le s , e a ch  d ow nloa d e d  s e pa ra te ly .
• Us ing  e x por ta b le  PA C  ﬁ le s  for  E A P-FA S T.
• Th e  s u ppor ting  pa ra m e te r s  th a t a re  re q u ire d  v a r y  b a s e d  on th e  s e cu rity  ty pe  th a t y ou
s e le ct. S e e  S u p p o r t in g  Pa r a m e t e r s  f o r  Dif f e r e n t  S e c u r it y  Ty p e s  o n  p a g e  429 for  ins tru ctions  for  e a ch
s e cu rity  ty pe .
Th e  v a lu e s  2 , 3 for  th e  s e cu rity  ty pe  (a ) pa ra m e te r, b , c, d , e , f, g  a nd  h  pa ra m e te r s  a re  ig nore d  for  printe r
ru nning  Link -O S  6.0  or  la te r  v e r s ions .
NOTE : im p o r t a n t : W h e n u s ing  ce r tiﬁ ca te  ﬁ le s , th e  tim e  on th e  printe r  m u s t b e  s e t corre ctly  for  th e
w e b s ock e t conne ction to s u cce e d , a s  th e  tim e  is  u s e d  in th e  ce r tiﬁ ca te  v a lid a tion.
• D a ta  is  s h ow n in th e  form a t s pe ciﬁ e d  b y  th e  ^RFW com m a nd  (A S C II, He x , or  E PC).
• If th e  RFID  d a ta  log  e x ce e d s  th e  m a x im u m  s iz e , th e  follow ing  occu r s :
• In ﬁ rm w a re  X .2 0 .16Z a nd  la te r, w h e n th e  d a ta  log  re a ch e s  150 0 K, one  or  m ore  old e r  e ntrie s  a re
d e le te d  to m a k e  room  for  th e  ne w e s t e ntr y .
• In ﬁ rm w a re  X .2 0 .15Z a nd  e a rlie r, w h e n th e  d a ta  log  re a ch e s  64K, th e  RFID  d a ta  log  is  cle a re d
a u tom a tica lly , a nd  d a ta  re cord ing  re s ta r ts . W h e n th is  h a ppe ns , th e  follow ing  a ppe a r s  in th e  log :
E,FFFFFFFF,Logfile automatically reset
• In ﬁ rm w a re  X .2 0 .15Z a nd  e a rlie r, If th e  printe r  los e s  pow e r, th e  log  is  los t. If th e  log  re s u lts  a re
im por ta nt to y ou , re trie v e  th e  inform a tion fre q u e ntly .
ZPL RFID  C om m a nd s
^HR
Us e  th is  com m a nd  to initia te  ta g  ca lib ra tion for  RFID  m e d ia . D u ring  th e  ta g  ca lib ra tion proce s s  (w h ich
ca n ta k e  u p to 5 m inu te s  on s om e  printe r s , d e pe nd ing  on th e  ty pe  of RFID  inla y  a nd  th e  la b e l s iz e ), th e
printe r  m ov e s  th e  m e d ia , re a d s  th e  ta g ’s  TID  to d e te rm ine  ch ip ty pe , ca lib ra te s  th e  RFID  ta g  pos ition, a nd
d e te rm ine s  th e  optim a l s e tting s  for  th e  RFID  m e d ia  b e ing  u s e d . D e pe nd ing  on th e  printe r, th e s e  s e tting s
inclu d e  th e  prog ra m m ing  pos ition, th e  a nte nna  e le m e nt to u s e , a nd  th e  re a d /w rite  pow e r  le v e l to u s e .
Ca lib r a t e  RFID Ta g  Po s it io n
Re s u lts  of th e  ^HR ta g  ca lib ra tion a re  re tu rne d  to th e  h os t com pu te r. Th e  "run" option in the
rfid.tag.calibrate S G D  com m a nd  pe r form s  th e  s a m e  ca lib ra tion b u t d oe s  not cre a te  a  re s u lts
ta b le . To re s tore  th e  printe r’s  d e fa u lt prog ra m m ing  pos ition a t a ny  tim e , u s e  th e  "restore" option in the
rfid.tag.calibrate S G D  com m a nd  (s e e  r ﬁ d .ta g .ca lib ra te  on pa g e  1547 ).
B e fore  ru nning  th is  com m a nd , loa d  th e  printe r  w ith  RFID  m e d ia , ca lib ra te  y ou r  printe r, clos e  th e
printh e a d , a nd  fe e d  a t le a s t one  la b e l to m a k e  s u re  th a t ta g  ca lib ra tion w ill b e g in from  th e  corre ct
pos ition. For  m ore  inform a tion on m e d ia  ca lib ra tion, re fe r  to th e  Us e r  G u id e  for  y ou r  printe r.
IMPORTA NT: C ons id e r  th e  follow ing  b e fore  u s ing  th is  com m a nd :
• Th is  com m a nd  is  not s u ppor te d  b y  a ll printe r s  or  ﬁ rm w a re .
• For  th e  R110 X i4 a nd  a ll Link -O S  RFID  printe r s , le a v e  a ll tra ns pond e r s  b e fore  a nd  a fte r  th e
ta g  th a t is  b e ing  ca lib ra te d . Th is  a llow s  th e  printe r  to d e te rm ine  RFID  s e tting s  th a t d o not
e ncod e  th e  a d ja ce nt ta g . A llow  a  por tion of m e d ia  to e x te nd  ou t th e  front of th e  printe r  to
a llow  for  b a ck fe e d  d u ring  th e  ta g  ca lib ra tion proce d u re .
• W ith  s om e  printe r s , y ou  s h ou ld  not pe r form  tra ns pond e r  ca lib ra tion for  RFID  m e d ia  th a t
m e e ts  th e  tra ns pond e r  pla ce m e nt s pe ciﬁ ca tions  for  y ou r  e nv ironm e nt. W ith  s om e  printe r s ,
y ou  s h ou ld  not pe r form  tra ns pond e r  ca lib ra tion for  RFID  m e d ia  th a t m e e ts  th e  tra ns pond e r
pla ce m e nt s pe ciﬁ ca tions  for  y ou r  e nv ironm e nt; b e ca u s e  d oing  s o w ill s low  th e  printe r’s
th rou g h pu t u nne ce s s a rily . For  m ore  inform a tion a b ou t ta g  ca lib ra tion, re fe r  to th e  RFID
Prog ra m m ing  G u id e  for  y ou r  printe r. You  ca n d ow nloa d  a  copy  from  w w w .z e b ra .com /
m a nu a ls .

## Format

```
^WXa,[zero or more supporting parameters]
^WX01
E x a m p le : Th is  e x a m ple  tu rns  off a ll w ire le s s  s e cu ritie s  controlle d  u nd e r  th is  com m a nd , b u t it d oe s  not re s e t
th e  printe r’s  w ire le s s  s e tting s  to th e ir  d e fa u lts .
^XA
^WX01
^JUS^XZ
S e c u r it y  Ty p e  02: W E P 40- Bit
^W X 0 2 ,b ,c,d ,e ,f,g ,h
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  W E P 40 -b it e ncr y ption u s ing  ind e x  k e y /uni00A01, ope n
a u th e ntica tion, a nd  a  h e x a d e cim a l W E P k e y  w ith  a  v a lu e  of “A1B2C3D4F5.”
^XA
^WX02,1,O,H,A1B2C3D4F5,,,
^JUS
^XZ
NOTE : Th is  is  no long e r  v a lid  for  Link  O S  6 printe r s .
S e c u r it y  Ty p e  03: W E P 128- Bit
^W X 0 3,b ,c,d ,e ,f,g ,h
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  W E P 12 8-b it e ncr y ption u s ing  ind e x  k e y /uni00A02 , ope n
a u th e ntica tion, a nd  fou r  h e x a d e cim a l W E P k e y s .
^XA
^WX03,2,O,H,001122334455667788,112233445566778899,223344556677889900,334455667788990011^JUS
^XZ
NOTE : Th is  com m a nd  is  not v a lid  for  printe r s  ru nning  Link  O S  6 or  la te r  v e r s ions .
S e c u r it y  Ty p e  04: E A P- TLS
^W X 0 4,k
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  E A P-TLS  a u th e ntica tion w ith  a n optiona l priv a te  k e y
pa s s w ord  w ith  a  v a lu e  of “private.”
^XA
^WX04,private
^JUS
^XZ
S e c u r it y  Ty p e  05 : E A P- TTLS
^W X 0 5,i,j
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  E A P-TTLS  a u th e ntica tion, inclu d ing  a  u s e r  ID  of “user”
a nd  a  pa s s w ord  of “password.”
^XA
^WX05,user,password
^JUS
^XZ
S e c u r it y  Ty p e  06 : E A P- FA S T
^W X 0 6,i,j,k
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  E A P-FA S T a u th e ntica tion, inclu d ing  a  u s e r  ID  of “user,” a
pa s s w ord  of “password,” a nd  a n optiona l priv a te  k e y  of “private.”
^XA
^WX06,user,password,private
^JUS
^XZ
S e c u r it y  Ty p e  07: PE A P
^W X 0 7 ,i,j
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  PE A P a u th e ntica tion, inclu d ing  a  u s e r  ID  w ith  a  v a lu e  of
“user” a nd  a  pa s s w ord  w ith  a  v a lu e  of “password.”
^XA
^WX07,user,password
^JUS
^XZ
S e c u r it y  Ty p e  08: LE A P
^W X 0 8,i,j
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  LE A P a u th e ntica tion, inclu d ing  a  u s e r  ID  w ith  a  v a lu e  of
“user” a nd  a  pa s s w ord  w ith  a  v a lu e  of “password.”
^XA
^WX08,user,password
^JUS
^XZ
S e c u r it y  Ty p e  09: W PA  PS K
NOTE : C onﬁ g u ring  th e  printe r  for  W PA  a ls o a llow s  th e  printe r  to b e  u s e d  in W PA 2  e nv ironm e nts
(R6x 15.x , R53.15.x , ZS Px , a nd  la te r.)
^W X 0 9,n
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  W PA  PS K a u th e ntica tion w ith  a  PS K v a lu e  of a ll z e roe s
(64 h e x a d e cim a l d ig its ).
^XA
^WX09,00000000...^JUS
^XZ
S e c u r it y  Ty p e  10: W PA  E A P- TLS
NOTE : C onﬁ g u ring  th e  printe r  for  W PA  a ls o a llow s  th e  printe r  to b e  u s e d  in W PA 2
e nv ironm e nts .
^W X 10 ,k
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  W PA  E A P-TLS  a u th e ntica tion w ith  a n optiona l priv a te
k e y  pa s s w ord  w ith  a  v a lu e  of “private.”
^XA
^WX10,private
^JUS
^XZ
S e c u r it y  Ty p e  11: W PA  E A P- TTLS
NOTE : C onﬁ g u ring  th e  printe r  for  W PA  a ls o a llow s  th e  printe r  to b e  u s e d  in W PA 2
e nv ironm e nts .
^W X 11,i,j
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  W PA  E A P-TTLS  a u th e ntica tion, inclu d ing  a  u s e r  ID  w ith
a  v a lu e  of “user” a nd  a  pa s s w ord  w ith  a  v a lu e  of “password.”
^XA
^WX11,user,password
^JUS
^XZ
S e c u r it y  Ty p e  12: W PA  E A P- FA S T
NOTE : C onﬁ g u ring  th e  printe r  for  W PA  a ls o a llow s  th e  printe r  to b e  u s e d  in W PA 2
e nv ironm e nts .
^W X 12 ,i,j,k
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  W PA  E A P-FA S T a u th e ntica tion, inclu d ing  a  u s e r  ID  of
“user,” a  pa s s w ord  of “password,” a nd  a n optiona l priv a te  k e y  of “private.”
^XA
^WX12,user,password,private
^JUS
^XZ
S e c u r it y  Ty p e  13: W PA  PE A P
NOTE : C onﬁ g u ring  th e  printe r  for  W PA  a ls o a llow s  th e  printe r  to b e  u s e d  in W PA 2
e nv ironm e nts .
^W X 13,i,j
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  W PA  PE A P a u th e ntica tion, inclu d ing  a  u s e r  ID  w ith  a
v a lu e  of “user” a nd  a  pa s s w ord  w ith  a  v a lu e  of “password.”
^XA
^WX13,user,password
^JUS
^XZ
S e c u r it y  Ty p e  14: W PA  LE A P
NOTE : C onﬁ g u ring  th e  printe r  for  W PA  a ls o a llow s  th e  printe r  to b e  u s e d  in W PA 2
e nv ironm e nts .
^W X 14,i,j
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  W PA  LE A P a u th e ntica tion, inclu d ing  a  u s e r  ID  w ith  a
v a lu e  of “user” a nd  a  pa s s w ord  w ith  a  v a lu e  of “password.”
^XA
^WX14,user,password
^JUS
^XZ
S e c u r it y  Ty p e  15 : K e r b e r o s
^W X 15,i,j,l,m
E x a m p le : Th is  e x a m ple  conﬁ g u re s  th e  printe r  for  Ke rb e ros  e ncr y ption, inclu d ing  a  Ke rb e ros  u s e r  ID  w ith
a  v a lu e  of “user,” a  Ke rb e ros  pa s s w ord  w ith  a  v a lu e  of “password,” a  re a lm  of “zebra,” a nd  a  KD C  of
“krbtgt.”
^XA
^WX15,user,password,zebra,krbtgt
^JUS
^XZ
Z PL RFID Co m m a n d s
Z PL RFID Co m m a n d s
Th is  s e ction conta ins  th e  ZPL/uni00A0II com m a nd s  for  RFID -s pe ciﬁ c a pplica tions .
For  a d d itiona l inform a tion, re fe r  to th e  RFID  Prog ra m m ing  G u id e  for  y ou r  printe r. A  copy  is  a v a ila b le  a t
w w w .z e b ra .com /m a nu a ls .
ZPL RFID  C om m a nd s
^HL or ~HL
Th e  printe r  ca n log  RFID  d a ta  a nd  s tore  it in th e  printe r’s  RA M . Th e s e  com m a nd s  re q u e s t th a t th e  RFID
d a ta  log  b e  re tu rne d  to th e  h os t com pu te r. Th e  ~HL com m a nd  is  proce s s e d  im m e d ia te ly , w h ile  th e  ^HL
com m a nd  is  proce s s e d  a fte r  a ll of th e  pre v iou s  form a ts  (^XA ... ^XZ) h a v e  b e e n proce s s e d .
Re t u r n  RFID Da t a  Lo g  t o  Ho s t
Th e  ﬁ rm w a re  v e r s ion d e te rm ine s  th e  w a y  th a t th e s e  com m a nd s  fu nction:
• In ﬁ rm w a re  X .2 0 .16Z a nd  la te r, for  s e cu rity , log g ing  is  d is a b le d  b y  d e fa u lt. Th e  ^HL com m a nd  cle a r s
th e  cu rre nt d a ta  log  a nd  re s ta r ts  d a ta  re cord ing . Th e  ~HL com m a nd  d oe s  not a u tom a tica lly  cle a r  th e
d a ta  log . Th e  RFID  h os t log s  ca n b e  e na b le d  or  d is a b le d  b y  th e  rfid.log.enabled S G D  com m a nd
(s e e  r ﬁ d .log .e na b le d  on pa g e  1562 ).
• In ﬁ rm w a re  X .2 0 .15Z a nd  e a rlie r, log g ing  is  e na b le d  b y  d e fa u lt. B oth  com m a nd s  cle a r  th e  cu rre nt d a ta
log  a nd  re s ta r t d a ta  re cord ing .
^HL or ~HL
In th e  log , RFID  d a ta  d is pla y s  in th is  form a t:
[date&time][RFID operation],[program position],[antenna element],
[read or write power], [RFID status],[data]
w h e re
• [date&time]*
a  tim e  s ta m p for  th e  log  e ntr y  * W ith  s om e  old e r  v e r s ions  of ﬁ rm w a re , th is  pa ra m e te r  d oe s  not
d is pla y .
• [RFID operation]
B = a ^RLB com m a nd  w a s  is s u e d  (s e e  ^RLB  –  Pe rm a ne ntly  Lock  S pe ciﬁ e d  M e m or y  S e ctions  on
pa g e  431)
E =/uni00A0log /uni00A0ﬁ le /uni00A0re s e t
L = lock
M = a ^RLM com m a nd  w a s  is s u e d  (s e e  ^RLM  –  Lock /Unlock  th e  S pe ciﬁ e d  M e m or y  B a nk  on pa g e
431)
R = re a d
S = RFID  s e tting s
W = w rite
• [program position],[antenna element],[read or write power]*
A d d itiona l inform a tion a b ou t th e  prog ra m  pos ition, th e  a nte nna , a nd  th e  re a d  or  w rite  pow e r  follow s
th e  RFID  ope ra tion.
S u ch  a s :
R,F1,D3,27,00000000,DATA
ZPL RFID  C om m a nd s
w h e re  F1 = th e  prog ra m  pos ition, D3 = th e  a nte nna , a nd  27 is  th e  w rite  pow e r. * W ith  s om e  old e r
v e r s ions  of ﬁ rm w a re , th e s e  pa ra m e te r s  d o not d is pla y .
• [RFID  s ta tu s ]
#### or ######## = a n RFID  e rror  cod e  (S e e  th e  RFID  Prog ra m m ing  G u id e  for  y ou r  printe r  for
m ore  inform a tion on e rror  cod e s . You  ca n d ow nloa d  a  copy  from  w w w .z e b ra .com /m a nu a ls .)
RPWR = re a d  pow e r
WPWR = w rite  pow e r
ANT = a nte nna
PPOS =/uni00A0prog ra m  pos ition
FFFFFFFF (or  lim ite d  to le ng th  FFFF for  s om e  printe r s ) = ind ica te s  th a t th e  log  ﬁ le  w a s  re s e t
• [d a ta ]
th e  d a ta  re a d  or  w ritte n
^HRa,b,c,d,e,f,g,h,i
^RBn,p0,p1,p2, ..., p15
^RFo,f,b,n,m
^RLP
^RLB –  Pe r m a n e n t ly  Lo c k  S p e c iﬁ e d  Me m o r y  S e c t io n s
Th e  ^RLB com m a nd  pe rm a ne ntly  lock s  (pe rm a lock s ) one  or  m ore  s e ctions  (ind iv id u a l  sub‑portions)  in
a  ta g ’s  u s e r  m e m or y . Th e  s e ction s iz e s  for  e a ch  ta g  is  d e ﬁ ne d  b y  th e  ta g  m a nu fa ctu re r.
^RLB,s,n
^RLM,k,a,e,u
ZPL RFID  C om m a nd s
^RSt,p,v,n,e,a,c,s
^RUa,b
^RW r,w ,a
```

## Parameters

a  = s e cu rity  ty pe E nte r  th e  tw o-d ig it cod e  for  th e  s e cu rity  ty pe  th a t y ou r  W LA N u s e s .
For  w h ich  s u ppor ting  pa ra m e te r s  (b  th rou g h  n) to u s e  w ith  th e  d iffe re nt
s e cu rity  ty pe s , s e e  S u p p o r t in g  Pa r a m e t e r s  f o r  Dif f e r n t  S e c u r it y  Ty p e s  o n  p a g e  429.
NOTE : C onﬁ g u ring  th e  printe r  for  W PA  a ls o a llow s  th e  printe r  to
b e  u s e d  in W PA 2  e nv ironm e nts .
V a lu e s : 01 to 15
01 - No w ire le s s  s e cu rity  is  a ctiv e
02 = W E P 40 -b it
03 = W E P 12 8-b it
04 = E A P-TLS
05 = E A P-TTLS
06 = E A P-FA S T
07 = PEAP
08 = LEAP
09 = W PA  PS K (R6x 15.x , R53.15.x , ZS Px , a nd  la te r.)
10 = W PA  E A P-TLS
11 = W PA  E A P-TTLS
12 = W PA  E A P-FA S T
13 = W PA  PE A P
14 = W PA  LE A P
15 = Ke rb e ros
De f a u lt : 01
b  = W E P e ncr y ption
ind e x *
S pe ciﬁ e s  w h ich  e ncr y ption k e y  to u s e  for  W E P e ncr y ption. A  v a lu e  m u s t
b e  s pe ciﬁ e d  if u s ing  W E P 40 -b it or  W E P 12 8-b it.
V a lu e s : 1, 2 , 3, 4
De f a u lt : 1
c= W E P a u th e ntica tion
ty pe *
E na b le s  th e  W E P k e y  a u th e ntica tion ty pe . A  v a lu e  m u s t b e  s pe ciﬁ e d  if
u s ing  W E P/uni00A040 -b it or  W E P 12 8-b it.
V a lu e s : O or S
O = ope n s y s te m
S = s h a re d  k e y
De f a u lt : O
d  = W E P k e y  ty pe * S pe ciﬁ e s  th e  form a t of th e  W E P k e y . A  v a lu e  m u s t b e  s pe ciﬁ e d  if u s ing
WEP/uni00A0 40‑bit  or  W E P 12 8-b it.
V a lu e s : H or S
H = h e x  k e y  s tora g e
S = s tring  k e y  s tora g e
De f a u lt : S
e ,f,g ,h  = W E P e ncr y ption
k e y s  1 th rou g h  4*
S pe ciﬁ e s  th e  a ctu a l v a lu e s  of a ny  W E P e ncr y ption k e y s  to b e  u s e d .
A  v a lu e  m u s t b e  s pe ciﬁ e d  for  a t le a s t one  W E P e ncr y ption k e y  if y ou
s pe cify  40 -b it or  12 8-b it W E P e ncr y ption for  th e  s e cu rity  ty pe .
NOTE : im p o r t a n t : B e  ca re fu l to inclu d e  th e  e x a ct nu m b e r  of
com m a s  re q u ire d  for  th is  com m a nd  w h e n s e tting  e ncr y ption
k e y s  (pa ra m e te r s  e th rou g h  h). A  m is s ing  or  e x tra  com m a  w ill
ca u s e  th e  k e y s  to b e  s tore d  in th e  w rong  s lots  a nd  ca n pre v e nt
th e  printe r  from  joining  th e  w ire le s s  ne tw ork .
Th e  e ncr y ption m od e  a ffe cts  w h a t ca n b e  e nte re d  for  th e  e ncr y ption
k e y s :
• For  40 -b it, e ncr y ption k e y s  ca n b e  s e t to a ny  5 h e x  pa ir s  or  a ny  10
a lph a nu m e ric ch a ra cte r s .
• For  12 8-b it, e ncr y ption k e y s  ca n b e  s e t to a ny  13 h e x  pa ir s  or  a ny  2 6
a lph a nu m e ric ch a ra cte r s .
NOTE : W h e n u s ing  h e x  s tora g e , d o not a d d  a  le a d ing  0 x  on th e
W E P/uni00A0k e y .
V a lu e s : Th e  a ctu a l v a lu e  for  th e  e ncr y ption k e y
De f a u lt : None
• i = u s e r  ID * S pe ciﬁ e s  a  u s e r  ID  for  s e cu rity  ty pe s  th a t re q u ire  one . A  v a lu e  m u s t b e
s pe ciﬁ e d  if u s ing  th e  follow ing  s e cu rity  ty pe s :
• E A P-TTLS
• LEAP
• W PA  LE A P
• PEAP
• W PA  PE A P
• W PA  E A P-TTLS
• Ke rb e ros
V a lu e s : Th e  a ctu a l v a lu e  for  th e  u s e r  ID .
De f a u lt : u s e r
• j = pa s s w ord * S pe ciﬁ e s  a  pa s s w ord  for  s e cu rity  ty pe s  th a t re q u ire  one . A  v a lu e  m u s t b e
s pe ciﬁ e d  if u s ing  th e  follow ing  s e cu rity  ty pe s :
• E A P-TTLS
• LEAP
• W PA  LE A P
• PEAP
• W PA  PE A P
• W PA  E A P-TTLS
• Ke rb e ros
V a lu e s : Th e  a ctu a l v a lu e  for  th e  pa s s w ord .
De f a u lt : pa s s w ord
• k  = optiona l priv a te
k e y  pa s s w ord *
S pe ciﬁ e s  a n optiona l priv a te  k e y  pa s s w ord  for  s e cu rity  ty pe s  th a t re q u ire
one . A  v a lu e  m u s t b e  s pe ciﬁ e d  if u s ing  th e  follow ing  s e cu rity  ty pe s :
• E A P-TLS
• E A P-FA S T
• W PA  E A P-TLS
• W PA  E A P-FA S T
V a lu e s : Th e  a ctu a l v a lu e  for  th e  optiona l priv a te  k e y .
De f a u lt : None
• l = re a lm * S pe ciﬁ e s  th e  re a lm  for  s e cu rity  ty pe s  th a t re q u ire  it. A  v a lu e  m u s t b e
s pe ciﬁ e d  if u s ing  Ke rb e ros .
V a lu e s : Th e  a ctu a l v a lu e  for  th e  re a lm .
De f a u lt : k e rb e ros
• m  = Ke y  D is trib u tion
C e nte r  (KD C)*
S pe ciﬁ e s  th e  KD C  for  s e cu rity  ty pe s  th a t re q u ire  it. A  v a lu e  m u s t b e
s pe ciﬁ e d  if u s ing  Ke rb e ros .
V a lu e s : Th e  a ctu a l v a lu e  for  th e  KD C.
De f a u lt : k rb tg t"
• n = Pre -S h a re d  Ke y
(PS K) v a lu e *
E nte r  th e  PS K v a lu e . Th is  v a lu e  is  ca lcu la te d  a nd  m u s t b e  th e  s a m e  for
e a ch  d e v ice  on th e  W LA N. Us e  Ze b ra Ne t B rid g e  to g e ne ra te  th e  PS K
v a lu e . A  v a lu e  m u s t b e  s pe ciﬁ e d  if u s ing  W PA  PS K.
NOTE : im p o r t a n t : D o not e nte r  a  pa s s  ph ra s e  for  th is  ﬁ e ld  in th is
com m a nd . To u s e  a  pa s s  ph ra s e , u s e  th e  Ze b ra Ne t B rid g e
E nte rpris e  W ire le s s  S e tu p W iz a rd .
V a lu e s : a  m inim u m  of 64 h e x a d e cim a l d ig its De f a u lt : None
* Not u s e d  for  a ll s e cu rity  ty pe s
S u p p o r t in g  Pa r a m e t e r s  f o r  Dif f e r e n t  S e c u r it y  Ty p e s
Th e  s u ppor ting  pa ra m e te r s  re q u ire d  for  th is  com m a nd  v a r y  b a s e d  on th e  s e cu rity  ty pe  th a t y ou  s e le ct.
You  s h ou ld  not u s e  a ll of th e  s u ppor ting  pa ra m e te r s  e a ch  tim e  th a t y ou  u s e  th is  com m a nd , nor  w ill y ou
u s e  e x tra  com m a s  to s e pa ra te  u nu s e d  ﬁ e ld s . Follow  th e  e x a m ple  a nd  form a t for  y ou r  s pe ciﬁ c s e cu rity
ty pe  in th is  s e ction, s u b s titu ting  y ou r  ow n w ire le s s  ne tw ork  d a ta .
S e c u r it y  Ty p e  01: No  W ir e le s s  S e c u r it y  A c t iv e
a = s ta r t s tring Th is  pa ra m e te r  s pe ciﬁ e s  th e  u s e r  te x t to a ppe a r  b e fore  th e  re s u lts  ta b le .
V a lu e s : a ny  s tring  le s s  th a n 65 ch a ra cte r s
De f a u lt :s ta r t
b = e nd  s tring Th is  pa ra m e te r  s pe ciﬁ e s  th e  u s e r  te x t to a ppe a r  a fte r  th e  re s u lts  ta b le .
V a lu e s : a ny  s tring  le s s  th a n 65 ch a ra cte r s
De f a u lt : e nd
ZPL RFID  C om m a nd s
c = s ta r t pos ition Th is  pa ra m e te r  s pe ciﬁ e s  th e  s ta r t pos ition of th e  ca lib ra tion ra ng e . A ll
nu m e ric v a lu e s  a re  in m illim e te r s . For w a rd  or  b a ck w a rd  d e s ig na tions  a s s u m e
th a t th e  la b e l's  initia l pos ition is  w ith  th e  le a d ing  e d g e  a t th e  print line .
V a lu e s :
• Fo r w a r d : F0 to Fxxx (w h e re  xxx is  th e  la b e l le ng th  in m illim e te r s  or  999,
w h ich e v e r  is  le s s ). Th e  printe r  fe e d s  th e  la b e l for w a rd  for  th e  s pe ciﬁ e d
d is ta nce  a nd  th e n b e g ins  ta g  ca lib ra tion.
• Ba c k w a r d : B0 to B30 Th e  printe r  b a ck fe e d s  th e  la b e l for  th e  s pe ciﬁ e d
d is ta nce  a nd  th e n b e g ins  ta g  ca lib ra tion. To a ccou nt for  th e  b a ck fe e d ,
a llow  e m pty  m e d ia  line r  to e x te nd  ou t of th e  front of th e  printe r  w h e n
u s ing  a  b a ck w a rd  prog ra m m ing  pos ition. For  printe r s  th a t d o not u s e
b a ck fe e d  d u ring  RFID  ca lib ra tion, th e  m e d ia  is  m ov e d  for w a rd  u ntil it is  in
th e  s a m e  re la tiv e  pos ition for  th e  follow ing  la b e l.
De f a u lt :
• For  ZT40 0  S e rie s  a nd  ZT60 0  S e rie s  printe r s  w ith  RFID  option: B30
• For  R110 X i4, ZD 50 0 R, ZQ511/ZQ52 1, a nd  ZQ630  printe r s  w ith  RFID  option:
B20
• For  a ll oth e r  s u ppor te d  printe r s :
F0— Th e  printe r  m ov e s  th e  m e d ia  to th e  s ta r t pos ition re la tiv e  to th e
le a d ing  e d g e  of th e  la b e l a nd  th e n pe r form s  th e  RFID  ta g  ca lib ra tion.
d = e nd  pos ition Th is  pa ra m e te r  s pe ciﬁ e s  th e  e nd  pos ition of th e  ca lib ra tion ra ng e  (la s t
prog ra m  pos ition to ch e ck ). A ll nu m e ric v a lu e s  a re  in m illim e te r s . For w a rd
or  b a ck w a rd  d e s ig na tions  a s s u m e  th a t th e  la b e l's  initia l pos ition is  w ith  th e
le a d ing  e d g e  a t th e  print line .
V a lu e s :
• Fo r w a r d :  F0 to Fxxx (w h e re  xxx is  th e  la b e l le ng th  in m illim e te r s  or  9 9 9,
w h ich e v e r  is  le s s ). Th e  printe r  pe r form s  ta g  ca lib ra tion u ntil it re a ch e s  th e
s pe ciﬁ e d  e nd  pos ition a nd  th e n e nd s  th e  proce s s .
• Ba c k w a r d :  B0 to B30 Th e  printe r  pe r form s  ta g  ca lib ra tion u ntil it re a ch e s
th e  s pe ciﬁ e d  e nd  pos ition a nd  th e n e nd s  th e  proce s s . Va lid  only  w ith  a
b a ck w a rd  s ta r t pos ition th a t is  g re a te r  th a n th e  e nd  pos ition.
• A u t o m a t ic :  A Th e  printe r  a u tom a tica lly  e nd s  th e  ta g  ca lib ra tion proce s s  a fte r
s u cce s s fu lly  re a d ing  a nd  e ncod ing  a  cons e cu tiv e  ra ng e  of 5/uni00A0m m  on th e
la b e l. Th e  printe r  a ls o e ns u re s  th a t no oth e r  ta g s  ca n b e  prog ra m m e d  a t
th e  prog ra m m ing  pos ition w ith  th e  ca lib ra tion-d e te rm ine d  pow e r  le v e ls .
De f a u lt :
For  R110 X i4 a nd  a ll Link -O S  RFID  printe r s : A
For  a ll oth e r  s u ppor te d  printe r s :/uni00A0La b e l le ng th  a s  s h ow n on th e  printe r
conﬁ g u ra tion la b e l
ZPL RFID  C om m a nd s
e = a nte nna  a nd
re a d /w rite  pow e r
le v e l d e te ction
Th is  pa ra m e te r  s pe ciﬁ e s  w h e th e r  to s e le ct th e  a nte nna  a nd  re a d /w rite  pow e r
le v e ls  a u tom a tica lly  or  m a nu a lly .
NOTE : Th is  pa ra m e te r  is  not v a lid  on a ll RFID  printe r s . Th e  ZD 50 0 R,
ZQ511/ZQ52 1, a nd  ZQ630  printe r s  h a v e  only  one  a nte nna , s o th is
pa ra m e te r  a pplie s  only  to th e  re a d /w rite  pow e r  le v e l s e tting s .
V a lu e s :
• A = A u tom a tic. Th e  printe r  a u tom a tica lly  s ca ns  th rou g h  th e  a nte nna s  a nd
re a d /w rite  pow e r  d u ring  ca lib ra tion.
• M = M a nu a l. Th e  printe r  u s e s  th e  cu rre nt a nte nna  a nd  re a d /w rite  pow e r
le v e l s e tting s .
De f a u lt :  A
f = s ta r t of re a d /
w rite  pow e r  ra ng e
Th is  pa ra m e te r  s pe ciﬁ e s  th e  s ta r t of th e  re a d /w rite  pow e r  ra ng e .
V a lu e s : 0  to 30
De f a u lt :  0
g = e nd  of re a d /w rite
pow e r  ra ng e
Th is  pa ra m e te r  s pe ciﬁ e s  th e  e nd  of th e  re a d /w rite  pow e r  ra ng e , u p to th e
m a x im u m  pow e r  v a lu e  (b a s e d  on re g iona l com plia nce  re q u ire m e nts ).
V a lu e s : 0  to 30
De f a u lt : m a x im u m  pow e r
h = s ta r t of a nte nna
ra ng e
Th is  pa ra m e te r  s pe ciﬁ e s  th e  s ta r t of th e  a nte nna  ra ng e . Th e  a nte nna  a rra y s
v a r y  b a s e d  on printe r  m od e ls . M od e ls  th a t h a v e  only  one  a nte nna  a lw a y s  u s e
A1.
V a lu e s :
• ZT1x x /ZT2 x x : A1 to B4
• ZE 5x x : A1 to B7
• ZT4x x /ZT5x x /ZT6x x : A1 to E4
• A ll oth e r  Link -O S  printe r s : A1
De f a u lt : A1
i = e nd  of a nte nna
ra ng e
Th is  pa ra m e te r  s pe ciﬁ e s  th e  e nd  of th e  a nte nna  ra ng e  for  printe r s  th a t h a v e
a n a nte nna  a rra y . Th e  a nte nna  a rra y s  v a r y  b a s e d  on printe r  m od e ls .
V a lu e s :
• ZT1x x /ZT2 x x : A1 to B4
• ZE 5x x : A1 to B7
• ZT4x x /ZT5x x /ZT6x x : A1 to E4
• A ll oth e r  Link -O S  printe r s : A1
De f a u lt : printe r  m od e l d e pe nd e nt
E x a m p le : W h e n th e  printe r  is  u s ing  A b s olu te  m od e  a nd  th e  follow ing  com m a nd  is  s e nt to th e  printe r:
ZPL RFID  C om m a nd s
^XA^HR^XZ
th e  printe r  s ta r ts  th e  tra ns pond e r  ca lib ra tion a nd  re tu rns  a  re s u lts  ta b le  s u ch  a s  th e  follow ing :
start
position=195
215, ,
214, ,
213, ,
212, ,
211, ,
210, ,W
209,R,
208, ,
207, ,
206, ,W
205,R,
204, ,
203, ,
202, ,W
201,R,W
200,R,W
199,R,W
198,R,W
197,R,W
196,R,W
195,R,W <---****
194,R,W
193,R,W
192,R,W
191,R,W
190,R,W
189,R,
188, ,
187, ,
186, ,
185, ,
.
.
.
end
E a ch  line  in th e  re s u lts  ta b le  a ppe a r s  a s :
Row, Read Result, Write Result
w h e re
Row = the dot row where calibration occurred
Read Result = results of calibration (R = read, “ ” = unable to read)
Write Result = results of calibration (W = write, “ ” = unable to write)
ZPL RFID  C om m a nd s
Th e  optim a l prog ra m m ing  pos ition is  19 5. Th is  is  id e ntiﬁ e d  a t th e  top of th e  ta b le  (position=195) and
w ith  a n th e  a rrow  (<---****) in th e  ta b le .
E x a m p le : W h e n th e  printe r  is  u s ing  Re la tiv e  m od e  a nd  th e  follow ing  com m a nd  is  s e nt to th e  printe r:
^HRstart,end,B20,F42,M
th e  printe r  s ta r ts  th e  ta g  ca lib ra tion a nd  re tu rns  a  re s u lts  ta b le  s u ch  a s  th e  follow ing :
start
position=F0 MM
leading edge
B20, ,
B19, ,
B18, ,
B17, ,
…
B8, ,
B7, ,
B6, ,
B5, ,
B4,R,W
B3,R,W
B2,R,W
B1,R,W
F0,R,W<---**** F0 MM
F1,R,W
F2,R,W
F3,R,W
F4, ,
F5, ,
F6, ,
F7, ,
F8, ,
F9, ,
F10, ,
…
F38, ,
F39, ,
F40, ,
F41, ,
F42, ,
trailing edge
end
E a ch  line  in th e  re s u lts  ta b le  a ppe a r s  a s :
Row, Read Result, Write Result
w h e re
ZPL RFID  C om m a nd s
Row = the position from the leading edge of the label where calibration
occurred
Read Result = results of calibration (R = read, “ ” = unable to read)
Write Result = results of calibration (W = write, “ ” = unable to write)
Th e  optim a l prog ra m m ing  pos ition is  F0  (prog ra m  w ith  th e  le a d ing  e d g e  of th e  la b e l a t th e  print line ).
Th is  is  id e ntiﬁ e d  a t th e  top of th e  ta b le  (position=F0 MM) a nd  w ith  a n th e  a rrow  (<---****) in the
ta b le .
E x a m p le : W h e n th e  ^HR com m a nd  is  s e nt to th e  printe r, th e  printe r  pe r form s  ta g  ca lib ra tion a nd  re tu rns  a
re s u lts  ta b le  s u ch  a s  th e  follow ing :
start
position=B14 MM,A1,18,25
tid information=E200.3414:Alien
leading edge
Tag 1   ,Tag 2   ,Tag 3   ,Tag 4   ,Tag 5   ,Tag 1   ,Tag 2   ,Tag 3
,Tag 4   ,Tag 5   ,
EPC,7109    ,BA29    ,6FD0    ,58AE    ,9CDE    ,7109    ,BA29    ,6FD0
,58AE    ,9CDE    ,
B30,A1,12,18,A1,29,  ,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,17,24,B1,  ,
,B1,  ,  ,B1,  ,  ,
B29,A1,13,18,A1,25,  ,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,14,19,B1,  ,
,B1,  ,  ,B1,  ,  ,
B28,A1,15,20,A1,23,29,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,09,15,B1,  ,
,B1,  ,  ,B1,  ,  ,
B27,A1,17,22,A1,23,29,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,08,14,B1,  ,
,B1,  ,  ,B1,  ,  ,
B26,A1,19,25,A1,  ,  ,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,09,15,B1,28,
,B1,  ,  ,B1,  ,  ,
B25,A1,22,28,A1,22,27,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,11,18,B1,26,
,B1,  ,  ,B1,  ,  ,
B24,A1,26,  ,A1,13,19,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,15,21,B1,27,
,B1,  ,  ,B1,  ,  ,
B23,A1,  ,  ,A1,08,14,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,18,24,B1,  ,
,B1,  ,  ,B1,  ,  ,
B22,A1,  ,  ,A1,05,11,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,
,B1,21,28,B1,19,24,B1,  ,  ,B1,  ,  ,
B21,A1,  ,  ,A1,05,11,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,25,
,B1,11,17,B1,  ,  ,B1,  ,  ,
B20,A1,  ,  ,A1,06,12,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,30,
,B1,07,13,B1,  ,  ,B1,  ,  ,
B19,A1,  ,  ,A1,08,15,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,05,11,B1,  ,  ,B1,  ,  ,
B18,A1,  ,  ,A1,15,22,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,05,10,B1,  ,  ,B1,  ,  ,
B17,A1,  ,  ,A1,22,28,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,05,11,B1,  ,  ,B1,  ,  ,
B16,A1,  ,  ,A1,16,23,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,07,13,B1,  ,  ,B1,  ,  ,
B15,A1,  ,  ,A1,13,19,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,13,20,B1,  ,  ,B1,  ,  ,
ZPL RFID  C om m a nd s
B14,A1,  ,  ,A1,12,19,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,18,23,B1,  ,  ,B1,  ,  ,<---****A1
B13,A1,  ,  ,A1,14,20,A1,24,30,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,10,16,B1,  ,  ,B1,  ,  ,
B12,A1,  ,  ,A1,15,22,A1,22,29,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,08,14,B1,  ,  ,B1,  ,  ,
B11,A1,  ,  ,A1,18,25,A1,26,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,08,14,B1,  ,  ,B1,  ,  ,
B10,A1,  ,  ,A1,21,27,A1,26,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,11,17,B1,26,  ,B1,  ,  ,
B09,A1,  ,  ,A1,24,  ,A1,15,21,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,14,20,B1,25,  ,B1,  ,  ,
B08,A1,  ,  ,A1,28,  ,A1,09,15,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,17,23,B1,  ,  ,B1,  ,  ,
B07,A1,  ,  ,A1,  ,  ,A1,06,11,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,20,26,B1,27,30,B1,  ,  ,
B06,A1,  ,  ,A1,  ,  ,A1,05,11,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,24,30,B1,16,19,B1,  ,  ,
B05,A1,  ,  ,A1,  ,  ,A1,05,11,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,28,
,B1,10,14,B1,  ,  ,
B04,A1,  ,  ,A1,  ,  ,A1,08,14,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,07,11,B1,  ,  ,
B03,A1,  ,  ,A1,  ,  ,A1,12,18,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,06,11,B1,  ,  ,
B02,A1,  ,  ,A1,  ,  ,A1,20,26,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,06,10,B1,  ,  ,
B01,A1,  ,  ,A1,  ,  ,A1,18,24,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,09,13,B1,  ,  ,
F00,A1,  ,  ,A1,  ,  ,A1,14,21,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,12,17,B1,  ,  ,
F01,A1,  ,  ,A1,  ,  ,A1,13,19,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,20,25,B1,  ,  ,
F02,A1,  ,  ,A1,  ,  ,A1,13,19,A1,27,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,16,20,B1,  ,  ,
F03,A1,  ,  ,A1,  ,  ,A1,14,21,A1,26,29,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,11,16,B1,  ,  ,
F04,A1,  ,  ,A1,  ,  ,A1,17,24,A1,27,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,11,15,B1,  ,  ,
F05,A1,  ,  ,A1,  ,  ,A1,19,26,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,12,16,B1,25,  ,
F06,A1,  ,  ,A1,  ,  ,A1,22,29,A1,23,26,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,15,18,B1,23,28,
F07,A1,  ,  ,A1,  ,  ,A1,26,  ,A1,15,19,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,17,22,B1,23,29,
F08,A1,  ,  ,A1,  ,  ,A1,  ,  ,A1,10,14,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,20,25,B1,  ,  ,
F09,A1,  ,  ,A1,  ,  ,A1,  ,  ,A1,08,12,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,24,28,B1,21,26,
F10,A1,  ,  ,A1,  ,  ,A1,  ,  ,A1,08,11,A1,  ,  ,B1,  ,  ,B1,  ,  ,B1,  ,
,B1,27,  ,B1,13,18,
trailing edge
end
ZPL RFID  C om m a nd s
In th e  re s u lts  ta b le , th e  ta g s  v is ib le  to th e  a nte nna  e le m e nts  a re  nu m b e re d , a nd  th e  E PC  nu m b e r  th a t is
u niq u e  to e a ch  ta g  is  d is pla y e d .
E a ch  line  in th e  re s u lts  ta b le  g iv e s  a  row  nu m b e r  follow e d  b y  re a d ing s  a s s ocia te d  w ith  RFID  ta g s  th a t
a re  v is ib le  a t th a t row . M u ltiple  v a lu e s  on a  line  ind ica te  th a t m u ltiple  ta g s  w e re  v is ib le . Th e  ord e r  of th e
RFID  ta g s  is  a rb itra r y .
[Row],[Antenna Element],[Min Read Power],[Min Write Power], [Antenna
Element],[Min Read Power],[Min Write Power] ...
w h e re
• Row  = th e  pos ition from  th e  le a d ing  e d g e  of th e  la b e l w h e re  ca lib ra tion occu rre d
• A nte nna  E le m e nt = th e  a nte nna  u s e d
• M inim u m  Re a d  Pow e r  = ca lib ra tion re s u lts  (0 – 30) for  a  ta g  v is ib le  from  th a t row
• M inim u m  W rite  Pow e r  = ca lib ra tion re s u lts  (0 – 30) for  th e  s a m e  ta g
Th e  re a d  a nd  w rite  pow e r  v a lu e s  a re  le ft e m pty  (s u ch  a s  A1, , ,) w h e n no ta g  is  fou nd .
In th e  s a m ple  re s u lts  ta b le  for  th is  e x a m ple , a t pos ition B25 (2 5 m m  b e h ind  th e  print line ), tw o RFID  ta g s
a re  v is ib le  to th e  printe r  a t a nte nna  A 1. Ta g  1 (E PC  7 10 9) ca n b e  re a d  a t pow e r  le v e l 2 2  a nd  w ritte n to a t
pow e r  le v e l 2 8. Ta g  2  (E PC  B A 2 9) ca n b e  re a d  a t pow e r  le v e l 2 2  a nd  w ritte n to a t pow e r  le v e l/uni00A02 7 . A t th a t
pos ition, Ta g s  2  a nd  3 a re  v is ib le  to a nte nna  B 1 w h ile  Ta g  1 is  not.
Tag 1   ,Tag 2   ,Tag 3   ,Tag 4   ,Tag 5   ,Tag 1   ,Tag 2   ,Tag 3
,Tag 4   ,Tag 5   ,
EPC,7109    ,BA29    ,6FD0    ,58AE    ,9CDE    ,7109    ,BA29    ,6FD0
,58AE    ,9CDE    ,
...
B25,A1,22,28,A1,22,27,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,11,18,B1,26,
,B1,  ,  ,B1,  ,  ,
B24,A1,26,  ,A1,13,19,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,15,21,B1,27,
,B1,  ,  ,B1,  ,  ,
B23,A1,  ,  ,A1,08,14,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,18,24,B1,  ,
,B1,  ,  ,B1,  ,  ,
B22,A1,  ,  ,A1,05,11,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,
,B1,21,28,B1,19,24,B1,  ,  ,B1,  ,  ,
B21,A1,  ,  ,A1,05,11,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,25,
,B1,11,17,B1,  ,  ,B1,  ,  ,
...
A t pos ition B23, only  Ta g  2  is  v is ib le  to a nte nna  A 1. Ta g  1 is  no long e r  v is ib le .
Tag 1   ,Tag 2   ,Tag 3   ,Tag 4   ,Tag 5   ,Tag 1   ,Tag 2   ,Tag 3
,Tag 4   ,Tag 5   ,
EPC,7109    ,BA29    ,6FD0    ,58AE    ,9CDE    ,7109    ,BA29    ,6FD0
,58AE    ,9CDE    ,
...
ZPL RFID  C om m a nd s
B25,A1,22,28,A1,22,27,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,11,18,B1,26,
,B1,  ,  ,B1,  ,  ,
B24,A1,26,  ,A1,13,19,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,15,21,B1,27,
,B1,  ,  ,B1,  ,  ,
B23,A1,  ,  ,A1,08,14,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,18,24,B1,  ,
,B1,  ,  ,B1,  ,  ,
B22,A1,  ,  ,A1,05,11,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,
,B1,21,28,B1,19,24,B1,  ,  ,B1,  ,  ,
B21,A1,  ,  ,A1,05,11,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,25,
,B1,11,17,B1,  ,  ,B1,  ,  ,
...
A t pos ition B13, Ta g /uni00A03 (E PC  6FD 0 ) b e com e s  v is ib le  to a nte nna  A 1 a nd  ca n b e  re a d  w ith  a t pow e r  le v e l
2 4 a nd  w ritte n to a t pow e r  le v e l 30 .
Tag 1   ,Tag 2   ,Tag 3   ,Tag 4   ,Tag 5   ,Tag 1   ,Tag 2   ,Tag 3
,Tag 4   ,Tag 5   ,
EPC,7109    ,BA29    ,6FD0    ,58AE    ,9CDE    ,7109    ,BA29    ,6FD0
,58AE    ,9CDE    ,
...
B16,A1,  ,  ,A1,16,23,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,07,13,B1,  ,  ,B1,  ,  ,
B15,A1,  ,  ,A1,13,19,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,13,20,B1,  ,  ,B1,  ,  ,
B14,A1,  ,  ,A1,12,19,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,18,23,B1,  ,  ,B1,  ,  ,<---****A1
B13,A1,  ,  ,A1,14,20,A1,24,30,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,10,16,B1,  ,  ,B1,  ,  ,
...
Th e  a rrow  (<---****) in th e  ta b le  ind ica te s  th a t a  v a lid  prog ra m  pos ition a nd  pow e r  le v e ls  w e re  fou nd
d u ring  ca lib ra tion. Th e  prog ra m  pos ition is  id e ntiﬁ e d  a t th e  top of th e  ta b le  a s  position=B14 MM
(b a ck fe e d  14 m illim e te r s ). Th e  optim a l a nte nna  e le m e nt a t th a t pos ition is  A 1. Th e  optim a l re a d  pow e r  is
1 8, a nd  th e  optim a l w rite  pow e r  is /uni00A02 5.
start
position=B14 MM,A1,18,25
tid information=E200.3414:Alien
leading edge
...
B14,A1,  ,  ,A1,12,19,A1,  ,  ,A1,  ,  ,A1,  ,  ,B1,  ,  ,B1,  ,
,B1,18,23,B1,  ,  ,B1,  ,  ,<---****A1
...
ZPL RFID  C om m a nd s
^RB
Us e  th is  com m a nd  to d e ﬁ ne  th e  s tru ctu re  of E PC  d a ta , w h ich  ca n b e  re a d  from  or  w ritte n to a n RFID
ta g . For  m ore  inform a tion a b ou t E PC  s pe ciﬁ ca tions , re fe r  to th e  E PC  G lob a l w e b  s ite . A ll pa ra m e te r s
in th is  com m a nd  a re  pe r s is te nt a nd  w ill b e  u s e d  in s u b s e q u e nt form a ts  if not prov id e d . Th e  v a lu e s  a re
initia lly  s e t to th e  d e fa u lt v a lu e s .
De ﬁ n e  E PC Da t a  S t r u c t u r e
RFID  ta g s  ca n h a v e  d iffe re nt pa r titions  d e ﬁ ne d . Th is  com m a nd  s pe ciﬁ e s  th e  nu m b e r  of pa r titions  a nd
h ow  m a ny  b its  a re  in e a ch  pa r tition.
n = tota l b it s iz e  of th e
pa r titions
S pe cify  th e  nu m b e r  of b its  to inclu d e  in th e  pa r titions .
V a lu e s : 1 to n, w h e re  n is  th e  b it s iz e  of th e  ta g .
De f a u lt : 9 6
p0 ... p15 = pa r tition
s iz e s
S pe cify  th e  nu m b e r  of b its  to inclu d e  in th e  ind iv id u a l pa r titions . Th e
pa r tition s iz e s  m u s t a d d  u p to th e  b it s iz e  s pe ciﬁ e d  for  th e  pre v iou s
pa ra m e te r. Th e  la rg e s t ind iv id u a l pa r tition s iz e  is  64/uni00A0b its .
V a lu e s :1 to 64
De f a u lt :1
E x a m p le : Th e  follow ing  com m a nd  s pe ciﬁ e s  th a t th e re  a re  9 6 b its  u s e d  w ith  th re e  ﬁ e ld s . Fie ld s  1, 2 , a nd  3
conta in 10 , 2 6, a nd  60  b its , re s pe ctiv e ly .
^RB96,10,26,60
Th e  ZPL cod e  to e ncod e  a  ta g  w ith  th is  form a t w ou ld  look  lik e  th is :
^RFW,E^FD1000.67108000.1122921504606846976^FS
W h e n th e  ta g  is  b e ing  e ncod e d , th e  ta g  s tore s  th e  d a ta  in th e  follow ing  w a y :
• Fie ld  1 conta ins  1000. Th is  v a lu e  is  s tore d  in th e  ﬁ r s t 10  b its
• Fie ld  2  conta ins  67108000. Th is  v a lu e  is  s tore d  in th e  ne x t 2 6 b its .
• Fie ld  3 conta ins  1122921504606846976. Th is  v a lu e  is  s tore d  in th e  re m a ining  60 /uni00A0b its .
E x a m p le : Th e  follow ing  com m a nd  s pe ciﬁ e s  th a t th e re  a re  64 b its  u s e d  w ith  e ig h t  8‑bit  ﬁ e ld s .
^RB64,8,8,8,8,8,8,8,8^FS
Th e  ZPL cod e  to e ncod e  a  ta g  w ith  th is  form a t w ou ld  look  lik e  th is :
^RFW,E^FD1.123.160.200.249.6.1.0^FS
W h e n w riting  to th e  ta g , e a ch  s e t of d a ta  is  w ritte n in its  re s pe ctiv e  8-b it ﬁ e ld .
E x a m p le : Th is  e x a m ple  u s e s  th e  S G TIN-9 6 s ta nd a rd , w h ich  d e ﬁ ne s  9 6-b it s tru ctu re  in th e  follow ing  w a y :
ZPL RFID  C om m a nd s
He a d e r Filt e r  V a lu e Pa r t it io n Co m p a n y
Pr e ﬁ x  In d e x
It e m  Re f e r e n c e S e r ia l Nu m b e r
8 b its 3 b its 3 b its 2 0 – 40  b its 2 4 b its 38 b itsS G TIN-9 6
10  (b ina r y
v a lu e )
8 (d e cim a l
ca pa city )
8 (d e cim a l
ca pa city )
16,383
(d e cim a l
ca pa city )
9  to
1,0 48,57 5
(d e cim a l
ca pa city *)
33,554,431
(d e cim a l
ca pa city )
* C a pa city  of Ite m  Re fe re nce  ﬁ e ld  v a rie s  w ith  th e  le ng th  of th e  com pa ny  pre ﬁ x .
Th e  ZPL cod e  to e ncod e  a  ta g  w ith  th is  form a t w ou ld  look  lik e  th is :
^XA
^RB96,8,3,3,20,24,38^FS
^RFW,E^FD48,1,6,770289,10001025,1^FS
^XZ
Th e s e  com m a nd s  w ou ld  pu t
• 48 in th e  h e a d e r
• 1 a s  th e  ﬁ lte r  v a lu e
• 6 a s  th e  pa r tition (ind ica te s  a  2 0 -b it pre ﬁ x  a nd  2 4-b it ite m  re fe re nce )
• 770289 a s  th e  com pa ny  pre ﬁ x
• 10001025 a s  th e  ite m  re fe re nce
• 1 a s  th e  s e ria l nu m b e r
To re a d  th is  E PC  d a ta  a nd  print th e  re s u lts  on th e  la b e l, y ou  w ou ld  u s e  th e  follow ing  cod e :
^XA
^RB96,8,3,3,20,24,38^FS
^FO50,50^A0N,40^FN0^FS
^FN0^RFR,E^FS
^XZ
Th e  re s u lting  la b e l w ou ld  look  lik e  th is :
ZPL RFID  C om m a nd s
^RF
Us e  th is  com m a nd  to re a d  or  w rite  to (e ncod e ) a n RFID  ta g  or  to s pe cify  th e  a cce s s  pa s s w ord .
Re a d  o r  W r it e  RFID Fo r m a t
W h e n u s ing  th is  com m a nd  to re a d  a  ta g , y ou  m a y  u s e  a  ﬁ e ld  v a ria b le  to print th e  ta g  d a ta  on th e  la b e l
or  to re tu rn th e  d a ta  to th e  h os t. For  m ore  inform a tion on h ow  m e m or y  is  s tore d  on a  G e n 2  ta g  or  for
o = ope ra tion S pe ciﬁ e s  th e  a ction to b e  pe r form e d .
Va lu e s :
W = w rite  to (e ncod e ) th e  ta g
L = w rite  w ith  LO C K (if s u ppor te d  b y  ta g  ty pe ; G e n 2  ta g  ty pe  d oe s  not u s e
th is  lock ing  fu nction)R = re a d  th e  ta g
P = re a d  pa s s w ord  (G e n 2  ta g  ty pe  only . Not s u ppor te d  on a ll G e n 2  printe r s ,
inclu d ing  th e  ZD 50 0 R printe r.)
S = s pe cify  th e  a cce s s  pa s s w ord
De f a u lt : W
f = form a t V a lu e s :
A = A S C II
H = He x a d e cim a l
E = E PC  (e ns u re  prope r  s e tu p w ith  th e  ^RB com m a nd )
De f a u lt : H
ZPL RFID  C om m a nd s
b = pa s s w ord O Rb
= s ta r ting  b lock
nu m b e r
Fo r  Ge n  2 t a g  t y p e  o n ly :
W h a t y ou  s pe cify  for  th is  pa ra m e te r  d e pe nd s  on w h a t y ou  e nte r  for  oth e r
pa ra m e te r s .
NOTE : W h e n th e  G e n 2  m e m or y  b a nk  pa ra m e te r  is  s e t to E
(E PC /uni00A0 96‑bit)  or A (E PC  a nd  A u to a d ju s t PC  b its ), W and R v a lu e s  a re
a lw a y s  s e t to 2 .
If  t h e  Op e r a t io n  p a r a m e t e r  v a lu e  is ...
W
V a lu e s :
P, w h ich  ind ica te s  th a t a n a cce s s  pa s s w ord , a  k ill pa s s w ord , or  b oth  follow  in
a  ^FD  com m a nd . E a ch  pa s s w ord  m u s t b e  8 h e x  ch a ra cte r s . If th e  pa s s w ord
is  om itte d , it is  not w ritte n. A n a cce s s  pa s s w ord  is  u s e d  in s u b s e q u e nt lock
com m a nd s  in th e  form a t.
0  to n, w h ich  s pe ciﬁ e s  th e  16-b it s ta r ting  b lock  nu m b e r, w h e re  n is  th e
m a x im u m  nu m b e r  of b lock s  for  th e  b a nk  s pe ciﬁ e d  in th e  m e m or y  b a nk
pa ra m e te r.
De f a u lt : 0
R
V a lu e s :
0  to n, w h ich  s pe ciﬁ e s  th e  16-b it s ta r ting  b lock  nu m b e r, w h e re  n is  th e
m a x im u m  nu m b e r  of b lock s  for  th e  b a nk  s pe ciﬁ e d  in th e  m e m or y  b a nk
pa ra m e te r.
De f a u lt :  0
S Th is  pa ra m e te r  m u s t b e  P a nd  m u s t b e  follow e d  b y  th e  a cce s s  pa s s w ord  in a
^FD  com m a nd .
Fo r  t a g  t y p e s  o t h e r  t h a n  Ge n  2:
S pe ciﬁ e s  th e  s ta r ting  b lock  nu m b e r.
V a lu e s : 0 to n, w h e re  n is  th e  m a x im u m  nu m b e r  of b lock s  for  th e /uni00A0ta g .
De f a u lt : 0
ZPL RFID  C om m a nd s
n = nu m b e r  of b y te s
to re a d  or  w rite
S pe ciﬁ e s  th e  nu m b e r  of b y te s  to re a d  or  w rite .
Fo r  h ig h - f r e q u e n c y  (HF) p r in t e r s :
V a lu e s : 1 to n, w h e re  n is  th e  m a x im u m  nu m b e r  of b y te s  for  th e /uni00A0ta g .
De f a u lt : 1
Fo r  Ge n  2 t a g  t y p e  o n ly :
W h e n E or A is  s pe ciﬁ e d  for  th e  m e m or y  b a nk  pa ra m e te r, th is  v a lu e  is  not
re q u ire d .
V a lu e s : 1 to n, w h e re  n is  th e  m a x im u m  nu m b e r  of b y te s  for  th e /uni00A0ta g .
De f a u lt : 1
Fo r  a ll o t h e r  p r in t e r s  a n d  t a g  t y p e s :Th is  pa ra m e te r  a pplie s  only  w h e n th e  s ta r ting
b lock  nu m b e r  is /uni00A01.
V a lu e s : 1 to n, w h e re  n is  th e  m a x im u m  nu m b e r  of b y te s  for  th e /uni00A0ta g . For  UC O D E
E PC  1.19, n is  32 .
De f a u lt : 1
m = G e n 2  m e m or y
b a nk NOTE : Th is  pa ra m e te r  a pplie s  to G e n 2  ta g s  only .
S pe ciﬁ e s  th e  G e n 2  m e m or y  b a nk . For  m ore  inform a tion a b ou t G e n/uni00A02
m e m or y , re fe r  to th e  RFID  Prog ra m m ing  G u id e  for  y ou r  printe r.
E = E PC  9 6-b it (W h e n w riting  d a ta , th is  pa ra m e te r  pe r form s  th e  ope ra tion
on G e n 2  b it a d d re s s  2 0 h  a nd  a cce s s e s  12  b y te s  of th e  E PC  m e m or y  b a nk .
W h e n re a d ing  d a ta , th is  pa ra m e te r  re a d s  th e  a m ou nt of d a ta  s pe ciﬁ e d  in th e
PC  b its  on th e  ta g .)
A = E PC  a nd  A u to a d ju s t PC  b its  (W h e n w riting  d a ta , th is  pa ra m e te r
pe r form s  th e  ope ra tion on G e n 2  b it a d d re s s  2 0 h  of th e  E PC  m e m or y  b a nk
a nd  a cce s s e s  th e  nu m b e r  of b y te s  s pe ciﬁ e d  in th e  ^FD. Th e  PC  b its  w ill b e
u pd a te d  to m a tch  th e  a m ou nt of d a ta  w ritte n to th e  ta g . W h e n re a d ing  d a ta ,
th is  pa ra m e te r  re a d s  th e  a m ou nt of d a ta  s pe ciﬁ e d  in th e  PC  b its  on th e  ta g .
Th is  v a lu e  is  s u ppor te d  only  b y  th e  ZD 50 0 R printe r  a nd  ZT40 0 /uni00A0S e rie s  a nd
ZT60 0 _S e rie s  RFID  printe r s .
0 = Re s e r v e d
1 = EPC
2 = TID  (Ta g  ID )
3 = Us e r
De f a u lt : E
E x a m p le : Th is  e x a m ple  e ncod e s  9 6-b it d a ta  in A S C II form a t. (Th e  ^RS com m a nd  ca n b e  om itte d  for
printe r s  th a t u s e  G e n 2  ta g  ty pe s  only .)
^XA
^RS8
^RFW,A^FD00 my data^FS
^XZ
ZPL RFID  C om m a nd s
E x a m p le : Th is  e x a m ple  e ncod e s  9 6-b it E PC  d a ta , a s  s pe ciﬁ e d  b y  th e  ^RB com m a nd .
^XA
^RB96,8,3,3,20,24,38
^RFW,E^FD16,3,5,78742,146165,1234567891^FS
^XZ
E x a m p le : Th is  e x a m ple  e ncod e s  4 b y te s  of h e x a d e cim a l form a tte d  d a ta , s ta r ting  in b lock /uni00A03 of G e n 2  E PC
b a nk  1. (Th e  ^RS com m a nd  ca n b e  om itte d  for  printe r s  th a t u s e  G e n 2  ta g  ty pe s  only .)
^XA
^RS8
^RFW,H,3,4,1^FD11112222^FS
^XZ
E x a m p le : Th is  e x a m ple  re a d s  th e  e x te nd e d  G e n 2  ta g  ID  (TID ), w h ich  is  not re a d  b y  th e  ^RI com m a nd ,
a nd  re tu rns  th e  re s u lts  to th e  h os t com pu te r. Th e  re s u lts  a re  la b e le d  w ith  th e  h e a d e r   “8‑byte  Ta g  ID
D a ta .” (Th e  ^RS com m a nd  ca n b e  om itte d  for  printe r s  th a t u s e  G e n 2  ta g  ty pe s  only .)
^XA
^RS8
^RFR,H,0,8,2^FN1^FS^HV1,,8-byte Tag ID Data:^FS
^XZ
E x a m p le : Th is  com m a nd  w rite s  a nd  s pe ciﬁ e s  b oth  th e  a cce s s  pa s s w ord  (12345678) a nd  th e  k ill pa s s w ord
(88887777) s e pa ra te d  b y  a  com m a .
^RFW,H,P^FD12345678,88887777^FS
Th is  com m a nd  w rite s  th e  a cce s s  pa s s w ord  only :
^RFW,H,P^FD12345678^FS
Th is  com m a nd  w rite s  th e  k ill pa s s w ord  only  (a  com m a  m u s t b e  u s e d  b e fore  it to d is ting u is h  it from  a n
a cce s s  pa s s w ord ):
^RFW,H,P^FD,88887777^FS
S e e  th e  e x a m ple s  for  ^RL for  h ow  th is  com m a nd  w ou ld  b e  u s e d  in a  form a t.
E x a m p le : Th is  com m a nd  w rite s  1122334455667788 to th e  b it a d d re s s  2 0 h  of th e  E PC  m e m or y  a nd
u pd a te s  th e  PC  b its  b it a d d re s s  10 h  to 14h  to re ﬂ e ct 8 b y te s  (4 w ord s ) of d a ta .
^RFW,H,,,A^FD1122334455667788^FS
E x a m p le : Th is  com m a nd  s pe ciﬁ e s  th e  a cce s s  pa s s w ord  for  th e  ta g , w h ich  w ill b e  u s e d  in s u b s e q u e nt
lock  com m a nd s  in th e  form a t. Th e  a cce s s  pa s s w ord  s pe ciﬁ e d  m u s t m a tch  th e  one  s tore d  on th e  ta g .
Th is  com m a nd  d oe s  not w rite  th e  pa s s w ord  to th e  ta g . S e e  th e  e x a m ple s  for  ^RL for  h ow  th is  com m a nd
w ou ld  b e  u s e d  in a  form a t.
ZPL RFID  C om m a nd s
^RFS,H,P^FD12345678^FS
ZPL RFID  C om m a nd s
^RL
Us e  th is  com m a nd  to lock /u nlock  RFID  ta g  m e m or y .
Lo c k /U n lo c k  RFID Ta g  Me m o r y
Th e  ^RL com m a nd  h a s  fou r  d is tinct form a ts  a nd  fu nctions :
• ^RLP – Permanently Lock All Tag Memory Lock s  a ll m e m or y  b a nk s  a nd /or  pa s s w ord s , a s
d e ﬁ ne d  b y  th e  ch ip m a nu fa ctu re r.
• ^RLB – Permanently Lock Specified Memory Sections Lock s  b lock s  of u s e r  m e m or y  in a n
u nw rite a b le  s ta te .
• ^RLM – Lock/Unlock the Specified Memory Bank Lock s  a  pa s s w ord  or  a n e ntire  m e m or y
b a nk  in a  w rite a b le  or  u nw rite a b le  s ta te . Th e s e  lock s /u nlock s  ca n b e  pe rm a ne nt or  re v e r s ib le .
^RLP –  Pe r m a n e n t ly  Lo c k  A ll Ta g  Me m o r y
S om e  ch ip m a nu fa ctu re r s  h a v e  im ple m e nte d  a n a lte rna tiv e  pe rm a lock ing  m e ch a nis m  th a t m u s t b e
a pplie d  to a ll m e m or y  b y  pe rm a lock ing  ce r ta in b a nk s  a nd /or  pa s s w ord s . Th e  RFID  ch ips ' d a ta s h e e t m a y
s pe cify  pe rm a lock ing  a ny  com b ina tion of th e  Kill, A cce s s , E PC, Us e r, a nd  TID  m e m or y  to pe rm a lock  th e
RFID  ta g . Th e  ^RLP com m a nd  a u tom a tica lly  s e le cts  th e  re q u ire d  m e m or y  loca tions  to pe rm a lock  th e
RFID  ta g  for  a  pa r ticu la r  ch ip.
NOTE : Th e  a cce s s  pa s s w ord  is  not re q u ire d  for  th is  com m a nd . Th e  printe r  w ill u s e  th e  d e fa u lt of
00000000.
s = s ta r ting  s e ction S pe cify  th e  s ta r ting  s e ction of m e m or y  to lock .
n = nu m b e r  of s e ctions S pe cify  th e  nu m b e r  of s e ctions  to lock .
^RLM –  Lo c k /U n lo c k  t h e  S p e c iﬁ e d  Me m o r y  Ba n k
Th e  ^RLM com m a nd  lock s /u nlock s  th e  s pe ciﬁ e d  pa s s w ord  or  m e m or y  b a nk  on a n RFID  ta g . You  ca n
u s e  th is  com m a nd  to d o th e  follow ing :
• lock  ind iv id u a l pa s s w ord s , th e re b y  pre v e nting  or  a llow ing  s u b s e q u e nt re a d s  or  w rite s  of th a t
pa s s w ord
• lock  ind iv id u a l m e m or y  b a nk s , th e re b y  pre v e nting  or  a llow ing  s u b s e q u e nt w rite s  to th os e  b a nk s
• Pe rm a ne ntly  lock  (pe rm a lock ) th e  lock  s ta tu s  for  a  pa s s w ord  or  m e m or y  b a nk
k = k ill pa s s w ord
fu nction
V a lu e s :
U = u nlock  th e  k ill pa s s w ord *
L = lock  th e  k ill pa s s w ord *
O = pe rm a ne ntly  u nlock  (O pe n) th e  k ill pa s s w ord
P = pe rm a ne ntly  lock  (Prote cte d ) th e  k ill pa s s w ord
a = a cce s s  pa s s w ord
fu nction
V a lu e s :
U = u nlock  th e  a cce s s  pa s s w ord *
L = lock  th e  a cce s s  pa s s w ord *
O = pe rm a ne ntly  u nlock  (O pe n) th e  a cce s s  pa s s w ord
P = pe rm a ne ntly  lock  (Prote cte d ) th e  a cce s s  pa s s w ord
e = E PC  m e m or y  b a nk
fu nction
V a lu e s :
U = u nlock  th e  E PC  m e m or y  b a nk *
L = lock  th e  E PC  m e m or y  b a nk *
O = pe rm a ne ntly  u nlock  (O pe n) th e  E PC  m e m or y  b a nk
P = pe rm a ne ntly  lock  (Prote cte d ) th e  E PC  m e m or y  b a nk
u = US E R m e m or y
b a nk  fu nction
V a lu e s :
U = u nlock  th e  US E R m e m or y  b a nk *
L = lock  th e  US E R pa s s w ord  b a nk *
O = pe rm a ne ntly  u nlock  (O pe n) th e  US E R m e m or y  b a nk
P = pe rm a ne ntly  lock  (Prote cte d ) th e  US E R m e m or y  b a nk
* Th e  a cce s s  pa s s w ord  m u s t b e  s e t to s om e th ing  oth e r  th a n th e  d e fa u lt of 00000000 to u s e  th is
v a lu e . S e e  th e  e x a m ple s  for  th is  com m a nd  for  g u id a nce .
E x a m p le s
^RLM E x a m p le  1: Th e  follow ing  com m a nd  lock s  a ll m e m or y  b a nk s  u s ing  a  pre v iou s ly  s pe ciﬁ e d  a cce s s
pa s s w ord .
^RLM,L,L,L,L^FS
^RLM E x a m p le  2: Th e  follow ing  com m a nd  lock s  th e  u s e r  m e m or y  b a nk s  u s ing  a  pre v iou s ly  s pe ciﬁ e d  a cce s s
pa s s w ord .
^RLM,,,,L^FS
^RLB E x a m p le : Th e  follow ing  com m a nd  pe rm a lock s  s e ctions  0  to 4 of u s e r  m e m or y  u s ing  a  pre v iou s ly
s pe ciﬁ e d  a cce s s  pa s s w ord .
^RLB,0,4^FS
Co m b in a t io n  ^RLM a n d  ^RLB E x a m p le  1: Th is  cod e  d oe s  th e  follow ing :
• w rite s  12  b y te s  to u s e r  m e m or y
ZPL RFID  C om m a nd s
• w rite s  12345678 to th e  a cce s s  pa s s w ord  a nd  11223344 to th e  k ill pa s s w ord
• pe rm a lock s  6 s e ctions  of u s e r  m e m or y  u s ing  12345678 a s  th e  a cce s s  pa s s w ord
• lock s  th e  k ill a nd  a cce s s  pa s s w ord s  a nd  pe rm a ne ntly  u nlock s  th e  E PC  m e m or y , u s ing  12345678 as
th e  a cce s s  pa s s w ord
^XA
^RFW,H,0,12,3^FD112233445566778899001122^FS
^RFW,H,P^FD12345678,11223344^FS
^RLB,0,6^FS
^RLM,L,L,O^FS
^XZ
Co m b in a t io n  ^RLM a n d  ^RLB E x a m p le  2: Th is  cod e  d oe s  th e  follow ing :
• w rite s  12  b y te s  to u s e r  m e m or y
• pe rm a lock s  6 s e ctions  of u s e r  m e m or y  u s ing  00000000 a s  th e  a cce s s  pa s s w ord
• pe rm a lock s  th e  k ill pa s s w ord  a nd  a cce s s  pa s s w ord  u s ing  00000000 a s  th e  a cce s s  pa s s w ord
^XA
^RFW,H,0,12,3^FD112233445566778899001122^FS
^RLB,0,6^FS
^RLM,P,P^FS
^XZ
ZPL RFID  C om m a nd s
^RS
Us e  th is  com m a nd  to s e t u p RFID  pa ra m e te r s  inclu d ing  ta g  ty pe ; prog ra m m ing  pos ition; a nd  e rror
h a nd ling , s u ch  a s  s e tting  th e  nu m b e r  of la b e ls  th a t w ill b e  a tte m pte d  if a n e rror  occu r s .
S e t  U p  RFID Pa r a m e t e r s
For  e x a m ple , if a n RFID  la b e l fa ils  to prog ra m  corre ctly  or  if th e  tra ns pond e r  ca nnot b e  d e te cte d , th e
printe r  e je cts  th e  la b e l a nd  printsVOIDa cros s  it. Th e  printe r  w ill tr y  to print a noth e r  la b e l w ith  th e  s a m e
d a ta  a nd  form a t for  th e  nu m b e r  of la b e ls  s pe ciﬁ e d  (pa ra m e te rn). If th e  prob le m  pe r s is ts , th e  printe r
follow s  th e  e rror  h a nd ling  ins tru ctions  s pe ciﬁ e d  b y  th e  e rror  h a nd ling  pa ra m e te r  (pa ra m e te re): the
printe r  m a y  re m ov e  th e  prob le m a tic form a t from  th e  print q u e u e  a nd  proce e d  w ith  th e  ne x t form a t (if
one  e x is ts  in th e  b u ffe r), or  it m a y  pla ce  th e  printe r  in Pa u s e  or  E rror  m od e .
IMPORTA NT: Us e  ca re  w h e n u s ing  th is  com m a nd  in com b ina tion w ith  ^RF for  re a d ing  ta g  d a ta .
Us e  ca re  w h e n u s ing  th is  com m a nd  in com b ina tion w ith  ^RT or ^RF for  re a d ing  ta g  d a ta .
Prob le m s  ca n occu r  if th e  d a ta  re a d  from  th e  ta g  is  g oing  to b e  printe d  on th e  la b e l. A ny  d a ta
re a d  from  th e  ta g  m u s t b e  pos itione d  to b e  printe d  a b ov e  th e  re a d /w rite  pos ition. Fa ilu re  to d o
th is  w ill pre v e nt re a d  d a ta  from  b e ing  printe d  on th e  la b e l.
t = ta g
ty pe
V a lu e s :
8 = E PC  C la s s  1, G e ne ra tion 2  (G e n 2 )
De f a u lt : 8— G e n 2  is  th e  only  ta g  ty pe  s u ppor te d  b y  cu rre nt RFID  printe r s . For  ta g  ty pe s
s u ppor te d  b y  old e r  printe r s , re fe r  to th e  orig ina l RFID  Prog ra m m ing  G u id e .
ZPL RFID  C om m a nd s
p =
re a d /
w rite
pos ition
of the
ta g
(prog ra m m ing
pos ition)
Th is  pa ra m e te r  s e ts  th e  re a d /w rite  pos ition of th e  ta g .
IMPORTA NT: If a  la b e l form a t s pe ciﬁ e s  a  v a lu e  for  th e  prog ra m m ing  pos ition, th is
v a lu e  w ill b e  u s e d  for  th e  prog ra m m ing  pos ition for  a ll la b e ls  u ntil a  ne w  pos ition
is  s pe ciﬁ e d  or  u ntil th e  ta g  ca lib ra tion proce d u re  is  ru n.
Fo r  Lin k - OS  p r in t e r s :
V a lu e s :
F0 to Fxxx
(w h e re  xxx is  th e  la b e l le ng th  in m illim e te r s  or  999, w h ich e v e r  is  le s s ) Th e  printe r
prints  th e  ﬁ r s t pa r t of a  la b e l u ntil it re a ch e s  th e  s pe ciﬁ e d  d is ta nce  a nd  th e n b e g ins
prog ra m m ing . A fte r  prog ra m m ing , th e  printe r  prints  th e  re m a ind e r  of th e  la b e l.
B0 to B30
Th e  printe r  b a ck fe e d s  th e  la b e l for  th e  s pe ciﬁ e d  d is ta nce  a nd  th e n b e g ins  prog ra m m ing .
To a ccou nt for  th e  b a ck fe e d , a llow  e m pty  m e d ia  line r  to e x te nd  ou t of th e  front of th e
printe r  w h e n u s ing  a  b a ck w a rd  prog ra m m ing  pos ition.
up = m ov e  to th e  ne x t v a lu e
down = m ov e  to th e  pre v iou s  v a lu e
De f a u lt : F0 (w h ich  m ov e s  th e  le a d ing  e d g e  of th e  la b e l to th e  print line )
Fo r  o ld e r  RFID p r in t e r s :
V a lu e s :
A b s o lu t e  Mo d e  (a ll ﬁ rm w a re  v e r s ions ):
xxxx = 0 to la b e l le ng th  (in d ot row s ). M ov e  th e  m e d ia  to th e  s pe ciﬁ e d  pos ition xxxx
on th e  la b e l, m e a s u re d  in d ot row s  from  th e  la b e l top, b e fore  e ncod ing . S e t to 0 (no
m ov e m e nt) if th e  ta g  is  a lre a d y  in th e  e ffe ctiv e  a re a  w ith ou t m ov ing  th e  m e d ia .
Re la t iv e  Mo d e  (ﬁ rm w a re  v e r s ions  V53.17 .6 a nd  la te r):
F0 to Fxxx
(w h e re  xxx is  th e  la b e l le ng th  in m illim e te r s  or  999, w h ich e v e r  is  le s s ). Th e  printe r
prints  th e  ﬁ r s t pa r t of a  la b e l u ntil it re a ch e s  th e  s pe ciﬁ e d  d is ta nce  a nd  th e n b e g ins
prog ra m m ing . A fte r  prog ra m m ing , th e  printe r  prints  th e  re m a ind e r  of th e  la b e l.
B0 to B30
(D oe s  not a pply  to th e  RP4T printe r.)
Th e  printe r  b a ck fe e d s  th e  la b e l for  th e  s pe ciﬁ e d  d is ta nce  a nd  th e n b e g ins  prog ra m m ing .
To a ccou nt for  th e  b a ck fe e d , a llow  e m pty  m e d ia  line r  to e x te nd  ou t of th e  front of th e
printe r  w h e n u s ing  a  b a ck w a rd  prog ra m m ing  pos ition.
D e fa u lt:
For  th e  R2 844-Z a nd  RPA X : 0 (no m ov e m e nt)
For  printe r s  u s ing  V53.17 .6, V7 4.19.6Z, a nd  la te r: F0
(w h ich  m ov e s  th e  le a d ing  e d g e  of th e  la b e l to th e  print line )
A ll oth e r s : la b e l le ng th  m inu s  1/uni00A0m m  (1/16 in.)
v =
le ng th
of v oid
printou t
S e ts  th e  le ng th  of th e  v oid  printou t in v e r tica l (Y/uni00A0a x is ) d ot row s .
V a lu e s : 0 to la b e l le ng th
De f a u lt : la b e l le ng th
ZPL RFID  C om m a nd s
n =
nu m b e r
of labels
to tr y
e ncod ing
Th e  nu m b e r  of la b e ls  th a t w ill b e  a tte m pte d  in ca s e  of re a d /e ncod e  fa ilu re .
V a lu e s : 1 to 10
De f a u lt : 3
e = e rror
h a nd ling
If a n e rror  pe r s is ts  a fte r  th e  s pe ciﬁ e d  nu m b e r  of la b e ls  a re  trie d , pe r form  th is  e rror
h a nd ling  a ction.
V a lu e s :
N = No a ction (printe r  d rops  th e  la b e l form a t ca u s ing  th e  e rror  a nd  m ov e s  to th e  ne x t
q u e u e d  la b e l)
P = Pla ce  printe r  in Pa u s e  m od e  (la b e l form a t s ta y s  in th e  q u e u e  u ntil th e  u s e r  ca nce ls )
E = Pla ce  printe r  in E rror  m od e  (la b e l form a t s ta y s  in th e  q u e u e  u ntil th e  u s e r  ca nce ls )
De f a u lt s : N
NOTE : You  ca n s e t th e  printe r  to s e nd  a n e rror  m e s s a g e  to th e  h os t for  e a ch
fa ilu re . To e na b le  or  d is a b le  th is  u ns olicite d  e rror  m e s s a g e , re fe r  to th e^SX and
^SQ ZPL com m a nd s . Us e  V for  th e  cond ition ty pe  for  a n RFID  e rror.
a =
s ig na ls
on
a pplica tor
NOTE : Th is  pa ra m e te r  a pplie s  only  to old e r  RFID  printe r s  th a t h a v e  a n a pplica tor
b oa rd . Th is  pa ra m e te r  d oe s  not a pply  to th e  R2 844-Z or  to Link -O S  printe r s .
For  th e  R4M plu s , th is  pa ra m e te r  a pplie s  only  to printe r s  w ith  ﬁ rm w a re  v e r s ion
S P9 9 4X  (R4M plu s  E u rope a n v e r s ion).
S in g le  S ig n a l Mo d e
In th is  m od e , one  s ta r t print s ig na l s ta r ts  printing . Th e n, a t th e  prog ra m  pos ition (pa ra m e te r
p), th e  printe r  a u tom a tica lly  s tops  a nd  e ncod e s  th e  ta g . Printing  continu e s , a nd  a  s ing le
e nd  print s ig na l s ig niﬁ e s  th e  com ple tion of th e  la b e l.
Do u b le  S ig n a l Mo d e
W ith  RFID , w h e n th e re  is  a  non-z e ro prog ra m  pos ition, th e  la b e l is  log ica lly  s plit into tw o
pa r ts . Th e  ﬁ r s t pa r t is  printe d , th e  ta g  e ncod e s , a nd  th e n th e  s e cond  pa r t prints . If th is
pa ra m e te r  is  s e t to “D ,” th e n th e  la b e l is  s plit into tw o a nd  re q u ire s  b oth  por tions  of th e
la b e l to b e  controlle d  b y  th e  a pplica tor. Th is  m e a ns  th a t a  s ta r t print s ig na l trig g e r s  th e
ﬁ r s t por tion of th e  la b e l, a nd  th e n w h e n th e  printe r  re a ch e s  th e  RFID  prog ra m  pos ition
(a nd  th e  m otor  s tops ), a n e nd  print s ig na l is  prov id e d . In th is  m od e , a  s e cond  s ta r t print
s ig na l is  re q u ire d  to print th e  re s t of th e  la b e l. W h e n th e  la b e l is  com ple te , a  ﬁ na l e nd  print
s ig na l is  prov id e d .
NOTE : If pa ra m e te r  p is  z e ro, th e n s ing le  s ig na l m od e  is  u s e d  (pa ra m e te r  ig nore d ).
If p is  F0  (or  B 0 ) w ith  b a ck fe e d -a fte r, th e n s ing le  s ig na l m od e  is  u s e d  (pa ra m e te r
ig nore d ).
V a lu e s :
S = s ing le  s ig na l
D = d ou b le  s ig na l (For  th e  R110 PA X 4, D ou b le  m od e  w ill w ork  only  if th e  re a d /w rite
pos ition is  ch a ng e d  from  th e  d e fa u lt of z e ro.)
De f a u lt : S
c =
re s e r v e d
Not a pplica b le .
ZPL RFID  C om m a nd s
s = v oid
print
s pe e d NOTE : Th is  pa ra m e te r  is  not s u ppor te d  on a ll printe r  m od e ls .
If a  la b e l is  v oid e d , th e  s pe e d  a t w h ich  “VO ID ” w ill b e  printe d  a cros s  th e  la b e l.
V a lu e s : a ny  v a lid  print s pe e d
De f a u lt : th e  printe r’s  m a x im u m  print s pe e d
E x a m p le : Th e  follow ing  a re  e x a m ple s  of A b s olu te  M od e  a nd  Re la tiv e  M od e  for  th e  ta g  pos ition pa ra m e te r
(pa ra m e te r  p).
A b s o lu t e  Mo d e
^RS,520 s e ts  th e  e ncod e  pos ition a t 52 0  d ots  from  th e  top e d g e  of th e  la b e l.
^RS,0 prog ra m s  th e  ta g  w ith ou t m ov ing  th e  m e d ia .
Re la t iv e  Mo d e
^RS,F1 s e ts  th e  e ncod e  pos ition 1 m m  for w a rd  from  th e  le a d ing  e d g e  of th e  la b e l.
^RS,B10 s e ts  th e  e ncod e  pos ition 10  m m  b a ck w a rd s  from  th e  le a d ing  e d g e  of th e  la b e l.
^RS,F0 s e ts  th e  e ncod e  pos ition a t th e  le a d ing  e d g e  of th e  la b e l.
^RS,B0 s e ts  th e  e ncod e  pos ition a t th e  le a d ing  e d g e  of th e  la b e l.
E x a m p le : Th e  follow ing  s h ow s  th e  d iffe re nce  b e tw e e n a b s olu te  a nd  re la tiv e  prog ra m m ing  pos itions  for  th e
ta g  pos ition pa ra m e te r  (pa ra m e te r  p) w ith  a  6-inch  (152 -m m , 12 16-d ot) la b e l le ng th . Th e  e nd  re s u lts  a re
th a t th e  ta g  is  prog ra m m e d  w ith  th e  la b e l in th e  s a m e  pos ition.
ZPL RFID  C om m a nd s
1 ^RS,496, A b s olu te  M od e , 49 6/uni00A0d ots  from  th e  top of th e  la b e l
2 ^RS,F90, Re la tiv e  M od e , 9 0  m m  from  th e  le a d ing  e d g e  of th e  la b e l
ZPL RFID  C om m a nd s
^RU
Us e  th is  com m a nd  to re a d  th e  TID  (Ta g  ID ) d a ta  from  th e  cu rre nt ch ip a nd  form a t a  u niq u e   38‑bit  s e ria l
nu m b e r, w h ich  w ill b e  pla ce d  in th e  low e r  (le a s t s ig niﬁ ca nt) 38 b its  of th e  E PC  cod e .
Re a d  U n iq u e  RFID Ch ip  S e r ia liz a t io n
a = pre ﬁ x S pe ciﬁ e s  th e  pre ﬁ x  in A S C II B ina r y
V a lu e s : O nly  A S C II ch a ra cte r s  1 a nd  0  a re  a cce pte d . M a x im u m  of 38
ch a ra cte r s .
Th e  nu m b e r  of b its  in th e  v a lu e  s pe ciﬁ e s  th e  le ng th  of th e  pre ﬁ x . Th e
pre ﬁ x  is  pla ce d  a s  th e  le ft-m os t (m os t s ig niﬁ ca nt) b its  in th e  u niq u e  s e ria l
nu m b e r.
If noth ing  is  s pe ciﬁ e d , th e  d e fa u lt v a lu e  w ill b e  u s e d .
De f a u lt : Th e  M C S  pre ﬁ x  is  d e te rm ine d  b y  th e  M D ID  in th e  TID  of th e  ch ip
re a d :
10 0  = E M  M icro
Impinj = 101
A lie n = 110
NXP = 111
b = s pe cia l ch a ra cte r S pe cia l ch a ra cte r  for  s e ria l nu m b e r  inclu s ion.
V a lu e s : A ny  A S C II ch a ra cte r  oth e r  th a n th e  cu rre nt C om m a nd  ch a ra cte r,
C ontrol ch a ra cte r, D e lim ite r  ch a ra cte r, or  a ny  of th e  Re a l-Tim e  C lock
(RTC) ch a ra cte r s .
De f a u lt : #
NOTE : S e ria l nu m b e r  inclu s ion:
O ne  of s e v e ra l d a ta  e le m e nts  ca n b e  inclu d e d  into a ny  ^FD d a ta  s tring  in th e  s a m e  w a y  th a t Re a l Tim e
C lock  d a ta  is  inclu d e d . Us e  a ny  of th e  com m a nd s  b e low  to inclu d e  a  d a ta  pa tte rn b a s e d  on th e  s e ria l
nu m b e r. Th e s e  a re  d e ﬁ ne d  u s ing  th e  d e fa u lt v a lu e  for  th e  S pe cia l C h a ra cte r.
#S = inclu d e  38-b it s e ria l nu m b e r  d e riv e d  from  TID  in d e cim a l form .
#H = inclu d e  38-b it s e ria l nu m b e r  d e riv e d  from  TID  in h e x a d e cim a l form .
#E = inclu d e  th e  e ntire  9 6-b it E PC  cod e , inclu d ing  th e  38-b it s e ria l nu m b e r  d e riv e d  from  TID  in d e cim a l
form .
#F = inclu d e  th e  e ntire  9 6-b it E PC  cod e , inclu d ing  th e  38-b it s e ria l nu m b e r  d e riv e d  from  TID  in
h e x a d e cim a l form .
#P = inclu d e  th e  e ntire  9 6-b it E PC  cod e , b u t u s e  th e  ta g ’s  pre prog ra m m e d , 38-b it S G TIN s e ria l nu m b e r
in d e cim a l form .*
#Q = inclu d e  th e  e ntire  9 6-b it E PC  cod e , b u t u s e  th e  ta g ’s  pre prog ra m m e d , 38-b it S G TIN s e ria l nu m b e r
in h e x a d e cim a l form .*
ZPL RFID  C om m a nd s
* If th e  E PC  h a s  b e e n pre prog ra m m e d  (ty pica lly  b y  th e  m a nu fa ctu re r) w ith  th e  ch ip-b a s e d  RFID
s e ria liz a tion s ch e m e , th e n th e  s e ria liz e d  d a ta  d oe s  not h a v e  to b e  w ritte n b a ck  to th e  E PC  m e m or y ,
w h ich  s a v e s  tim e . #P and #Q s im ply  form a t th e  d a ta  th a t is  re a d  from  th e  E PC  m e m or y  b a nk .
E x a m p le : Re a d  th e  TID  from  th e  ta g , cre a te  a  s e ria l nu m b e r  b a s e d  on th e  ta g  ty pe , w rite  12<serial
number (5 bytes)>000000000000 to th e  9 6-b it E PC  ﬁ e ld , a nd  print th e  s e ria l nu m b e r  (in h e x
form a t) on th e  la b e l.
^XA
^RU
^FO10,10^A0N,50,50^FDSerial Number: #H^FS
^RFW,H^FD12#H^FS
^XZ
E x a m p le : Re a d  th e  TID  from  th e  ta g , cre a te  a  s e ria l nu m b e r  b a s e d  on th e  ta g  ty pe , w rite  th e  s e ria l nu m b e r
to th e  E PC  ﬁ e ld  (low e r  38 b its ) w h ile  m a inta ining  th e  conte nts  of th e  re s t of th e  E PC  m e m or y , print
Serial Number: <serial number in hex format> on th e  la b e l, a nd  re tu rn Serial Number:
<serial number in hex format> to th e  h os t. Pe r form  th is  ope ra tion on th re e  la b e l form a ts .
^XA
^RU
^FO10,10^A0N,50,50^FN1^FS
^FN1^FDSerial Number: #H^FS
^FH^HV1,24, ,_0D_0A,L^FS
^RFW,H^FD#F^FS
^PQ3
^XZ
E x a m p le : Re a d  th e  fu ll E PC  (a lre a d y  s e ria liz e d ) from  th e  ta g , print Serial Number: <full EPC in
decimal format> on th e  la b e l, a nd  re tu rn Serial Number: <full EPC in decimal format>
to th e  h os t.
^XA
^RU
^FO10,10^A0N,50,50^FN1^FS
^FN1^FDSerial Number: #P^FS
^FH^HV1,44, ,_0D_0A,L^FS
^XZ
ZPL RFID  C om m a nd s
^RW
Us e  th is  com m a nd  to s e t th e  RFID  re a d  a nd  w rite  pow e r  le v e ls  if th e  d e s ire d  le v e ls  a re  not a ch ie v e d
th rou g h  RFID  ta g  ca lib ra tion. If not e nou g h  pow e r  is  a pplie d , th e  ta g  m a y  not h a v e  s u fﬁ cie nt pow e r  for
prog ra m m ing , a nd  ta g  d a ta  w ill fa il to e ncod e . If too m u ch  pow e r  is  a pplie d , th e  e x tra  pow e r  m a y  ca u s e
d a ta  com m u nica tion e rror s  or  m a y  ca u s e  th e  w rong  ta g  to b e  prog ra m m e d .
S e t  RF Po w e r  Le v e ls  f o r  Re a d  a n d  W r it e
NOTE : Printe r s  a u tom a tica lly  s e le ct th e  b e s t a nte nna  e le m e nt a nd  re a d /w rite  pow e r  le v e ls  for
th e  m e d ia  d u ring  RFID  tra ns pond e r  ca lib ra tion. Th e  R110 X i4, ZT40 0  s e rie s , a nd  ZT60 0  s e rie s
printe r s  a ls o m a y  s e t th e  le v e ls  d u ring  a n a d a ptiv e  a nte nna  s w e e p. Us e  ^HL or ~HL on pa g e  413
to v ie w  th e  a nte nna  e le m e nt a nd  pow e r  s e tting s  b e ing  u s e d .
NOTE : For  Ja pa n, th e  printe r’s  m a x im u m  RFID  re a d  a nd  w rite  pow e r  a re  lim ite d  to com ply  w ith
loca l ra d io re g u la tions . A ny  pow e r  s e tting  of 2 4 or  h ig h e r  re s u lts  in th e  s a m e  ou tpu t.
r = re a d  pow e r Th is  pa ra m e te r  s e ts  th e  pow e r  le v e l to m a tch  th e  d e s ire d  ou tpu t a s
ca lib ra te d  in th e  fa ctor y .
R5 3.16 .3, V 5 3.17.5 , a n d  la t e r :
V a lu e s : 0  to 30
De f a u lt : 16
R6 0.16 .4, R6 2.16 .4, R6 3.16 .4, S P994Q , S P999G, S P1027G, S P105 6 F, S P1082G, a n d  la t e r :
V a lu e s : 0 to 30, H (h ig h ), M (m e d iu m ), L (low )
De f a u lt : L
R6 5 .X  a n d  o ld e r  v e r s io n s  o f  o t h e r  ﬁ r m w a r e :
V a lu e s :
H = high
M = medium
L = low
De f a u lt : L
ZPL RFID  C om m a nd s
w = w rite  pow e r NOTE : Th is  pa ra m e te r  is  ig nore d  on th e  R110 X i HF printe r
(ﬁ rm w a re  v e r s ion R65.X ) b e ca u s e  re a d  a nd  w rite  pow e r s  ca nnot
b e  s pe ciﬁ e d  s e pa ra te ly . Th e  printe r  u s e s  th e  v a lu e  th a t y ou
s pe ciﬁ e d  for  re a d  pow e r  for  b oth  th e  re a d  a nd  w rite  pow e r
s e tting s .
Th is  pa ra m e te r  s e ts  th e  pow e r  le v e l to m a tch  th e  d e s ire d  ou tpu t a s
ca lib ra te d  in th e  fa ctor y .
R5 3.16 .3, V 5 3.17.5 , a n d  la t e r :
V a lu e s : 0  to 30
De f a u lt : 16
R6 0.16 .4, R6 2.16 .4, R6 3.16 .4, S P994Q , S P999G, S P1027G, S P105 6 F, S P1082G, a n d  la t e r :
V a lu e s : 0 to 30, H (h ig h ), M (m e d iu m ), L (low )
De f a u lt : L
Old e r  v e r s io n s  o f  ﬁ r m w a r e :
V a lu e s :
H = high
M = medium
L = low
De f a u lt : L
ZPL RFID  C om m a nd s
a = RFID  a nte nna
e le m e nt s e le ction
Z D5 00R, Z Q 5 11/Z Q 5 21, a n d  Z Q 6 30:
Th is  printe r  only  h a s  one  a nte nna  e le m e nt, s o th e  v a lu e  u s e d  is  a lw a y s  A1.
Z T400 a n d  Z T6 00:
Th is  pa ra m e te r  s pe ciﬁ e s  th e  RFID  a nte nna  to b e  u s e d  for  RFID  ope ra tion.
E1, E2, E3, E4
D1, D2, D3, D4
C1, C2, C3, C4
B1, B2, B3, B4
A1, A2, A3, A4
A4
(Co n t in u e d  o n  n e x t  p a g e )

## Example

```zpl
m a nu a l is  a v a ila b le  a t h ttp://w w w .z e b ra .com /m a nu a ls h ttp://w w w .z e b ra .com /m a nu a ls .
```

## Related Commands

_See index.md for commands in the same group._
