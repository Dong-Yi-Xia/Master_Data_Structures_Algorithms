# Master_Data_Structures_Algorithms

What is good code?
1. Readable
2. Scalable 
   - speed [time complexity] 
   - memory [space complexity]

## Big Os
### Major 3 Os
- O(1) Constant- no loops
- O(n) Linear- for loops, while loops through n items
- O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
### Other Os in specific Data Structure + Algo   
- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
- O(n log(n)) Log Liniear- usually sorting operations
- O(2^n) Exponential- recursive algorithms that solves a problem of size N
### Should NEVEREVER use
- O(n!) Factorial- you are adding a loop for every element

Iterating through half a collection is still O(n)  
Two separate collections:  O(a + b) or O(a * b)  

## What can cause time in a function?
- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

## Rule Book
- Rule 1: Always worst Case
- Rule 2: Remove Constants
- Rule 3: Different inputs should have different variables. 
    - O(a+b). A and B arrays nested would be O(a*b)
    ```
    + for in order steps O(a+b)
    * for nested steps O(a*b)
    ```
- Rule 4: Drop Non-dominant terms
## What causes Space complexity?
- Variables
- Data Structures
- Function Call
- Allocations


## Memory 
2 ways to remembers things  
- heap - store variables   
- stack - keep track of function calls
