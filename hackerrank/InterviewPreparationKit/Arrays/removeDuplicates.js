// 1.3 Removing duplicates of an array and returning an array of only unique elements

function removeDuplicates(array) {
  // implementation 1
  // // return Array.from(new Set(arr))

  // implementation 2
  var hashmap = {};
  var unique = [];

  for (var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    console.log(unique)
    if (!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

console.log(removeDuplicates(array)); // [ 1, 2, 3, 5, 9, 8 ]
