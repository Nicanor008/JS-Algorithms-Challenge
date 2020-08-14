// Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. 
// A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, 
// for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good

function mergeSort(array) {
    if (array.length === 1) {
      return array;
    } else {
      const splitIndex = Math.floor(array.length / 2);
      return merge(
        mergeSort(array.slice(0, splitIndex)),
        mergeSort(array.slice(splitIndex))
      );
    }
    // Merge two sorted arrays
    function merge(array1, array2) {
      let merged = [];
      while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
          merged.push(array1.shift());
        } else if (array1[0] > array2[0]) {
          merged.push(array2.shift());
        } else {
          merged.push(array1.shift(), array2.shift());
        }
      }
      // After looping ends, one array is empty, and other array contains only
      // values greater than all values in `merged`
      return [...merged, ...array1, ...array2];
    }
  }

  console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))\
