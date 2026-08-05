# ^LH

## Description

Th e  ^LH com m a nd  s e ts  th e  la b e l h om e  pos ition.
La b e l Ho m e
Th e  d e fa u lt h om e  pos ition of a  la b e l is  th e  u ppe r-le ft corne r  (pos ition 0 ,0  a long  th e  x  a nd  y  a x is ). Th is  is
th e  a x is  re fe re nce  point for  la b e ls . A ny  a re a  b e low  a nd  to th e  rig h t of th is  point is  a v a ila b le  for  printing .
Th e  ^LH com m a nd  ch a ng e s  th is  re fe re nce  point. For  ins ta nce , w h e n w ork ing  w ith  pre printe d  la b e ls , u s e
th is  com m a nd  to m ov e  th e  re fe re nce  point b e low  th e  pre printe d  a re a .
Th is  com m a nd  a ffe cts  only  ﬁ e ld s  th a t com e  a fte r  it. It is  re com m e nd e d  to u s e  ^LH a s  one  of th e  ﬁ r s t
com m a nd s  in th e  la b e l form a t.
S e pa ra tor) com m a nd . O nce  y ou  h a v e  is s u e d  a n ^LH com m a nd , th e  s e tting  is  re ta ine d  u ntil y ou  tu rn off
th e  printe r  or  s e nd  a  ne w  ^LH com m a nd  to th e  printe r.

## Format

```
^LH
```

## Parameters

x = x -a x is  pos ition (in
d ots )
V a lu e s : 0 to 32000
In it ia l V a lu e  a t  Po w e r  U p : 0  or  la s t pe rm a ne ntly  s a v e d  v a lu e
y = y -a x is  pos ition (in
d ots )
V a lu e s : 0 to 32000
In it ia l V a lu e  a t  Po w e r  U p : 0 or  la s t pe rm a ne ntly  s a v e d  v a lu e
D e pe nd ing  on th e  printh e a d  u s e d  in y ou r  printe r, u s e  one  of th e s e  w h e n ﬁ g u ring  th e  v a lu e s  for  x and y:
6 d ots  = 1 m m , 152  d ots  = 1 inch
8 d ots  = 1 m m , 2 0 3 d ots  = 1 inch
11.8 d ots  = 1 m m , 30 0  d ots  = 1 inch
2 4 d ots  = 1 m m , 60 8 d ots  = 1 inch

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
