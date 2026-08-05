# ~JF

## Description

S e t  Ba t t e r y  Co n d it io n
Th e re  a re  tw o low  b a tte r y  v olta g e  le v e ls  s e ns e d  b y  th e  PA /PT40 0 ™  printe r s . W h e n b a tte r y  v olta g e
g oe s  b e low  th e  ﬁ r s t le v e l, th e  g re e n LE D  b e g ins  ﬂ a s h ing  a s  a  w a rning  b u t printing  continu e s . W h e n th is
w a rning  occu r s , it is  re com m e nd e d  to re ch a rg e  th e  b a tte r y .
A s  printing  continu e s , a  s e cond  low  v olta g e  le v e l is  re a ch e d . A t th is  point, b oth  g re e n a nd  ora ng e  LE D s
ﬂ a s h  a s  a  w a rning , a nd  printing  a u tom a tica lly  pa u s e s .
W h e n pa u s e  on low  v olta g e  is  a ctiv e  (~ JFY) a nd  th e  b a tte r y  v olta g e  le v e l fa lls  b e low  th e  s e cond  low
v olta g e  le v e l, printing  pa u s e s  a nd  a n e rror  cond ition is  d is pla y e d  a s  a n ind ica tion th a t th e  printe r  s h ou ld
b e  plu g g e d  into th e  b a tte r y  ch a rg e r. B y  pre s s ing  FE E D , printing  continu e s  on a  la b e l-b y -la b e l b a s is , b u t
th e re  is  a  h ig h  ris k  of los ing  la b e l form a t inform a tion d u e  to th e  continu e d  d e cre a s e  of b a tte r y  v olta g e .
W h e n pa u s e  on low  v olta g e  is  not a ctiv e  (~ JFN), a nd  th e  b a tte r y  v olta g e  le v e l fa lls  b e low  th e  s e cond
low  v olta g e  le v e l, printing  continu e s  a nd  th e  ora ng e  LE D  re m a ins  off. If th e  b a tte r y  v olta g e  continu e s
to d e cre a s e , la b e l inform a tion cou ld  b e  los t a nd  ca u s e  th e  printe r  to s top ope ra ting . Th is  option s h ou ld
b e  s e le cte d  only  w h e n th e  printe r  is  conne cte d  to th e  C a r  B a tte r y  A d a pte r. From  tim e  to tim e  th e
printe r  m ig h t s e ns e  th a t b a tte r y  v olta g e  is  b e low  th e  ﬁ r s t low  v olta g e  le v e l, b u t d u e  to th e  continu ou s
re ch a rg ing  of th e  ca r  b a tte r y , fu r th e r  los s  of b a tte r y  v olta g e  is  not a  conce rn a nd  printing  continu e s .
If th is  option is  not s e le cte d  w h e n u s ing  th e  C a r  B a tte r y  A d a pte r, y ou  m ig h t ne e d  to pre s s  FE E D  to ta k e
th e  printe r  ou t of Pa u s e  M od e  a nd  print e a ch  la b e l.
Th e  HC 10 0 ™  printe r  d oe s  not pe r form  a  ca lib ra tion, b u t d oe s  print a  s e ns or  proﬁ le  la b e l.

## Format

```
~JFp
~JG
S e nd ing  th e  ~JG com m a nd  to a  printe r  conﬁ g u re d  for  th e rm a l tra ns fe r  prod u ce s  a  s e rie s  of la b e ls
re s e m b ling  th is  im a g e :
```

## Parameters

p = pa u s e  on low
v olta g e
V a lu e s : Y (pa u s e  on low  v olta g e ) or  N (d o not pa u s e )
N is  s u g g e s te d  w h e n th e  printe r  is  pow e re d  b y  th e  C a r  B a tte r y  A d a pte r.
De f a u lt : Y
~ JG
Th e  ~JG com m a nd  prints  a  g ra ph  (m e d ia  s e ns or  proﬁ le ) of th e  s e ns or  v a lu e s .
Gr a p h in g  S e n s o r  Ca lib r a t io n

## Example

_No example extracted. See ZPL II Programming Guide._

## Related Commands

_See index.md for commands in the same group._
