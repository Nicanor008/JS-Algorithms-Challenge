function minimumAbsoluteDifference(n, arr) {
    // solution with runtime error on space complexity
    // let testArr = []
    // for(let i=0;i<(arr.length-1);i++) {
    //     for(let j=i+1;j<(arr.length);j++) {
    //     testArr.push(Math.abs(arr[i] - arr[j]))
    //     }
    // }
    // testArr.sort()
    // return Math.min(...testArr)


    arr.sort((a, b) => a - b);
    
    let min = Math.abs(arr[0] - arr[1]), diff;
    
    for(let i = 2; i < n; i++) {
        diff = Math.abs(arr[i] - arr[i-1]);
        if(diff < min) {
            min = diff;
        }
    }
    
    return min;
}

console.log(minimumAbsoluteDifference(3, [3, -7, 0]))
