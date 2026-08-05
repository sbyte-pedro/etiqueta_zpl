# ^CW

## Description

A ll b u ilt-in fonts  a re  re fe re nce d  u s ing  a  one -ch a ra cte r  id e ntiﬁ e r. Th e  ^CW com m a nd  a s s ig ns  a  s ing le
a lph a nu m e ric ch a ra cte r  to a  font s tore d  in D RA M , m e m or y  ca rd , E PRO M , or  Fla s h .
Fo n t  Id e n t iﬁ e r
If th e  a s s ig ne d  ch a ra cte r  is  th e  s a m e  a s  th a t of a  b u ilt-in font, th e  d ow nloa d e d  font is  u s e d  in pla ce  of
th e  b u ilt-in font. Th e  ne w  font is  printe d  on th e  la b e l w h e re v e r  th e  form a t ca lls  for  th e  b u ilt-in font. If
u s e d  in pla ce  of a  b u ilt-in font, th e  ch a ng e  is  in e ffe ct only  u ntil pow e r  is  tu rne d  off.
If th e  a s s ig ne d  ch a ra cte r  is  d iffe re nt, th e  d ow nloa d e d  font is  u s e d  a s  a n a d d itiona l font. Th e  a s s ig nm e nt
re m a ins  in e ffe ct u ntil a  ne w  com m a nd  is  is s u e d  or  th e  printe r  is  tu rne d  off.

## Format

```
^CW
```

## Parameters

a = le tte r  of e x is ting  font
to b e  s u b s titu te d , or  ne w
font to b e  a d d e d
V a lu e s : A th rou g h  Z and 0 to 9
De f a u lt : a  one -ch a ra cte r  e ntr y  is  re q u ire d
d = d e v ice  to s tore  font
in (optiona l)
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = na m e  of th e
d ow nloa d e d  font to b e
s u b s titu te d  for  th e  b u ilt-
in, or  a s  a n a d d itiona l
font
V a lu e s : a ny  na m e  u p to 8 ch a ra cte r s
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion
.TTE is  only  s u ppor te d
in ﬁ rm w a re  v e r s ion
V60 .14.x , V50 .14.x , or  la te r.
V a lu e s :
.FNT = Font
.TTF = Tru e Ty pe  Font
.TTE = Tru e Ty pe  E x te ns ion
E x a m p le : Th e s e  e x a m ple s  s h ow  h ow  to u s e :
• MYFONT.FNT s tore d  in D RA M  w h e ne v e r  a  form a t ca lls  for  Font A :
^XA
^CWA,R:MYFONT.FNT
^XZ
• MYFONT.FNT s tore d  in D RA M  a d d itiona lly  a s  Font Q:
^XA
^CWQ,R:MYFONT.FNT
^XZ
• NEWFONT.FNT s tore d  in D RA M  w h e ne v e r  a  form a t ca lls  for  font F:
^XA
^CWF,R:NEWFONT.FNT
^XZ
Fig u r e  14/uni00A0/uni00A0/uni00A0/uni00A0 La b e l Lis ting  B e fore  A s s ig nm e nt
Fig u r e  15 /uni00A0/uni00A0/uni00A0/uni00A0 La b e l Lis ting  A fte r  A s s ig nm e nt

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
