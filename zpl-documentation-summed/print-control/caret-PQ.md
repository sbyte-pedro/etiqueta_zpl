# ^PQ

## Description

Th e  ^PQ com m a nd  g iv e s  control ov e r  s e v e ra l printing  ope ra tions . It controls  th e  nu m b e r  of la b e ls  to
print, th e  nu m b e r  of la b e ls  printe d  b e fore  printe r  pa u s e s , a nd  th e  nu m b e r  of re plica tions  of e a ch  s e ria l
nu m b e r.
Pr in t  Q u a n t it y

## Format

```
^PQ
```

## Parameters

q = tota l q u a ntity  of
la b e ls  to print
V a lu e s : 1 to 99,999,999
De f a u lt : 1
p = pa u s e  a nd  cu t v a lu e
(la b e ls  b e tw e e n pa u s e s )
V a lu e s : 1 to 99,999,999
De f a u lt : 0 (no pa u s e )
r = re plica te s  of e a ch
s e ria l nu m b e r
V a lu e s : 0 to 99,999,999 re plica te s
De f a u lt : : 0 (no re plica te s )
o = ov e rrid e  pa u s e
count
V a lu e s :
N = no
Y = y e s
De f a u lt : N
e = cu t on e rror  la b e l
(RFID  v oid  is  a n e rror
la b e l)
V a lu e s :
N = no - if a  cu tte r  is  ins ta lle d , a  cu t w ill b e  m a d e  a fte r  a  v oid e d  RIFD
la b e l O NLY if a  cu t w ou ld  b e  m a d e  a fte r  th e  non-v oid e d  la b e l a nd  th is
w a s  th e  la s t re tr y .
Y = y e s  - if a  cu tte r  is  ins ta lle d , a  cu t w ill b e  m a d e  a fte r  A NY v oid e d  RFID
la b e l.
De f a u lt : Y
If the o pa ra m e te r  is  s e t to Y, th e  printe r  cu ts  b u t d oe s  not pa u s e , a nd  th e  printe r  d oe s  not  pa u s e  a fte r
e v e r y  g rou p cou nt of la b e ls  h a s  b e e n printe d . W ith  th e  o pa ra m e te r  s e t to N (d e fa u lt), th e  printe r  pa u s e s
a fte r  e v e r y  g rou p cou nt of la b e ls  h a s  b e e n printe d .
E x a m p le : Th is  e x a m ple  s h ow s  th e  control ov e r  print ope ra tions :
^PQ50,10,1,Y: Th is  e x a m ple  prints  a  tota l of 50  la b e ls  w ith  one  re plica te  of e a ch  s e ria l nu m b e r. It
prints  th e  tota l q u a ntity  in g rou ps  of 10 , b u t d oe s  not pa u s e  a fte r  e v e r y  g rou p.
^PQ50,10,1,N: Th is  e x a m ple  prints  a  tota l of 50  la b e ls  w ith  one  re plica te  of e a ch  s e ria l nu m b e r. It
prints  th e  tota l q u a ntity  in g rou ps  of 10 , pa u s ing  a fte r  e v e r y  g rou p.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
