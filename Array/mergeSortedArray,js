// [0,3,4,4,6,30,31]

function mergeSortedArray(array1, array2) {
  // Check input
  if (array1.length === 0) return array2;
  if (!array2.length === 0) return array1;

  const merged = [];
  let i = 1
  let j = 1
  let array1Item = array1[0];
  let array2Item = array2[0];


  while(array1Item || array2Item){
    if(!array2Item || array1Item < array2Item){
        merged.push(array1Item)
        array1Item = array1[i]
        i++
    }else{
        merged.push(array2Item)
        array2Item = array2[j]
        j++
    }
  }

  return merged;
}

// mergeSortedArray([0,3,4,31], [4,6,30])

// console.log(mergeSortedArray([0,3,4,31], [4, 6, 30]));


function mergeSortedArray2(array1, array2) {
    const merged = []
    let first = 0
    let second = 0

    while(array1[first] || array2[second]){
        if(array1[first] < array2[second] || !array2[second]){
            merged.push(array1[first])
            first++
        }else{
            merged.push(array2[second])
            second++
        }
    }

    return merged 
}

// console.log(mergeSortedArray2([0,3,4,31], [4, 6, 30]));
