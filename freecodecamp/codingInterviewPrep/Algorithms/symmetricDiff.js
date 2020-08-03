// remove duplicates of 
function sym(args) {
  // The slice() method is used to break down the arguments object to an array, args.
  var args = Array.prototype.slice.call(arguments);

  // get the difference
  // The getDiff function finds the symmetric difference between two sets, arr1 and arr2. It is used as a callback function for the reduce() method called on args.
  var getDiff = (a1, a2) => {
    // return items in a1 that don't exist in a2
    function filterFunction(a1, a2) {
      return a1.filter((item) => {
        return a2.indexOf(item) === -1;
      });
    }

    // compare all arrays
    return filterFunction(a1, a2).concat(filterFunction(a2, a1));
  };

  var summary = args.reduce(getDiff, []);
  // get the unique values
  var unique = summary.filter((elem, index, self) => {
    return (index === self.indexOf(elem));
  });

  return unique;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
