# ^JT

## Description

Th e  ^JT com m a nd  a llow s  y ou  to ch a ng e  th e  printh e a d  te s t inte r v a l from  e v e r y  10 0  la b e ls  to a ny  d e s ire d
inte r v a l. W ith  th e  ^JT com m a nd , th e  printe r  is  a llow e d  to ru n th e  te s t a fte r  printing  a  la b e l. W h e n a
pa ra m e te r  is  d e ﬁ ne d , th e  printe r  ru ns  th e  te s t a fte r  printing  a  s e t a m ou nt of la b e ls .
He a d  Te s t  In t e r v a l
Th e  printe r’s  d e fa u lt h e a d  te s t s ta te  is  off. Pa ra m e te r s  for  ru nning  th e  printh e a d  te s t a re  d e ﬁ ne d  b y  th e
u s e r.
s e le cts  th e  te s t ra ng e  b y  tra ck ing  w h ich  e le m e nts  h a v e  b e e n u s e d  s ince  th e  pre v iou s  te s t.
^JT a ls o tu rns  on A u tom a tic M od e  to s pe cify  th e  ﬁ r s t a nd  la s t e le m e nts  for  th e  h e a d  te s t. Th is  m a k e s  it
pos s ib le  to s e le ct a ny  s pe ciﬁ c a re a  of th e  la b e l or  th e  e ntire  print w id th .
If th e  la s t e le m e nt s e le cte d  is  g re a te r  th a n th e  print w id th  s e le cte d , th e  te s t s tops  a t th e  s e le cte d  print
w id th .
W h e ne v e r  th e  h e a d  te s t com m a nd  is  re ce iv e d , a  h e a d  te s t is  pe r form e d  on th e  ne x t la b e l u nle s s  th e
cou nt is  s e t to 0  (z e ro).

## Format

```
^JT####,a,b,c
```

## Parameters

#### = fou r-d ig it
nu m b e r  of la b e ls  printe d
b e tw e e n h e a d  te s ts
V a lu e s : 0000 to 9999
If a  v a lu e  g re a te r  th a n 9999 is  e nte re d , it is  ig nore d .
De f a u lt : 0000 (off)
a = m a nu a lly  s e le ct
ra ng e  of e le m e nts  to te s t
V a lu e s :
N = no
Y = y e s
In it ia l V a lu e  a t  Po w e r  U p : N
b = ﬁ r s t e le m e nt to
ch e ck  w h e n pa ra m e te r  a
is Y
V a lu e s : 0 to 9999
In it ia l V a lu e  a t  Po w e r  U p : 0
c = la s t e le m e nt to
ch e ck  w h e n pa ra m e te r  a
is Y
V a lu e s : 0 to 9999
In it ia l V a lu e  a t  Po w e r  U p : 9999

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
