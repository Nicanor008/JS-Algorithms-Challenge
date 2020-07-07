// Given an array of integers, 
// find the largest difference between two elements such that the element of lesser value must come before the greater element

// find the difference between values
function findDiff(arr) {
    // implementation 1
    let diff = []
    arr.sort((a, b) => {return b-a});

    // highest value
    // return arr[0]
    
    // diff
    return arr[0] - arr[arr.length -1]

    for(let i=0;i<arr.length;i++) {
        // for(let j=arr.length;j>0;j--) {
            // diff.push(arr[arr.length-(i+1)] - arr[i])
            console.log(">>>>>>>>>>>........", arr)
        // }
    }
    return diff

    // implementation 2
}

var array = [7, 8, 4, 9, 9, 15, 3, 1, 0, 10];

console.log(findDiff(array))