function esperarPor(tempo = 2000)
{

    return new Promise(function(resolve){

        setTimeout(function(){

            /*console.log('Executando promise...')*/
            resolve()

        }, tempo)

    })

}

async function executar() 
{

    await esperarPor(1500)
    
    console.log('Async/Await 1...')

    await esperarPor(1500)

    console.log('Async/Await 2...')

    await esperarPor(1500)

    console.log('Async/Await 3...')

}

executar()