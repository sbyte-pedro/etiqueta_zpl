# ~RO

## Description

Th e  ~RO com m a nd  re s e ts  th e  a d v a nce d  cou nte r s  u s e d  b y  th e  printe r  to m onitor  la b e l g e ne ra tion in
inch e s , ce ntim e te r s , a nd  nu m b e r  of la b e ls .
Re s e t  A d v a n c e d  Co u n t e r s

## Format

```
~RO
```

## Parameters

c = cou nte r  nu m b e r V a lu e s :
1 = re s e t cou nte r  1
2 = re s e t cou nte r  2
3 = re s e t v a lid  RFID  la b e l cou nte r
4 = re s e t v oid e d  RFID  la b e l cou nte r
C = re s e t h e a d  cle a ne d  cou nte r
R = re s e t h e a d  re pla ce d  cou nte r  a nd  h e a d  cle a ne d  cou nte r
De f a u lt : a  v a lu e  m u s t b e  s pe ciﬁ e d  or  th e  com m a nd  is  ig nore d
1./uni00A0Th e s e  v a lu e s  a re  s u ppor te d  only  on X i4, RX i4, ZM 40 0 /ZM 60 0 , RZ40 0 /RZ60 0 , S 4M , a nd  G -S e rie s
printe r s .
Th is  e x a m ple  s h ow s  h ow  th e  cou nte r  por tion of th e  printe r  conﬁ g u ra tion la b e ls  look s  w h e n cou nte r  1 is
re s e t b y  s e nd ing~RO1.
E x a m p le : Th is  e x a m ple  s h ow s  h ow  th e  cou nte r  por tion of th e  printe r  conﬁ g u ra tion la b e ls  look s  w h e n th e
RFID  cou nte r s  a re  re s e t b y  s e nd ing~RO3 and ~RO4.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
