# ^SR

## Description

Th e  ^SR com m a nd  a llow s  y ou  to s e t th e  printh e a d  re s is ta nce .
S e t  Pr in t h e a d  Re s is t a n c e
th e  printh e a d  b e ing  u s e d . S e tting  a  h ig h e r  v a lu e  cou ld  d a m a g e  th e  printh e a d .
NOTE : Ne w  printe r  m od e ls  a u tom a tica lly  s e t h e a d  re s is ta nce .
^S S
Th e  ^SS com m a nd  is  u s e d  to ch a ng e  th e  v a lu e s  for  m e d ia , w e b , rib b on, a nd  la b e l le ng th  s e t d u ring  th e
m e d ia  ca lib ra tion proce s s . Th e  m e d ia  ca lib ra tion proce s s  is  d e s crib e d  in y ou r  s pe ciﬁ c printe r’s  u s e r’s
g u id e .
S e t  Me d ia  S e n s o r s
is  ig nore d  on th e  HC 10 0 ™  printe r. M a x im u m  v a lu e s  for  pa ra m e te r s  d e pe nd  on w h ich  printe r  pla tform  is
b e ing  u s e d .
^S T
Th e  ^ST com m a nd  s e ts  th e  d a te  a nd  tim e  of th e  Re a l-Tim e  C lock .
S e t  Da t e  a n d  Tim e  (f o r  Re a l- Tim e  Clo c k )

## Format

```
^SR
```

## Parameters

#### = re s is ta nce  v a lu e
(fou r-d ig it/uni00A0nu m e ric v a lu e )
V a lu e s : 0488 to 1175
De f a u lt : la s t pe rm a ne ntly  s a v e d  v a lu e
w = w e b  (3-d ig it v a lu e ) V a lu e s : 000 to 100
De f a u lt : th e  v a lu e  is  s h ow n on th e  m e d ia  s e ns or  proﬁ le  or  conﬁ g u ra tion
label
m = m e d ia  (3-d ig it v a lu e ) V a lu e s : 000 to 100
De f a u lt : th e  v a lu e  s h ow n on th e  m e d ia  s e ns or  proﬁ le  or  conﬁ g u ra tion la b e l
r = rib b on (3-d ig it v a lu e ) V a lu e s : 000 to 100
De f a u lt : th e  v a lu e  is  s h ow n on th e  m e d ia  s e ns or  proﬁ le  or  conﬁ g u ra tion
label
l = la b e l le ng th  (in d ots ,
fou r-d ig it v a lu e )
V a lu e s : 0001 to 32000
De f a u lt : v a lu e  ca lcu la te d  in th e  ca lib ra tion proce s s
m2 = inte ns ity  of m e d ia
LE D  (3-d ig it v a lu e )
V a lu e s : 000 to 255
De f a u lt : v a lu e  ca lcu la te d  in th e  ca lib ra tion proce s s
r2 = inte ns ity  of rib b on
LE D  (3-d ig it v a lu e )
V a lu e s : 000 to 255
De f a u lt : v a lu e  ca lcu la te d  in th e  ca lib ra tion proce s s
a = m a rk  s e ns ing  (3-d ig it
v a lu e )
V a lu e s : 000 to 100
De f a u lt : v a lu e  ca lcu la te d  in th e  ca lib ra tion proce s s
b = m a rk  m e d ia  s e ns ing
(3-d ig it v a lu e )
V a lu e s : 000 to 100
De f a u lt : v a lu e  ca lcu la te d  in th e  ca lib ra tion proce s s
c = m a rk  LE D  s e ns ing
(3-d ig it v a lu e )
V a lu e s : 000 to 255
De f a u lt : v a lu e  ca lcu la te d  in th e  ca lib ra tion proce s s
E x a m p le
B e low  is  a n e x a m ple  of a  m e d ia  s e ns or  proﬁ le . Notice  th e  nu m b e r s  from  0 0 0  to 10 0  a nd  w h e re  th e
w ord s  W E B , M E D IA , a nd  RIB B O N a ppe a r  in re la tion to th os e  nu m b e r s . A ls o, notice  th e  b la ck  v e r tica l
s pik e . Th is  re pre s e nts  w h e re  th e  printe r  s e ns e d  th e  tra ns ition from  m e d ia  to w e b  to m e d ia .
Th e  m e d ia  a nd  s e ns or  proﬁ le s  prod u ce d  v a r y  in a ppe a ra nce  from  printe r  to printe r.
a = month V a lu e s : 01 to 12
De f a u lt : cu rre nt m onth
b = d a y V a lu e s : 01 to 31
De f a u lt : cu rre nt d a y
c = y e a r V a lu e s : 1998 to 2097
De f a u lt : cu rre nt y e a r
d = hour V a lu e s : 00 to 23
De f a u lt : cu rre nt h ou r
e = m inu te V a lu e s : 00 to 59
De f a u lt : cu rre nt m inu te
f = s e cond V a lu e s : 00 to 59
De f a u lt : cu rre nt s e cond
g = form a t V a lu e s :
A = a .m .
P = p.m .
M = 2 4-h ou r  m ilita r y
De f a u lt : M
For  m ore  d e ta ils  on s e t d a te  a nd  tim e , s e e  Re a l Tim e  C lock   on pa g e  1613 .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
