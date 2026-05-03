let form = document.getElementById('formulario');

let dados = [];

form.addEventListener('submit', function(e){

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let endereco = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let curso = document.getElementById('curso').value;
    let matricula = document.getElementById('matricula').value;
    let senha = document.getElementById('senha').value;
    let confirmar = document.getElementById('confirmar').value;

    if(!nome.includes(" ")){
        alert('Nome deve ser completo!');
        valido = false;
    }

    if(nome.trim() === ''){
        alert('Campo Nome obrigatório!');
        valido = false;
    }

    if(cpf.length < 11){
    alert('CPF Inválido!');
    valido = false;
    }

    if(cpf.trim() === ''){
        alert('Campo CPF obrigatório!');
        valido = false;
    }

    if(dataNascimento.trim() === ''){
        alert('Campo Data de Nascimento obrigatório!');
        valido = false;
    }

    if(telefone.length < 10){
    alert('Telefone Inválido!');
    valido = false;
    }

    if(telefone.trim() === ''){
        alert('Campo Telefone obrigatório!');
        valido = false;
    }

    if (!email.includes ("@") || !email.includes (".")){
       alert('Email Inválido!');
       valido = false;
    }
    if (email.trim() === "" ){
        alert('Campo Email obrigatório!');
        valido = false;
    }

    if(endereco.length < 10){
    alert("Endereço muito curto!");
    valido = false;
    }

    if(endereco.trim() === ""){
    alert("Endereço obrigatório!");
    valido = false;
    }   

})
