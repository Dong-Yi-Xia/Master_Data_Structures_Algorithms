# BFS and DFS Searching

Searching/Traversal
- linear search - O(n)
- binary search - O(log n)
- depth first search - O(n) --- memory O(height of tree)
- breadth first search - O(n) --- memory O(n) the queue 
 
## Linear Search 
- a straight line, best case O(1) and worst O(n)
- array
- goes through each item in the list

## Binary Search
- sorted list
- discard half items for every step, divide and conquer O(log n)

Traversal - visiting nodes

## Breadth First Search/Traversal
- go left to right, level by level
- use additional memory keep track of every node and its children
- shortest path
```
     9
  4     20
1  6  15  170
```
- BFS [9,4,20,1,6,15,170]

| pro | cons |
| --- | --- |
| shortest path | More memory |
| closer nodes  |             |

## Depth First Search/Traversal
- Travel down one node to the end node/leaf node or to the found node
- When reach the end travel back up to the closest ancestor node and travel back the other path
- Lower memory requirement 
- Want to go deep a possible, left to right
- check to see if path exists
```
     9
  4     20
1  6  15  170
```
- DFS [9,4,1,6,20,15,170]

| pro | cons |
| --- | --- |
| less memory          | can get slow |
| does the path exist? |              |

DFS has three types of list
```
   101
33    105
```
- inorder - 33,101,105       left,parent,right
- preporder - 101, 33, 105   parent,left,right
- postorder - 33, 105, 101   left,right,parent

## Exercise
```
//If you know a solution is not far from the root of the tree:
BFS

//If the tree is very deep and solutions are rare: 
BFS (DFS will take long, very deep and solutare are rare)

//If the tree is very wide:
DFS (BFS will need to much memory)

//If solutions are frequent but located deep in the tree:
DFS

//Determining whether a path exists between two nodes:
DFS

//Finding the shortest path:
BFS
```

## Special Case - Shortest Path
DFS doesn't assume any weight on the graph  
Example, map route --> number of cars, traffic condition, distance, node to node

For shortest path with weighted graph use
- Bellman-Ford (can use negative weight, O(n^2))
- Dijkstra (faster, cannot account for negative weight)