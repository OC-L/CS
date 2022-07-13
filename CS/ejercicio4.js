class Animal {
    constructor(legs = 0 , brain = true) {
        this.legs = legs;
        this.brain = brain
    }

    setLegs(legs) {
        this.legs = legs;
    }
}

let human = new Animal ()
let pet = new Animal ()

human.setLegs(2)
pet.setLegs(4)

pet.fleas = 0
pet.setFleas = function(fleas) {
    this.fleas = fleas;
}

let dog = Object.create(pet)
let cat = Object.create(pet)
dog.setFleas(2)
cat.setFleas(6)