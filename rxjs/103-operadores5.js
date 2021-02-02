const { of, Observable, Subscriber } = require('rxjs')

function terminadoCom(parteFinal)
{

    return function(fonte)
    {

        return Observable.create(subscriber => {

            fonte.subscribe({

                next(texto){
                    
                    if(texto.endsWith(parteFinal))
                    {

                        subscriber.next(texto)
                    }
                },
                error(e){

                    subscriber.error(e)
                },
                
                complete(){

                    subscriber.complete()
                }
            })
        })
    }
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)