# ^FO

## Description

Th e  ^FO com m a nd  s e ts  a  ﬁ e ld  orig in, re la tiv e  to th e  la b e l h om e  (^LH) pos ition. ^FO s e ts  th e  u ppe r-le ft
corne r  of th e  ﬁ e ld  a re a  b y  d e ﬁ ning  points  a long  th e  x -a x is  a nd  y -a x is  ind e pe nd e nt of th e  rota tion.
Fie ld  Or ig in
com ple te ly  off th e  la b e l.
Th is  com m a nd  inte ra cts  w ith  th e  ﬁ e ld  d ire ction pa ra m e te r  of ^FP a nd  w ith  th e  rota tion pa ra m e te r  of ^A.
For  ou tpu t a nd  e x a m ple s , s e e  Fie ld  Inte ra ctions  on pa g e  1606 .
Th e  a u to ju s tiﬁ ca tion option m ig h t ca u s e  u ne x pe cte d  re s u lts  if v a ria b le  ﬁ e ld s  or  b id ire ctiona l te x t a re
u s e d  w ith  ^FO. For  th e  b e s t re s u lts  w ith  b id ire ctiona l te x t a nd /or  v a ria b le  ﬁ e ld s , u s e  e ith e r  th e  le ft of
rig h t ju s tiﬁ ca tion option.

## Format

```
^FOx,y,z
```

## Parameters

x = x -a x is  loca tion (in
d ots )
V a lu e s : 0 to 32000
De f a u lt : 0
y = y -a x is  loca tion (in
d ots )
V a lu e s : 0 to 32000
De f a u lt : 0
z = ju s tiﬁ ca tion
Th e  z pa ra m e te r  is  only
s u ppor te d  in ﬁ rm w a re
v e r s ions  V60 .14.x ,
V50 .14.x , or  la te r.
V a lu e s :
0 = le ft ju s tiﬁ ca tion
1 = rig h t ju s tiﬁ ca tion
2 = a u to ju s tiﬁ ca tion (s cript d e pe nd e nt)
De f a u lt : la s t a cce pte d  ^FW v a lu e  or  ^FW d e fa u lt

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^XA` — label format must be open
- `^FD` — provides the data for the field positioned by ^FO
- `^FS` — closes the field opened after ^FO
- `^LH` — ^FO coordinates are relative to ^LH home position
- `^A` — set font before ^FO for text fields
