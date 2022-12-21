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


class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItems(index) {
        for (let i=index; i < this.length - 1; i++){
            //shift all item to the left
            this.data[i] = this.data[i+1]
        }
        //The last item still exist
        delete this.data[this.length-1]
        this.length--
    }
}

const newArray = new MyArray()
newArray.push('hi')
newArray.push('you')
newArray.push('there')
// newArray.pop()
// newArray.delete(1)
console.log(newArray)