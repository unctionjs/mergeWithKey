import reduceWithValueKey from "@unction/reducewithvaluekey";
import attach from "@unction/attach";
import {MapperFunctionType} from "./types";

export default function mergeWithKey<K, L, R, V> (unction: MapperFunctionType<L, MapperFunctionType<R, MapperFunctionType<K, V>>>) {
  return reduceWithValueKey((accumulated: ListType<V> | Record<string | number | symbol, V> | Map<K, V> | string) => (value: R) => (key: K) => {
    if (accumulated[key]) {
      return {
        ...accumulated,
        [key]: unction(accumulated[key])(value)(key),
      };
    }

    return attach(key)(value)(accumulated);
  });
}
