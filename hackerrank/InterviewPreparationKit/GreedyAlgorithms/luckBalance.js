function luckBalance(k, contests) {
  const importantContestsVals = [];
  let val = 0;

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1]) {
      importantContestsVals.push(contests[i][0]);
    } else {
      val += contests[i][0];
    }
  }

  importantContestsVals.sort((a, b) => a - b);
  const negativeArr = importantContestsVals.splice(
    0,
    importantContestsVals.length - k
  );
  const largestArr =
    negativeArr.length >= importantContestsVals.length
      ? negativeArr.length
      : importantContestsVals.length;

  for (let j = 0; j < largestArr; j++) {
    if (negativeArr[j]) {
      val -= negativeArr[j];
    }
    if (importantContestsVals[j]) {
      val += importantContestsVals[j];
    }
  }

  return val;
}

console.log(
  luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ])
);
