// How do you find the duplicate number on a given integer array?

function duplicateNumber(s) {
  let count = {};
  let result = [];
  s.forEach((val) => {
    count[val] = (count[val] || 0) + 1;
  });

  // obtain the keys same as those in the initial array
  function getkeyFromvalue(object, value) {
    for (let ob in object) {
      if (object.hasOwnProperty(ob)) {
        if (object[ob] === value) return parseInt(ob);
      }
    }
  }

  Object.values(count).map((x) => {
    if (x > 1) {
        result.push(getkeyFromvalue(count, x));
    }
  });
  return result;
}

s = [1, 2, 3, 2, 3, 4, 3, 4, 5];
console.log(duplicateNumber(s));
