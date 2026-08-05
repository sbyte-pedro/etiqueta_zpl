# ^BA

## Description

Th e  ^BA com m a nd  cre a te s  a  v a ria b le  le ng th , continu ou s  s y m b olog y . Th e  C od e  9 3 b a rcod e  is  u s e d  in
m a ny  of th e  s a m e  a pplica tions  a s  C od e  39. It u s e s  th e  fu ll 12 8-ch a ra cte r  A S C II s e t. ZPL II, h ow e v e r, d oe s
not s u ppor t A S C II control cod e s  or  e s ca pe  s e q u e nce s . It u s e s  th e  s u b s titu te  ch a ra cte r s  s h ow n b e low .
Co d e  93 Ba r c o d e
Co n t r o l Co d e Z PL II S u b s t it u t e
C trl $ &
C trl % ‘
C trl / (
C trl + )
E a ch  ch a ra cte r  in th e  C od e  9 3 b a rcod e  is  com pos e d  of s ix  e le m e nts : th re e  b a r s  a nd  th re e  s pa ce s .
A lth ou g h  inv ok e d  d iffe re ntly , th e  h u m a n-re a d a b le  inte rpre ta tion line  prints  a s  th ou g h  th e  control cod e
h a s  b e e n u s e d .
• ^BA s u ppor ts  a  ﬁ x e d  print ra tio.
• Fie ld  d a ta  (^FD) is  lim ite d  to th e  w id th  (or  le ng th , if rota te d ) of th e  la b e l.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a r  cod e  is  re q u ire d , re fe r  to w w w .a im g lob a l.org .
A S C II s e t.
Fu ll A S CII Mo d e  f o r  Co d e  93
C od e  9 3 ca n g e ne ra te  th e  fu ll 12 8-ch a ra cte r  A S C II s e t u s ing  pa ire d  ch a ra cte r s  a s  s h ow n in th e  follow ing
ta b le s .
ASCII Code 93
NUL
SOH
STX
ETX
EOT
ENQ
ACK
BEL
BS
HT
LF
VT
FF
CR
SO
SI
DLE
DC1
DC2
DC3
DC4
NAK
SYN
ETB
CAN
EM
SUB
ESC
FS
FS
RS
US
‘U
&A
B
C
D
E
F
G
H
I
J
K
L
M
N
P
Q
R
S
T
U
V
W
X
Y
Z
‘A
‘B
‘C
‘D
‘E
&
&
&
&
&
&
&
&
&
&
&
&
&
&O
&
&
&
&
&
&
&
&
&
&
&
ASCII Code 93
SP
!
“
#
$
%
&
‘
(
)
*
++
,
-
.
/
:
;
<
=
>
?
Space
(A
(B
C
D
E
F
G
H
I
J
++
(L
-
.
/
O
(Z
‘F
‘G
‘H
‘I
‘J
(
(
(
(
(
(
(
(

## Format

```
^BA
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = b a r  cod e  h e ig h t (in
d ots )
V a lu e s : 1 to 32000
De f a u lt : v a lu e  s e t b y  ^BY
f = print inte rpre ta tion
line
V a lu e s :
N = no
Y = y e s
De f a u lt : Y
g = print inte rpre ta tion
line  a b ov e  cod e
V a lu e s :
N = no
Y = y e s
De f a u lt : N
e = print ch e ck  d ig it V a lu e s :
N = no
Y = y e s
De f a u lt : N
E x a m p le
Th is  is  a n e x a m ple  of a  C od e  9 3 b a rcod e :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
