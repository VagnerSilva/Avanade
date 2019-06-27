// Faça um algoritmo que recebe inúmeros parâmetros, 
// sendo que o primeiro necessariamente deve ser um array

// Os numeros que segue deve ser eliminados do array

var destroyer = function (_array, ...param) {
    var list = _array
    var len = param.length;
    var novoArray = [];

    param.forEach(function(element) {
        for( var i = list.length; i--;) {
            if ( list[i] === element) list.splice(i, 1);
        }
    });
    

    return list;

}

var result = destroyer([1,3,1,4,6,4],3,4);
console.log(result)