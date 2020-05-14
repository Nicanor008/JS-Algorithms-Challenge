// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=dictionaries-hashmaps
// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
// Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

// the problem is simpler if you break it into two parts:

// Traverse all possible substrings within string
// Check if any two substrings of equal length are anagrams
// The first step is self-explanatory.

// The second step, I found a bit trickier. It was helpful for me to track matches in a hash map and then increment
//  my count accordingly. Each additional match of an annagram implies a greater increase in the number of total matches, 
//  as each subsequent match has more annagrams to match with.

function getAllSubstrings(s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            arr.push(s.slice(i, j));
        }
    }
    return arr;
}

function checkAllSubstrings(ss) {
    const dict = {};
    let count = 0;
    for (let str of ss) {
        const sortedStr = str.split('')
            .sort((a, b) => a.toLowerCase().localeCompare(b))
            .join('');
        if (dict[sortedStr]) {
            count += dict[sortedStr];
            dict[sortedStr] += 1;
        } else {
            dict[sortedStr] = 1;
        }
    }
    return count;
}

function sherlockAndAnagrams(s) {
    // Traverse all substrings within string
    const ss = getAllSubstrings(s);

    // Check if any two substrings of equal length are anagrams
    const count = checkAllSubstrings(ss);

    return count;
}

console.log(sherlockAndAnagrams("abba"))