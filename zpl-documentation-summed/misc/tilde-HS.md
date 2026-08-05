# ~HS

## Description

W h e n th e  h os t s e nd s  ~HS to th e  printe r, th e  printe r  s e nd s  th re e  d a ta  s tring s  b a ck . E a ch  s tring  s ta r ts  w ith
an < STX> control cod e  a nd  is  te rm ina te d  b y  a n <ETX><CR><LF> control cod e  s e q u e nce . To a v oid
confu s ion, th e  h os t prints  e a ch  s tring  on a  s e pa ra te  line .
Ho s t  S t a t u s  Re t u r n
NOTE : W h e n a  ~HS com m a nd  is  s e nt th e  printe r  w ill not s e nd  a  re s pons e  to th e  h os t if th e
printe r  is  in one  of th e s e  cond itions :
• M E D IA  O UT
• RIB B O N O UT
• HEAD OPEN
• RE W IND E R FULL
• HE A D  OVE R-TE M PE RA TURE
S t r in g  1
<STX>aaa,b,c,dddd,eee,f,g,h,iii,j,k,l<ETX><CR><LF>
aaa com m u nica tion (inte r fa ce ) s e tting s
b pa pe r  ou t ﬂ a g  (1 = pa pe r  ou t)
c pa u s e  ﬂ a g  (1 = pa u s e  a ctiv e )
dddd la b e l le ng th  (v a lu e  in nu m b e r  of d ots )
eee nu m b e r  of form a ts  in re ce iv e  b u ffe r
f b u ffe r  fu ll ﬂ a g  (1 = re ce iv e  b u ffe r  fu ll)
g com m u nica tions  d ia g nos tic m od e  ﬂ a g  (1 = d ia g nos tic m od e  a ctiv e )
h pa r tia l form a t ﬂ a g  (1 = pa r tia l form a t in prog re s s )
iii u nu s e d  (a lw a y s  0 0 0 )
j corru pt RA M  ﬂ a g  (1 = conﬁ g u ra tion d a ta  los t)
k te m pe ra tu re  ra ng e  (1 = u nd e r  te m pe ra tu re )
l te m pe ra tu re  ra ng e  (1 = ov e r  te m pe ra tu re )
1. Th is  s tring  s pe ciﬁ e s  th e  printe r’s  b a u d  ra te , nu m b e r  of d a ta  b its , nu m b e r  of s top b its , pa rity  s e tting , a nd
ty pe  of h a nd s h a k ing . Th is  v a lu e  is  a  th re e -d ig it d e cim a l re pre s e nta tion of a n e ig h t-b it b ina r y  nu m b e r. To
e v a lu a te  th is  pa ra m e te r, ﬁ r s t conv e r t th e  d e cim a l nu m b e r  to a  b ina r y  nu m b e r.
aaa=a8 a7 a6 a5 a4 a3 a2 a1 a0
Th e  nine -d ig it b ina r y  nu m b e r  is  re a d  a ccord ing  to th is  ta b le :
a
= Ha nd s h a k e
• 0 = Xon/Xoff
• 1 = D TR
a
= Pa rity  O d d /E v e n
• 0 = Odd
• 1 = E v e n
a
= D is a b le /E na b le
• 0  = D is a b le
• 1 = E na b le
a
= S top B its
• 0  = 2  B its
• 1 = 1 B it
a
= D a ta  B its
• 0  = 7  B its
• 1 = 8 B its
a
a
a
a
= B a u d
0  0 0 0  = 110
0  0 0 1 = 30 0
0  0 10  = 60 0
0  0 11 = 12 0 0
0  10 0  = 2 40 0
0  10 1 = 480 0
0  110  = 9 60 0
0  111 = 19 2 0 0
1 0 0 0  = 2 880 0  (a v a ila b le  only  on ce r ta in printe r  m od e ls )
1 0 0 1 = 3840 0 /uni00A0(a v a ila b le  only  on ce r ta in printe r  m od e ls )
1 0 10  = 57 60 0 /uni00A0(a v a ila b le  only  on ce r ta in printe r  m od e ls )
1 0 11 = 1440 0
S t r in g  2
<STX>mmm,n,o,p,q,r,s,t,uuuuuuuu,v,www<ETX><CR><LF>
mmm fu nction s e tting s
n u nu s e d
o head up  ﬂ a g  (1 = h e a d  in u p pos ition)
p r ib b o n  o u t  ﬂ a g  (1 = rib b on ou t)
q t h e r m a l t r a n s f e r  m o d e  ﬂ a g  (1 = Th e rm a l Tra ns fe r  M od e  s e le cte d )
r Print M od e
Va lu e s  4 to 5 a re
s u ppor te d  only  in
ﬁ rm w a re  v e r s ion
V60 .14.x , V50 .14.x ,
V53. 15.x , or  la te r.
0 =  Re w ind
1 =  Pe e l-O ff
2 =  Te a r-O ff
3 =  C u tte r
4 =  A pplica tor
5 =  D e la y e d  cu t
6 =  Line rle s s  Pe e l
7 =  Line rle s s  Re w ind
8 =  Pa r tia l C u tte r
9 =  RFID
K =  Kios k
S = A =  Kios k  C u tS tre a m
s print w id th  m od e
t la b e l w a it in g  ﬂ a g  (1 = la b e l w a iting  in Pe e l-off M od e )
uuuuuuuu la b e ls  re m a ining  in b a tch
v f o r m a t  w h ile  p r in t in g  ﬂ a g  (a lw a y s  1)
www nu m b e r  of g ra ph ic im a g e s  s tore d  in m e m or y
1. Th is  s tring  s pe ciﬁ e s  th e  printe r’s  m e d ia  ty pe , s e ns or  proﬁ le  s ta tu s , a nd  com m u nica tion d ia g nos tics
s ta tu s . A s  in S tring  1, th is  is  a  th re e -d ig it d e cim a l re pre s e nta tion of a n e ig h t-b it b ina r y  nu m b e r. Fir s t,
conv e r t th e  d e cim a l nu m b e r  to a  b ina r y  nu m b e r. Th e s e  v a lu e s  a re  only  s u ppor te d  on th e  ZE 50 0 , X i4,
RX i4, ZM 40 0 /ZM 60 0 , a nd  RZ40 0 /RZ60 0  printe r s .
mmmm = m7 m6 m5 m4 m3 m2 m1 m0
Th e  e ig h t-d ig it b ina r y  nu m b e r  is  re a d  a ccord ing  to th is  ta b le :
m
= M e d ia  Ty pe
• 0  = D ie -C u t
• 1 = C ontinu ou s
m
m
m
m
= Unu s e d
• 0 = Off
• 1 = On
m
= S e ns or  Proﬁ le
• 0 = Off
m
= Print M od e
• 0  = D ire ct Th e rm a l
• 1 = Th e rm a l Tra ns fe r
m
= C om m u nica tions  D ia g nos tics
• 0 = Off
• 1 = On
S t r in g  3
<STX>xxxx,y<ETX><CR><LF>
y 0  (s ta tic RA M  not ins ta lle d )
1 (s ta tic RA M  ins ta lle d )

## Format

```
~HS
```

## Parameters

See ZPL II Programming Guide.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
