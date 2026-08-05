# ~DS

## Description

Th e  ~DS com m a nd  is  u s e d  to s e t th e  printe r  to re ce iv e  a  d ow nloa d a b le  s ca la b le  font a nd  d e ﬁ ne s  th e
s iz e  of th e  font in b y te s .
Do w n lo a d  In t e llif o n t  (S c a la b le  Fo n t )
Th e  ~DS com m a nd , a nd  its  a s s ocia te d  pa ra m e te r s , is  th e  re s u lt of conv e r ting  a  v e nd or-s u pplie d  font for
u s e  on a  Ze b ra  printe r. To conv e r t th is  font u s e  th e  ZTools  u tility .
u npre d icta b le  re s u lts  a t th e  printe r.
If y ou  a re  u s ing  a  Tru e Ty pe  font u s e  th e s e  com m a nd s : ~DT, ~DU, and ~DY. To d e te rm ine  w h e n to u s e  th e
note d  com m a nd s , s e e  ~ D T on pa g e  179 , ~DU  on pa g e  180, and ~ D Y on pa g e  181.
~ DT
Th e  ~DT com m a nd  in ZPL (Ze b ra  Prog ra m m ing  La ng u a g e ) is  u s e d  to d ow nloa d  a  Tru e Ty pe  font to a
printe r. Th is  a llow s  th e  printe r  to u s e  a  s ta nd a rd  s ca la b le  font for  printing  ins te a d  of a  b u ilt-in b itm a p
font.
Do w n lo a d  Bo u n d e d  Tr u e Ty p e  Fo n t
Us e  ZTools  to conv e r t a  Tru e Ty pe  font to a  Ze b ra -d ow nloa d a b le  form a t. th a t h a s  le s s  th a n 2 56
ch a ra cte r s  in it. To conv e r t a  font th a t h a s  m ore  th a n 2 56 ch a ra cte r s , s e e  ~DU  on pa g e  180.
ZTools  cre a te s  a  d ow nloa d a b le  ﬁ le  th a t inclu d e s  a  ~DT com m a nd . For  inform a tion on conv e r ting  a nd
d ow nloa d ing  Inte llifont inform a tion, s e e  ~DS  on pa g e  178.

## Format

```
~DSd:o.x,s,data
~DTd:o.x,s,data
```

## Parameters

d = d e v ice  to s tore
im a g e
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = im a g e  na m e V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion Fix e d  V a lu e : .FNT
s = s iz e  of font in b y te s Fix e d  V a lu e : th is  nu m b e r  is  g e ne ra te d  b y  ZTools  a nd  s h ou ld  not b e  ch a ng e d
data = A S C II
h e x a d e cim a l s tring  th a t
d e ﬁ ne s  font
Fix e d  V a lu e : th is  nu m b e r  is  g e ne ra te d  b y  ZTools  a nd  s h ou ld  not b e  ch a ng e d
E x a m p le : Th is  e x a m ple  s h ow s  th e  ﬁ r s t th re e  line s  of a  s ca la b le  font th a t w a s  conv e r te d  u s ing  th e  ZTools
prog ra m  a nd  is  re a d y  to b e  d ow nloa d e d  to th e  printe r. If ne ce s s a r y , th e  d e s tina tion a nd  ob je ct na m e  ca n
b e  ch a ng e d .
~DSB:CGTIMES.FNT,37080,
OOFFOOFFOOFFOOFF
FFOAECB28FFFOOFF
d = font loca tion V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = font na m e V a lu e s : a ny  v a lid  Tru e Ty pe  na m e , u p to 8 ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion Fix e d  V a lu e : .DAT
s = font s iz e V a lu e s : th e  nu m b e r  of m e m or y  b y te s  re q u ire d  to h old  th e  Ze b ra -
d ow nloa d a b le  form a t of th e  font
De f a u lt : if a n incorre ct v a lu e  or  no v a lu e  is  e nte re d , th e  com m a nd  is
ig nore d
data = d a ta  s tring V a lu e s : a  s tring  of A S C II h e x a d e cim a l v a lu e s  (tw o h e x a d e cim a l d ig its /b y te ).
Th e  tota l nu m b e r  of tw o-d ig it v a lu e s  m u s t m a tch  pa ra m e te r  s.
De f a u lt : if no d a ta  is  e nte re d , th e  com m a nd  is  ig nore d
E x a m p le : Th is  is  a n e x a m ple  of h ow  to d ow nloa d  a  tru e  ty pe  font:
~DTR:FONT,52010,00AF01B0C65E...
(52 0 10  tw o-d ig it h e x a d e cim a l v a lu e s )

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
