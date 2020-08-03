function solution(N, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sumN = 0;
  let result = [];
  for (let i = 0; i < N; i++) {
    sumN += i;
  }
  if (sumN < K) {
    return -1;
  } else if (sumN === K) {
    return 5;
  } else {
    //   calculate
    let l = 0,
      r = N;
    let currentSum = l + r;
    for (let i = l; i < N; i++) {
      if (currentSum === K) {
        result.push(l, r);
        console.log("<<<<<,,,,,,,,,,", currentSum)
        break
      } else if (l + r < K) {
      console.log(l, ">>..", r,">>..", currentSum);
      currentSum = i + r
      l++;
      }
    }
  }
  console.log(">>>>..", result);
}

console.log(solution(5, 8));
