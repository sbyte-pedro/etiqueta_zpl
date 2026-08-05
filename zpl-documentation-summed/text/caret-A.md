# ^A

## Description

Th e  ^A com m a nd  s pe ciﬁ e s  th e  font to u s e  in a  te x t ﬁ e ld . ^A d e s ig na te s  th e  font for  th e  cu rre nt ^FD
s ta te m e nt or  ﬁ e ld . Th e  font s pe ciﬁ e d  b y  ^A is  u s e d  only  once  for  th a t ^FD e ntr y . If a  v a lu e  for  ^A is not
s pe ciﬁ e d  a g a in, th e  d e fa u lt ^CF font is  u s e d  for  th e  ne x t ^FD e ntr y .
S c a la b le /Bit m a p p e d  Fo n t
Fonts  a re  b u ilt u s ing  a  m a trix  th a t d e ﬁ ne s  s ta nd a rd  h e ig h t-to-w id th  ra tios . If y ou  s pe cify  only  th e  h e ig h t
or  w id th  v a lu e , th e  s ta nd a rd  m a trix  for  th a t font a u tom a tica lly  d e te rm ine s  th e  oth e r  v a lu e . If th e  v a lu e  is
not g iv e n or  a  0  (z e ro) is  e nte re d , th e  h e ig h t or  w id th  is  d e te rm ine d  b y  th e  s ta nd a rd  font m a trix .
Th is  com m a nd  inte ra cts  w ith  th e  ju s tiﬁ ca tion pa ra m e te r s  of ^FO and ^FT a nd  w ith  th e  ﬁ e ld  d ire ction
pa ra m e te r  of ^FP. For  ou tpu t a nd  e x a m ple s , s e e  Fie ld  Inte ra ctions  on pa g e  1606 .
^A@
Th e  ^A@ com m a nd  u s e s  th e  com ple te  na m e  of a  font, ra th e r  th a n th e  ch a ra cte r  d e s ig na tion u s e d  in ^A.
O nce  a  v a lu e  for  ^A@ is  d e ﬁ ne d , it re pre s e nts  th a t font u ntil a  ne w  font na m e  is  s pe ciﬁ e d  b y  ^A@.
U s e  Fo n t  Na m e  t o  Ca ll Fo n t

## Format

```
^A fo,h ,w
^A @ o,h ,w ,d :f.x
```

## Parameters

