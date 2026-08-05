# ^WD

## Description

Th e  ^WD com m a nd  is  u s e d  to print a  la b e l lis ting  b a r  cod e s , ob je cts  s tore d  in D RA M , or  fonts .
Pr in t  Dir e c t o r y  La b e l
For  b a r  cod e s , th e  lis t s h ow s  th e  na m e  of th e  b a r  cod e . For  fonts , th e  lis t s h ow s  th e  na m e  of th e  font, th e
nu m b e r  to u s e  w ith  ^A com m a nd , a nd  s iz e . For  ob je cts  s tore d  in D RA M , th e  lis t s h ow s  th e  na m e  of th e
ob je ct, e x te ns ion, s iz e , a nd  option ﬂ a g s . A ll lis ts  a re  e nclos e d  in a  d ou b le -line  b ox .

## Format

```
^WD
```

## Parameters

d = s ou rce  d e v ice  —
optiona l
V a lu e s : R:, E:, B:, A: and Z:
De f a u lt : R:
o = ob je ct na m e  —
optiona l
V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : * /uni00A0Th e  u s e  of a  ? (q u e s tion m a rk ) is  a ls o a llow e d .
x = e x te ns ion —  optiona l
.TTF and .TTE a re  only
s u ppor te d  in ﬁ rm w a re
v e r s ion V60 .14.x , V50 .14.x ,
or  la te r.
V a lu e s : a ny  e x te ns ion conform ing  to Ze b ra  conv e ntions
.FNT =font
.BAR = b a r  cod e
.ZPL = s tore d  ZPL form a t
.GRF = G RF g ra ph ic
.CO = m e m or y  ca ch e
.DAT = font e ncod ing
.BAS = ZB I e ncr y pte d  prog ra m
.BAE = ZB I e ncr y pte d  prog ra m
.STO = d a ta  s tora g e
.PNG = PNG  g ra ph ic
* = a ll ob je cts .
TTF = Tru e Ty pe  Font
.TTE = Tru e  Ty pe  E x te ns ion
De f a u lt : * /uni00A0Th e  u s e  of a  ? (q u e s tion m a rk ) is  a ls o a llow e d .
E x a m p le : To print a  la b e l lis ting  a ll ob je cts  in D RA M , e nte r:
^XA
^WDR:*.*
^XZ
E x a m p le : To print a  la b e l lis ting  a ll re s id e nt b a r  cod e s , e nte r:
^XA
^WDZ:*.BAR
^XZ
E x a m p le : To print a  la b e l lis ting  a ll re s id e nt fonts , e nte r:

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
