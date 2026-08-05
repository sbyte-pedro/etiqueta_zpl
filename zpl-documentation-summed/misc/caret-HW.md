# ^HW

## Description

^HW is  u s e d  to tra ns m it a  d ire ctor y  lis ting  of ob je cts  in a  s pe ciﬁ c m e m or y  a re a  (s tora g e  d e v ice ) b a ck  to
th e  h os t d e v ice . Th is  com m a nd  re tu rns  a  form a tte d  A S C II s tring  of ob je ct na m e s  to th e  h os t.
Ho s t  Dir e c t o r y  Lis t
E a ch  ob je ct is  lis te d  on a  line  a nd  h a s  a  ﬁ x e d  le ng th . Th e  tota l le ng th  of a  line  is  a ls o ﬁ x e d . E a ch  line
lis ting  a n ob je ct b e g ins  w ith  th e  a s te ris k  (*) follow e d  b y  a  b la nk  s pa ce . Th e re  a re  e ig h t s pa ce s  for  th e
ob je ct na m e , follow e d  b y  a  pe riod  a nd  th re e  s pa ce s  for  th e  e x te ns ion. Th e  e x te ns ion is  follow e d  b y
tw o b la nk  s pa ce s , s ix  s pa ce s  for  th e  ob je ct s iz e , tw o b la nk  s pa ce s , a nd  th re e  s pa ce s  for  option ﬂ a g s
(re s e r v e d  for  fu tu re  u s e ). Th e  form a t look s  lik e  th is :
<STX><CR><LF>
DIR R: <CR><LF>
*Name.ext(2sp.)(6 obj. sz.)(2sp.)(3 option flags)
*Name.ext(2sp.)(6 obj. sz.)(2sp.)(3 option flags)
<CR><LF>
-xxxxxxx bytes free
<CR><LF>
<ETX>
<STX> = start of text
<CR><LR> = carriage return/line feed
<ETX> = end on text
Th e  com m a nd  m ig h t b e  u s e d  in a  s ta nd -a lone  ﬁ le  to b e  is s u e d  to th e  printe r  a t a ny  tim e . Th e  printe r
re tu rns  th e  d ire ctor y  lis ting  a s  s oon a s  pos s ib le , b a s e d  on oth e r  ta s k s  it m ig h t b e  pe r form ing  w h e n th e
com m a nd  is  re ce iv e d .
Th is  com m a nd , lik e  a ll ^ (ca re t) com m a nd s , is  proce s s e d  in th e  ord e r  th a t it is  re ce iv e d  b y  th e  printe r.

## Format

```
^HWd:o.x
```

## Parameters

d = loca tion to re trie v e
ob je ct lis ting
V a lu e s : R:, E:, B:, A:and Z:
De f a u lt : R:
o = ob je ct na m e V a lu e s : 1 to 8 a lph a nu m e ric ch a ra cte r s
De f a u lt : a s te ris k  (*). A  q u e s tion m a rk  (?) ca n a ls o b e  u s e d .
x = e x te ns ion V a lu e s : a ny  e x te ns ion conform ing  to Ze b ra  conv e ntions
De f a u lt : a s te ris k  (*). A  q u e s tion m a rk  (?) ca n a ls o b e  u s e d .
f = form a t
Th e  f pa ra m e te r  is  only
s u ppor te d  in ﬁ rm w a re
v e r s ion V60 .16.0 Z a nd
V53.16.0 Z or  la te r.
V a lu e s :
c = colu m n form a t
d = d e fa u lt form a t
De f a u lt : d
E x a m p le : Lis te d  is  a n e x a m ple  of th e  ^HW com m a nd  to re trie v e  from  inform a tion R:
^XA
^HWR:*.*
^XZ
Th e  printe r  re tu rne d  th is  inform a tion a s  th e  Hos t D ire ctor y  Lis ting :-DIR R:*.*
*R:ARIALN1.FNT 49140
*R:ARIALN2.FNT 49140
*R:ARIALN3.FNT 49140
*R:ARIALN4.FNT 49140
*R:ARIALN.FNT 49140
*R:ZEBRA.GRF 8420
-794292 bytes free R:RAM

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
