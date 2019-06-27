// Faça um algoritmo que recebe inúmeros parâmetros, 
// sendo que o primeiro necessariamente deve ser um array

// Os numeros que segue deve ser eliminados do array

var destroyer = function (_array, ...param) {
    var list = _array
    args = arguments;

    for( var i = list.length; i--;) {
        if ( list[i] === args[0] || list[i] === args[1]) list.splice(i, 1);
    }
    
    return list;

}

var elements = [1,3,1,4,6,4];
var result = destroyer(elements, 3, 4);
console.log(result)