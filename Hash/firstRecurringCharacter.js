// Given an array = [2,5,1,2,3,5,6,2,1]
// return 2

// Given an array = [2,1,1,2,3,5,6,2,1]
// return 1

// Given an array = [2,5,1,6]
// return undefined

function firstRepeatCharacter(array) {
    let seen = {}

    for(let i=0; i<array.length; i++){
        let char = array[i]
        if(seen[char]){
            return char
        }
        seen[char] = true
        // console.log(seen)
    }

    return undefined
}
// Time Complexity O(n)
// Space Complexity O(n)


// if(0) is falsy, can change it to if(0 !== undefined)

console.log(firstRepeatCharacter([2,5,1,2,3,5,6,2,1]))
// console.log(firstRepeatCharacter([2,1,1,2,3,5,6,2,1]))
// console.log(firstRepeatCharacter([2,1,5]))