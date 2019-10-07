//www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen

https: // Consider a staircase of size n = 4;

//    #
//   ##
//  ###
// ####

// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

function staircase(n) {
  const maxStairBlocks = n;
  for (var i = 1; i <= n; i++) {
    var col = i;
    for (var j = 1; j <= n - col; j++) {
      process.stdout.write(" ");
    }
    for (var j = 1; j <= col; j++) {
      process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
}

console.log(staircase(6))
