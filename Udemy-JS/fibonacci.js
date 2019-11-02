function fibonacci(position) {
    if (position < 3) return 1;
    else return fibonacci(position - 1) + fibonacci(position - 2);
  }
   
  fibonacci(6);

//   not good for production implementation
// uses exponential runtime of O(2^n);
// freezes up the computer on running above position 50
