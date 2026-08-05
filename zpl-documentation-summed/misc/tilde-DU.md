# ~DU

## Description

S om e  inte rna tiona l fonts , s u ch  a s  A s ia n fonts , h a v e  m ore  th a n 2 56 printa b le  ch a ra cte r s . Th e s e  fonts  a re
s u ppor te d  a s  la r g e  Tr u e Ty p e  f o n t s  a nd  a re  d ow nloa d e d  to th e  printe r  w ith  th e  ~DU com m a nd .
Do w n lo a d  U n b o u n d e d  Tr u e Ty p e  Fo n t
Us e  ZTools  to conv e r t th e  la rg e  Tru e Ty pe  fonts  to a  Ze b ra -d ow nloa d a b le  form a t.
Th e  Fie ld  B lock  (^FB) com m a nd  ca nnot s u ppor t th e  la rg e  Tru e Ty pe  fonts .
C om pre s s ion on pa g e  1602 .
Th e s e  a re  s om e  im por ta nt th ing s  to k now  a b ou t th is  com m a nd  in ﬁ rm w a re  v e r s ion V60 .14.x , V50 .14.x , or
la te r:
• Ze b ra Ne t B rid g e  ca n b e  u s e d  to d ow nloa d  fonts  a nd  g ra ph ics  w ith  th is  com m a nd .
• O pe nTy pe  ta b le s  a re  only  s u ppor te d  w h e n d ow nloa d ing  th e  font w ith  th is  com m a nd
• O pe nTy pe  fonts  (.OTF) a re  s u ppor te d  if th e y  a re  d ow nloa d e d  a s  a  Tru e Ty pe  font. In th e  printe r  .OTF
fonts  h a v e  th e  .TTF e x te ns ion.
~ E G
E r a s e  Do w n lo a d  Gr a p h ic s
See ^ID on pa g e  245.

## Format

```
~DU
```

## Parameters

