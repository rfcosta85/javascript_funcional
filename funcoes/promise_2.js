/*setTimeout(function(){

    console.log('Executando callback...')

    setTimeout(function(){

        console.log('Executando callback...')

    }, 2000)

        setTimeout(function(){

            console.log('Executando callback...')

        }, 2000)

}, 2000)*/

// -----------------------------------------

// Realizando a mesma operação com o promise

function esperarPor(tempo = 2000)
{

    return new Promise(function(resolve){

        setTimeout(function(){

            console.log('Executando promise...')
            resolve()

        }, tempo)

    })

}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)


// My Example

