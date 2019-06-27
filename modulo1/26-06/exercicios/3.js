// Crie um algoritimo que receba dois parametros:
// O primeiro e uma array de elementos e o segundo e uma função anomima. 
// Este algoritmo deve filtra esse array de acordo com o criterio passado na funcao anomima

function dropElements(array, callback) {

    var len = array.length;
    var novoArray = [];

    for (var i = 0; i < len; i++) {

        var num = array[i];
            if(callback(num)) {
                novoArray.push(num);
            }
    }

    return novoArray;
}


var result = dropElements([1,2,3,4], function(n) { return n >= 3});
console.log(result);