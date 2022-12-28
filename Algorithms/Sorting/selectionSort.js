const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/*
Scan for the lowest number, 
remember the lowest index 
when reach the end, 
swap the lowest index with the current index (outer loop)
*/

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let lowest = array[i];
    let position = i;
    for (let j = i+1; j < length; j++) {
      if (array[j] < lowest) {
        lowest = array[j];
        position = j;
      }
    }
    let temp = array[i];
    array[i] = array[position];
    array[position] = temp;
  }

  return array;
}

function selectionSort2(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let temp = array[i];
    let minPosition = i;
    for (let j = i+1; j < length; j++) {
      if (array[j] < array[minPosition]) {
        //update min Position
        minPosition = j;
      }
    }

    array[i] = array[minPosition];
    array[minPosition] = temp;
  }

  return array;
}

console.log(selectionSort2(numbers));