f = font na m e V a lu e s : A th rou g h  Z, and 0 to 9
A ny  font in th e  printe r  (d ow nloa d e d , E PRO M , s tore d  fonts , fonts  A th rou g h  Z and
0 to 9).
IMPORTA NT: Pa ra m e te r  f is  re q u ire d . If f is  om itte d  it d e fa u lts  to th e  la s t
v a lu e  of th e  ^CF com m a nd .
o = ﬁeld
orie nta tion
V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : th e  la s t a cce pte d  ^FW v a lu e  or  th e  ^FW d e fa u lt
h = C h a ra cte r
He ig h t (in d ots )
S c a la b le
V a lu e s : 10 to 32000
De f a u lt : la s t a cce pte d  ^CF
Bit m a p p e d
V a lu e s : m u ltiple s  of h e ig h t from  1 to 10 tim e s  th e  s ta nd a rd  h e ig h t, in incre m e nts  of
De f a u lt : la s t a cce pte d  ^CF
w = w id th  (in
d ots )
S c a la b le
V a lu e s : 10 to 32000
De f a u lt : la s t a cce pte d  ^CF
Bit m a p p e d
V a lu e s : m u ltiple s  of w id th  from  1 to 10 tim e s  th e  s ta nd a rd  w id th , in incre m e nts  of 1
De f a u lt : la s t a cce pte d  ^CF
S c a la b le  Fo n t  Co m m a n d
E x a m p le : Th is  is  a n e x a m ple  of a  s ca la b le  font com m a nd :
Bit m a p  Fo n t  Co m m a n d
E x a m p le : Th is  is  a n e x a m ple  of a  b itm a p font com m a nd :
o = ﬁ e ld  orie nta tion V a lu e s :
N = norm a l
R = rota te s  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : N or  th e  la s t ^FW v a lu e
h = ch a ra cte r  h e ig h t (in
d ots )
De f a u lt :
S pe ciﬁ e s  m a g niﬁ ca tion b y  w (ch a ra cte r  w id th ) or  th e  la s t a cce pte d  ^CF
v a lu e . Us e s  th e  b a s e  h e ig h t if none  is  s pe ciﬁ e d .
• S ca la b le  - Th e  v a lu e  is  th e  h e ig h t in d ots  of th e  e ntire  ch a ra cte r
b lock . M a g niﬁ ca tion fa ctor s  a re  u nne ce s s a r y , b e ca u s e  ch a ra cte r s  a re
s ca le d .
• B itm a ppe d  - Th e  v a lu e  is  rou nd e d  to th e  ne a re s t inte g e r  m u ltiple  of
th e  font’s  b a s e  h e ig h t, th e n d iv id e d  b y  th e  font’s  b a s e  h e ig h t to g iv e  a
m a g niﬁ ca tion ne a re s t lim it.
w = w id th  (in d ots ) De f a u lt : S pe ciﬁ e s  m a g niﬁ ca tion b y  h (h e ig h t) or  th e  la s t a cce pte d  ^CF
v a lu e . S pe ciﬁ e s  th e  b a s e  w id th  is  u s e d  if none  is  s pe ciﬁ e d .
• S ca la b le  -/uni00A0 Th e  v a lu e  is  th e  w id th  in d ots  of th e  e ntire  ch a ra cte r  b lock .
M a g niﬁ ca tion fa ctor s  a re  u nne ce s s a r y , b e ca u s e  ch a ra cte r s  a re
s ca le d .
• B itm a ppe d  - Th e  v a lu e  rou nd s  to th e  ne a re s t inte g e r  m u ltiple  of
th e  font’s  b a s e  w id th , th e n d iv id e d  b y  th e  font’s  b a s e  w id th  to g iv e  a
m a g niﬁ ca tion ne a re s t lim it.
d = d riv e  loca tion of font V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
f = font na m e V a lu e s : a ny  v a lid  font
De f a u lt : if a n inv a lid  or  no na m e  is  e nte re d , th e  d e fa u lt s e t b y  ^CF is  u s e d  If
no font h a s  b e e n s pe ciﬁ e d  in ^CF, font A  is  u s e d .
Th e  font na m e d  ca rrie s  ov e r  on a ll s u b s e q u e nt ^A@ com m a nd s  w ith ou t a
font na m e .
x = e x te ns ion
.TTE is  only  s u ppor te d
in ﬁ rm w a re  v e r s ion
V60 .14.x , V50 .14.x , or  la te r.
V a lu e s :
.FNT = font
.TTF = Tru e Ty pe  Font
.TTE = Tru e Ty pe  E x te ns ion
E x a m p le : Th is  e x a m ple  id e ntiﬁ e s  th e  pu rpos e  of e a ch  line  of cod e  for  th is  la b e l:
1 S ta r ts  th e  la b e l form a t.
2 S e a rch e s  non-v ola tile  printe r  m e m or y  (B:) for  CYRI_UB.FNT. W h e n th e  font is  fou nd , th e
^A@ com m a nd  s e ts  th e  print orie nta tion to norm a l a nd  th e  ch a ra cte r  s iz e  to 50  d ots  b y  50
d ots .
3 S e ts  th e  ﬁ e ld  orig in a t 10 0 ,10 0 .
4 Prints  th e  ﬁ e ld  d a ta , Z e b r a  Pr in t e r  Fo n t s  on th e  la b e l.
5 C a lls  th e  font a g a in a nd  ch a ra cte r  s iz e  is  d e cre a s e d  to 40  d ots  b y  40  d ots .
6 S e ts  th e  ne w  ﬁ e ld  orig in a t 10 0 ,150 .
7 Prints  th e  ﬁ e ld  d a ta , Th is  u s e s  t h e  B:CY RI_U B.FNT on th e  la b e l.
8 E nd s  th e  la b e l form a t.
For  re fe re nce , s e e  Ze b ra  C od e  Pa g e  850  —  La tin C h a ra cte r  S e t on pa g e  1566 , Fonts  a nd /uni00A0B a rcod e s  on
pa g e  1580, and A S C II on pa g e  1578.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^CF` — ^CF sets the default font; ^A overrides it for one field
- `^FD` — ^A must appear before the ^FD it applies to
- `^FO` — ^FO positions the field ^A will render into
