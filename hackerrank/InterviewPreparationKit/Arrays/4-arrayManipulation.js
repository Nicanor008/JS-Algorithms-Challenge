// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&h_r=next-challenge&h_r%5B%5D%5B%5D=next-challenge&h_r%5B%5D%5B%5D=next-challenge&h_v=zen&h_v%5B%5D%5B%5D=zen&h_v%5B%5D%5B%5D=zen&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D=arrays

// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of
// the array element between two given indices, inclusive. Once all operations have been performed, return the
// maximum value in your array.

// For example, the length of your array of zeros n=10. Your list of queries is as follows:
// a b k
// 1 5 3
// 4 8 7
// 6 9 1

// Complete the function arrayManipulation in the editor below.
// It must return an integer, the maximum value in the resulting array.
// arrayManipulation has the following parameters:

// n - the number of elements in your array
// queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

function arrayManipulation(n, queries) {
  let tmp = {},
    max,
    currentNumber = 0;
  for (let i = queries.length - 1; i >= 0; i -= 1) {
    let [firstElem, lastElement, value] = queries[i];
    tmp[firstElem] = (tmp[firstElem] || 0) + value;
    tmp[lastElement + 1] = (tmp[lastElement + 1] || 0) - value;
  }
  for (let key in tmp) {
    currentNumber += tmp[key];
    if (!max || currentNumber > max) {
      max = currentNumber;
    }
  }
  return max;
}
