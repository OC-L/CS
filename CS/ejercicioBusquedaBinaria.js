var arr = [1,2,2,3,5,6,7,9,12,12,13,14,16,30,33,35,40,42,65,66,66,88,89]

function numberFinder(arr, number) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == number) {
            console.log `Encontré el número que buscabas en ${i} pasos.`
        }
    }
}

numberFinder(arr, 16)