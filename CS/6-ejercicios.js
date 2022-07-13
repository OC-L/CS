// 1- Crear un array llamado meses que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log()

const meses = []
meses.push('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre')
console.log(meses)



// 2- Escribir el código de una función a la que se le pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.

function esPar(num) {
    if (num % 2 == 0) {
        return `El número ${num} es par.`
    } else {
        return `El número ${num} is impar.`
    }
}



// 3- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determinada si esa cadena de textp está formada solamente por mayúsculas, solo por minúsculas o por una combinación de ambas.

function minusculasMayusculas(str) {
    if (str.toUpperCase() === str) {
        return 'El texto está escrito solo con mayúsculas'
    } else if ( str.toLowerCase() === str) {
        return 'El texto está escrito solo con minúsculas'
    } else {
        return 'El texto contiene tanto mayúsculas como minúsculas'
    }
}



// 4- El factorial de un número entero n, es una operación matemática que consiste en multiplicar todos los factores n * (n - 1) * (n - 2) ... Así, el factorial de 5 (escrito como 5!) es igual a 5 * 4 * 3 * 2 * 1 = 120. Utilizando la estructura for, crea un script que calcule el factorial de un número entero.

function factorial(num) {
    if(num === 0 || num === 1)
        return 'El factorial de lo números 0 y 1 siempre es 1';
    for(var i = num - 1; i >= 1; i--) {
        num *= i;
    }
        return `El factorial es ${num}`
}



// 5- Escribir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma manera desde la izquierda y desde la derecha.

function palindromo(str) {
    var str1 = str.split("").reverse()
    var reversa= ""
    for(var i =0; i<str1.length; i++) {
        reversa = reversa + str1[i]
    }
    if(str == reversa) {
        return `La palabra '${str}' es un palindromo`
    }
    else {
        return `La palabra '${str}' no es una palíndromo`
    }
}



// 6- Escribir una función que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 por cada uno  de los lanzamientos. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36,000 esta operación.
