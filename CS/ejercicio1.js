class Animal {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    comer() {
        return 'Estoy comiendo'
    }

    caminar() {
        return 'Estoy caminando'
    }

    presentacion() {
        return `Hola, me llamo ${this.nombre} y mi edad es de ${this.edad} años`
    }
}

let perro = new Animal ('Pancho', 2)
let gato = new Animal ('Garfield', 5)

perro.ladrar = function() {
    return 'Guau guau'
}

gato.maullar = function() {
    return 'Miauuuuu'
}