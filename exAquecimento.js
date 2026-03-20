const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;
let contador = 0
do {
    contador++
    console.log(`aquecendo... segundo ${contador}`)
    if(temperaturaIdealAlcancadaEm == contador){
        console.log('Temperatura ideal atingida.')
    }
} while(contador < tempoMinimo);
console.log('Tempo total de aquecimento: ', contador, 'segundos')