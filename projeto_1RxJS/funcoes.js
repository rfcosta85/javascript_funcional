// Aqui teremos as funções que podem ser utilizadas em outros projetos no futuro

const fs = require('fs')
const { resolve } = require('path')
const path = require('path')
const { Observable, Subscriber } = require('rxjs')

function lerDiretorio(caminho) // Responsável por ler um diretório
{

    return new Observable( subscriber => {

        try{


            fs.readdirSync(caminho).forEach(arquivo => {

                subscriber.next(path.join(caminho, arquivo)) 

            }) 
           
            subscriber.complete()

        }catch(e){

            subscriber.error(e)

        }

    } )  

}

function lerArquivo() // Assíncrona para ler um arquivo apenas
{

    return createPipeableOperator(subscriber => ({

        next(caminho){

            try{

                const conteudo = fs.readFileSync(caminho, {
                    encoding: 'utf-8'})
                subscriber.next(conteudo.toString())
                subscriber.complete

            }catch(e){

                subscriber.error()

            }
        }
    })) 
   
}

function elementosTerminadosCom(padraoTextual)
{

    return createPipeableOperator(subscriber => ({

        next(texto){

            if(texto.endsWith(padraoTextual))
            {

                subscriber.next(texto)

            }

        }
    }))
    

} // Essa função irá retornar um array com todos os arquivos que atendam a condição determinada em padrão

function removerElementosSeVazio(){

    return createPipeableOperator(subscriber => ({

        next(texto){

            if(texto.trim())
            {

                subscriber.next(texto)

            }                      
        }
    }))

}

function removerElementosSeIniciarComNumero()
{

    return createPipeableOperator(subscriber => ({

        next(texto){

            const num = parseInt(texto.trim())      

            if(num !== num)
            {

                subscriber.next(texto)

            }                      
        }
    }))

}


function removerSimbolos(simbolos){
    return createPipeableOperator(subscriber =>({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce(
                (acc, simbolo) => {
                    return acc.split(simbolo).join('')
                }
                , texto)
            subscriber.next(textoSemSimbolos)
        }
    }))
} 

function MesclarElementos(array) {

    return array.join(' ')

}// Aqui juntamos todos os arquivos em uma única String

function separarTextoPor(simbolo){

    return createPipeableOperator(subscriber => ({

        next(texto){

            texto.split(simbolo).forEach(parte => {

                subscriber.next(parte)
            })
                                  
        }
    }))
}

function agruparElementos(){

    return createPipeableOperator(subscriber => ({

        next(palavras){

          const agrupado = Object.values(palavras.reduce((acc, palavra) => {

                const el = palavra.toLowerCase()
                const qtde = acc[el] ? acc[el].qtde + 1 : 1
                acc[el] = {elemento: el, qtde}
        
                return acc
        
            }, {}))  
            
            subscriber.next(agrupado)
        }
    }))
}



function ordernarPorAtributoNumerico(attr, ordem = 'asc')
{
   
    return function(array)
    {

        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr] // Ordenação decrescente

        return array.sort(ordem ==='asc' ? asc : desc)

    }
}

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

module.exports = 
{

    lerDiretorio,
    lerArquivo,    
    elementosTerminadosCom,
    removerElementosSeVazio,    
    removerElementosSeIniciarComNumero,
    removerSimbolos,
    MesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordernarPorAtributoNumerico

} // Aqui estamos criando um atributo chamado lerDiretorio que aponta para a função ler diretório, o mesmo acontece com as demais funções. Esse método é conhecido como objetos literais.