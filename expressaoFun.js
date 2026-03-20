/* criar função que calcule o fatorial de um número usando recursão 
    fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
    ex: 5! = 5 x 4 x 3 x 2 x 1 
*/

const fatorial = function f(num){
    if(num === 0 || num === 1) return 1;
    return num * (num - 1)
}

// sintaxe do arrow function
/*
const nomeVariavel = (parametro(s)) => {
    // bloco de código
    retorno
}; 

const boasVindas = nome => `olá, ${nome}`;
*/