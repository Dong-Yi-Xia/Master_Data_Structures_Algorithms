const basket = ['apples', 'grapes', 'pears']

/*
 linked list: apples --> grapes --> pears

 apples
 897 --> grapes
            874 --> pears
                    371 --> null

 */

let obj1 = { a: true}                    
let obj2 = obj1
// Both obj1 and obj2 pointer references {a:true} 

obj1.a = 'booya'
delete obj1
// console.log('1', obj1)
console.log('2', obj2) // 2 { a: 'booya' }
//obj1 is deleted but object 2 still points to the reference

obj2 = 'string'
console.log('2', obj2) // 2 string
//once object 2 is reassigned the {a: true} in memory is garbage collected 


