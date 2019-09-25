// A left rotation operation on an array shifts each of the array's elements 
// unit to the left.

// Rotate an array left
// Complete the rotLeft function below.
function rotLeft(a, d) {
  for (var i = 0; i < d; i++) {
    a.push(a.shift());
  }
  return a;
}

console.log(rotLeft([5, 6, 7, 8, 9], 2));

// output to be [ 7, 8, 9, 5, 6]
