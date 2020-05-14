// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=dictionaries-hashmaps

function twoStrings(s1, s2) {
    // let a = new Set(s1);
    // let b = new Set(s2);

    // for (const letter of b) {
    //     if (a.has(letter)) {
    //         return "YES";
    //     }
    // }
    // return "NO";

    for (let letter of s1) {
    if (s2.includes(letter)) {
      return 'YES'
    }
  }
  return 'NO'
}
const s1 = "hello"
const s2 = "world"
console.log(twoStrings(s1, s2))
