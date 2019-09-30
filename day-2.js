// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    return ar.reduce((a, b) => a + b, 0)
    
    // alternatively, this can be done using eval
    // eval(ar.join("+"));

    // using for-in loop
    // var total = 0;
    // for (var i in ar) {
    //   total += ar[i];
    // }

    // using for-loop
    // for (var i = 0, sum = 0; i < ar.length; sum += ar[i++]);
    // return sum
}

const ar = [1, 2, 3, 4];
console.log(ar);
