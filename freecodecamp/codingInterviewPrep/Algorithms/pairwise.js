// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices.
//  Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] 
// using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

function pairwise(arr, arg) {
    if (arr.length === 0) return 0;
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      if (pairs.length === 0) {
        pairs.push([{value:arr[i], index:i}]);
      } else {
        for (let j = 0; j < pairs.length; j++) {
          if (pairs[j][0].value === arg - arr[i] && pairs[j].length===1) {
            pairs[j].push({value:arr[i], index:i});
            break;
          } else if (j === pairs.length - 1) {
              pairs.push([{value:arr[i], index:i}]);
              break;
            }
        }
      }
    }
    pairs = pairs.filter(e => e.length === 2).map(e => e[0].index+e[1].index);
    let re = pairs.reduce((a, b) => a + b);
    return re;
  }
  
  pairwise([1, 4, 2, 3, 0, 5], 7);

console.log(pairwise([1, 4, 2, 3, 0, 5], 7))
