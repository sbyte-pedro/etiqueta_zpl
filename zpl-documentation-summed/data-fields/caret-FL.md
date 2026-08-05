# ^FL

## Description

Th e  ^FL com m a nd  prov id e s  th e  a b ility  to link  a ny  Tru e Ty pe  font, inclu d ing  priv a te  ch a ra cte r  fonts , to
a s s ocia te d  fonts .
Fo n t  Lin k in g
If th e  b a s e  font d oe s  not h a v e  a  g ly ph  for  th e  re q u ire d  ch a ra cte r, th e  printe r  look s  to th e  link e d  fonts  for
th e  g ly ph . Th e  font link s  a re  u s e r-d e ﬁ na b le . Th e  font link ing  re m a ins  u ntil th e  link  is  b rok e n or  th e  printe r
is  tu rne d  off. To pe rm a ne ntly  s a v e  th e  font link ing , u s e  th e  ^JUS com m a nd .
NOTE : For  a s s is ta nce  in s e tting  u p th e  font link s , u s e  th e  font w iz a rd  in Ze b ra Ne t/uni00A0B rid g e .
font in th e  lis t of font link s , b u t is  not inclu d e d  in th e  ﬁ v e -link  m a x im u m . It ca n a ls o b e  pla ce d  a ny w h e re
in th e  font link s  lis t.
Th e  d e fa u lt g ly ph  prints  w h e n a  g ly ph  ca nnot b e  fou nd  in a ny  of th e  fonts  in th e  link  lis t. Th e  a d v a nce d
la y ou t com m a nd  ^PA d e te rm ine s  if th e  d e fa u lt g ly ph  is  a  s pa ce  ch a ra cte r  or  th e  d e fa u lt g ly ph  of th e
b a s e  font, w h ich  is  ty pica lly  a  h ollow  b ox .
Th e  lis t of font link s  ca n b e  printe d  b y  u s ing  th e  ^LF com m a nd  or  re trie v e d  w ith  th e  ^HT com m a nd .
E x a m p le : Th e s e  e x a m ple s  s h ow  th e  cod e  a nd  ou tpu t for  no font link ing  a nd  for  font link ing :
No Font Linking
In th e  no-font link ing  e x a m ple , th e  S w is s 7 2 1 font d oe s  not h a v e  A s ia n g ly ph s , w h ich  is  w h y  A s ia n g ly ph s
d o not print.
Font Linking
In th e  font link ing  e x a m ple , th is  cod e  is  s e nt d ow n to link  th e  ANMDJ.TTF font to SWISS721.TTF font:
^XA
^FLE:ANMDJ.TTF,E:SWISS721.TTF,1^FS
^XZ
W h e n th e  la b e l prints , th e  A s ia n ch a ra cte r s  a re  printe d  u s ing  th e  ANMDJ.TTF font, ra th e r  th a n th e
SWISS721.TTF font.

## Format

```
^FL<ext>,<base>,<link>
```

## Parameters

<ext> Th is  is  th e  fu lly -q u a liﬁ e d  ﬁ le na m e  of th e  e x te ns ion. Th is  ﬁ le  na m e  d oe s
not a cce pt w ild ca rd s .
Th e  s u ppor te d  e x te ns ions  for  th is  pa ra m e te r  a re : .TTF and .TTE. Th e
form a t for  th is  pa ra m e te r  is  th e  m e m or y  d e v ice  follow e d  b y  th e  font
na m e  w ith  th e  e x te ns ion, a s  follow s :
E:SWISS721.TTF
<base> Th is  is  th e  ﬁ le na m e  of th e  b a s e  font(s ). Th e  b a s e  font ca n b e  a ny  of th e
follow ing  ty pe s :
.FNT
.TTF or
.TTE
From  th e s e  font ty pe s , y ou  ca n only  link  to a  .TTF or TTE.
Th e  na m e  of th e  b a s e  font ca n b e  e x pre s s e d  a s  a  w ild  ca rd ; d oing  s o w ill
d e ﬁ ne  m u ltiple  b a s e  fonts . Th e  re s u lt w ill b e  th a t a ll b a s e  font ﬁ le s  s o
d e ﬁ ne d  w ill b e  link e d  to th e  ﬁ le  d e ﬁ ne d  in th e  <ext> pa ra m e te r.
Th e  ﬁ le na m e  d oe s  not h a v e  to m a tch  a  ﬁ le  th a t is  cu rre ntly  d e ﬁ ne d  on
th e  printe r. A  s pe ciﬁ ca tion of *.TTF re s u lts  in a ll *.TTF font ﬁ le s  loa d e d
on th e  printe r  cu rre ntly  or  in th e  fu tu re  to b e  link e d  w ith  th e  s pe ciﬁ e d
<ext> font e x te ns ion.
<link> Th is  is  a n ind ica tor  th a t d e te rm ine s  if th e  e x te ns ion is  to b e  link e d  w ith
th e  b a s e , or  u nlink e d  from  th e  b a s e , a s  follow s :
V a lu e s :
0 = <ext> is  to b e  u nlink e d  (d is a s s ocia te d ) from  th e  ﬁ le (s ) s pe ciﬁ e d  in
<base>
1 = <ext> is  to b e  link e d  (a s s ocia te d ) w ith  th e  ﬁ le (s ) s pe ciﬁ e d  b y
<base>
De f a u lt : m u s t b e  a n a cce pte d  v a lu e  or  it is  ig nore d

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
