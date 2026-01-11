// Contar quantos números pares e impares nós temos entre 0 e 100

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

// laço de repetição (for)

for (let contador = 0; contador < 100; contador++) {
    if(contador % 2 == 0){
        totalNumerosPares++
    } else{
        totalNumerosImpares++
    }    
}

console('Total de números pares:', totalNumerosPares)
console('Total de números pares:', totalNumerosImpares)


for (i = 0; i< 100; i++){
    if (i % 2 == 0) {
        console.log(`Números pares é : ${i}`)
    } else if (i % 2 == 1) {
        console.log(`Números ímpares é: ${i}`)
    }
}


