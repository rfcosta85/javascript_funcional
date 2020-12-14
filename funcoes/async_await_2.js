/*Gerando números da Mega Sena*/

function gerarNumerosEntre(min, max, numerosProibidos)
{

    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {

        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min 

        if(numerosProibidos.includes(aleatorio))
        {

            reject('Número repetido!')

        } else
        {

            resolve(aleatorio)

        }       

    })

}

async function gerarMegaSena(qtdeNumeros)
{

    try
    {

        const numeros = []
        for(let _ of Array(qtdeNumeros). fill())  // Aqui percorremos um for com a qtd de elementos que foi     recebida como parâmetro, sem a necessidade de criar uma variável.
        {

            numeros.push(await gerarNumerosEntre(1, 60, numeros))

        }

        return numeros
        
    }catch(e)
    {

       throw "LADRÃO!"

    }

}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)
