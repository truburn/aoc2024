import inputData from "./input";

export interface InputData {
  list1: number[];
  list2: number[];
}

/****************************************************
 ***** METHODS TO SOLVE EACH PART OF THE PUZZLE *****
 ****************************************************/

/**
 * Converts the raw input data string into two separate lists that have not
 * been processed yet.
 *
 * The string is split into an array and then each line is also split and
 * converted into numbers and then placed into new arrays for each list. The
 * individual lists are then returned for further processing.
 */
export function useInputData(): InputData {
  const list1: number[] = [];
  const list2: number[] = [];

  inputData.split("\n").forEach((line) => {
    const [val1, val2] = line.split(/\s+/).map((val) => parseInt(val));
    list1.push(val1);
    list2.push(val2);
  });

  return { list1, list2 };
}

/*******************************************************************************
 *                                  PART ONE                                   *
 *******************************************************************************
 *                                                                             *
 * Sort each of the lists from smallest to largest and then find the           *
 * difference between the values of each line. The differences are then added  *
 * up to return the total distance.                                            *
 *                                                                             *
 * The difference between two values are also compared to subtract the lower   *
 * number from the higher number.                                              *
 *                                                                             *
 ******************************************************************************/
export function getTotalDistance({ list1, list2 }: InputData) {
  const sortedList1 = list1.sort();
  const sortedList2 = list2.sort();

  const distances = sortedList1.map((val1, idx) => {
    const val2 = sortedList2[idx];
    if (val1 > val2) return val1 - val2;
    return val2 - val1;
  });

  const total = distances.reduce((prev, curr) => prev + curr);

  return { sortedList1, sortedList2, distances, total };
}

/*******************************************************************************
 *                                  PART TWO                                   *
 *******************************************************************************
 *                                                                             *
 * Loop through the first list and get a count of each time the value appears  *
 * in the second list. Then multiple the count by the value to get a           *
 * similarity score for each value in the first list. The scores are then      *
 * added up to return the total similiary score.                               *
 *                                                                             *
 ******************************************************************************/
export function getSimilarityScore({ list1, list2 }: InputData) {
  const similarities: number[] = [];

  list1.forEach((val) => {
    const count = list2.filter((v) => v === val).length;
    similarities.push(val * count);
  });

  const total = similarities.reduce((prev, curr) => prev + curr);

  return { total };
}
