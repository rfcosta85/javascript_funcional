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

function removerElementosSeVazio(array)
{

    return array.filter(el => el.trim()) // O método trim vai retirar os espaços em branco
    
}

function removerElementosSeIncluir(padraoTextual)
{

    return function(array) // refatorando... agora somente se tivermos um array é que ele fará o processamento para pegar o valor textual
    {

        return array.filter(el => !el.includes(padraoTextual)) // Se não incluir o padrão textual, manter o elemento no array final, caso contrário remova

    }
    
}

function removerElementosSeApenasNumero(array)
{

    return array.filter(el => {

        const num = parseInt(el.trim())
        return num !== num // Aqui teremos false quando o resultado de num for um not a number. Ou seja se n for um número
    })
}

function removerSimbolos(simbolos){
    return function(array){
        return array.map(el => {

            return simbolos.reduce((acc, simbolo) => {

                return acc.split(simbolo).join('')

            },el )             
        })
    }
} // Aqui nós pegamos cada símbolo excluímos e juntamos com o array resultante um espaço em branco

function MesclarElementos(array) {

    return array.join(' ')

}// Aqui juntamos todos os arquivos em uma única String

function separarTextoPor(simbolo){

    return createPipeableOperator(subscriber => ({

        next(texto){

            texto.split(simbolo).forEach(parte => {

                subscriber.next(parte)
            })

            subscriber.complete()            
        }
    }))
}

function agruparElementos(palavras)
{
    
    return Object.values(palavras.reduce((acc, palavra) => {

        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = {elemento: el, qtde}

        return acc

    }, {}))
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
    removerElementosSeIncluir,
    removerElementosSeApenasNumero,
    removerSimbolos,
    MesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordernarPorAtributoNumerico

} // Aqui estamos criando um atributo chamado lerDiretorio que aponta para a função ler diretório, o mesmo acontece com as demais funções. Esse método é conhecido como objetos literais.