import reduceWithValueKey from "@unction/reducewithvaluekey";
import attach from "@unction/attach";
export default function mergeWith (unction) {
  return reduceWithValueKey((accumulated) => (value) => (key) => {
    if (accumulated[key]) {
      return {...accumulated,
        [key]: unction(accumulated[key])(value)(key),
      };
    }

    return attach(key)(value)(accumulated);
  });
}
