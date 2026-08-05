# ^FT

## Description

Th e  ^FT com m a nd  s e ts  th e  ﬁ e ld  pos ition, re la tiv e  to th e  h om e  pos ition of th e  la b e l d e s ig na te d  b y  th e
^LH com m a nd . Th e  ty pe s e tting  orig in of th e  ﬁ e ld  is  ﬁ x e d  w ith  re s pe ct to th e  conte nts  of th e  ﬁ e ld  a nd
d oe s  not ch a ng e  w ith  rota tion.
Fie ld  Ty p e s e t
NOTE : Th e  ^FT com m a nd  is  ca pa b le  of th e  conca te na tion of ﬁ e ld s .

## Format

```
^FT
```

## Parameters

x = x -a x is  loca tion (in
d ots )
V a lu e s : 0 to 32000
De f a u lt : pos ition a fte r  th e  la s t form a tte d  te x t ﬁ e ld
y = y -a x is  loca tion (in
d ots )
V a lu e s : 0 to 32000
De f a u lt : pos ition a fte r  th e  la s t form a tte d  te x t ﬁ e ld
z = ju s tiﬁ ca tion
Th e  z pa ra m e te r  is  only
s u ppor te d  in ﬁ rm w a re
v e r s ion V60 .14.x , V50 .14.x ,
or  la te r.
V a lu e s :
0 = le ft ju s tiﬁ ca tion
1 = rig h t ju s tiﬁ ca tion
2 = a u to ju s tiﬁ ca tion (s cript d e pe nd e nt)
De f a u lt : la s t a cce pte d  ^FW v a lu e  or  ^FW d e fa u lt
Th e  a u to-ju s tiﬁ ca tion option m a y  ca u s e  u ne x pe cte d  re s u lts  if v a ria b le
ﬁ e ld s  or  b id ire ctiona l te x t a re  u s e d  w ith  ^FT. For  b e s t re s u lts  w ith
b id ire ctiona l te x t a nd /or  v a ria b le  ﬁ e ld s , u s e  e ith e r  th e  le ft or  rig h t
ju s tiﬁ ca tion options .
Te x t For  e x a m ple s , s e e  Fie ld  Inte ra ctions  on pa g e  1606 .
Bar
C od e s
O rig in is  th e  b a s e  of b a rcod e , a t th e  le ft e d g e
G ra ph ic
B ox e s
Th e  orig in is  b ottom -le ft corne r  of th e  b ox
Le ft Ju s tiﬁ e d
Im a g e s O rig in is  b ottom -le ft corne r  of th e  im a g e  a re a
Te x t For  e x a m ple s , s e e  Fie ld  Inte ra ctions  on pa g e  1606 .
Bar
C od e s
O rig in is  th e  b a s e  of b a rcod e , a t th e  rig h t e d g e
G ra ph ic
B ox e s
O rig in is  b ottom -rig h t corne r  of th e  b ox
Rig h t Ju s tiﬁ e d
Im a g e s O rig in is  b ottom -rig h t corne r  of th e  im a g e  a re a
Ta b le  7/uni00A0/uni00A0/uni00A0/uni00A0 Ty pe s e t Ju s tiﬁ ca tion
E x a m p le : Th is  is  a n e x a m ple  of th e  ^FT com m a nd  a nd  conca te na tion:
W h e n a  coord ina te  is  m is s ing , th e  pos ition follow ing  th e  la s t form a tte d  ﬁ e ld  is  a s s u m e d . Th is  r e m e m b e r in g
s im pliﬁ e s  ﬁ e ld  pos itioning  w ith  re s pe ct to oth e r  ﬁ e ld s . O nce  th e  ﬁ r s t ﬁ e ld  is  pos itione d , oth e r  ﬁ e ld s
follow  a u tom a tica lly .
Th e re  a re  s e v e ra l ins ta nce s  w h e re  u s ing  th e  ^FT com m a nd  w ith ou t s pe cify ing  x and y pa ra m e te r s  is
not re com m e nd e d :
• w h e n pos itioning  th e  ﬁ r s t ﬁ e ld  in a  la b e l form a t
• a t a ny  tim e  w ith  th e  ^FN (Fie ld  Nu m b e r) com m a nd
• follow ing  a n ^SN (S e ria liz a tion D a ta ) com m a nd
• v a ria b le  d a ta
• b id ire ctiona l te x t
Th e  rig h t ty pe s e t ju s tiﬁ e d  is  a v a ila b le  only  for  printe r s  w ith  ﬁ rm w a re  v e r s ion V60 .14.x , V50 .14.x , or  la te r.
Th is  com m a nd  inte ra cts  w ith  th e  ﬁ e ld  d ire ction pa ra m e te r s  of ^FP a nd  w ith  th e  rota tion pa ra m e te r  of
^A. For  ou tpu t a nd  cod e  e x a m ple s , s e e  Fie ld  Inte ra ctions  on pa g e  1606 .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
