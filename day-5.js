// Given an array of integers, calculate the fractions of its elements that are positive, 
// negative, and are zeros.Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places,

// There are 3 positive numbers, 3 negative numbers, and 1 zero in the array.

// link
// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let positive = arr.filter(number => number > 0).length / arr.length;
  let negative = arr.filter(number => number < 0).length / arr.length;
  let zeronums = arr.filter(number => number == 0).length / arr.length;
  return console.log(
    positive.toFixed(6) +
      "\n" +
      negative.toFixed(6) +
      "\n" +
      zeronums.toFixed(6)
  );
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));