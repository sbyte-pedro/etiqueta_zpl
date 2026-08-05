# ^JH

## Description

Th e  ^JH com m a nd  conﬁ g u re s  th e  e a rly  w a rning  m e s s a g e s  th a t a ppe a r  on th e  LC D .
E a r ly  W a r n in g  S e t t in g s
• ZE 50 0  s e rie s
• Xi III, Xi IIIPlu s , X i4, RX i4
• PA X 3, PA X 4
• ZM 40 0 , ZM 60 0 , RZ40 0 , RZ60 0
• S4M
• G -S e rie s  (“f” pa ra m e te r  only )

## Format

```
^JH
```

## Parameters

a = e a rly  w a rning
media
a = s u pplie s  w a rning
(Xi4 and RXi4
printe r s  only )
Th is  pa ra m e te r  is  for  X iIIIPlu s , X i4, RX i4, PA X 3, a nd  PA X 4 printe r s  only .
V a lu e s :
E = e na b le
D = d is a b le
De f a u lt : D
b = la b e ls  pe r  roll Th is  pa ra m e te r  is  for  X iIIIPlu s , PA X 3, a nd  PA X 4 printe r s  only .
V a lu e s : 100 to 9999
De f a u lt : 900
c = m e d ia  re pla ce d Th is  pa ra m e te r  is  for  X iIIIPlu s , PA X 3, a nd  PA X 4 printe r s  only .
V a lu e s :
Y = y e s
N = no
De f a u lt : N
d = rib b on le ng th Th is  pa ra m e te r  is  for  X iIIIPlu s , PA X 3, PA X 4, a nd  ZE 50 0  printe r s  only .
V a lu e s :
X iIIIPlu s  s e rie s  printe r s :
N = 0M
0 = 10 0 M
1 = 150M
2 = 2 0 0 M
3 = 2 50 M
4 = 30 0 M
5 = 350 M
6 = 40 0 M
7 = 450 M
PA X  s e rie s  printe r s :
N = 0M
0 = 10 0 M
1 = 150M
2 = 2 0 0 M
3 = 2 50 M
4 = 30 0 M
5 = 350 M
6 = 40 0 M
7 = 450 M
10 = 60 0 M
11 = 650M
12 = 7 0 0 M
13 = 7 50 M
14 = 80 0 M
15 = 850 M
16 = 9 0 0 M
ZE 50 0  s e rie s  printe r s :
N = 0M
0 = 10 0 M
1 = 150M
2 = 2 0 0 M
3 = 2 50 M
4 = 30 0 M
5 = 350 M
6 = 40 0 M
7 = 450 M
10 = 60 0 M
De f a u lt :
1 - for  9 6X iIIIPlu s
7 /uni00A0- for  a ll oth e r  printe r s
e = rib b on re pla ce d Th is  pa ra m e te r  is  for  Xi IIIPlu s , PA X 3, a nd  PA X 4 printe r s  only .
V a lu e s :
Y = y e s
N = no
De f a u lt : N
f = e a rly  w a rning
m a inte na nce
Th is  pa ra m e te r  is  for  X i4, RX i4, PA X 4, ZM 40 0 , ZM 60 0 , RZ40 0 , RZ60 0 , a nd
S 4M  printe r s  only .
V a lu e s :
E = e na b le d
D = d is a b le d
De f a u lt : D
IMPORTA NT: O n G -S e rie s  printe r s , th is  pa ra m e te r  m u s t b e  e na b le d  for
the ^MA d riv e n s y s te m  to w ork .
g = h e a d  cle a ning
inte r v a l
A cce pte d  v a lu e  e x ce ptions : a cce pte d  v a lu e s  for  Xi III printe r  a re  10 0 M  th rou g h
450 M ; a cce pte d  v a lu e s  for  60 0  d pi Xi III printe r s  a re  10 0 M  th rou g h  150 M ;
a cce pte d  v a lu e s  for  PA X 4 s e rie s  printe r s  a re  u p to 9 0 0 M  b y  incre m e nts  of
50 M ; a cce pte d  v a lu e s  for  ZM 40 0 /ZM 60 0 , RZ40 0 /RZ60 0 , a nd  S 4M  printe r s
a re  0 M  th rou g h  450 M .
V a lu e s :
0 = 10 0 M
1 = 150M
2 = 2 0 0 M
3 = 2 50 M
4 = 30 0 M
5 = 350 M
6 = 40 0 M
7 = 450 M
8 = 50 0 M
9 = 550M
10= 60 0 M
11 = 650M
12 = 7 0 0 M
13 = 7 50 M
14 = 80 0 M
15 = 850 M
16 = 9 0 0 M
De f a u lt :
1 - for  9 6X iIIIPlu s
7 /uni00A0- for  a ll oth e r  printe r s
h = h e a d  cle a n V a lu e s :
N = No
Y = Ye s
De f a u lt :N
i = h e a d  life
th re s h old
V a lu e s :
0  –  0  in or  off10 0 -350 0 0 0 0  inDe f a u lt : 10 0 0 0 0 0
j = h e a d  re pla ce d V a lu e s :
N = no
Y = y e s
De f a u lt : N

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
