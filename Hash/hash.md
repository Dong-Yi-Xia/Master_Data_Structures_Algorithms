## hash / object / map / dictionary

key : value  

**hash function**   
function generate fixed length for each inputs it gets  


md5 (type of hash function)  
 - one way
 - same results for same input
 - idempotent

##
| Memory    | key:value     |
| ---       | -----------   |
| md5hash   | grapes : green|

## hash table
- insert O(1)
- lookup O(1) || can be O(n)
- delete O(1)
- search O(1)


Because memory space is limited and randomly assigned, the memory address that store key:value will collide, called collision hash.

Same address in memory with many different key:value pairs.  

This create something known as **linked list** data structure

O(n/k) - k is size of the collusion table
O(n) - simplified 