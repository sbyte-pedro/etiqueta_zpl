# ^FW

## Description

Th e  ^FW com m a nd  s e ts  th e  d e fa u lt orie nta tion for  a ll com m a nd  ﬁ e ld s  th a t h a v e  a n orie nta tion (rota tion)
pa ra m e te r  (a nd  in x .14 s e ts  th e  d e fa u lt ju s tiﬁ ca tion for  a ll com m a nd s  w ith  a  ju s tiﬁ ca tion pa ra m e te r).
Fie ld s  ca n b e  rota te d  0 , 9 0 , 1 80 , or  2 7 0  d e g re e s  clock w is e  b y  u s ing  th is  com m a nd . In x .14, ju s tiﬁ ca tion
ca n b e  le ft, rig h t, or  a u to.
Fie ld  Or ie n t a t io n
Th e  ^FW com m a nd  a ffe cts  only  ﬁ e ld s  th a t follow  it. O nce  y ou  h a v e  is s u e d  a  ^FW com m a nd , th e  s e tting  is
re ta ine d  u ntil y ou  tu rn off th e  printe r  or  s e nd  a  ne w  ^FW com m a nd  to th e  printe r.
s pe ciﬁ ca lly  s e t. If a  com m a nd  h a s  a  s pe ciﬁ c rota tion pa ra m e te r, th a t v a lu e  is  u s e d .
^FW a ffe cts  only  th e  ju s tiﬁ ca tion in com m a nd s  w h e re  th e  pa ra m e te r  h a s  not b e e n s e t. If a  com m a nd  h a s
a  s pe ciﬁ c ju s tiﬁ ca tion pa ra m e te r, th a t v a lu e  is  u s e d .

## Format

```
^FW
```

## Parameters

r = rota te  ﬁ e ld V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s
I = inv e r te d  1 80  d e g re e s
B = b ottom -u p 2 7 0  d e g re e s , re a d  from  th e  b ottom  u p
In it ia l V a lu e  a t  Po w e r  U p : N
z = ju s tiﬁ ca tion
Th e  z pa ra m e te r  is
a v a ila b le  only  w ith
printe r s  w ith  ﬁ rm w a re
v e r s ion V60 .14.x , V50 .14.x ,
or  la te r.
V a lu e s :
0 = le ft ju s tiﬁ ca tion
1 = rig h t ju s tiﬁ ca tion
2 = a u to ju s tiﬁ ca tion (s cript d e pe nd e nt)
De f a u lt : a u to for  ^TB a nd  le ft for  a ll oth e r  com m a nd s
E x a m p le : Th is  e x a m ple  s h ow s  h ow  ^FW rota tion w ork s  in conju nction w ith  ^FO. In th is  e x a m ple , note  th a t:
• th e  ﬁ e ld s  u s ing  A 0 N print th e  ﬁ e ld  in norm a l rota tion
• th e  ﬁ e ld s  w ith  no rota tion ind ica te d  (A 0 ) follow  th e  rota tion u s e d  in th e  ^FW com m a nd  (^FWR).

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
