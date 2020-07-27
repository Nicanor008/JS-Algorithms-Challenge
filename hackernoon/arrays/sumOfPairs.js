// How do you find all pairs of an integer array whose sum is equal to a given number?

function sumOfPairs(arr, S) {
    arr.sort()
    const length = arr.length
    let l = 0, r = length - 1 
    while (l < r) {
		let currentSum = arr[l] + arr[r];
		if (currentSum == S) {
			console.log(arr[l] + " " + arr[r]);
			l++;
			r--;
		} else if (arr[l] + arr[r] < S)
			l++;
		else
			r--;
    }
    console.log(arr[l], ">>>..", arr[r])

}

console.log(sumOfPairs([-40, -5, 1, 3, 6, 7, 8, 20 ], 15))
