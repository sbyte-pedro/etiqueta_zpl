# ^FE

## Description

Th e  ^FE com m a nd /uni00A0a llow s  ﬁ e ld  d a ta  conca te na tion a nd  s u b s tring  e x tra ction b y  re fe re ncing  ^FN ﬁ e ld s .
Fie ld  Co n c a t e n a t io n
Th e  ^FE com m a nd  m u s t pre ce d e  e a ch  ^FD com m a nd  w h e re  it is  u s e d  a nd  only  a pplie s  to th a t ^FD ﬁ e ld .
If a ^FE d oe s  not im m e d ia te ly  pre ce d e  a  ^FD, th e n th e re  is  no ﬁ e ld  conca te na tion ch a ra cte r  a ctiv e  for
th a t ^FD.

## Format

```
^FEa
```

## Parameters

a V a lu e s :
A ny  ch a ra cte r  e x ce pt th e  cu rre nt form a t a nd  control pre ﬁ x  (^ a nd  ~
b y /uni00A0d e fa u lt).
De f a u lt : #
Th is  d e lim ite r, w h e n d e ﬁ ne d , w ill b e  u s e d  to s pe cify  d a ta  from  ^FN ﬁ e ld s , or  pa r ts  th e re of, th a t w ill b e
ins e r te d  into a  ^FD ﬁ e ld . For  th e  follow ing  d e s cription, it is  a s s u m e d  th a t th e  ^FE ch a ra cte r  is  th e  d e fa u lt
ch a ra cte r, #. Th e re  a re  tw o w a y s  to ins e r t d a ta : inclu d ing  a n e ntire  ^FN ﬁ e ld  a nd  inclu d ing  pa r t of a  ^FN
ﬁ e ld .
To ins e r t a n e ntire  ^FN ﬁ e ld , th e  s y nta x  pla ce d  in th e  ^FD ﬁ e ld  w ou ld  b e  #n#, w h e re  n is  th e  nu m b e r  of
the ^FN. A s  a n e x a m ple :
^FN2^FDField FN 2 Data^FS
^FN3^FDField FN 3 Data^FS
^FE#^FD#2# and then #3#^FS
w ou ld  re s u lt in th e  ﬁ na l ^FD w ith  th e  d a ta  Field FN2 Data and then Field FN3 Data.
To ins e r t pa r t of a  ^FN ﬁ e ld , th e  s y nta x  pla ce d  in th e  ^FD ﬁ e ld  w ou ld  b e  #n,a,x,y#, w h e re :
n Th e  nu m b e r  of th e  ^FN from  w h ich  th e  d a ta  is  ta k e n.
a e ith e r  f or b f (for  for w a rd ) ind ica te s  th a t d a ta  is  ta k e n from  th e  from  th e /uni00A0s ta r t
of the ^FN,/uni00A0and b (for  b a ck w a rd ) ind ica te s  th a t d a ta  is  ta k e n from
th e  e nd .
x Th e  s ta r ting  pos ition cou nts  from  th e  ﬁ r s t or  la s t ch a ra cte r. 1
ind ica te s  s ta r t w ith  th e  ﬁ r s t ch a ra cte r. If a is b, th e n x  s ta r ts
cou nting  from  th e  e nd  of th e  d a ta  a nd  cou nts  b a ck w a rd , s o 1
w ou ld  b e  s ta r ting  from  th e  la s t ch a ra cte r. 0  is  inv a lid , a nd  th e  ﬁ e ld
ins e r ting  d e s cription is  ig nore d , w h ich  is  a ls o th e  ca s e  for  ne g a tiv e
nu m b e r s
y Th e  nu m b e r  of ch a ra cte r s  to ta k e . If y  is  g re a te r  th a n th e  nu m b e r
of ch a ra cte r s  a v a ila b le , a ll th e  ch a ra cte r s  a re  ta k e n from  th e
s ta r ting  pos ition to th e  la s t ch a ra cte r.
For  th e  follow ing  e x a m ple s , th e  ﬁ r s t tw o line s  of ZPL a re  a s s u m e d  to b e :
^FN2^FDField FN 2 Data^FS
^FN3^FDField FN 3 Data^FS
E x a m p le  1
^FE#^FD#2,f,1,5#^FS
Re s u lts  in th e  d a ta  Field.
E x a m p le  2
^FE#^FD#2,f,7,4#^FS
re s u lts  in/uni00A0th e  d a ta  FN 2
E x a m p le  3
^FE#^FD#2,b,1,4#^FS
Re s u lts  in th e /uni00A0d a ta  Data
E x a m p le  4
^FE#^FD#2# and #3,f,10,6#^FS
Re s u lts  in th e  d a ta  Field FN 2 Data and 3 Data
S u p p o r t e d  Z e b r a  Pr in t e r s
• ZD 42 1C
• ZD 42 1D
• ZD 62 1D
• ZD 62 1T
• ZT411
• ZT42 1
• ZT510
• ZT610
• ZT620

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
