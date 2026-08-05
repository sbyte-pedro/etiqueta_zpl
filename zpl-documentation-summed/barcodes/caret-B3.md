# ^B3

## Description

Th e  C od e  39  b a rcod e  is  th e  s ta nd a rd  for  m a ny  ind u s trie s , inclu d ing  th e  US  D e pa r tm e nt of D e fe ns e .
It is  one  of th re e  s y m b olog ie s  id e ntiﬁ e d  in th e  A m e rica n Na tiona l S ta nd a rd s  Ins titu te  (A NS I) s ta nd a rd
M H10 .8M -19 83. C od e  39  is  a ls o k now n a s  US D -3 C od e  a nd  3 of 9  C od e .
Co d e  39 Ba r c o d e
E a ch  ch a ra cte r  in a  C od e  39  b a rcod e  is  com pos e d  of nine  e le m e nts : ﬁ v e  b a r s , fou r  s pa ce s , a nd  a n
inte r-ch a ra cte r  g a p. Th re e  of th e  nine  e le m e nts  a re  w id e ; th e  s ix  re m a ining  e le m e nts  a re  na rrow .
• ^B3 s u ppor ts  print ra tios  of 2 .0 :1 to 3.0 :1.
• Fie ld  d a ta  (^FD) is  lim ite d  to th e  w id th  (or  le ng th , if rota te d ) of th e  la b e l.
• C od e  39  a u tom a tica lly  g e ne ra te s  th e  s ta r t a nd  s top ch a ra cte r  (*).
• A s te ris k  (*) for  s ta r t a nd  s top ch a ra cte r  prints  in th e  inte rpre ta tion line , if th e  inte rpre ta tion line  is
tu rne d  on.
• C od e  39  is  ca pa b le  of e ncod ing  th e  fu ll 12 8-ch a ra cte r  A S C II s e t.
IMPORTA NT: If a d d itiona l inform a tion a b ou t th is  b a rcod e  is  re q u ire d , g o to a im g lob a l.org .
e x te nd e d  A S C II e na b le d  for  th is  fe a tu re  to w ork . To e na b le  e x te nd e d  A S C II in th e  C od e  39, y ou  m u s t
ﬁ r s t e ncod e  + $ in y ou r  ^FD s ta te m e nt. To d is a b le  e x te nd e d  A S C II, y ou  m u s t e ncod e  -$ in y ou r  ^FD
s ta te m e nt.
E x a m p le
Th is  e x a m ple  e ncod e s  a  ca rria g e  re tu rn w ith  line  fe e d  into a  C od e  39  b a rcod e :
Fu ll A S CII Mo d e  f o r  Co d e  39
C od e  39  ca n g e ne ra te  th e  fu ll 12 8-ch a ra cte r  A S C II s e t u s ing  pa ire d  ch a ra cte r s  a s  s h ow n in th is  ta b le :
A S CII CODE  39 A S CII Co d e  39
SP S pa ce SOH $A
! /A S TX $B
'' /B ETX $C
Ta b le  1/uni00A0/uni00A0/uni00A0/uni00A0 C od e  39 /uni00A0A S C II S e t
A S CII CODE  39 A S CII Co d e  39
# /C E OT $D
$ /D ENQ $E
% /E A C K $F
& /F B E L $G
' /G BS $H
( /H HT $I
) /I LF $J
* /J V T $K
+ /K FF $L
, /L C R $M
- - SO $N
. . SI $O
/ /O DLE $P
0 0 DC1 $Q
1 1 DC2 $R
2 2 DC3 $S
3 3 DC4 $T
4 4 NAK $U
5 5 S YN $V
6 6 ETB $W
7 7 C A N $X
8 8 EM $Y
9 9 SUB $Z
: /Z ESC %A
; %F FS %B
< %G FS %C
= %H RS %D
> %I US %E
? %J
@ %V ' %W
A A a +A
B B b +B
C C c +C
Ta b le  1/uni00A0/uni00A0/uni00A0/uni00A0 C od e  39 /uni00A0A S C II S e t/uni00A0(C ontinu e d )
A S CII CODE  39 A S CII Co d e  39
D D d +D
E E e +E
F F f +F
G G g +G
H H h +H
I I i +I
J J j +J
K K k +K
L L l +L
M M m +M
N N n +N
O O o +O
P P p +P
Q Q q +Q
R R r +R
S S s +S
T T t +T
U U u +U
V V v +V
W W w +W
X X x +X
Y Y y +Y
Z Z z +Z
[ %K { %P
\ %L | %Q
] %M } %R
^ %N ~ %S
_ %O DEL % T, % T
Ta b le  1/uni00A0/uni00A0/uni00A0/uni00A0 C od e  39 /uni00A0A S C II S e t/uni00A0(C ontinu e d )

## Format

```
^B3o,e,h,f,g
```

## Parameters

o = orie nta tion V a lu e s :
N = norm a l
R = rota te d  9 0  d e g re e s  (clock w is e )
I = inv e r te d  1 80  d e g re e s
B = re a d  from  b ottom  u p, 2 7 0  d e g re e s
De f a u lt : cu rre nt ^FW v a lu e
e = M od -43 ch e ck  d ig it V a lu e s :
Y = y e s
N = no
De f a u lt : N
h = b a r  cod e  h e ig h t (in
d ots )
V a lu e s : 1 to 32000
De f a u lt : v a lu e  s e t b y  ^BY
f = print inte rpre ta tion
line
V a lu e s :
Y = y e s
N = no
De f a u lt : Y
g = print inte rpre ta tion
line  a b ov e  cod e
V a lu e s :
Y = y e s
N = no
De f a u lt : N
E x a m p le
Th is  is  a n e x a m ple  of a  C od e  39  b a rcod e :

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^BY` — set bar width and ratio before ^B3
- `^FO` — positions the barcode
- `^FD` — provides the barcode data
- `^FS` — closes the barcode field
