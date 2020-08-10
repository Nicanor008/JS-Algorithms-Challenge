// Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

// swap
function swap(a, b, arr) {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
  }
  
  function selectionSort(array) {
    // change code below this line
    // look for the smallest value, assume initially to be the first value
    // swap to the beginning
    // repeat
    for(let i=0;i<array.length;i++) {
      let min = i;
      for(let j=i+1;j<array.length;j++) {
        if(array[min]>array[j]){
          min = j
        }
        swap(i, min, array)
      }
    }
    return array;
    // change code above this line
  }
  
  
  console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
  