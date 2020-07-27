function solution(T, R) {
  // write your code in JavaScript (Node.js 8.9.4)
  let Rindex = [];
  for (let i = 0; i < R.length; i++) {
    // get index of passed test
    if (R[i] === "OK") {
      Rindex.push(i);
    }
  }

  let OK = []

      Rindex.forEach(e => {
          console.log(e)
        OK.push(T[e])
      })

    //   calculate
    let takenTest = OK.length
    let total = T.length
    const result = (takenTest - 1 *100)/total


//   let hashmap = [];

//   // check repetition of passed test
//   for (let j = 0; j < T.length; j++) {
//     if (T[j].split("1").length - 1) {
//       hashmap.push(1);
//     } else if (T[j].split("2").length - 1) {
//       hashmap.push(2);
//     } else if (T[j].split("3").length - 1) {
//       hashmap.push(3);
//     } else if (T[j].split("4").length - 1) {
//       hashmap.push(4);
//     }
//   }

//   let unique_list = [];
//   var current = null;
//   var count = 0;

//   for (let i = 0; i < hashmap.length; i++) {
//     // if(elem)
//     if (hashmap[i] != current) {
//       if (count > 0) {
//         console.log(current + " comes --> " + count + " times<br>");
//       unique_list.push(T[i])
//     }
//       current = hashmap[i];
//       count = 1;
//     }
//   }
  return result;
}

(T = ['test1a', 'test2', 'test1b', 'test1c', 'test3']),
  (R = ["Wrong answer", "OK", "Time limit exceeded", "OK"]);

console.log(solution(T, R));
