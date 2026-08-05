# ^FH

## Description

Th e  ^FH com m a nd  a llow s  y ou  to e nte r  th e  h e x a d e cim a l v a lu e  for  a ny  ch a ra cte r  d ire ctly  into th e  ^FD
s ta te m e nt. Th e  ^FH com m a nd  m u s t pre ce d e  e a ch  ^FD com m a nd  th a t u s e s  h e x a d e cim a l in its  ﬁ e ld .
Fie ld  He x a d e c im a l In d ic a t o r
W ith in th e  ^FD s ta te m e nt, th e  h e x a d e cim a l ind ica tor  m u s t pre ce d e  e a ch  h e x a d e cim a l v a lu e . Th e
d e fa u lt h e x a d e cim a l ind ica tor  is  _ (u nd e r s core ). Th e re  m u s t b e  a  m inim u m  of tw o ch a ra cte r s  d e s ig na te d
to follow  th e  u nd e r s core . Th e  a pa ra m e te r  ca n b e  a d d e d  w h e n a  d iffe re nt h e x a d e cim a l ind ica tor  is
ne e d e d .
Th is  com m a nd  ca n b e  u s e d  w ith  a ny  of th e  com m a nd s  th a t h a v e  ﬁ e ld  d a ta  (th a t is  ^FD, ^FV (Fie ld
Va ria b le ), a nd  ^SN (S e ria liz e d  D a ta )).
Va lid  h e x a d e cim a l ch a ra cte r s  a re :
0 1 2 3 4 5 6 7 8 9 A B C D E F a b c d e f

## Format

```
^FHa
```

## Parameters

a = h e x a d e cim a l
ind ica tor
V a lu e s : a ny  ch a ra cte r  e x ce pt cu rre nt form a t a nd  control pre ﬁ x  (^ a nd  ~  b y
d e fa u lt)
De f a u lt : _ (u nd e r s core )
E x a m p le : Th is  is  a n e x a m ple  of h ow  to e nte r  a  h e x a d e cim a l v a lu e  d ire ctly  into a  ^FD s ta te m e nt: Th is  is  a n

## Example

```zpl
E x a m p le : Th e s e  a re  e x a m ple s  of h ow  ^FH w ork s  w ith  UTF-8 a nd  UTF-16B E :
• UTF-8
• UTF-16B E
```

## Related Commands

_See index.md for commands in the same group._
