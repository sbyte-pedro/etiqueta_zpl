# ^CM

## Description

Th e  ^CM com m a nd  a llow s  y ou  to re a s s ig n a  le tte r  d e s ig na tion to th e  printe r’s  m e m or y  d e v ice s . If a
form a t a lre a d y  e x is ts , y ou  ca n re a s s ig n th e  m e m or y  d e v ice  to th e  corre s pond ing  le tte r  w ith ou t forcing ,
a lte ring , or  re cre a ting  th e  form a t its e lf.
Ch a n g e  Me m o r y  Le t t e r  De s ig n a t io n
Us ing  th is  com m a nd  a ffe cts  e v e r y  s u b s e q u e nt com m a nd  th a t re fe r s  to s pe ciﬁ c m e m or y  loca tions .
le tte r  d e s ig na tor, a ll le tte r  d e s ig na tor s  a re  s e t to th e ir  d e fa u lt v a lu e s .
It is  re com m e nd e d  th a t a fte r  e nte ring  th e  ^CM com m a nd , ^JUS is  e nte re d  to s a v e  ch a ng e s  to E E PRO M .
A ny  d u plica te  pa ra m e te r s  e nte re d  w ill re s e t th e  le tte r  d e s ig na tions  b a ck  to th e  d e fa u lt.
If a ny  of th e  pa ra m e te r s  a re  ou t of s pe ciﬁ ca tion, th e  com m a nd  is  ig nore d .
E x a m p le : Th is  e x a m ple  d e s ig na te s  le tte r  E : to point to th e  B : m e m or y  d e v ice , a nd  th e  le tte r  B : to point to
th e  E :m e m or y  d e v ice .
^XA
^CME,B,R,A
^JUS
^XZ
E x a m p le : Th is  e x a m ple  d e s ig na te s  th a t conte nt s e nt to, or  re a d  from  th e  B : or  E : m e m or y  loca tions  w ill b e
s e nt to or  re a d  from  th e  E : m e m or y  loca tion.

## Format

```
^CMa,b,c,d
```

## Parameters

a = m e m or y  a lia s  for  B: V a lu e s : B:, E:,R:, A:, and NONE
De f a u lt : B:
b = m e m or y  a lia s  for  E: V a lu e s : B:, E:, R:, A:, and NONE
De f a u lt : E:
c = m e m or y  a lia s  for  R: V a lu e s : B:, E:, R:, A:, and NONE
De f a u lt : R:
d = m e m or y  a lia s  for  A: V a lu e s : B:, E:, R:, A:, and NONE
De f a u lt : A:
e = m u ltiple  a lia s V a lu e s : M, or  no v a lu e
De f a u lt : no v a lu e
• Th is  pa ra m e te r  is  s u ppor te d  on X i4 a nd  ZM 40 0 /ZM 60 0  printe r s
u s ing  ﬁ rm w a re  V53.17 .7 Z or  la te r.
• Th is  pa ra m e te r  is  s u ppor te d  on G -S e rie s  printe r s  u s ing  ﬁ rm w a re
v e r s ions  v 56.17 .7 Z a nd  v 61.17 .7 Z or  la te r.
• Th is  pa ra m e te r  is  s u ppor te d  on printe r s  u s ing  ﬁ rm w a re  V60 .17 .7 Z or
la te r.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
