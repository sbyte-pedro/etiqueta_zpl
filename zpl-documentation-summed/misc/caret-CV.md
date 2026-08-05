# ^CV

## Description

Th e  ^CV com m a nd  a cts  a s  a  s w itch  to tu rn th e  cod e  v a lid a tion fu nction on a nd  off. W h e n th is  com m a nd
is  tu rne d  on, a ll b a r  cod e  d a ta  is  ch e ck e d  for  th e s e  e rror  cond itions :
Co d e  V a lid a t io n
• ch a ra cte r  not in ch a ra cte r  s e t
• ch e ck -d ig it incorre ct
• d a ta  ﬁ e ld  too long  (too m a ny  ch a ra cte r s )
• d a ta  ﬁ e ld  too s h or t (too fe w  ch a ra cte r s )
• pa ra m e te r  s tring  conta ins  incorre ct d a ta  or  m is s ing  pa ra m e te r
W h e n inv a lid  d a ta  is  d e te cte d , a n e rror  m e s s a g e  a nd  cod e  is  printe d  in re v e r s e  im a g e  in pla ce  of th e  b a r
cod e . Th e  m e s s a g e  re a d s  INVALID - X w h e re  X is  one  of th e s e  e rror  cod e s :
C = ch a ra cte r  not in ch a ra cte r  s e t
E = ch e ck -d ig it incorre ct
L = d a ta  ﬁ e ld  too long
S = d a ta  ﬁ e ld  too s h or t
P = pa ra m e te r  s tring  conta ins  incorre ct d a ta
(occu r s  only  on s e le ct b a r  cod e s )
O nce  tu rne d  on, th e  ^CV com m a nd  re m a ins  a ctiv e  from  form a t to form a t u ntil tu rne d  off b y  a noth e r  ^CV
com m a nd  or  th e  printe r  is  tu rne d  off. Th e  com m a nd  is  not pe rm a ne ntly  s a v e d .
Th e  ^CV com m a nd  te s ts  th e  inte g rity  of th e  d a ta  e ncod e d  into th e  b a r  cod e . It is  not u s e d  for  (or  to b e
confu s e d  w ith ) te s ting  th e  s ca n-inte g rity  of a n im a g e  or  b a r  cod e .

## Format

```
^CVa
```

## Parameters

a = cod e  v a lid a tion V a lu e s :
N = no
Y = y e s
De f a u lt : N
E x a m p le : Th e  e x a m ple s  b e low  s h ow  th e  e rror  la b e ls  ^CVY g e ne ra te s  w h e n incorre ct ﬁ e ld  d a ta  is  e nte re d .
C om pa re  th e  le tte r  follow ing  INV A LID –  to th e  lis ting  on th e  pre v iou s  pa g e .

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
