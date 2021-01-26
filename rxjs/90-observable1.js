const { Observable, Subscriber } = require('rxjs')

const promise = new Promise(resolve => {

    resolve('Promise é bem legal!') // A promise só podemos chamar uma vez

})

promise.then(console.log)

const obs = new Observable(subscriber => {

    subscriber.next('Observer é bem legal!') // Observable podemos chamar varios e assim podemos criar um streaming de dados.

})

obs.subscribe(console.log)