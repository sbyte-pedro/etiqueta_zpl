# ^KN

## Description

Th e  printe r’s  ne tw ork  na m e  a nd  d e s cription ca n b e  s e t u s ing  th e  ^KN com m a nd . ^KN is  d e s ig ne d  to
m a k e  y ou r  Ze b ra  printe r  e a s y  for  u s e r s  to id e ntify . Th e  na m e  th e  a d m inis tra tor  d e s ig na te s  is  lis te d  on
th e  conﬁ g u ra tion la b e l a nd  on th e  W e b  pa g e  g e ne ra te d  b y  th e  printe r.
De ﬁ n e  Pr in t e r  Na m e

## Format

```
^KNa,b
NOTE : If y ou  is s u e  th e  com m a nd  ^KN, (w ith ou t th e  a  a nd  b  pa ra m e te r s ) y ou  a re  s e tting  th e
printe r  na m e  a nd  d e s cription to a  b la nk  s tring .
To ca u s e  th e  printe r  na m e  a nd  printe r  d e s cription s e tting s  controlle d  b y  th e  ^KN com m a nd  to b e  s a v e d ,
y ou  m u s t is s u e  th e  ^JUS com m a nd .
```

## Parameters

a = printe r  na m e V a lu e s : u p to 16 a lph a nu m e ric ch a ra cte r s
De f a u lt :
• If no printe r  na m e  is  s pe ciﬁ e d  in a  printe r  w ith  a  M A C  a d d re s s , th e
printe r  na m e  w ill d e fa u lt to "ZB Rx x x ," w h e re  x x x  is  th e  la s t th re e  octe ts
of th e  M A C  a d d re s s  conv e r te d  into A S C II te x t.
• For  printe r s  w ith ou t a  M A C  a d d re s s , if a  v a lu e  is  not e nte re d , th e
cu rre nt s tore d  v a lu e  is  e ra s e d .
If m ore  th a n 16 ch a ra cte r s  a re  e nte re d , only  th e  ﬁ r s t 16 a re  u s e d .
b = printe r  d e s cription V a lu e s : u p to 35 a lph a nu m e ric ch a ra cte r s
De f a u lt : /uni00A0if a  v a lu e  is  not e nte re d , th e  cu rre nt s tore d  v a lu e  is  e ra s e d  If m ore
th a n 35 ch a ra cte r s  a re  e nte re d , only  th e  ﬁ r s t 35 a re  u s e d .
Th e  v a lu e  of th is  pa ra m e te r  w ill b e  d is pla y e d  on th e  printe r’s  w e b  pa g e  in
pa re nth e s e s .
E x a m p le : Th is  is  a n e x a m ple  of h ow  to ch a ng e  th e  printe r’s  ne tw ork  na m e  a nd  d e s cription. Th e  s a m ple
la b e ls  s h ow  h ow  a  conﬁ g u ra tion look s  b e fore  u s ing  th is  com m a nd  a nd  a fte r  u s ing  th is  com m a nd :
^XA
^KNZebra1,desk_printer
^XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
