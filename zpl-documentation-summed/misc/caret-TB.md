# ^TB

## Description

Th e  ^TB com m a nd  prints  a  te x t b lock  w ith  d e ﬁ ne d  w id th  a nd  h e ig h t. Th e  te x t b lock  h a s  a n a u tom a tic
w ord -w ra p fu nction. If th e  te x t e x ce e d s  th e  b lock  h e ig h t, th e  te x t is  tru nca te d . Th is  com m a nd  s u ppor ts
com ple x  te x t la y ou t fe a tu re s .
Te x t  Blo c k s
Th is  com m a nd  is  a v a ila b le  only  for  printe r s  w ith  ﬁ rm w a re  v e r s ion V60 .14.x , V50 .14.x , or  la te r.
NOTE : ^TB is  th e  pre fe rre d  com m a nd  for  printing  ﬁ e ld s  or  b lock s  of te x t, ins te a d  of ^FB.
• Ju s tiﬁ ca tion of ^TB com m a nd  com e s  from  ^FO, ^FT, or ^FN com m a nd . If no ju s tiﬁ ca tion is
d e te rm ine d  th e n th e  d e fa u lt is  a u to ju s tiﬁ ca tion.
• D a ta  b e tw e e n < a nd  > is  proce s s e d  a s  a n e s ca pe  s e q u e nce ; for  e x a m ple , <</uni00A0> /uni00A0/uni00A0w ill print /uni00A0/uni00A0  < .
• Th e  ^TB com m a nd  h a s  a n a u tom a tic w ord -w ra p fu nction. S oft h y ph e ns  d o not print a nd  a re  not
u s e d  a s  a  line  b re a k  pos ition.

## Format

```
^TB
```

## Parameters

a = b lock  rota tion V a lu e s :
N = norm a l
R = rota te  9 0  d e g re e s  clock w is e
I = inv e r t 1 80  d e g re e s
B = re a d  from  b ottom  u p-2 7 0  d e g re e s
De f a u lt : w h a te v e r  w a s  s pe ciﬁ e d  b y  th e  la s t ^A (w h ich  h a s  th e  d e fa u lt of
^FW)
b = b lock  w id th  in d ots V a lu e s :
1 to th e  w id th  of th e  la b e l in d ots
De f a u lt : 1 dot
c = b lock  h e ig h t in d ots V a lu e s :
1 to th e  le ng th  of th e  la b e l in d ots
De f a u lt : 1 dot

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
