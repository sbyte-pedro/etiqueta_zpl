# ~HB

## Description

W h e n th e  ~HB com m a nd  is  s e nt to th e  printe r, a  d a ta  s tring  is  s e nt b a ck  to th e  h os t. Th e  s tring  s ta r ts
w ith  a n <STX> control cod e  s e q u e nce  a nd  te rm ina te s  b y  a n <ETX><CR><LF> control cod e  s e q u e nce .
Ba t t e r y  S t a t u s
NOTE : Th is  com m a nd  only  re s pond s  to m ob ile  printe r s .

## Format

```
~HB
```

## Parameters

W h e n th e  printe r  re ce iv e s  th e  com m a nd , it re tu rns :
<STX>hh.hh,bb.bb,bt<ETX><CR><LF>
<STX>
= A S C II s ta r t-of-te x t ch a ra cte r
hh.hh
= cu rre nt h e a d  v olta g e  re a d ing  in inte g e r s
bb.bb
= cu rre nt b a tte r y  v olta g e  re a d ing  in inte g e r s
bt
= b a tte r y  te m pe ra tu re  in C e ls iu s
<ETX>
= A S C II e nd -of-te x t ch a ra cte r
<CR>
= A S C II ca rria g e  re tu rn
<LF>
= A S C II line  fe e d  ch a ra cte r
• Th is  com m a nd  is  u s e d  for  th e  pow e r-s u pply  b a tte r y  of th e  printe r  a nd  s h ou ld  not b e  confu s e d  w ith
th e  b a tte r y  b a ck e d -u p RA M .
• For  a  m ore  pre cis e  v olta g e  re a d ing , y ou  ca n u s e  th e  pow e r.v olta g e  S G D  com m a nd , w h ich  re tu rns  a
v a lu e  to th e  ne a re s t h u nd re d th s  of a  v olt (X .X X ).

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
