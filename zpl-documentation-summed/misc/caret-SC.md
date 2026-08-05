# ^SC

## Description

Th e  ^SC com m a nd  a llow s  y ou  to ch a ng e  th e  s e ria l com m u nica tions  pa ra m e te r s  y ou  a re  u s ing .
S e t  S e r ia l Co m m u n ic a t io n s
or  h a v e  a  ZPL-ov e rrid e  D IP s w itch  s e t, th e  com m a nd  is  ig nore d .
A ^JUS com m a nd  ca u s e s  th e  ch a ng e s  in C om m u nica tions  M od e  to pe r s is t th rou g h  pow e r-u p a nd
s oftw a re  re s e ts .

## Format

```
^SCa,b,c,d,e,f
```

## Parameters

a = b a u d  ra te V a lu e s : 110
; 300; 600; 1200; 2400; 4800; 9600; 14400; 19200; 28800;
38400; or 57600; 115200
De f a u lt : m u s t b e  s pe ciﬁ e d  or  th e  pa ra m e te r  is  ig nore d
b = w ord  le ng th  (in d a ta
b its )
V a lu e s : 7 or 8
De f a u lt : m u s t b e  s pe ciﬁ e d
c = pa rity V a lu e s : N (none ), E (e v e n), or  O (od d )
De f a u lt : m u s t b e  s pe ciﬁ e d
d = s top b its V a lu e s : 1 or 2
De f a u lt : m u s t b e  s pe ciﬁ e d
e = protocol m od e V a lu e s :
X = X O N/X O FF
D = D TR/D S R
R = RTS
M = D TR/D S R X O N/X O FF
De f a u lt : m u s t b e  s pe ciﬁ e d
f = Ze b ra  protocol V a lu e s :
A = A C K/NA K
N = none
Z = Ze b ra
De f a u lt : m u s t b e  s pe ciﬁ e d
1./uni00A0Th is  v a lu e  is  not s u ppor te d  on X i4, RX i4, ZM 40 0 /ZM 60 0 , RZ40 0 /RZ60 0 , a nd  S 4M  printe r s .
2 . Th is  pa ra m e te r  is  s u ppor te d  only  on G -S e rie s  printe r s . Us ing  th e  D TR/D S R X O N/X O FF m od e  w ill
ca u s e  th e  printe r  to re s pond  to e ith e r  D TR/D S R or  X O N/X O FF, d e pe nd ing  on w h ich  m e th od  is  ﬁ r s t
re ce iv e d  from  th e  h os t d e v ice .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
