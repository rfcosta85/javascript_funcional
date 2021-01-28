// Os dois tipos...
//1. Operadores de criação

const { of } = require('rxjs')

//2. Operadores Encadeáveis (Pipeable Op.)

const { last, map } = require('rxjs/operators')

 of(1, 2, 'ana', false, 'último') // Operador de criação, aqui no caso de um array poderíamos ter substituído of por from.

    .pipe(
        last(), // Ao utilizar o last, o retorno será apenas o último dado gerado, por conta do pipe recebendo como argumento o método last()
        map(v => v[0]), // Aqui pegaremos apenas a primeira posição da string
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(function(valor){

        console.log(valor)

    })     
       