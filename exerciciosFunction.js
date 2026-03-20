/*
Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.
*/

// function saudacap(nome) {
//     if (nome){
//         console.log(`Olá! Bem-vindo(a)!`)
//     } else{
//         console.log(`Olá, ${nome}! Bem-vindo(a)`)
//     }
// }

/* 
Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.
*/

// const desconto = (Valor,desconto) =>{
//    return  Valor - (Valor * ((desconto/100)))
// }

/* Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function. */

// function verificarParidade(num) {
//     if (num % 2 == 0){
//         return 'Par';
//     }
//     else{
//         return 'Impar';
//     }
// }    


/* Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

Até 5 km: frete fixo de R$ 5
De 5.1 km até 20 km: R$ 0,50 por quilômetro
Acima de 20 km: frete fixo de R$ 20*/

// function calcularFrete(distancia) {
//     if (distancia <= 5) {
//         return 5;
//     } else if (distancia <= 20) {
//         return distancia * 0.5;
//     } else {
//         return 20;
//     }
// }
 
// console.log(calcularFrete(3));
// console.log(calcularFrete(12));
// console.log(calcularFrete(25));


/*
Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:

o nome do cliente,
o tipo do cliente (vip, novo ou comum),
e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.
*/

// function processarPedido(nome,tipoCliente,callback){
//     console.log(`Processando pedido de ${nome}`)
//     callback(nome,tipoCliente)
// }

// function mensagemPersonalizada(nome,tipoCliente){
//     if(tipoCliente === 'vip'){
//         console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`)
//     } else if(tipoCliente === 'novo'){
//         console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`)
//     }
//     else if(tipoCliente == 'comum'){
//         console.log(`Obrigado pela sua compra, ${nome}!`)
//     } else{
//         console.log('opção ínvalida')
//     }
// }

/* Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.*/
// function responderUsuario(nome){
//     console.log('Processando a resposta...')    
//     setTimeout((nome) => {
//         console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida`)
//     },2000)
// }

// function avaliarDesempenho(pontuacao,callback){
//     let status = ''

//     if (pontuacao > 70){
//         status = 'Aprovado'
//     } else if (pontuacao < 69 || pontuacao > 50){
//         status = 'reforço'
//     } else{
//         status = 'Reprovado'
//     }

//     callback(pontuacao, status)
// }
// function gerarMensagem(pontuacao, status) {
//     console.log(`Pontuação: ${pontuacao}`);
 
//     if (status === "aprovado") {
//         console.log("Parabéns! Você foi aprovado!");
//     } else if (status === "reforco") {
//         console.log("Atenção! Você precisa de reforço.");
//     } else {
//         console.log("Infelizmente, você foi reprovado. Tente novamente.");
//     }
// }

/* Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.*/

// function calcularConsumo(potencia,horasPorDia){
//     let consumo  = 0 
//     consumo = (potencia * horasPorDia * 30)/1000
//     return consumo
// }

// function classificarConsumo(consumo){
//     let classificacao = ''
//     if (consumo < 50){
//         return classificacao = 'Baixo consumo'
//     } else if (consumo > 50 || consumo < 199){
//         return classificacao = 'Consumo moderado'
//     } else {
//         return classificacao = 'Alto consumo'
//     }
// }

// function exibirResumo(nomeAparelho,consumo,classificacao){
//     console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como Consumo ${classificacao}.`)
// }

// const nomeAparelho = "Geladeira";
// const consumo = calcularConsumo(150, 4);
// const classificacao = classificarConsumo(consumo);
// exibirResumo(nomeAparelho, consumo, classificacao);

/*Sua missão é criar uma função chamada contagemRegressiva que:

Receba um número inteiro positivo (ex: 5)
Imprima esse número e, a cada chamada, reduza em 1
Quando chegar em 0, exiba a mensagem: "Lançamento!"
A função deve ser implementada de forma recursiva, sem usar loops (for ou while). */

function contagemRegressiva(numero){
    if (numero > 0){
        console.log(num)
        contagemRegressiva(numero - 1) 
    }
    else if(num === 0){
        console.log('Lançamento!')
    }
}