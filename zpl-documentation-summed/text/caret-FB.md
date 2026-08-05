# ^FB

## Description

Th e  ^FB com m a nd  a llow s  y ou  to print te x t into a  d e ﬁ ne d  b lo c k  t y p e  form a t. Th is  com m a nd  form a ts  a n ^FD
or ^SN s tring  into a  b lock  of te x t u s ing  th e  orig in, font, a nd  rota tion s pe ciﬁ e d  for  th e  te x t s tring . Th e  ^FB
com m a nd  a ls o conta ins  a n a u tom a tic w ord -w ra p fu nction.
Fie ld  Blo c k
Th is  s ch e m e  ca n b e  u s e d  to fa cilita te  s pe cia l fu nctions :
\& = ca rria g e  re tu rn/line  fe e d
\(*) = s oft h y ph e n (w ord  b re a k  w ith  a  d a s h )
\\ = b a ck s la s h  (\ )
It e m  1: ^CI13 m u s t b e  s e le cte d  to print a  b a ck s la s h  (\ ).
It e m  2: If a  s oft h y ph e n e s ca pe  s e q u e nce  is  pla ce d  ne a r  th e  e nd  of a  line , th e  h y ph e n is  printe d . If it is  not
pla ce d  ne a r  th e  e nd  of th e  line , it is  ig nore d .
(*) = a ny  a lph a nu m e ric ch a ra cte r
• If a  w ord  is  too long  to print on one  line  b y  its e lf (a nd  no s oft h y ph e n is  s pe ciﬁ e d ), a  h y ph e n is
a u tom a tica lly  pla ce d  in th e  w ord  a t th e  rig h t e d g e  of th e  b lock . Th e  re m a ind e r  of th e  w ord  is  on th e
ne x t line . Th e  pos ition of th e  h y ph e n d e pe nd s  on w ord  le ng th , not a  s y lla b le  b ou nd a r y . Us e  a  s oft
h y ph e n w ith in a  w ord  to control w h e re  th e  h y ph e na tion occu r s .
• M a x im u m  d a ta -s tring  le ng th  is  3K, inclu d ing  control ch a ra cte r s , ca rria g e  re tu rns , a nd  line  fe e d s .
• Norm a l ca rria g e  re tu rns , line  fe e d s , a nd  w o r d  s p a c e s  a t line  b re a k s  a re  d is ca rd e d .
• W h e n u s ing  ^FT (Fie ld  Ty pe s e t), ^FT u s e s  th e  b a s e line  orig in of th e  la s t pos s ib le  line  of te x t.
Incre a s ing  th e  font s iz e  ca u s e s  th e  te x t b lock  to incre a s e  in s iz e  from  b ottom  to top. Th is  cou ld  ca u s e
a  la b e l to print pa s t its  top m a rg in.
• W h e n u s ing  ^FO (Fie ld  O rig in), incre a s ing  th e  font s iz e  ca u s e s  th e  te x t b lock  to incre a s e  in s iz e  from
top to b ottom .
• ^FS te rm ina te s  a n ^FB com m a nd . E a ch  b lock  re q u ire s  its  ow n ^FB com m a nd .
While the ^FB com m a nd  h a s  a  te x t ju s tiﬁ ca tion pa ra m e te r  th a t d e ﬁ ne s  th e  ju s tiﬁ ca tion of th e  te x t
w ith in th e  b lock , it a ls o inte ra cts  w ith  th e  ju s tiﬁ ca tion of ^FO and ^FT th a t d e ﬁ ne  th e  ju s tiﬁ ca tion of th e
orig in.
Th e  ^FB com m a nd  d oe s  not s u ppor t s oft h y ph e ns  a s  a  pote ntia l line  b re a k point. How e v e r, s oft h y ph e n
ch a ra cte r s  a re  a lw a y s  printe d  a s  if th e y  w e re  a  h y ph e n.
Th e  ^FB com m a nd  d oe s  not s u ppor t com ple x  te x t. For  com ple x  te x t s u ppor t, u s e  ^TB.

## Format

```
^FBa,b,c,d,e
```

## Parameters

a = w id th  of te x t b lock
line  (in d ots )
V a lu e s :
0 to th e  w id th  of th e  la b e l
De f a u lt : 0 If th e  v a lu e  is  le s s  th a n th e  font w id th  or  not s pe ciﬁ e d , th e  te x t
d oe s  not print.
b = m a x im u m  nu m b e r  of
line s  in th e  te x t b lock
V a lu e s : 1 to 9999
De f a u lt : 1 Te x t e x ce e d ing  th e  m a x im u m  nu m b e r  of line s  ov e r w rite s  th e  la s t
line . C h a ng ing  th e  font s iz e  a u tom a tica lly  incre a s e s  or  d e cre a s e s  th e  s iz e
of th e  b lock .
c = a d d  or  d e le te  s pa ce
b e tw e e n line s  (in d ots )
V a lu e s : -9999 to 9999
De f a u lt : 0 Nu m b e r s  a re  cons id e re d  to b e  pos itiv e  u nle s s  pre ce d e d  b y  a
m inu s  s ig n. Pos itiv e  v a lu e s  a d d  s pa ce ; ne g a tiv e  v a lu e s  d e le te  s pa ce .
d = te x t ju s tiﬁ ca tion V a lu e s :
L = le ft
C = ce nte r
R = rig h t
J = ju s tiﬁ e d
De f a u lt : L If J is  u s e d , th e  la s t line  is  le ft-ju s tiﬁ e d .
e = h a ng ing  ind e nt (in
d ots ) of th e  s e cond  a nd
re m a ining  line s
V a lu e s : 0 to 9999De f a u lt : 0
E x a m p le : Th e s e  a re  e x a m ple s  of h ow  th e  ^FB com m a nd  a ffe cts  ﬁ e ld  d a ta .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
