
let a = ['1', '2', '3']
function findme(array){
  // performance.now() is how fast YOUR computer run the code
  let t0 = performance.now()
  for(let i=0; i<array.length; i++){
    if(array[i] === '2'){
      console.log('Founded')
    }
  }
  let t1 = performance.now()
  console.log('How long it took in millisecond ', t1 - t0)
}

findme(a) // O(n) --> Linear Time
// n is just a variable, the number of inputs

/////////////////////////////////////////////////////////////////////////////

// O(1) --> Constant Time
const boxes = [0,1,2,3,4,5]
function logFirstTwoBoxes(boxes){
  console.log(boxes[0])
  console.log(boxes[1])
}

logFirstTwoBoxes() // O(2) O(3) O(4) O(5)
// Round any constant to O(1) for constant time

/////////////////////////////////////////////////////////////////////////////
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++;  // O(n)
  }
  return a; // O(1)
}

// 3 + n + n+ n + n
// BIG O(3 + 4n)
// O(n)


function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// BIG O(4 + 7n)
// O(n)

RULES
// 1. Worst case
// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop Non Dominants 

/////////////////////////////////////////////////////////////////////////////
// 1.Worst Case
let arr = ['1', '2', '3', '4', '5', '6', 'founded']
// The worst case is 'founded' is in the last position of the array. best case if it is in the first position
// Big O always use the worst case   

// 2.Remove Constants
function printFirst(items){
  console.log(items[0])

  let middleIndex = Math.floor(items.length / 2)
  let index = 0

  while(index < middleIndex){
    console.log(items[index])
    index++
  }

  for(let i=0; i<100; i++){
    console.log('hi')
  }
}

// O(1 + n/2 + 100)
// O(101 + n/2)
// O(1 + n)
// O(n)

function compressBoxes(boxes){
  boxes.forEach(boxes => console.log(boxes))

  boxes.forEach(boxes => console.log(boxes))
}
// O(2n)
// O(n)


// 3.Different terms for inputs
function compressBoxes(boxes, boxes2){
  boxes.forEach(boxes => console.log(boxes))

  boxes2.forEach(boxes => console.log(boxes))
}
// One loop after another is Add
// O(n + m)


function compressBoxes(boxes, boxes2){
  boxes.forEach(boxes => {
    console.log(boxes)
    boxes2.forEach(boxes => console.log(boxes))
  })
}
// One loop nested in another is Multiply
// O(n * m)


const pairs = ['a', 'b', 'c', 'd', 'e']

function logAllPairsArray(array){
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      console.log(array[i], array[j])
    }
  }
}

// Nested loop is multiply
// O(n * n)
// O(n^2) - Quadratic Time


//  4.Drop Non Dominants 
function printAllNumbersThenAllSums(numbers){
  console.log('these are the numbers:')
  numbers.forEach(function(number){
    console.log(number)
  })

  console.log('and these are their sums:')
  numbers.forEach(function(firstNumber){
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber)
    })
  })
}

printAllNumbersThenAllSums([1,2,3,4,5])
// O(n + n^2)
// O(n^2)


////////////////////////////////////////////////////////////////////
// Space Complexity
function booYeah(n){
  for(let i=0; i<n.length; i++){
    console.log('boo!')
  }
}

booYeah([1,2,3,4,5])
// only variable created is i=0
// space O(1)

function numberOfHello(n){
  let helloArray = []
  for(let i=0; i<n; i++){
    helloArray[i] = 'hello'
  }
  return helloArray
}

numberOfHello(6) 
// space O(n)
// helloArray is a new data structure, adding memory

/////////////////////////////////////////////////
//Find 1st and Nth...
const arr1 = ['hi', 'my', 'name']
arr1[0] // O(1)
arr1[arr.length-1] // O(1)
// O(1)

//Compare two tweets
const arr2 = [
  {tweet:'hi', date:2012}, 
  {tweet:'my', date:2014},
  {tweet:'name', date:2020},
]
// O(n^2)
