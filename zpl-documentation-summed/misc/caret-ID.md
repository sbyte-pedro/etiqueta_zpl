# ^ID

## Description

Th e  ^ID com m a nd  d e le te s  ob je cts , g ra ph ics , fonts , a nd  s tore d  form a ts  from  s tora g e  a re a s . O b je cts  ca n
b e  d e le te d  s e le ctiv e ly  or  in g rou ps . Th is  com m a nd  ca n b e  u s e d  w ith in a  printing  form a t to d e le te  ob je cts
b e fore  s a v ing  ne w  one s , or  in a  s ta nd -a lone  form a t to d e le te  ob je cts .
Ob je c t  De le t e
Th e  im a g e  na m e  a nd  e x te ns ion s u ppor t th e  u s e  of th e  a s te ris k  (*) a s  a  w ild  ca rd . Th is  a llow s  y ou  to
e a s ily  d e le te  a  s e le cte d  g rou ps  of ob je cts .

## Format

```
^IDd:o.x
```

## Parameters

d = loca tion of s tore d
ob je ct
V a lu e s : R:, E:, B:, and A:
De f a u lt : R:
o = ob je ct na m e V a lu e s : a ny  1 to 8 ch a ra cte r  na m e
De f a u lt : if a  na m e  is  not s pe ciﬁ e d , UNKNO W N is  u s e d
x = e x te ns ion V a lu e s : a ny  e x te ns ion conform ing  to Ze b ra  conv e ntions
De f a u lt : .GRF
To d e le te  s tore d  form a ts  from  D RA M :
^XA
^IDR:*.ZPL^FS
^XZ
To d e le te  form a ts  a nd  im a g e s  na m e d  S A M PLE  from  D RA M , re g a rd le s s  of th e  e x te ns ion:
^XA
^IDR:SAMPLE.*^FS
^XZ
To d e le te  th e  im a g e  SAMPLE1.GRF prior  to s toring  SAMPLE2.GRF:
^XA
^FO25,25^AD,18,10
^FDDelete^FS
^FO25,45^AD,18,10
^FDthen Save^FS
^IDR:SAMPLE1.GRF^FS
^ISR:SAMPLE2.GRF^FS^XZ
In th is  th e  * is  a  w ild  ca rd , ind ica ting  th a t a ll ob je cts  w ith  th e  .GRF e x te ns ion a re  d e le te d :
^XA
^IDR:*.GRF^FS

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
