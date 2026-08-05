# ^SL

## Description

Th e  ^SL com m a nd  is  u s e d  to s pe cify  th e  Re a l-Tim e  C lock ’s  m od e  of ope ra tion a nd  la ng u a g e  for
printing  inform a tion.
S e t  Mo d e  a n d  La n g u a g e  (f o r  Re a l- Tim e  Clo c k )
• Th e  ^SL  com m a nd  m u s t b e  pla ce d  b e fore  th e  ﬁ r s t ^FO com m a nd .
• A s  of V60 .13.0 .10  a ll s u ppor te d  printe r s  h a v e  E nh a nce d  Re a l Tim e  C lock  ca pa b ilitie s  th e  RTC  w ill not
print tim e  ﬁ e ld s  th a t a re  m ore  th a n s ix ty  s e cond s  old , ra th e r  it w ill u pd a te  th e  tim e  prior  to printing
(^SLT or ^SL60). To control tim e  w ith  incre m e nts  oth e r  th a n s ix ty  s e cond s  th e  ^SL com m a nd  ca n b e
u s e d  w ith  a  nu m e ric v a lu e  (^SL30). ^SLS ca n k e e p tim e s  long e r  th a n s ix ty  s e cond s .
For  m ore  d e ta ils  on s e t m od e  a nd  la ng u a g e  w ith  th e  Re a l-Tim e  C lock , s e e  Re a l Tim e  C lock   on pa g e
1613 .

## Format

```
^SL
```

## Parameters

a = mode V a lu e s :
S = S ta r t Tim e  M od e . Th is  is  th e  tim e  th a t is  re a d  from  th e  Re a l-Tim e  C lock
w h e n la b e l form a tting  b e g ins  (w h e n ^XA is  re ce iv e d ). Th e  ﬁ r s t la b e l h a s  th e
s a m e  tim e  pla ce d  on it a s  th e  la s t la b e l.
T = Tim e  Now  M od e . Th is  is  th e  tim e  th a t is  re a d  from  th e  Re a l-Tim e  C lock
w h e n th e  la b e l to b e  printe d  is  pla ce d  in print q u e u e . Tim e  No w  is  s im ila r  to a
s e ria liz e d  tim e  or  d a te  ﬁ e ld .
Numeric Value = W ith  th e  E nh a nce d  Re a l Tim e  C lock  (V60 .13.0 .10  or  la te r)
a  tim e  a ccu ra cy  tole ra nce  ca n b e  s pe ciﬁ e d . Ra ng e  = 1 to 9 9 9  s e cond s , 0  =
one  s e cond  tole ra nce
SL30,1 = A ccu ra cy  tole ra nce  of 30  s e cond s  a nd  u s e  E ng lis h .
De f a u lt : S
b = la ng u a g e
Va lu e  13 is  only
s u ppor te d  in
ﬁ rm w a re  v e r s ions
V60 .14.x , V50 .14.x , or
la te r.
V a lu e s :
1 = E ng lis h
2 = S pa nis h
3 = Fre nch
4 = G e rm a n
5 = Ita lia n
6 = Nor w e g ia n
7 = Por tu g u e s e
8 = S w e d is h
9 = D a nis h
10 = S pa nis h  2
11 = D u tch
12 = Finnis h 1
3 = Ja pa ne s e
14 = Kore a n
15 = S im pliﬁ e d  C h ine s e
16 = Tra d itiona l C h ine s e
17 = Ru s s ia n
18 = Polis h
De f a u lt : th e  la ng u a g e  s e le cte d  w ith  ^KL or  th e  control pa ne l

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
