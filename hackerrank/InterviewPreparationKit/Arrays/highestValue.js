var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

console.log(computeProduct(unsortedArray)); // 21000

function sortIntegers(a, b) {
  return a - b;
}

function computeProduct(unsorted) {
  // arr.sort()
  let largest = 0;
  // let smallest = 0
  // let result = []
  // // highest by highest value
  // for(let i=0;i<=arr.length;i++) {
  //     // finds the largest value
  //   if (largest < arr[i] ) {
  //       largest = arr[i];
  //   }

  //     // find the smallest value
  //     if(smallest > arr[i]) {
  //         smallest = arr[i]
  //     }
  // }
  // result.push(smallest, largest)

  // return result

  //  // highest by two combinations and finding the highest value
  let comb = [];
  //   for (let i = 0; i < arr.length; i++) {
  //   adding the next adjacent element and return the largest value
  // if (!arr[i + 1]) {
  //   comb.push(arr[i]);
  // } else {
  //   comb.push(arr[i] + arr[i + 1]);
  // }
  // if (largest < comb[i]) {
  //   largest = comb[i];
  // }

  // adding only elements, with no repetition then return the largest value
  //     if (!arr[i + 1]) {
  //       comb.push(arr[i]);
  //     } else {
  //       comb.push(arr[i] + arr[i + 1]);
  //     }
  //     arr.shift(2);
  // if (largest < comb[i]) {
  //   largest = comb[i];
  // }
  //   }

  //   return comb;

  // Add elements in an array and return the total
  //   return arr.reduce((a, b) => a-b)

  // max1 * max2 * max3
  var sortedArray = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sortedArray.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
    product1 = product1 * sortedArray[x];
  }

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];

  if (product1 > product2) return product1;

  return product2;
}
