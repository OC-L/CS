// 1- Hacer una función que reciba como parámetros una pila y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).

function stackNumber(stack, number){
    var request = []

    for(var i = 0; i < number; i++){
        request.push(stack.pop());
    }
    return request;
}



// 2- Escribe una función "reemplazar" que tenga como parámetros una pila de elementos de tipo Number y dos valores también de tipo Number, "nuevo" y "viejo", de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.

function replace(stack, current, old) {
    let recurrence = stack.indexOf(old)
    let take = (stack.length - 1) - recurrence
    var finalStack = []

    for(var i = 0; i < stack.length; i++) {
        if(stack[i] == old && i == recurrence){
            finalStack.push(current);
        } else {
            finalStack.push(stack[i]);
        }
    }

    for(var i = 0; i < take; i++) {
        finalStack.pop();
    }
    return finalStack;
}



// 3-  Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.

function toAndBack(stack) {
    let to = ''
    let back = ''
    var stack2 = []

    for(let i= 0; i < stack.length; i++) {
        if(i < stack.length - 1) {
            to += stack[i] + ' → '
        } else {
            to += stack[i]
        }
        stack2.unshift(stack[i])
    }
    for(let i = 0; i < stack2.length; i++) {
        if(i < stack2.length - 1) {
            back += stack2[i] + ' → '
        } else {
            back += stack2[i]
        }
    }
    return [to, back]
}



// 4- Un almacén tiene capacidad para apilar "n" contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.