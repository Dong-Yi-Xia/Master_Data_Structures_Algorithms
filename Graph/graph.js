/* 
        2 --- 0
      /  \
    1 --- 3
*/

// Edge List
// showing the connectiong 
const graph = [
    [0,2],
    [2,3],
    [2,1],
    [1,3],
]

// Adjacent List
            //   0     1      2        3
const graph2 = [[2], [2,3], [0,1,3], [1,2]]


// Adjacent Matrix
// Use 0 and 1
// Weighted use 0 or #
const graph3 = [
    [0,0,1,0], //node 0 is connected to 2
    [0,0,1,1], //node 1 is connected to 2,3
    [1,1,0,1], //node 2 is connected to 0,1,3
    [0,1,1,0], //node 3 is connected to 1,2
]

const graph4 = {
    0: [0,0,1,0], //node 0 is connected to 2
    1: [0,0,1,1], //node 1 is connected to 2,3
    2: [1,1,0,1], //node 2 is connected to 0,1,3
    3: [0,1,1,0], //node 3 is connected to 1,2
}