function Factorial(num) {
    if(num === 1) {
        return num;
    } else {
        return num * Factorial(num - 1);
    }
}

console.log(Factorial(10))
