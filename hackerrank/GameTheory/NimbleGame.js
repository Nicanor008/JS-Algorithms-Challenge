// https://www.hackerrank.com/challenges/nimble-game-1/problem

// Complete the nimbleGame function below.
function nimbleGame(s) {
    var xor = 0;
    for(var i = 0; i < s.length; ++i){
        if (s[i] > 0){
            xor ^= s[i]%2 == 0 ? 0 : i;
        }
    }
    return xor !== 0 ? "First" : "Second";
}

console.log(nimbleGame([0, 2, 3, 0, 6]))
