const readline = require('readline')

function recebeuSinal(algumSinal)
{

    const recebendoSinal = readline.createInterface({

        input: process.stdin,
        output: process.stdout,

    })

    return new Promise(resolve => {

        recebendoSinal.question(algumSinal, resposta => {

            resolve(resposta)
            recebendoSinal.close()

        })
    })

}

function motorista()
{

    console.log('Parando no ponto de ônibus...')

}

async function passageiros(entrarOuSair)
{
    while(true)
    {
        const resposta = await recebeuSinal('Algum sinal?(s/n/q)')

        if(resposta.toUpperCase() === 'S')
        {
            
            (motorista())

        }else if(resposta.toUpperCase() === 'N')
        {

            console.log('Seguindo viagem normalmente...')

        }else if(resposta.toUpperCase() === 'Q')
        {

            console.log('Ponto final! Por favor, desembarque do veículo...')

            break

        }
    }
}

passageiros(motorista)