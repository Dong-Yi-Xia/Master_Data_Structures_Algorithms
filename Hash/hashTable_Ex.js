
class HashTable {
    constructor(size){
        this.data = new Array(size)
        // [['grapes', 10000]]
    }

    // creating own hash result
    // _ is a standard for private method/properties
    _hash(key) {
        let hash = 0
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    } // O(1)

    set(key, value) {
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key,value])
        return this.data
    } // O(1)

    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address]
        // console.log(currentBucket)
        if(currentBucket){
            for(let i=0; i<currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }  //O(1) in normal case, O(n) when collusion 

    keys() {
        const keysArray = []
        for(let i=0; i<this.data.length; i++){
            // console.log(this.data[i]) --> [ [ 'grapes', 10000 ] ]
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

    // include hash collision prevention
    keys2() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data[i].length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0][0])
              } 
            }
        }
        return result; 
      }
}

const myHashTable = new HashTable(2)

myHashTable.set('grapes', 10000)
myHashTable.set('apples', 800)
// [ <1 empty item>, [ [ 'grapes', 10000 ], [ 'apples', 800 ] ] ]
myHashTable.set('oranges', 24)
myHashTable.set('peach', 96)
myHashTable.get('grapes')
console.log(myHashTable.keys2())

const myHashTable2 = new HashTable(50)
myHashTable2.set('grapes', 10000)
myHashTable2.set('apples', 800)
myHashTable2.set('oranges', 24)
myHashTable2.set('peach', 96)
myHashTable2.get('grapes')
console.log(myHashTable2.keys2())