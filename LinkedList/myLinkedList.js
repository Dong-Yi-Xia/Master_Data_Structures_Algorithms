///////////////////////////////////////////////////////////////////
// 10 --> 5 --> 16
/*
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
*/

//To keeps things DRY, create another class
class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){
        // const newNode = {
        //     value: value,
        //     next: null
        // }
        const newNode = new Node(value)

        //pointer, points the tail to the newNode instead of null
        this.tail.next = newNode
        //Now the newNode is assigned as the tail
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        // const newNode = {
        //     value: value,
        //     next: null
        // }
        const newNode = new Node(value)

        //pointer, points the newNode to the head node
        newNode.next = this.head
        //Now the newNode is assigned as the head
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        const array = []
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(array)
        return array
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        }

        if(index === 0) {
            return this.prepend(value)
        }

        const newNode = new Node(value)

        const leader = this.tranverseToIndex(index-1) 
        const tempNode = leader.next 
        leader.next = newNode
        newNode.next = tempNode
        this.length++
        return this
    }

    tranverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        } 
        return currentNode
    }

    remove(index){
        
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5) // O(1)
myLinkedList.append(16) // O(1)

myLinkedList.prepend(6) // O(1)
myLinkedList.prepend(9) // O(1)

myLinkedList.insert(2, 777)
myLinkedList.insert(100, 82)

myLinkedList.printList()
// console.log(myLinkedList)