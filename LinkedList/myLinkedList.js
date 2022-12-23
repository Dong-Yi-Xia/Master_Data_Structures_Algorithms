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
        //check params
        if(index >= this.length || index < 0){
            return this
        }

        if(index === 0) {
            this.head = this.tranverseToIndex(index+1)
        }else{
            const leader = this.tranverseToIndex(index-1)
            const unWantedNode = leader.next
            leader.next = unWantedNode.next
            // leader.next = leader.next.next
        }
        this.length--
        return this
    }

    reverse(){
        //If there is only 1 element
        if(!this.head.next){
            return this
        }

        let first = this.head
        let second = first.next
        //If second element exist
        while(second){
            const temp = second.next
            //change the pointer in reverse direction
            second.next = first
            //shift the 2 variable down 
            first = second
            second = temp
        }

        //second is now null

        //the tail is the inital head
        this.head.next = null
        this.tail = this.head

        this.head = first
        return this
    }

    reverse2(){
        //If there is only 1 element
        if(!this.head.next){
            return this
        }

        let head = this.head
        let prevNode = null
        let nextNode = null
        //If second element exist
        while(head){
            nextNode = head.next
            head.next = prevNode
            prevNode = head
            head = nextNode
        }

        //the tail is the inital head
        this.head.next = null
        this.tail = this.head

        this.head = prevNode
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5) // O(1)
myLinkedList.append(16) // O(1)

myLinkedList.prepend(6) // O(1)
myLinkedList.prepend(9) // O(1)

myLinkedList.insert(2, 777)
myLinkedList.insert(100, 82)

myLinkedList.remove(0) //O(n)
console.log(myLinkedList.length)

// myLinkedList.reverse()
myLinkedList.reverse2()

myLinkedList.printList()
console.log(myLinkedList)