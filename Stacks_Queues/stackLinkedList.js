// stack using Linked List

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek(){
        console.log(this.top)
        return this.top
    }

    //Same as Prepend in Linked List
    push(value){
         const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTop = this.top;
      //This is like prepending to the beginning of the head in Linked List
      this.top = newNode;
      this.top.next = oldTop;
    }
    this.length++;
    return this;
    }

    pop(){
        if(!this.top){
            return null
        }
        //if there is only 1 stack 
        if(this.top === this.bottom){
            this.bottom = null
        }
        // const oldTop = this.top

        this.top = this.top.next
        this.length--
        return this

        // If you want to return the remove node
        // return oldTop
    }
}


const myStack = new Stack()

myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
// myStack.peek()
myStack.pop()
myStack.pop()
myStack.pop()

console.log(myStack)