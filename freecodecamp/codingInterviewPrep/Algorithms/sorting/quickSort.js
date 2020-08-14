// Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. 
// While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.
// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. 
// These attributes make it a popular and useful sorting method.

//Swapping array elements via ES6 array destructuring
function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }
  
  //Pivot function returns the fixed pivot point
  function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
      //Move all the small elements on the left side
      if (arr[i] < arr[left]) swap(arr, i, ++shift);
    }
  
    //Finally swapping the last element with the left
    swap(arr, left, shift);
    return shift;
  }
  
  function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(array, left, right);
  
      //Recusrively calling the function to the left of the pivot and to the right of the pivot
      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }
    return array;
  }

  // test array:
let array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log(quickSort(array))
