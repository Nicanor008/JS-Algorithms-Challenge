// How do you print duplicate characters from a string?

const str = "afewreociwddwjej";
// function findRepeat(str) {
//   const arr = str.split('');
//   const hash = new Map();
//   const result = [];
//   // If repeat the value is false, if no repeat the value is true
//   for (let i = 0; i < arr.length; i++) {
//     if (hash.get(arr[i]) === undefined) {
//       hash.set(arr[i], true);
//     } else {
//       const value = hash.get(arr[i]);
//       if (value) {
//         hash.set(arr[i], !value);
//       }
//     }
//   }
//   hash.forEach((v, k) => {
//     if (!v)
//       result.push(k);
//   });
//   return result;
// }
// console.log(...findRepeat(str));

function howManyRepeated(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

    if (strArr != null) {
      strArr.forEach((elem) => {
        result.push(elem[0]);
      });
    }
    return result;
  }
  console.log(...howManyRepeated(str));
