# ^SN

## Description

Th e  ^SN com m a nd  a llow s  th e  printe r  to ind e x  d a ta  ﬁ e ld s  b y  a  s e le cte d  incre m e nt or  d e cre m e nt v a lu e ,
m a k ing  th e  d a ta  ﬁ e ld s  incre a s e  or  d e cre a s e  b y  a  s pe ciﬁ e d  v a lu e  e a ch  tim e  a  la b e l is  printe d . Th is  ca n
b e  pe r form e d  on 10 0  to 150  ﬁ e ld s  in a  g iv e n form a t a nd  ca n b e  pe r form e d  on b oth  a lph a nu m e ric a nd
b a rcod e  ﬁ e ld s . A  m a x im u m  of 12  of th e  rig h t-/uni00A0m os t inte g e r s  a re  s u b je ct to ind e x ing .
S e r ia liz a t io n  Da t a
In x .13 a nd  e a rlie r, th e  ﬁ r s t inte g e r  fou nd  w h e n s ca nning  from  rig h t to le ft s ta r ts  th e  ind e x ing  por tion of
th e  d a ta  ﬁ e ld .
In x .14 a nd  la te r, th e  ﬁ r s t inte g e r  fou nd  w h e n s ca nning  from  th e  e nd  of th e  b a ck ing  s tore  tow a rd s  th e
b e g inning  s ta r ts  th e  ind e x ing  por tion of th e  d a ta  ﬁ e ld .
In x .13 a nd  e a rlie r, if th e  a lph a nu m e ric ﬁ e ld  to b e  ind e x e d  e nd s  w ith  a n a lph a  ch a ra cte r, th e  d a ta  is
s ca nne d , ch a ra cte r  b y  ch a ra cte r, from  rig h t to le ft u ntil a  nu m e ric ch a ra cte r  is  e ncou nte re d . S e ria liz a tion
ta k e s  pla ce  u s ing  th e  v a lu e  of th e  ﬁ r s t nu m b e r  fou nd .
In x .14 a nd  la te r, if th e  b a ck ing  s tore  of th e  a lph a nu m e ric ﬁ e ld  to b e  ind e x e d  e nd s  w ith  a n a lph a
ch a ra cte r, th e  d a ta  is  s ca nne d , ch a ra cte r  b y  ch a ra cte r, from  th e  e nd  of th e  b a ck ing  s tore  u ntil a  nu m e ric
ch a ra cte r  is  e ncou nte re d . S e ria liz a tion ta k e s  pla ce  u s ing  th e  v a lu e  of th e  ﬁ r s t nu m b e r  fou nd .
for  e a ch  s e ria l nu m b e r  h a v e  b e e n printe d , a s  s pe ciﬁ e d  in th e  pa ra m e te r  r of the ^PQ (print q u a lity )
com m a nd .
If, d u ring  th e  cou r s e  of printing  s e ria liz e d  la b e ls , th e  printe r  ru ns  ou t of e ith e r  pa pe r  or  rib b on, th e  ﬁ r s t
la b e l printe d  (a fte r  th e  m e d ia  or  rib b on h a s  b e e n re pla ce d  a nd  ca lib ra tion com ple te d ) h a s  th e  s a m e
s e ria l nu m b e r  a s  th e  p a r t ia l la b e l printe d  b e fore  th e  o u t  cond ition occu rre d . Th is  is  d one  in ca s e  th e  la s t
la b e l b e fore  th e  o u t  cond ition d id  not fu lly  print. Th is  is  controlle d  b y  th e  ^JZ com m a nd .
U s in g  Le a d in g  Z e r o s
In the ^SN com m a nd , th e  z pa ra m e te r  d e te rm ine s  if le a d ing  z e ros  a re  printe d  or  s u ppre s s e d . D e pe nd ing
on w h ich  v a lu e  is  u s e d  (Y = print le a d ing  z e ros ; N = d o not print le a d ing  z e ros ), th e  printe r  e ith e r  prints
or  s u ppre s s e s  th e  le a d ing  z e ros .
Th e  d e fa u lt v a lu e  for  th is  pa ra m e te r  is  N (d o not print le a d ing  z e ros ).
Pr in t  Le a d in g  Z e r o s
In x .13 a nd  e a rlie r, th e  s ta r ting  v a lu e  cons is ts  of th e  rig h t-m os t cons e cu tiv e  s e q u e nce  of d ig its .
In x .14 a nd  la te r, th e  s ta r ting  v a lu e  cons is ts  of th e  ﬁ r s t nu m b e r  w ork ing  b a ck w a rd  in th e  b a ck ing  s tore
cons e cu tiv e  s e q u e nce  of d ig its .
Th e  w id th  (nu m b e r  of d ig its  in th e  s e q u e nce ) is  d e te rm ine d  b y  s ca nning  from  rig h t to le ft u ntil th e  ﬁ r s t
non-d ig it (s pa ce  or  a lph a  ch a ra cte r) is  e ncou nte re d . To cre a te  a  s pe ciﬁ c w id th , m a nu a lly  pla ce  le a d ing
z e ros  a s  ne ce s s a r y .
S u p p r e s s in g  Le a d in g  Z e r o s
In x .13 a nd  e a rlie r, th e  s ta r ting  v a lu e  cons is ts  of th e  rig h t-m os t cons e cu tiv e  s e q u e nce  of d ig its , inclu d ing
a ny  le a d ing  s pa ce s .
In x .14 or  la te r, th e  s ta r ting  v a lu e  cons is ts  of th e  ﬁ r s t nu m b e r  w ork ing  b a ck w a rd  in th e  b a ck ing  s tore
cons e cu tiv e  s e q u e nce  of d ig its , inclu d ing  a ny  le a d ing  s pa ce s .

## Format

```
^SN
```

## Parameters

v = s ta r ting  v a lu e V a lu e s : 12 -d ig its  m a x im u m  for  th e  por tion to b e  ind e x e d
De f a u lt : 1
n = incre m e nt or
d e cre m e nt v a lu e
V a lu e s : 12 -d ig it m a x im u m
De f a u lt : 1
To ind ica te  a  d e cre m e nt v a lu e , pre ce d e  th e  v a lu e  w ith  a  m inu s  (– ) s ig n.
z = a d d  le a d ing  z e ros  (if
ne e d e d )
V a lu e s :
N = no
Y = y e s
De f a u lt : N
E x a m p le : Th is  e x a m ple  s h ow s  incre m e nting  b y  a  s pe ciﬁ e d  v a lu e :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^FO` — ^FO positions the serial number field
- `^FS` — closes the ^SN field
- `^PQ` — use ^PQ to print multiple labels with incrementing serial numbers
