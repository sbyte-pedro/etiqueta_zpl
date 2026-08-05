# ^MU

## Description

Th e  ^MU com m a nd  s e ts  th e  u nits  of m e a s u re m e nt th e  printe r  u s e s . ^MU w ork s  on a  ﬁ e ld -b y -ﬁ e ld  b a s is .
O nce  th e  m od e  of u nits  is  s e t, it ca rrie s  ov e r  from  ﬁ e ld  to ﬁ e ld  u ntil a  ne w  m od e  of u nits  is  e nte re d .
S e t  U n it s  o f  Me a s u r e m e n t
^MU a ls o a llow s  for  printing  a t low e r  re s olu tions  —  60 0  d pi printe r s  a re  ca pa b le  of printing  a t 30 0 , 2 0 0 ,
a nd  150  d pi; 30 0  d pi printe r s  a re  ca pa b le  of printing  a t 150  d pi.
form a t. To tu rn th e  conv e r s ion off, e nte r  m a tch ing  v a lu e s  for  pa ra m e te r  b and c.

## Format

```
^MU
```

## Parameters

a = u nits V a lu e s :
D = d ots
I = inch e s
M = m illim e te r s
De f a u lt : D
b = form a t b a s e  in d ots
pe r  inch
V a lu e s : 150, 200, 300
De f a u lt : a  v a lu e  m u s t b e  e nte re d  or  th e  com m a nd  is  ig nore d
c = d e s ire d  d ots -pe r-
inch  conv e r s ion
V a lu e s : 300, 600
De f a u lt : a  v a lu e  m u s t b e  e nte re d  or  th e  com m a nd  is  ig nore d
E x a m p le : Th is  is  a n e x a m ple  of S e tting  Units :
A s s u m e  8 d ot/m illim e te r  (2 0 3 d ot/inch ) printe r.
Fie ld  b a s e d  on d ots :
^MUd^FO100,100^GB1024,128,128^FS
Fie ld  b a s e d  on m illim e te r s :
^MUm^FO12.5,12.5^GB128,16,16^FS
Fie ld  b a s e d  on inch e s :
^MUi^FO.493,.493^GB5.044,.631,.631^FS
E x a m p le : Th is  is  a n e x a m ple  of C onv e r ting  d pi Va lu e s :
^MUd,150,300 C onv e r t a  150  d pi form a t to a  30 0  d pi form a t w ith  a  b a s e  in d ots .
^MUd,150,600 C onv e r t a  150  d pi form a t to a  60 0  d pi form a t w ith  a  b a s e  in d ots .
^MUd,200,600 C onv e r t a  2 0 0  d pi form a t to a  60 0  d pi form a t w ith  a  b a s e  in d ots :
To re s e t th e  conv e r s ion fa ctor  to th e  orig ina l form a t, e nte r  m a tch ing  v a lu e s  for  pa ra m e te r s  b  a nd  c:
^MUd,150,150
^MUd,200,200
^MUd,300,300
^MUd,600,600

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
