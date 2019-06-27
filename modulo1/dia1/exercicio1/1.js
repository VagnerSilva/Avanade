// Faça um algoritmo que recebe um Array
// com dois valores e devolva a soma de todos os numeros entre eles

function compareNumber(a, b) {
    return a - b;
}  

function sumAll(array_number) {
    var len =  array_number.length;
    var orderNumber = array_number.sort(compareNumber)
    var num1 = orderNumber[0];
    var num2 = orderNumber[1];
    var count = 0;
    if(len !== 2) {
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

var elements = [1,4];
var result = sumAll(elements);
console.log(result);