d = font loca tion V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = font na m e V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion Fo r m a t : .FNT
s = font s iz e V a lu e s : th e  nu m b e r  of m e m or y  b y te s  re q u ire d  to h old  th e  Ze b ra -
d ow nloa d a b le  form a t of th e  font
De f a u lt : if no d a ta  is  e nte re d , th e  com m a nd  is  ig nore d
data = d a ta  s tring V a lu e s : a  s tring  of A S C II h e x a d e cim a l v a lu e s  (tw o h e x a d e cim a l d ig its /b y te ).
Th e  tota l nu m b e r  of tw o-d ig it v a lu e s  m u s t m a tch  pa ra m e te r  s.
De f a u lt : if no d a ta  is  e nte re d , th e  com m a nd  is  ig nore d
E x a m p le : Th is  is  a n e x a m ple  of h ow  to d ow nloa d  a n u nb ou nd e d  tru e  ty pe  font:
~DUR:KANJI,86753,60CA017B0CE7...
(867 53 tw o-d ig it h e x a d e cim a l v a lu e s )
For  s im ila r  com m a nd s , s e e  ~DS  on pa g e  178, ~ D T on pa g e  179 , and ~ D Y on pa g e  181.
~ DY
Th e  ~DY com m a nd  d ow nloa d s  to th e  printe r  g ra ph ic ob je cts  or  fonts  in a ny  s u ppor te d  form a t. Th is
com m a nd  ca n b e  u s e d  in pla ce  of ~DG for  m ore  s a v ing  a nd  loa d ing  options . ~DY is  th e  pre fe rre d
com m a nd  to d ow nloa d  Tru e Ty pe  fonts  on printe r s  w ith  ﬁ rm w a re  la te r  th a n X .13. It is  fa s te r  th a n ~DU. Th e
~DY com m a nd  a ls o s u ppor ts  d ow nloa d ing  w ire le s s  ce r tiﬁ ca te  ﬁ le s .
Do w n lo a d  Ob je c t s
NOTE : Note : W h e n u s ing  ce r tiﬁ ca te  ﬁ le s , y ou r  printe r  s u ppor ts :
• Us ing  Priv a cy  E nh a nce d  M a il (PE M ) form a tte d  ce r tiﬁ ca te  ﬁ le s .
• Us ing  th e  clie nt ce r tiﬁ ca te  a nd  priv a te  k e y  a s  tw o ﬁ le s , e a ch  d ow nloa d e d  s e pa ra te ly .
• Us ing  e x por ta b le  PA C  ﬁ le s  for  E A P-FA S T.
• Ze b ra  re com m e nd s  u s ing  Line a r  s ty le  m e m or y  d e v ice s  for  s toring  la rg e r  ob je cts .
d = ﬁ le  loca tion
.NRD and .PAC ﬁ le s
re s id e  on E : in ﬁ rm w a re
v e r s ions  V60 .15.x ,
V50 .15.x , or  la te r.
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
f = ﬁ le  na m e V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
b = form a t d ow nloa d e d
in d a ta  ﬁ e ld
.TTE and .TTF a re  only
s u ppor te d  in ﬁ rm w a re
v e r s ions  V60 .14.x ,
V50 .14.x , or  la te r.
V a lu e s :
A = u ncom pre s s e d  (ZB 64, A S C II)
B = u ncom pre s s e d  (.TTE, .TTF, b ina r y )
C = A R-com pre s s e d  (u s e d  only  b y  Ze b ra ’s  B A R-O NE ®  v 5)
P = por ta b le  ne tw ork  g ra ph ic (.PNG) - ZB 64 e ncod e d
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d
x = e x te ns ion of s tore d
ﬁle
.TTE and .OTF a re  only
s u ppor te d  in ﬁ rm w a re
v e r s ions  V60 .14.x ,
V50 .14.x , or  la te r.
.NRD and .PAC a re  only
s u ppor te d  in ﬁ rm w a re
v e r s ions  V60 .15.x ,
V50 .15.x , or  la te r.
V a lu e s :
B = b itm a p
E = Tru e Ty pe  E x te ns ion (.TTE)
G = ra w  b itm a p (.GRF)
P = s tore  a s  com pre s s e d  (.PNG)
T = Tru e Ty pe  (.TTF) or  O pe nTy pe  (.OTF)
X = Pa intb ru s h  (.PCX)
NRD = Non Re a d a b le  File  (.NRD)
PAC = Prote cte d  A cce s s  C re d e ntia l (.PAC)
C = Us e r  d e ﬁ ne d  m e nu  ﬁ le  (W M L)
F = Us e r  d e ﬁ ne d  w e b pa g e  ﬁ le  (HTM )
H = Printe r  fe e d b a ck  ﬁ le  (G E T)
De f a u lt : a  v a lu e  oth e r  th a n th e  a cce pte d  v a lu e s  d e fa u lts  to .GRF
t = tota l nu m b e r  of b y te s
in ﬁle
Fig u r e  16 /uni00A0/uni00A0/uni00A0/uni00A0
.TTE is  only  s u ppor te d
in ﬁ rm w a re  v e r s ions
V60 .14.x , V50 .14.x , or  la te r.
V a lu e s :
.BMP
Th is  pa ra m e te r  re fe r s  to th e  a ctu a l s iz e  of th e  ﬁ le , not th e  a m ou nt of d is k
s pa ce .
.GRF im a g e s : th e  s iz e  a fte r  d e com pre s s ion into m e m or y
Th is  pa ra m e te r  re fe r s  to th e  a ctu a l s iz e  of th e  ﬁ le , not th e  a m ou nt of d is k
s pa ce .
.PCX
Th is  pa ra m e te r  re fe r s  to th e  a ctu a l s iz e  of th e  ﬁ le , not th e  a m ou nt of d is k
s pa ce .
.PNG im a g e s :
Th is  pa ra m e te r  re fe r s  to th e  a ctu a l s iz e  of th e  ﬁ le , not th e  a m ou nt of d is k
s pa ce .
.TTF
Th is  pa ra m e te r  re fe r s  to th e  a ctu a l s iz e  of th e  ﬁ le , not th e  a m ou nt of d is k
s pa ce .
.TTE
Th is  pa ra m e te r  re fe r s  to th e  a ctu a l s iz e  of th e  ﬁ le , not th e  a m ou nt of d is k
s pa ce .
w = tota l nu m b e r  of
b y te s  pe r  row
.TTE is  only  s u ppor te d
in ﬁ rm w a re  v e r s ion
V60 .14.x , V50 .14.x , or  la te r.
.NRD and .PAC ﬁ le s  a re
s u ppor te d  in ﬁ rm w a re
v e r s ion V60 .15.x , V50 .15.x ,
or  la te r.
V a lu e s :
.GRF im a g e s : nu m b e r  of b y te s  pe r  row
.PNG im a g e s : v a lu e  ig nore d
.TTF im a g e s : v a lu e  ig nore d
.TTE im a g e s : v a lu e  ig nore d
.NRD im a g e s : v a lu e  ig nore d
.PAC im a g e s : v a lu e  ig nore d
data = d a ta A S C II h e x a d e cim a l e ncod ing , ZB 64, or  b ina r y  d a ta , d e pe nd ing  on b.
A, P = A S C II h e x a d e cim a l or  ZB 64
B, C = b ina r y
W h e n b ina r y  d a ta  is  s e nt, a ll control pre ﬁ x e s  a nd  ﬂ ow  control ch a ra cte r s
a re  ig nore d  u ntil th e  tota l nu m b e r  of b y te s  ne e d e d  for  th e  g ra ph ic form a t
is  re ce iv e d .
NOTE : W h e n tra ns m itting  fonts  or  g ra ph ics , th e  ~DY com m a nd  a nd  th e  b ina r y  conte nt ca n b e
s e nt a s  tw o s e pa ra te  d a ta  s tre a m s . In ca s e s  w h e re  th e  ~DY com m a nd  a nd  d a ta  conte nt a re
s e nt s e pa ra te ly , th e  conne ction to th e  printe r  m u s t b e  m a inta ine d  u ntil b oth  th e  com m a nd  a nd
d a ta  conte nt h a v e  b e e n s e nt. If th e  com m a nd  a nd  d a ta  conte nt a re  s e nt s e pa ra te ly , th e  d a ta
lig h t on th e  printe r  w ill re m a in lit u ntil it re ce iv e s  a ll th e  d a ta  ca lle d  for  in th e  ~DY com m a nd .
Th e  d ow nloa d  w ill b e  cons id e re d  com ple te  w h e n th e  nu m b e r  of b y te s  ca lle d  ou t in th e  ~DY
com m a nd  h a v e  b e e n re ce iv e d .
For  b e s t re s u lts , g ra ph ic ﬁ le s  m u s t b e  m onoch rom e  (b la ck  a nd  w h ite ) or  d ith e re d .
E x a m p le : Th is  is  a n e x a m ple  of h ow  to d ow nloa d  a  b ina r y  Tru e Ty pe  Font ﬁ le  of S iz e  b y te s  u s ing  th e  na m e
fontﬁ le .ttf a nd  s toring  it to pe rm a ne nt ﬂ a s h  m e m or y  on th e  printe r:
~DYE:FONTFILE.TTF,B,T,SIZE,,
Th e s e  e x a m ple s  s h ow :
• th a t w h e n th e  ^IM com m a nd  is  u s e d  w ith  th e  ^FO com m a nd , th e  ^IM com m a nd  (s e e  ^IM on pa g e
248) m ov e s  th e  logo.png ﬁ le  from  a  s tora g e  a re a  to th e  0 ,0  pos ition on th e  la b e l. Th is  is  th e  ZPL
cod e :
^XA
^FO0,0^IMR:LOGO.PNG^FS
^XZ
• th a t w h e n th e  ^IL com m a nd  (s e e  ^IL on pa g e  247 ) is  u s e d  a t th e  b e g inning  of a  la b e l form a t, it
loa d s  a  s tore d  im a g e  (logo.png) of a  form a t a nd  m e rg e s  it w ith  a d d itiona l d a ta . It is  a u tom a tica lly
pos itione d  a t th e  0 ,0  pos ition of th e  la b e l a nd  d oe s  not re q u ire  th e  ^FO com m a nd . Th is  is  th e  ZPL
cod e :
^XA
^ILR:LOGO.PNG
^X

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
