// my name is cookie
// eikooc si eman ym

// String Question --> Turn into an array --> .split('')

function reverse(string){
    //check input
    if(!string || typeof(string) !== 'string'){
        return ''
    }

    let str = string.split('')
    let first = 0
    let last = str.length-1

    while(first < last){
        let temp = str[first]
        str[first] = str[last]
        str[last] = temp
        first++
        last--
    }

    return str.join('')
}

console.log(reverse('sleep'))

////////////////////////////////////////
function reverse2(string){
    //check input
    if(!string || typeof(string) !== 'string'){
        return ''
    }

    const backward = []
    const totalItems = string.length-1
    for(let i=totalItems; i>=0; i--){
        backward.push(string[i])
    }

    return backward.join('')
}

console.log(reverse2('sleep'))

////////////////////////////////////////
const reverse3 = string => [...string].reverse().join('')

console.log(reverse3('sleep'))
