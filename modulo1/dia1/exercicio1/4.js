// Crie um objeto chamado Professor que deriva de Pessoa 
// e implementa um metodo chamado ensinar() que recebe
// uma string e imprime na tela:

// [noem do professor] está ensinando [matéria]

var Pessoa = function(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

var Professor = function (nome, sobrenome, graduacao) {
    Pessoa.call(this,nome, sobrenome);
    this.graduacao = graduacao;
    this.ensinar = function(materia) {
        var result = this.nome + ' '  + this.sobrenome +  ' está ensinando ' + materia;
        console.log(result)
    }
}

var prof = new Professor('Vagner', 'Silva', 'Analise de Desenvolvimento de Sistema');
prof.ensinar('Matematica');