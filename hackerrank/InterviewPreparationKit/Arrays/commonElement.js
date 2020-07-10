function commonElement(fa, sa) {
  // First implementation
  // let output = []

  // // time - O(n)
  // for(let i=0;i<fa.length;i++) {
  //     if(sa.includes(fa[i])) {
  //         output.push(fa[i])
  //     }
  // }

  // // remove duplicates
  // // time - (O(n))
  // return Array.from(new Set(output))


  
  // second implementation
  var hashmap = {};
  var intersectionArray = [];

  fa.forEach(function (element) {
    hashmap[element] = 1;
  });

  // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
  sa.forEach(function (element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;
}

console.log(commonElement([2, 3, 1], [10, 11, 13, 6, 3, 5, 1, 2, 0, 3, 2]));
