# ^FN

## Description

Th e  ^FN com m a nd  nu m b e r s  th e  d a ta  ﬁ e ld s . Th is  com m a nd  is  u s e d  in b oth  ^DF (S tore  Form a t) a nd  ^XF
(Re ca ll Form a t) com m a nd s .
Fie ld  Nu m b e r
In a  s tore d  form a t, u s e  th e  ^FN com m a nd  w h e re  y ou  w ou ld  norm a lly  u s e  th e  ^FD (Fie ld  D a ta ) com m a nd .
In re ca lling  th e  s tore d  form a t, u s e  ^FN in conju nction w ith  th e  ^FD com m a nd .
Th e  optiona l "a" pa ra m e te r  ca n b e  u s e d  w ith  th e  KD U Plu s  to ca u s e  prom pts  to b e  d is pla y e d  on th e
KD U u nit. A ls o, w h e n th e  Print on La b e l link  is  s e le cte d  on th e  D ire ctor y  pa g e  of Ze b ra Link  e na b le d
printe r s  th e  ﬁ e ld  prom pt d is pla y s .
Th e  nu m b e r  of ﬁ e ld s  a nd  d a ta  th a t ca n b e  s tore d  is  d e pe nd e nt in th e  a v a ila b le  printe r  m e m or y .
NOTE : Th e  m a x im u m  nu m b e r  of ^FN com m a nd s  th a t ca n b e  u s e d  d e pe nd s  on th e  a m ou nt of
d a ta  th a t is  pla ce d  in th e  ﬁ e ld s  on th e  la b e l. It is  re com m e nd e d  to u s e  40 0  or  fe w e r  ﬁ e ld s .
• Th e  s a m e  ^FN v a lu e  ca n b e  s tore d  w ith  s e v e ra l d iffe re nt ﬁ e ld s .
• If a  la b e l form a t conta ins  a  ﬁ e ld  w ith  ^FN and ^FD, th e  d a ta  in th a t ﬁ e ld  prints  for  a ny  oth e r  ﬁ e ld
conta ining  th e  s a m e  ^FN v a lu e .
• For  th e  "a" pa ra m e te r  to fu nction a s  a  prom pt th e  ch a ra cte r s  u s e d  in th e  "a" pa ra m e te r  m u s t b e
s u rrou nd e d  b y  d ou b le  q u ote s  (s e e  e x a m ple ).
Th e  ^FN1"Name" w ou ld  re s u lt in "Name" b e ing  u s e d  a s  th e  prom pt on th e  KD U u nit.

## Format

```
^FN#"a"
```

## Parameters

# = nu m b e r  to b e
a s s ig ne d  to th e  ﬁ e ld
V a lu e s : 0 to 9999
De f a u lt : 0
"a" = optiona l
pa ra m e te r *
V a lu e s : 2 55 a lph a nu m e ric ch a ra cte r s  m a x im u m  (a -z ,A -Z,1-9  a nd  s pa ce )
De f a u lt : optiona l pa ra m e te r
* Th is  pa ra m e te r  is  only  a v a ila b le  on printe r s  w ith  ﬁ rm w a re  V50 .13.2 , V53.15.5Z, V60 .13.0 .1, or  la te r. For
a  com ple te  e x a m ple  of th e  ^DF and ^XF com m a nd , s e e  E x e rcis e  6: ^D F a nd  ^X F - D ow nloa d  Form a t
a nd  Re ca ll Form a t.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
