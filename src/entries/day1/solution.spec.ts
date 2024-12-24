import {
  getTotalDistance,
  getSimilarityScore,
  InputData,
  useInputData,
} from "@entries/day1/solution";
import { renderHook } from "@testing-library/react";

const RAW_DATA = `3   4
4   3
2   5
1   3
3   9
3   3`;

const TEST_DATA: InputData = {
  list1: [3, 4, 2, 1, 3, 3],
  list2: [4, 3, 5, 3, 9, 3],
  display: [
    [3, 4],
    [4, 3],
    [2, 5],
    [1, 3],
    [3, 9],
    [3, 3],
  ],
};

describe("Day 1 Solution", () => {
  it("Converts string to 2 lists", () => {
    const { result } = renderHook(() => useInputData(RAW_DATA));
    expect(result.current).toStrictEqual(TEST_DATA);
  });

  it("Part 1: Total Distance", () => {
    const { total } = getTotalDistance(TEST_DATA);
    expect(total).toEqual(11);
  });

  it("Part 2: Similarity Score", () => {
    const { total } = getSimilarityScore(TEST_DATA);
    expect(total).toEqual(31);
  });
});
