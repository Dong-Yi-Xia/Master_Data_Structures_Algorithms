

function findFactorialRecursive(number){
    if(number === 1 || number === 0){
        return 1
    }

    return number * findFactorialRecursive(number-1)
} //O(n)


function findFactorialIterative(number){
    if(number === 0){
        return 1
    }

    let answer = number
    while(number > 2){
        answer *= number-1
        number--
    }

    return answer
} //O(n)

console.log(findFactorialRecursive(0))

console.log(findFactorialIterative(0))