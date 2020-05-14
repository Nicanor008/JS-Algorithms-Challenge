// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  let l1 = note.length;
  let l2 = magazine.length;
//   magazine.sort();
//   note.sort();
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < l1 && j < l2) {
    if (note[i] === magazine[j]) {
      count += 1;
      i += 1;
    }
    j += 1;
  }
  if (count === l1) console.log("Yes");
  else console.log("No");
}

const mag = ["give", "me", "one", "grand", "today", "night"];
const note = ["give", "one", "grand", "today"];
checkMagazine(mag, note);
