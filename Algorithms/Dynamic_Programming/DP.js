function addTo80(n) {
  console.log("running for a long time");
  return n + 80;
}

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));


/////////////////////////////////////////////////////////////////////

let cache = {};
function memoizedAddTo80(n) {
  //check if n is in the object
  if (n in cache) {
    return cache[n];
  }
  console.log("running for a long time");
  cache[n] = n + 80;

  return cache[n];
}

// console.log('1', memoizedAddTo80(5));
// console.log('2', memoizedAddTo80(5));
// console.log('3', memoizedAddTo80(5));


/////////////////////////////////////////////////////////////////////

//Using closure, don't want the cache to be global.
function memoized2AddTo80() {
  let cache = {};
  //Use a child function
  return function (n) {
    if (n in cache) {
      return cache[n];
    }
    console.log("running for a long time");
    cache[n] = n + 80;

    return cache[n];
  };
}

const memoized = memoized2AddTo80()
// memoized is the return value, which is the child function
console.log(memoized2AddTo80()) // [Function (anonymous)]

console.log("1", memoized(5));
console.log("2", memoized(5));
console.log("3", memoized(5));
