const idade = 17;

// if (idade >= 18){
//     console.log('É maior de idade')
// } else {
//     console.log('É menor de idade')
// }


// primeiro é a pergunta "?"(é um opedardor ternário) se for verdadeiro faça x : se for falso faça y 
idade >= 18 ?  console.log('maior de idade') : console.log('menor de idade')


const notaAluno = 7;

if (notaAluno >= 9) {
    console.log('nota excelente')
} else if (notaAluno >= 7){
    console.log('Nota boa')
} else if (notaAluno >= 4) {
    console.log('Nota mediana')
} else{
    console.log('Nota pessima')
}


notaAluno >= 9? console.log('excelente') :
    notaAluno >= 7 ? console.log('Nota boa') :
        notaAluno >= 4 ? console.log('mediana') :
            console.log('ruim')
