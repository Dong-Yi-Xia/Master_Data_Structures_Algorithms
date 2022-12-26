# Tree

Tree can have 0 or more child node.
One Root Node.  
Last node is the leaf node  
Can have subtree  
The DOM is a tree data structure  

- Root
- Parent
- Child
- Leaf
- Sibing

## Binary Tree
- Each node can have 0, 1 or 2 node
- Perfect Binary Tree
- Full Binary Tree

### **Perfect Binary Tree** 
- nothing is missing
- each level is doubled as it goes down
- all the node above the last level + 1 === last level # of node 
- 3 + 1 = 4
```
       0  
    0      0
   0 0    0 0  
```
- lookup O(log N)
- insert O(log N) 
- delete O(log N)
```
Current level # of node
level 0: 2^0 = 1
level 1: 2^1 = 2
level 2: 2^2 = 4
level 3: 2^3 = 8

# of total nodes = 2^h - 1
log nodes = steps

log 100 = 2
10^2 = 100
```

O(log N) is dividing and conquering
### Binary Search Tree
1. right child node is greater than parent node
   && left child node is less than parent node
1. Node can only have two children  

### Balanced vs unbalanced
- unbalanced (worst) all the nodes are added to one side, becames like a linked list
- lookup O(n)
- insert O(n)
- delete O(n)

### BST pro and cons
Pro
- better than O(n)
- ordered
- flexible size

Con
- no O(1) operations

### **Full Binary Tree**
- 0 or 2 child node, never 1 child
```
        0
    0       0
   0  0
     0 0
```
