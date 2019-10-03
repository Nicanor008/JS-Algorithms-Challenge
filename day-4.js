// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  

// The left-to-right diagonal 1+5+9=15 . The right to left diagonal 3+5+9 = 17. 
// Their absolute difference is |15 - 17| = 2.

function diagonalDifference(arr) {
  // Write your code here
  // length of input arr.
  const length = arr.length;
  let diagonal1 = 0,
    diagonal2 = 0;

  // Looping through the array and summing the diagonals.
  for (let i = 0; i < length; i++) {
    // Calculating the primary diagonal.
    diagonal1 += arr[i][i];
    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += arr[length - 1 - i][i];
  }
  // return absolute difference value.
  return Math.abs(diagonal1 - diagonal2);
}

const arr = [
[11, 2, 4]
[4, 5, 6]
[10, 8, -12]]

console.log(diagonalDifference(arr));
