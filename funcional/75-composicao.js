
function composicao(...fns)
{

    return function(valor){

        return fns.reduce((acc, fn) => {

            return fn(acc)

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


const resultado = composicao(

    gritar,
    enfatizar

)('PARA')

console.log(resultado)
