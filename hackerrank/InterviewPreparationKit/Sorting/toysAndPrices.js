// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=sorting&h_r=next-challenge&h_v=zen

// Complete the maximumToys function below.
function maximumToys(prices, k) {
    // let arr = []
    // prices.sort()
    // for(let i=0;i<prices.length;i++) {
    //     if(prices[i]+prices) 
    // }
    let sum = 0;
    let sortedPrices = prices.sort((a, b) => a - b);
    let counter = 0;

    for (var i = 0; i < sortedPrices.length; i++) {
        if (sortedPrices[i] < k) {
            sum += sortedPrices[i];
            if (sum <= k) {
                counter++;
            } else {
                break;
            }
        }
    }
    return counter;
}
console.log(maximumToys([1, 2,3, 4, 6,7,8], 7))