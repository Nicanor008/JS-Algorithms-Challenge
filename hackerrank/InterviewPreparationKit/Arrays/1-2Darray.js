// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays

// Given a 6X^ 2D array, arr 
// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

// We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
// a b c
//   d
// e f g

// We calculate the following 16  hourglass values:
// -63, -34, -9, 12, 
// -10, 0, 28, 23, 
// -27, -11, -2, 10, 
// 9, 17, 25, 18

// Our highest hourglass value is 28 from the hourglass:
// 0 4 3
//   1
// 8 6 6

// Time Complexity - Quadratic - O(n^2)
function hourglassSum(arr) {
    let sum=-10000;
    for(let i =0 ; i<4;i++){
        for(let x =0 ; x<4; x++){
            let top = arr[i][x]+arr[i][x+1]+arr[i][x+2];
            let middle = arr[i+1][x+1];
            let bottom = arr[i+2][x]+arr[i+2][x+1]+arr[i+2][x+2];
            if(top+middle+bottom>sum){sum=top+middle+bottom;}
        }
    }
    return sum
}

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

console.log(hourglassSum(arr))
