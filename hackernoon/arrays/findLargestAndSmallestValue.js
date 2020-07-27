// How do you find the largest and smallest number in an unsorted integer array?

function findTheLargestAndSmallest(s) {
    // sort
    s.sort()

    // remove duplicates
    s = Array.from(new Set(s))

    // smallest = s[0]
    const smallest = s[0]

    console.log("smallest :",smallest, "\nLargest: ", s[s.length-1])
}

s = [2, 4, 7, 3, 2, 4, 1, 5, 6, 7, 8, 9, 3]
findTheLargestAndSmallest(s)
