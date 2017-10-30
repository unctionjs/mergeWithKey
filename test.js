/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mergeWithKey from "./index"

test(({same, end}) => {
  same(
    mergeWithKey((left) => (right) => (key) => key + right + left)({beta: "a"})({beta: "b"}),
    {beta: "betaba"}
  )

  end()
})

test(({same, end}) => {
  same(
    mergeWithKey((left) => (right) => (key) => key + right + left)({alpha: "a"})({beta: "b"}),
    {
      alpha: "a",
      beta: "b",
    }
  )

  end()
})
