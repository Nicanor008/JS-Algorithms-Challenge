// https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a) {
  var ret = new Array();
  for (var i = a.length - 1; i >= 0; i--) {
    ret.push(a[i]);
  }
  return ret;
  // return a.reverse()

//   split a string and add %20
  // return a.split(" ").join("%20")
}

// console.log(reverseArray([1, 2, 3, 4]))
console.log(reverseArray("Mr John Smith"));
