## Stacks And Queues

Linear data structure  
Can be either   
**Array**  
**LinkedList**  

## Stacks
- lookup O(n)
- pop O(1)
- push O(1)
- peek O(1)

Last in First Out (LIFO)  
Stack of plates

LinkedList   
It like flipping the linked list vertically  
```
    Add NewNode >>    H-----T
    Remove Node <<    H-----T
```

Array  
using push() and pop()

 
## Queues 
- loopup O(n)
- enqueue O(1)  //Add to back 
- dequeue O(1)  //Remove from first
- peek O(1)

First In First Out (FIFO)  
Waiting in line  

Linked List
``` 
   Remove Node <<  H-----T  
    H-----T  << Add NewNode 
```

Array - DON'T USE Array for Queues because of shift O(n)   
using push() and shift()

---


### NOTE
In a stack linked list, we are adding to the head and removing from the head.  

In a queue linked list, we are adding to the tail and removing from the head. 