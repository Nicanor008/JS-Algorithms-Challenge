// Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined),
// find the missing number in O(n) time

function findMissingNumber(arr, up, lb) {
  let prev;
  let missing;
  arr.sort();

  for (let i = 0; i < up; i++) {
    if (arr[i] !== up && arr[i] !== undefined) {
      if (arr[0] !== lb) {
        missing = arr[0] - 1;
      }
      if (arr[i] + 1 !== arr[i + 1]) {
        missing = arr[i] + 1;
      }
    }
  }
  return missing;
}

var arrayOfIntegers = [2, 5, 8, 4, 1, 6, 3, 7, 10];
var upperBound = 9;
var lowerBound = 1;

// findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8

// function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
//   // Iterate through array to find the sum of the numbers
//   var sumOfIntegers = 0;
//   for (var i = 0; i < arrayOfIntegers.length; i++) {
//     sumOfIntegers += arrayOfIntegers[i];
//   }

//   // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
//   // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
//   // N is the upper bound and M is the lower bound

//   upperLimitSum = (upperBound * (upperBound + 1)) / 2;
//   lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

//   theoreticalSum = upperLimitSum - lowerLimitSum;

//   return theoreticalSum - sumOfIntegers;
// }

console.log(findMissingNumber(arrayOfIntegers, upperBound, lowerBound));
