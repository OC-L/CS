// 1- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice, los pares en una y los nones en otra.

var queue1 = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco']

function evenOdd(queue) {
    var odd = []
    var even = []
    
    for(var i = 0; i < queue.length; i++)
        if (i % 2 == 0) {
            even.enqueue(queue[i])
        } else {
            odd.enqueue(queue[i])
        }
    return [odd, even]
}



// 2- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos "colados", por lo que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.

queue2 = [
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
    ];

// Mostrar cola
queue2.print();

// Retirar elementos y mostrarlos
function verify(queue) {
    var hasTicket = []
    var noTicket = []

    for(var i = 0; i < queue.length; i++){
        if(queue[i].ticket == true){
            hasTicket.enqueue(queue[i]);
        } else {
            noTicket.enqueue(queue[i])
        }
    }
    return noTicket
}

// Mostrar cola final
hasTicket.print()