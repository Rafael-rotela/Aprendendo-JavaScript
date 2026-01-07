//1 verificação de idade para compra de bebida

let idade = 18 
idade >= 18 ? console.log('Pode comprar bebida alcoólica') : console.log('Venda proíbida para menores de 18 anos')

//2 saudação de acordo com a hora

let horaAtual = null;

if (horaAtual <= 12 || horaAtual >= 6) {
    console.log('Bom dia')
} else if (horaAtual <= 12 || horaAtual >= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

//3 Verificação de número positivo ou negativo 
let numero = -4

numero < 0 ? console.log('negativo') : 
    numero > 0 ? console.log('positivo') : console.log('seu numero é nulo')


//4 Conversão de nota em conceito


let nota = 8.5; 

if (nota >= 9) { 

console.log("Conceito A"); 

} else if (nota >= 8) { 

console.log("Conceito B"); 

} else if (nota >= 6) { 

console.log("Conceito C"); 

} else if (nota >= 4) { 

console.log("Conceito D"); 

} else { 

console.log("Conceito E"); 

}

//5  Número par ou ímpar com ternário

let n1 = 3

let resultado =  (n1 % 2 == 1) ? 'impar' : 'par'
console.log('resultado: ', resultado)

//6  Menu com switch-case

// switch () {
//     case value:
        
//         break;

//     default:
//         break;
// }

//7 Validação de campo obrigatório

let email = ''
if (email) {
    console.log('E-mail Válido')
} else{
    console.log('Preencha o campo de e-mail.')
}

//8 Validação de senha segura

let senha
let senhaValida = true
if (senha == senhaValida){
    console.log('senha válida')
} else {
    console.log('Senha muito curta')
}

//9 compra com saldo

let saldo = 9.50
let valorDaCompra = 9

if (saldo >= valorDaCompra){
    console.log('Compra Aprovada')
} else {
    console.log('Saldo insuficiente')
}

