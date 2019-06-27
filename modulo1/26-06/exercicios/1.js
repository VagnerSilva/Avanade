// Faça um algoritmo que recebe um Array
// com dois valores e devolva a soma de todos os numeros entre eles

function compararNumeros(a, b) {
    return a - b;
}  

function sumAll(array_number) {
    var tamanho =  array_number.length;
    var orderNumber = array_number.sort(compararNumeros)
    var num1 = orderNumber[0];
    var num2 = orderNumber[1];
    var count = 0;
    if(tamanho !== 2) {
        console.log('Paramentro deve conter 2 valores');
        return;
    }

      if(typeof num1 != 'number' || typeof num2 != 'number' ) {
        console.log('Os dois dados devem ser numericos');
        return;
    }

    for (var i = num1; i <= num2; i++) {
        count  = count + i;
    }
    
    return count;
}

var result = sumAll([1,4]);
console.log(result);