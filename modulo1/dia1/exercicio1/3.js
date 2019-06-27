// Crie um algoritimo que receba dois parametros:
// O primeiro e uma array de elementos e o segundo e uma função anomima. 
// Este algoritmo deve filtra esse array de acordo com o criterio passado na funcao anomima

function dropElements(array, callback) {

    var len = array.length;
    var newArray = [];

    for (var i = 0; i < len; i++) {

        var num = array[i];
            if(callback(num)) {
                newArray.push(num);
            }
    }

    return newArray;
}
var elements = [1,2,3,4];
var filter =  function(n) { return n >= 3};
var result = dropElements(elements, filter);
console.log(result);