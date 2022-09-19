
class Cliente {
     public nome : string
     public cpf : string
     public idade : number

}const client = new Cliente()

client.nome = 'Carlos'
client.cpf = '173.747.987.76'
client.idade = 20

console.log(`cliente : ${client.nome}`);
console.log(`CPF: ${client.cpf}`);
console.log(` idade: ${client.idade}`);



