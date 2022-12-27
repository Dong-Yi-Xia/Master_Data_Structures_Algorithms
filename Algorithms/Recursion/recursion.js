let counter = 0

function inception() {
    console.log(counter)
    if(counter > 3){
        return 'Done!'
    }
    counter ++

    //Need the keyword "return" 
    //otherwise the return "Done!" doesn't get bubble up the call 
    return inception()
}

console.log(inception())

/*
If we DO NOT call return on the function itself the, base case return does 
not bubble up to the last/bottom call of the stack

inception() --> Done!
inception() --> undefined
inception() --> undefined
inception() --> undefined
inception() --> undefined
*/

/*
1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns, base and recursive 
*/