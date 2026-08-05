# ^BZ

## Description

Th e  PO S TA L b a rcod e  is  u s e d  to a u tom a te  th e  h a nd ling  of m a il. PO S TA L cod e s  u s e  a  s e rie s  of ta ll a nd
s h or t b a r s  to re pre s e nt th e  d ig its .
• ^BZ s u ppor ts  a  print ra tio of 2 .0 :1 to 3.0 :1.
• Fie ld  d a ta  (^FD) is  lim ite d  to th e  w id th  (or  le ng th , if rota te d ) of th e  la b e l a nd  b y  th e  b a rcod e
s pe ciﬁ ca tion.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th e  PO S TA L a nd  PLA NE T b a rcod e  is  re q u ire d ,
g o to w w w .a im g lob a l.org , or  conta ct th e  Unite d  S ta te s  Pos ta l S e r v ice  a t h ttp://pe .u s ps .g ov .
If a d d itiona l inform a tion a b ou t th e  INTE LLIG E NT M A IL b a rcod e  is  re q u ire d , s e e : h ttp://
rib b s .u s ps .g ov /O ne C od e S olu tion.

## Format

```
^BZ
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  th e  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
h = B a rcod e  h e ig h t (in
d ots )
V a lu e s : 1 to 32000
De f a u lt : v a lu e  s e t b y  ^BY
f = print inte rpre ta tion
line
V a lu e s :
N = no
Y = y e s
De f a u lt : N
g = print inte rpre ta tion
line  a b ov e  cod e
V a lu e s :
N = no
Y = y e s
De f a u lt : N
t = Pos ta l cod e  ty pe V a lu e s :
0 = Pos tne t b a rcod e
1 = Pla nt b a rcod e
2 = Re s e r v e d
3 = US PS  Inte llig e nt M a il b a rcod e
De f a u lt : 0
E x a m p le s
Th is  is  a n e x a m ple  of a  PO S TNE T b a rcod e :
Th is  is  a n e x a m ple  of a  US PS  Inte llig e nt M a il b a rcod e :
^CC ~ CC
Th e  ^CC com m a nd  is  u s e d  to ch a ng e  th e  form a t com m a nd  pre ﬁ x . Th e  d e fa u lt pre ﬁ x  is  th e  ca re t (^).
Ch a n g e  Ca r e t
x = ca re t ch a ra cte r
ch a ng e
V a lu e s : a ny  A S C II ch a ra cte r
De f a u lt : a  pa ra m e te r  is  re q u ire d . If a  pa ra m e te r  is  not e nte re d , th e  ne x t
ch a ra cte r  re ce iv e d  is  th e  ne w  pre ﬁ x  ch a ra cte r.
E x a m p le : Th is  is  a n e x a m ple  of h ow  to ch a ng e  th e  form a t pre ﬁ x  to / from  a  ::
^XA
^CC/
/XZ
Th e  for w a rd  s la s h  (/) is  s e t a t th e  ne w  pre ﬁ x . Note  th e  /XZ e nd ing  ta g  u s e s  th e  ne w  d e s ig na te d  pre ﬁ x
ch a ra cte r  (/).
E x a m p le : Th is  is  a n e x a m ple  of h ow  to ch a ng e  th e  form a t pre ﬁ x  from  ~ to a  /:
~CC/
/XA/JUS/XZ

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
