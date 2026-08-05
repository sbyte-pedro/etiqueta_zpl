# ^GB

## Description

Th e  ^GB com m a nd  is  u s e d  to d ra w  b ox e s  a nd  line s  a s  pa r t of a  la b e l form a t. B ox e s  a nd  line s  a re  u s e d  to
h ig h lig h t im por ta nt inform a tion, d iv id e  la b e ls  into d is tinct a re a s , or  im prov e  th e  a ppe a ra nce  of a  la b e l.
Th e  s a m e  form a t com m a nd  is  u s e d  for  d ra w ing  e ith e r  b ox e s  or  line s .
Gr a p h ic  Bo x

## Format

```
^GBw,h,t,c,r
```

## Parameters

w = b ox  w id th  (in d ots ) V a lu e s : v a lu e  of t to 32000
De f a u lt : v a lu e  u s e d  for  th ick ne s s  (t) or  1
h = b ox  h e ig h t (in d ots ) V a lu e s : v a lu e  of t to 32000
De f a u lt : v a lu e  u s e d  for  th ick ne s s  (t) or  1
t = b ord e r  th ick ne s s  (in
d ots )
V a lu e s : 1 to 32000
De f a u lt : 1
c = line color V a lu e s :
B = b la ck
W = w h ite
De f a u lt : B
r = d e g re e  of corne r-
rou nd ing
V a lu e s : 0 (no rou nd ing ) to 8 (h e a v ie s t rou nd ing )
De f a u lt : 0
For  th e  w and h pa ra m e te r s , k e e p in m ind  th a t printe r s  h a v e  a  d e fa u lt of 6, 8, 12 , or  2 4 d ots /m illim e te r.
Th is  com e s  ou t to 153, 2 0 3, 30 0 , or  60 0  d ots  pe r  inch . To d e te rm ine  th e  v a lu e s  for  w  a nd  h , ca lcu la te
th e  d im e ns ions  in m illim e te r s  a nd  m u ltiply  b y  6, 8, 12 , or  2 4.
If th e  w id th  a nd  h e ig h t a re  not s pe ciﬁ e d , y ou  g e t a  s olid  b ox  w ith  its  w id th  a nd  h e ig h t a s  s pe ciﬁ e d  b y  th e
v a lu e  t.
Th e  rou nd ne s s  ind e x  is  u s e d  to d e te rm ine  a  rou nd ing  ra d iu s  for  e a ch  b ox . Form u la :
rou nd ing -ra d iu s  = (rou nd ing -ind e x  / 8) * (s h or te r  s id e  / 2 )
w h e re  th e  s h or te r  s id e  is  th e  le s s e r  of th e  w id th  a nd  h e ig h t (a fte r  a d ju s ting  for  m inim u m  a nd  d e fa u lt
v a lu e s ).
E x a m p le : He re  a re  a  fe w  e x a m ple s  of g ra ph ic b ox e s :
W id t h : 1.5  in c h ; He ig h t : 1 in c h ; Th ic k n e s s : 10; Co lo r : d e f a u lt ; Ro u n d in g : d e f a u lt
W id t h : 0 in c h ; He ig h t : 1 in c h ; Th ic k n e s s : 20; Co lo r : d e f a u lt ; Ro u n d in g : d e f a u lt :
W id t h : 1 in c h ; He ig h t : 0 in c h ; Th ic k n e s s : 30; Co lo r : d e f a u lt ; Ro u n d in g : d e f a u lt
W id t h : 1.5  in c h ; He ig h t : 1 in c h ; Th ic k n e s s : 10; Co lo r : d e f a u lt ; Ro u n d in g : 5

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

- `^FO` — ^FO sets the origin of the graphic box
- `^FS` — closes the ^GB field
- `^LR` — ^LR Y inverts the graphic box fill
