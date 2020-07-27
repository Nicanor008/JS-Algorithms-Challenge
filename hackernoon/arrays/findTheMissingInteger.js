// How do you find the missing number in a given integer array of 1 to 100?

function missingNumber(s, t) {
  s.sort();
  let missing = false;
  let result = [];
  for (let i = 1; i < t; i++) {
    missing = false;
    for (let j = 0; j < s.length; j++) {
      if (s[j] === i) {
        missing = true;
      }
    }
    if (!missing) {
      result.push(i);
    }
  }
  return result;
}

s = [1, 2, 3, 4, 9, 8];
console.log(missingNumber(s, 13));
