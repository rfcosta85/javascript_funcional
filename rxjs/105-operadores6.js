const { from, Observable, Subscriber } = require('rxjs')

function createPipeableOperator(operatorFn)
{

    return function(source)
    {
        
        return Observable.create(subscriber => {

            const sub = operatorFn(subscriber)

            source.subscribe({

                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())

            })

        })
            
    }

}

function primeiro()
{

    return createPipeableOperator(subscriber =>({

            next(valor){

                subscriber.next(valor)  
                subscriber.complete()

            }
    }))  
   
}

function nenhum()
{  
        
    return createPipeableOperator(subscriber =>({

        next(valor){
            
            subscriber.complete()

        }
    }))  
            
    
}

function ultimo()
{
    
    let ultimo 

    return createPipeableOperator(subscriber =>({        

        next(v){

            ultimo = v
        },

        complete(){

            if(ultimo !== undefined)
            {

                subscriber.next(ultimo)

            }
            
            subscriber.complete()
        }
    }))
    
}

from([1, 2, 3, 4, 5])
    .pipe(

        //primeiro(),
        //nenhum(),
        ultimo()
    )    
    .subscribe(console.log)