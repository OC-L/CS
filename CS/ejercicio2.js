function Person (name, lastName, age, gender, interests) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.bio = function() {
    return `Hola, mi nombre es ${this.name} ${this.lastName}. Tengo ${this.age} años y me intereso en ${this.interests}`
}

Person.prototype.greeting = function() {
    return `Hola, soy ${this.nombre}`
}

let Bob = new Person('Bob', 'Smith', 45, 'Male', ['Fishing', 'Camping', 'Trucks', 'Lawns'])