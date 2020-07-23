// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary
// representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation
// 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains
// one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation
// 100000 and has no binary gaps.

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let bin = N.toString(2); // convert decimal to binary
  let count = 0; // count the '0' occurences
  let max = 0; // max number of '0'

  // count the 'o' occurence in N
  for (let j = bin.length - 1; j >= 0; j--) {
    if (bin.charAt(j) === "0") {
      count += 1;
    } else if (bin.charAt(bin.length - 1) === "0") {
      count = 0;
      max = count;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  return max;
}

console.log(solution(101010_2));
