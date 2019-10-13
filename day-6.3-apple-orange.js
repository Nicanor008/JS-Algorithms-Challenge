// Apple and orange
// https://www.hackerrank.com/challenges/apple-and-orange/problem
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // create 2 variables for in range frutes
  let applesInRange = 0;
  let orangesInRange = 0;

  // get the max length of both arrays to use it in the for loop
  let length = Math.max(apples.length, oranges.length);

  for (let i = 0; i < length; i++) {
    //check if this index exist in apples
    if (typeof apples[i] !== "undefined") {
      if (a + apples[i] >= s && a + apples[i] <= t) {
        applesInRange++;
      }
    }

    //check if this index exist in oranges
    if (typeof oranges[i] !== "undefined") {
      if (b + oranges[i] >= s && b + oranges[i] <= t) {
        orangesInRange++;
      }
    }
  }

  console.log(applesInRange);
  console.log(orangesInRange);
}

const s = "7 11"
const t = "5 15"
const a = "3 2"
const apples = "-2 2 1"
const oranges = "5 - 6"

console.log(countApplesAndOranges(s, t, a, apples, oranges))
