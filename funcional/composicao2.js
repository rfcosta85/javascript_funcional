
function composicao(...fns)
{

    return function(valor){

        return fns.reduce(async (acc, fn) => {

            if(Promise.resolve(acc) === acc)
            {

                return fn(await acc)

            } else // Estamos verificando se acc é uma promise
            {
            
                return fn(acc)

            }            

        }, valor)

    }

}

function gritar(texto)
{

    return texto.toUpperCase()

}

function enfatizar(texto)
{

    return `${texto}!!!`

}

function tornaLento(texto)
{

    return new Promise(resolve => {

       setTimeout(() =>{

        resolve(texto.split('').join(' '))

       }, 3000) 
    })
}

const exagerado = composicao
(
    gritar,
    enfatizar,
    tornaLento
)

exagerado ('PARA')
.then(console.log)
exagerado('Cuidado com o buraco!!!') 
.then(console.log)

