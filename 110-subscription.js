// Esperar 30000 
// gerar números de 500 e 500

const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(num => {

    console.log(`#1 Gerou o número ${num}`)
})

const sub2 = obs.subscribe(num => {

    console.log(`#2 Gerou o número ${num}`)
})

const sub = new Subscription()
sub.add(sub1)
sub.add(sub2)

sub1.add(sub2) // Ao realizar essa operação, quando você interrompe a execução de 1, o 2 também irá parar, visto que agora eles são dependentes. 
// Depois de 10000 unsubscribe 

setTimeout(() => {

    sub.unsubscribe()
    //sub1.unsubscribe()
    //sub2.unsubscribe()

}, 10000)
