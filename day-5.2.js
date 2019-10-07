// https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//  Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, arr=[1,3,5,7,9] . Our minimum sum is 1+3+5+7=16 and our maximum sum is 3+5+7+9. We would print 16 24

// solution 1
function miniMaxSum(arr) {
  const res = arr
    .sort((a, b) => a - b)
    .reduce(
      (prev, cur, i) => {
        if (i != 0) prev.max = prev.max + cur || cur;
        if (i != arr.length - 1) prev.min = prev.min + cur || cur;
        return prev;
      },
      [{ max: 0 }, { min: 0 }]
    );
  console.log(res.min || 0, res.max || 0);
}

miniMaxSum([[10, 2, 3, 4, 8]]);
