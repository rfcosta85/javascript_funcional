// Desafio
// Criar um stream de números
// entre min e max com Observable!

const { Observable, noop } = require('rxjs')

function entre(min, max)
{

    return new Observable(subscriber => {

        /*Array(max - min).fill().map((_, i) => {

            subscriber.next(min + i)

        }) // Forma imutável e funcional

        subscriber.complete()*/
        
        for(let i = min; i <= max; i++)
        {

            subscriber.next(i)

        }

        subscriber.complete()  // Forma mutável

    })

}

entre(4, 10)
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log('Fim!')
    )