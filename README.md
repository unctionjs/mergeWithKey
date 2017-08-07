# @unction/mergeWithKey


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (IterableType -> IterableType -> KeyType -> any) -> IterableType -> IterableType -> IterableType

Merges two iterables and uses a provided function to handle conflicts. The function is given the key, the left value, and the right value.

``` javascript
const left = {
  beta: "1"
}
const right = {
  beta: "2"
}

mergeWith((key, leftValue, rightValue) => key+leftValue+rightValue)(left)(right)
```

Which returns:

``` javascript
{
  beta: "beta12"
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/mergeWithKey.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/mergeWithKey.svg?maxAge=2592000&style=flat-square
