const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/*
compare 99, 44, swap
99,6 swap
99,2 swap
99,1 swap ....
*/

function bubbleSort(array) {
  let length = array.length;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j+1]) {
        //swap numbers
        let temp = array[j];
        array[j] = array[j+1];
        array[j + 1] = temp;
      }
      //Can reduce the search length by 1 after bubbling the highest number up
      if(j === length-1){
        length--
      }
    }
  }

  return array
} 
//Time - O(n^2)
//Space - O(1)

console.log(bubbleSort(numbers));
console.log(numbers)

