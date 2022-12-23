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
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
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

        //attach the newNode it to tail
        newNode.prev = this.tail
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
        //attach the head previous to the newNode
        this.head.prev = newNode
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
        //check params
        if(index >= this.length){
            return this.append(value)
        }

        if(index === 0) {
            return this.prepend(value)
        }

        if(index < 0){
            return this
        }

        const newNode = new Node(value)

        const leader = this.tranverseToIndex(index-1) 
        const follower = leader.next 
        //connect the newNode with the leader
        leader.next = newNode
        newNode.prev = leader
        //connect the newNode with the follower
        newNode.next = follower
        follower.prev = newNode

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
        //check params
        if(index >= this.length || index < 0){
            return this
        }

        if(index === 0) {
            this.head = this.tranverseToIndex(index+1)
            this.head.prev = null
        }else{
            const leader = this.tranverseToIndex(index-1)
            const unWantedNode = leader.next
            const follower = unWantedNode.next
            leader.next = follower
            follower.prev = leader
        }
        this.length--
        return this
    }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5) // O(1)
myLinkedList.append(16) // O(1)

myLinkedList.prepend(6) // O(1)
// myLinkedList.prepend(9) // O(1)

myLinkedList.insert(1, 777)
// myLinkedList.insert(100, 82)

myLinkedList.remove(1) //O(n)
// console.log(myLinkedList.length)

myLinkedList.printList()
console.log(myLinkedList)