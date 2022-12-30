// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8

// Not very efficient, lots of repeated calculations
let calculation = 0;

// O(2^n)
function fibonacci(n) {
  calculation++;

  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
console.log('calc1', calculation);

////////////////////////////////////////
//using Memorization

// O(n) and space O(n)
function fibonacciMemorized() {
  let cache = {};
  let calculation2 = 0;

  return function helper(n) {
    calculation2++;

    if (n in cache) {
      return cache[n];
    }

    if (n < 2) {
      return n;
    }

    cache[n] = helper(n - 1) + helper(n - 2);

    console.log(cache)
    console.log('calc2', calculation2)

    return cache[n];
  };
}

const fib = fibonacciMemorized();
console.log(fib(6));



///////////////////////////////////
// This is also known as bottom up. Simple to complex
function fibonacciIterative(n) {
    let arr = [0, 1]
  
    for(i=2; i <= n; i++){
      arr.push(arr[i-2] + arr[i-1])
    }
  
    return arr[n]
  } // O(n)