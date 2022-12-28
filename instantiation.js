// instantiation

// this keyword refer to the class object it lives in
function first(){
    // "this" is function first lives in the window object
    // this.alert() is the same as window.alert()
    console.log(this)
}
// first()


// creating a new object class to reference "this"

class Player {
    // the constructor always runs first creating these properties for every new Player
    constructor(name, type){
        console.log('player', this) // player Wizard {}
        this.name = name
        this.type = type
    }

    // create another property in the Player object
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`)
    }
}

// inherit all the properties from the parent
class Wizard extends Player {
    //all new class needs a constructor
    constructor(name, type){
        //require super to get access to parent constructor properties 
        super(name, type)
        console.log('wizard', this) // wizard Wizard { name: 'Shelly', type: 'Dark Healer' }
    }

    //another property in the Wizard object
    play() {
        console.log(`Boom I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', "Dark Healer")

console.log(wizard1.name)
console.log(wizard1.type)
wizard1.play()
wizard1.introduce()

// When a new Wizard is created, "this" is refered to the Wizard Object
// It looks at the Wizard constructor, super reference to the parent, so it runs the parent constructor, 
// "this" --> player Wizard {}
// after the super() Wizard constructor runs the console.log
// "this" --> wizard Wizard { name: 'Shelly', type: 'Dark Healer' }