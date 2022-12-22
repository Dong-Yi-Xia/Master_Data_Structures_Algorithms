let user = {
    age: 54,
    name: 'Kate',
    magic: true,
    scream: function() {
        console.log('ahhh!')
    },
}

// lookup
user.age // O(1)

// Insert
user.spell = 'abra kadabra' // O(1)


//objects - keys can only be string
const a = {}

//Map - keys can be anything, maintain insertation order
const b = new Map()

//Set - store only keys no value, unique
const c = new Set()