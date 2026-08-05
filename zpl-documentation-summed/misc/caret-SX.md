# ^SX

## Description

Th e  ^SX com m a nd  is  u s e d  to conﬁ g u re  th e  Ze b ra Ne t A le r t S y s te m .
S e t  Z e b r a Ne t  A le r t
e v e r y  S NM P m a na g e r  on th e  ne tw ork . To rou te  th e  d e v ice  to a  s ing le  S NM P m a na g e r, e nte r  a  s pe ciﬁ c
a d d re s s  (12 3.45.67 .89).

## Format

```
NOTE : Th e  v a lu e s  in th is  ta b le  a pply  to ﬁ rm w a re  v e r s ion V48.12 .4 or  la te r.
```

## Parameters

a = cond ition ty pe V a lu e s :
A = pa pe r  ou t
B = rib b on ou t
C = printh e a d  ov e r-te m p
D = printh e a d  u nd e r-te m p
E = h e a d  ope n
F = pow e r  s u pply  ov e r-te m p
G = rib b on-in w a rning  (D ire ct Th e rm a l M od e )
H = re w ind  fu ll
I = cu t e rror
J = printe r  pa u s e d
K = PQ job  com ple te d
L = la b e l re a d y
M = h e a d  e le m e nt ou t
N = ZB I (Ze b ra  B A S IC  Inte rpre te r) ru ntim e  e rror
O = ZB I (Ze b ra  B A S IC  Inte rpre te r) force d  e rror
P = pow e r  on
Q = cle a n printh e a d
R = m e d ia  low
S = rib b on low
T = re pla ce  h e a d
U = b a tte r y  low
V = RFID  e rror  (in RFID  printe r s  only )
* = a ll e rror s
De f a u lt : if th e  pa ra m e te r  is  m is s ing  or  inv a lid , th e  com m a nd  is  ig nore d
b = d e s tina tion for  rou te
a le r t
V a lu e s :
A = s e ria l por t
B* = pa ra lle l por t
C = e -m a il a d d re s s
D = TC P/IP
E = UDP/IP
F = S NM P tra p
De f a u lt : If th is  pa ra m e te r  is  m is s ing  or  inv a lid , th e  com m a nd  is  ig nore d .
* Re q u ir e s  b id ire ctiona l com m u nica tion.
c = e na b le  cond ition s e t
a le r t to th is  d e s tina tion
V a lu e s :
N = no
Y = y e s
V a lu e s : Y or  pre v iou s ly  conﬁ g u re d  v a lu e
d = e na b le  cond ition
cle a r  a le r t to th is
d e s tina tion
V a lu e s :
N = no
Y = y e s
V a lu e s : N or  pre v iou s ly  conﬁ g u re d  v a lu e
Pa ra m e te r s  e and f a re  s u b -options  b a s e d  on d e s tina tion. If th e  s u b -
options  a re  m is s ing  or  inv a lid , th e s e  pa ra m e te r s  a re  ig nore d .
e = d e s tina tion s e tting V a lu e s :
Inte rne t e -m a il a d d re s s  (e .g . u s e r @ com pa ny .com )
IP a d d re s s  (for  e x a m ple , 10 .1.2 .12 3)
S NM P tra p
IP or  IPX  a d d re s s e s
f = por t nu m b e r V a lu e s :
TC P por t # (0 to 65535)
UPD port # (0 to 65535)
E x a m p le : Th is  is  a n e x a m ple  of th e  d iffe re nt (b) d e s tina tions  th a t y ou  ca n s e nd  for  th e  cond ition ty pe  (a):
S e ria l: ^SXA,A,Y,Y
Pa ra lle l: ^SXA,B,Y,Y
E -M a il: ^SXA,C,Y,Y,admin@company.com
TC P: ^SXA,D,Y,Y,123.45.67.89,1234
UD P: ^SXA,E,Y,Y,123.45.67.89,1234
S NM P Tra p: ^SXA,F,Y,Y,255.255.255.255

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
