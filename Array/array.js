const string = ['a', 'b', 'c', 'd']
// 4*4 = 16 bytes of storage

//access/lookup
string[2] //O(1)
 
//push - add to end of array
string.push('e') //O(1)

//pop - remove from end of array
string.pop() //O(1)

//unshift - add to the beginning of array
string.unshift('x') //O(n)

//splice - add to the middle of the array
string.splice(2, 0, 'p') //O(n)

//shift - remove from the beginning of array
string.shift('x') //O(n)


// Static Array
new Array(5).fill('0')

// Dynamic Array
// **push can be O(n) since we copying and doubling the memory

