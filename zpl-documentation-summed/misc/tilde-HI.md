# ~HI

## Description

Th e  ~HI com m a nd  is  d e s ig ne d  to b e  s e nt from  th e  h os t to th e  Ze b ra  printe r  to re trie v e  inform a tion.
Upon re ce ipt, th e  printe r  re s pond s  w ith  inform a tion on th e  m od e l, s oftw a re  v e r s ion, d ots -pe r-m illim e te r
s e tting , m e m or y  s iz e , a nd  a ny  d e te cte d  options .
Ho s t  Id e n t iﬁ c a t io n

## Format

```
W h e n th e  printe r  re ce iv e s  th is  com m a nd , it re tu rns :
XXXXXX,V1.0.0,dpm,000KB,X
X X X X X X  = m od e l of Ze b ra  printe r
V1.0 .0  = v e r s ion of s oftw a re
d pm  = d ots /m m
6, 8, 12 , or  2 4 d ots /m m  printh e a d s
0 0 0 KB  = m e m or y
512 KB  = 1/2  M B
10 2 4KB  = 1 M B
2 0 48KB  = 2  M B
40 9 6KB  = 4 M B
819 2 KB  = 8 M B
x  = re cog niz a b le  options
only  options  s pe ciﬁ c to printe r  a re  s h ow n (cu tte r, options , e t ce te ra .)
```

## Parameters

See ZPL II Programming Guide.

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
