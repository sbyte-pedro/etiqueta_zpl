# ^CF

## Description

Th e  ^CF com m a nd  s e ts  th e  d e fa u lt font u s e d  in y ou r  printe r. You  ca n u s e  th e  ^CF com m a nd  to s im plify
y ou r  prog ra m s .
Ch a n g e  t h e  A lp h a n u m e r ic  De f a u lt  Fo n t
Z a nd  0  to 9, ca n a ls o b e  s e le cte d  w ith  ^CW.

## Format

```
^CFf,h,w
```

## Parameters

f = s pe ciﬁ e d  d e fa u lt
font
V a lu e s : A th rou g h  Z and 0 to 9
In it ia l V a lu e  a t  Po w e r  U p : A
h = ind iv id u a l ch a ra cte r
h e ig h t (in d ots )
V a lu e s : 0 to 32000
In it ia l V a lu e  a t  Po w e r  U p : 9
w = ind iv id u a l ch a ra cte r
w id th  (in d ots )
V a lu e s : 0 to 32000
In it ia l V a lu e  a t  Po w e r  U p : 5 or  la s t pe rm a ne nt s a v e d  v a lu e
Pa ra m e te r  f s pe ciﬁ e s  th e  d e fa u lt font for  e v e r y  a lph a nu m e ric ﬁ e ld . Pa ra m e te r  h is  th e  d e fa u lt h e ig h t for
e v e r y  a lph a nu m e ric ﬁ e ld , a nd  pa ra m e te r  w  is  th e  d e fa u lt w id th  v a lu e  for  e v e r y  a lph a nu m e ric ﬁ e ld .
Th e  d e fa u lt a lph a nu m e ric font is  A . If y ou  d o not ch a ng e  th e  a lph a nu m e ric d e fa u lt font a nd  d o not u s e
a ny  a lph a nu m e ric ﬁ e ld  com m a nd  (^AF) or  e nte r  a n inv a lid  font v a lu e ; a ny  d a ta  y ou  s pe cify  prints  in font
A.
D e ﬁ ning  only  th e  h e ig h t or  w id th  force s  th e  m a g niﬁ ca tion to b e  propor tiona l to th e  pa ra m e te r  d e ﬁ ne d .
If ne ith e r  v a lu e  is  d e ﬁ ne d , th e  la s t ^CF v a lu e s  g iv e n or  th e  d e fa u lt ^CF v a lu e s  for  h e ig h t a nd  w id th  a re
u s e d .
E x a m p le
Th is  is  a n e x a m ple  of ^CF cod e  a nd  th e  re s u lt of th e  cod e :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^A` — ^A overrides ^CF for a single field
