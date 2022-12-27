// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let arr = [0, 1]

  for(i=2; i <= n; i++){
    arr.push(arr[i-2] + arr[i-1])
  }

  return arr[n]
} // O(n)

console.log(fibonacciIterative(8))

////////////////////////////////////////////////////////////

function fibonacciRecursive(n) {
    if(n < 2){
        return n
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
} // O(2^n)

console.log(fibonacciRecursive(8))


// fibonacciRecursive(5)
// fibonacciRecursive(4) + fibonacciRecursive(3)
// fibonacciRecursive(3) + fibonacciRecursive(2) + fibonacciRecursive(2) + fibonacciRecursive(1)
// fibonacciRecursive(2) + fibonacciRecursive(1) + fibonacciRecursive(2) + fibonacciRecursive(2) + fibonacciRecursive(1)

// 1 + 1 + 1 + 1 + 1 = 5


// Using memorization
var fib = function(n) {
    return helper(n, {}) 
}; // O(n)


function helper(n, hashMap){
    if(n < 2){
        return n
    }

    if(!hashMap[n]){
        hashMap[n] = helper(n-1, hashMap) + helper(n-2, hashMap) 
    }

    return hashMap[n]
};

console.log(fib(45))