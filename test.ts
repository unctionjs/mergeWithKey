
import mergeWithKey from "./index";

test("works", () => {
  expect(
    mergeWithKey((left) => (right) => (key) => key + right + left)({beta: "a"})({beta: "b"})
  ).toEqual({beta: "betaba"});
});

test("works", () => {
  expect(
    mergeWithKey((left) => (right) => (key) => key + right + left)({alpha: "a"})({beta: "b"})
  ).toEqual({
    alpha: "a",
    beta: "b",
  });
});
