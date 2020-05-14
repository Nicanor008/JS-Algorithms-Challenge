// https://www.hackerrank.com/interview/interview-preparation-kit/sorting/challenges

function bubbleSort(a) {
  let swaps = 0;
  for (var i = a.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swaps += 1;
      }
    }
  }
  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log("First Element:", a[0]);
  console.log("Last Element:", a[a.length - 1]);
}

console.log(bubbleSort([1, 2, 3]));
