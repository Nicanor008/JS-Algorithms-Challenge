// Alice and Bob each created one problem for HackerRank.A reviewer rates 
// the two challenges, awarding points on a scale from  to
// for three categories: problem clarity, originality, and difficult

// acceptance Criteria 
// It must return an array of two integers, the first being Alice's score and the second being Bob's.

// Problem Link - https://www.hackerrank.com/challenges/compare-the-triplets/problem

// compareTriplets has the following parameter(s):

// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating

// Complexity:
// time complexity is O(1)
// space complexity is O(1)

function compareTriplets(a, b) {
  let score = [0, 0];

  for (let i = 0; i < a.length; i++)
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "";
  return score;
}

const a = [5, 6, 7];
const b = [3, 16, 30];
console.log(compareTriplets(a, b));
