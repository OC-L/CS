// 1- Hacer una función que reciba como parámetros una pila y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).

function stackNumber(stack, number){
    if(stack.size() >= count) {
        while(stack.size() > count){
            stack.pop
        }
        stack.print()
    } else {
        console.log('Elementos insuficientes en la pila')
    }
}



// 2- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number y dos valores también de tipo Number, "nuevo" y "viejo", de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.

function replace(stack, current, old) {

    while(stack.peek() !== old) {
        stack.pop()
    }

    stack.pop()
    stack.push(current)
}



// 3-  Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.

function toAndBack(stack) {
    let aux = new Stack()

    stack.print()
    while(!stack.isEmpty()){
        aux.push(stack.pop())
    }
    aux.print()
}



// 4- Un almacén tiene capacidad para apilar "n" contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.

function algo(stack, container) {
    let aux = new Stack()

    while(stack.peek() != container) {
        aux.push(stack.pop())
    }
    stack.pop()

    while(!aux.isEmpty()) {
        stack.push(aux.pop())
    }
    stack.print()
}