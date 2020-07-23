// https://www.hackerrank.com/challenges/making-anagrams/problem

const s1 = "aaa";
const s2 = "bbb";

let anagramStrings = (s1, s2) => {
  let string1 = {};
  let string2 = {};
  let output = false;

  if (s1.length !== s2.length) {
    output = false;
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    if (!string1[s1[i]]) {
      string1[s1[i]] = 1;
    } else {
      string1[s1[i]]++;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (!string2[s2[i]]) {
      string2[s2[i]] = 1;
    } else {
      string2[s2[i]]++;
    }
  }

  for (let i = 0; i < s1.length; i++) {
    // if (string1[s1[i]] !== string2[s2[i]] && s2[i + 1] !== undefined) {
    //   output = false;
    // } else {
      if (Object.keys(string2) !== Object.keys(string1)) {
        output === false;
      } else {
        output === true;
      }
        console.log(string1, ">>>>>>>>>>...........>>>>>......", string2);
      //   output = true;
    // }
  }

  return output;
};

// Complete the makeAnagram function below.
function makeAnagram(strs) {
  let anagrams = {};
  let total = 0;
  //   Array.from(a).forEach((char) => {
  //     counter[char] = counter[char] || 0;
  //     counter[char]++;
  //   });
  //   Array.from(b).forEach((char) => {
  //     counter[char] = counter[char] || 0;
  //     counter[char]--;
  //   });
  //   Object.keys(counter).forEach((k) => {
  //     if (counter[k] !== 0) {
  //       total += Math.abs(counter[k]);
  //     }
  //   });

  //   return total;
  for (let i = 0; i <= strs.length; i++) {
    if (strs.length === 2) {
      if (anagramStrings(strs[0], strs[1]) === true) {
        return strs;
      } else {
        return strs;
      }
    } else if (strs[i + 1] !== undefined) {
      if (anagramStrings(strs[i], strs[i + 1]) === true) {
        // console.log(strs[i],">>>>>>>>>>...........>>>>>......", strs[i+1]);
        strs.splice(i + 1, 1);
      }
    }
  }
  return strs;
}

// const ar = ["aaa", "bbb", "ccc"];
const ar = ["code", "aaagmnrs", "anagrams", "doce"];

console.log(makeAnagram(ar));
// console.log(anagramStrings(s1, s2));
