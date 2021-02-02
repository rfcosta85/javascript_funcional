const { from } = require('rxjs')

console.log('Antes...')

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .subscribe(console.log)

console.log('Depois...') // Vai seguir a regra padrão da cascata pq o processamento está sendo feita de forma síncrona 

//Trabalhando de forma assíncrona 

const { from2, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('Antes...')

from2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe(observeOn(asyncScheduler))
    .subscribe(console.log)

console.log('Depois...')