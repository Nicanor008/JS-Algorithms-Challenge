// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1).
// If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  let newArr = [];

  //   get all product names
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i][1]);
  }

  //   check on arr 2 if it exists in arr 1
  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i][1])) {
      arr1.push(arr2[i]);
    } else {
      var index = newArr.indexOf(arr2[i][1]); // get the index
      arr1[index][0] = arr1[index][0] + arr2[i][0]; //get quantity
    }
  }

  //   sort the result
  arr1.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });
  return arr1;
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
