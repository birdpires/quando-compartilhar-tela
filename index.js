// var cadastroFunc = [
//     ['Maycon', 'Silva', 'Recife'],
//     ['Maycon2', 'Silva2', 'Recife']
// ];
// MARIZ COM TRÊS ELEMENTOS: PROCESSO DINÂMICO
var cadastroFunc = [
    {
        nome: "Marane",
        sobrenome: "Alcantara",
        idade: "22",
        cidade: "Salvador",
        telefone: "000000000",
        email: "marane@gmail.com"
    }
];

function exibirResultado() { 
    var html = '';

    for( var i in cadastroFunc ) {
    html +=  "nome: " + cadastroFunc[i].nome + " sobrenome: " + cadastroFunc[i].sobrenome + " idade: " + cadastroFunc[i].idade + " cidade: " + cadastroFunc[i].cidade + " telefone: " + cadastroFunc[i].telefone + " email: " + cadastroFunc[i].email + "<br>";
    }

    document.getElementById("resultado").innerHTML = html;
    nome.value = "";
    sobrenome.value = "";
    idade.value = "";
    cidade.value = "";
    telefone.value = "";
    email.value = "";

}

exibirResultado(cadastroFunc);

function cadastrarFuncionario(){
    var nome = document.getElementById ("nome");
    var sobrenome = document.getElementById ("sobrenome");
    var idade = document.getElementById ("idade");
    var cidade = document.getElementById ("cidade");
    var telefone = document.getElementById ("telefone");
    var email = document.getElementById ("email");
    

    
    var item = {'nome': nome.value, 'sobrenome': sobrenome.value, 'idade': idade.value, 'cidade': cidade.value, 'telefone': telefone.value, 'email': email.value};

    cadastroFunc.push(item);
    exibirResultado(cadastroFunc);

}

