// Grading Students
// https://www.hackerrank.com/challenges/grading/problem
function solve(grades) {
  let roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      roundedGrades.push(grades[i]);
    } else if (grades[i] % 5 === 3) {
      roundedGrades.push(grades[i] + 2);
    } else if (grades[i] % 5 === 4) {
      roundedGrades.push(grades[i] + 1);
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
}

console.log(38 % 5);

const grades = [73, 67, 38, 33];
solve(grades);
