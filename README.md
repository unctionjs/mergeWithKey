# @unction/mergeWithKey

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<L, MapperFunctionType<R, MapperFunctionType<K, V>>> =>
>   KeyedEnumerableType<R, K> =>
>     KeyedEnumerableType<L, K> =>
>       KeyedEnumerableType<V, K>

Merges two keyed enumerables and uses a function to handle conflicts. The function is given the left value, the right value, and the key.

``` javascript
const left = {
  beta: "1"
}
const right = {
  beta: "2"
}

mergeWithKey((left) => (right) => (key) => key+leftValue+rightValue)(left)(right)
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
