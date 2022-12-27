# Recursion

Searching and sorting   
Subtask - same task over and over

Stack overflow - keep calling itself forever

stacks - need to store memory until it gets popped  

The most inner function get called (popped) first and makes it was outward. Stack data structure.  

Need a **base case** to stop a recursion. 

## 3 Rules 
1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns 


Pro
- DRY
- Readability

Con
- Large Stack

When to use, traversal and searching and sorting

Every time you are using a tree or converting something into a tree, consider recursion
1. divided into number of subproblems that are smaller instances of the same problems
2. each instance of teh subproblem is identical in nature
3. the solutions of each subproblem can be combined to solve the problem at hand

Divide and Conquer using recursion

Anything you do with a recursion CAN be done iteratively (loop)

### Recursion Problems
- merge sort
- quick sort
- tree traversal 
- graph traversal