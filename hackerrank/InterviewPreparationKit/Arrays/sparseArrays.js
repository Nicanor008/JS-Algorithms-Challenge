// https://www.hackerrank.com/challenges/sparse-arrays/problem

function matchingStrings(strings, queries) {
    let result = [];
    queries.forEach(query => {
        result.push(strings.filter(string => (string === query)).length);
    })
    return result;
}

console.log(matchingStrings(['aba','baba','aba','xzxb'],['aba','aba','xzxb']))
