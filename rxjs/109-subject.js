const { Observable, Subject } = require('rxjs')

function getObservable()
{

    return new Observable(subscriber => {

        setTimeout(() => {
            console.log('#1 Observable...')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 1000)

    })
}

const obs = getObservable()
obs.subscribe(console.log) 
obs.subscribe(console.log) 

function getSubject()
{

    const sub = new Subject()
    setTimeout(() => {
        console.log('#2 Subject...')
        sub.next(Math.random())
        sub.complete()
    }, 1000)

    return sub
}

const sub = getSubject()
sub.subscribe(console.log) // Os valores serão sempre o mesmo
sub.subscribe(console.log) // Uma espécie de multicast, uma comunicação para múltiplos elementos. O observable é unicast, passando o valor apenas para o elemento que contém a subscrição, ou seja, será passado um valor diferente para cada elemento que contenha a subscrição, pode ocorrer dos valores serem repetidos, o que acontece é que sempre será gerado um novo valor. 
