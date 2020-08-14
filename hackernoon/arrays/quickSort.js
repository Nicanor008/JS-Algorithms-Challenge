// How is an integer array sorted in place using the quicksort algorithm?
// using recursion
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    console.log(">>>>>>......", left)
    console.log("<<<,,,,,,,,<<<<......", right)
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var unsorted = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
  var sorted = quicksort(unsorted);
  
  console.log(sorted);
