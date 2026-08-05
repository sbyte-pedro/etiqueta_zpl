# ^BR

## Description

Th e  ^BR com m a nd  is  a  b a rcod e  ty pe  for  s pa ce -cons tra ine d  id e ntiﬁ ca tion from  E A N Inte rna tiona l a nd
th e  Uniform  C od e  C ou ncil, Inc.
GS 1 Da t a b a r  (f o r m e r ly  Re d u c e d  S p a c e  S y m b o lo g y )

## Format

```
^BRa,b,c,d,e,f
```

## Parameters

a = orie nta tion V a lu e s :
N = Norm a l
R = Rota te d
I = Inv e r te d
B = B ottom -u p
De f a u lt : R
b = s y m b olog y  ty pe  in
th e  G S 1 D a ta B a r  fa m ily
V a lu e s :
1 = G S 1 D a ta B a r  O m nid ire ctiona l
2 = G S 1 D a ta B a r  Tru nca te d
3 = G S 1 D a ta B a r  S ta ck e d
4 = G S 1 D a ta B a r  S ta ck e d  O m nid ire ctiona l
5 = G S 1 D a ta B a r  Lim ite d
6 = G S 1 D a ta B a r  E x pa nd e d
7 = UPC -A
8 = UPC -E
9 = E A N-13
10 = E A N-8
11 = UC C /E A N-12 8 a nd  C C -A /B 12 = UC C /E A N-12 8 a nd  C C -C
De f a u lt : 1
c = m a g niﬁ ca tion fa ctor V a lu e s : 1 to 10
De f a u lt : 2 4 d ot = 6, 12 dot is 3, 8 d ot a nd  low e r  is  212 dot = 6, > 8 dot is 3,
8 d ot a nd  le s s  is  2
d = s e pa ra tor  h e ig h t V a lu e s : 1 or 2
De f a u lt : 1
e = B a rcod e  h e ig h t Th e  b a r  cod e  h e ig h t only  a ffe cts  th e  line a r  por tion of th e  b a rcod e . O nly
UC C /E A N a nd  C C -A /B /C.
V a lu e s : 1 to 32000 d ots
De f a u lt : 25
f = th e  s e g m e nt w id th
(G S 1 D a ta B a r  E x pa nd e d
only )
V a lu e s : 2 to 22, e v e n nu m b e r s  only , in s e g m e nts  pe r  line
De f a u lt : 22
E x a m p le s
Th is  is  a n e x a m ple  of S y m b olog y  Ty pe  7  - UPC -A :
Th is  is  a n e x a m ple  of S y m b olog y  Ty pe  1 - G S 1 D a ta B a r  O m nid ire ctiona l:

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
