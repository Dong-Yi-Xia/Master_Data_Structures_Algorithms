# Sorting

Comparsion Sort
|Type  |  Time  |  Space |
|---|---|---|
|1. Bubble sort         |  O(n^2)                               | O(1) |
|2. Insertion sort      |  O(n^2)                               | O(1) |
|3. Selection sort      |  O(n^2)                               | O(1) |
|4. Merge sort          |  O(n log n)  [divide and conquer]     | O(n) |
|5. Quick sort          |  O(n log n)  [divide and conquer]     | O(log n)|

[].sort() - build in function, under the hood using 'word'.charCodeAt(0)  

To solve words for it [].sort((a,b) => a.localeCompare(b))    

To solve numbers for it [].sort((a,b) => a - b)  

O(n log n)

bubble / selection - never used  
insertation - few items and nearly sorted data
**merged** - used when consider worst case senerio, very expensive in memory O(n) 
**quick** - most popular, use in memory, worst case O(n^2), if pivot is the lowest or highest 


Non-Comparison Sort
- Counting sort
- Radix sort

Count and Radix, they are only used for fixed length and integer 


## Exercise Questions 
```
//#1 - Sort 10 schools around your house by distance:  
insertion sort

//#2 - eBay sorts listings by the current Bid amount:  
radix or counting sort

//#3 - Sort scores on ESPN  
Quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data  
Merge Sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
Insertion Sort

//#6 - Temperature Records for the past 50 years in Canada  
radix or counting Sort  
Quick sort if decimal places  

//#7 - Large user name database needs to be sorted. Data is very random.  
Quick sort  

//#8 - You want to teach sorting  
Bubble sort
```