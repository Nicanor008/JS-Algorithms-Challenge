// https://www.hackerrank.com/challenges/array-left-rotation/problem

function ShiftArray(d, a) {
    for(let i=0;i<d;i++) {
        const firstElement = a.shift();
        a.push(firstElement);
    }
    console.log(a.join(" "))
}

console.log(ShiftArray(5, [1, 2, 3, 4, 5]))
