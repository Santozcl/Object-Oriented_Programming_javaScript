var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
var client = new Cliente();
client.nome = 'Carlos';
client.cpf = '173.747.987.76';
client.idade = 20;
console.log("cliente : ".concat(client.nome));
console.log("CPF: ".concat(client.cpf));
console.log(" idade: ".concat(client.idade));
