function math(firstNumber)
{

    return function(secondNumber)
    {

        return function(thirdNumber)
        {

            return (firstNumber * secondNumber) + thirdNumber
        }
    }
}

let resultado = math(2)(3)(4)

console.log(resultado) // 10

// Utilizando arrow Functions

const somando = numero1 => numero2 => numero1 + numero2 

console.log(somando(2)(1)) // 3

// Reaproveitando funções

function somaremos(numeroBase)
{

    return function(...numeros)
    {

        let recebendoNumeros = []
        let somandoVetorRecebendoNumeros = 0

        for(let i = 0; i < numeros.length; i++)
        {

            recebendoNumeros.push(numeros[i])
            somandoVetorRecebendoNumeros += numeros[i]
        }        

        return numeroBase + somandoVetorRecebendoNumeros
    }
}

console.log(somaremos(2)(1, 2, 10))

function multiplicaremos(numeroBase)
{

    return function(...numeros)
    {

        let recebendoNumeros = []
        let somandoVetorRecebendoNumeros = 0

        for(let i = 0; i < numeros.length; i++)
        {

            recebendoNumeros.push(numeros[i])
            somandoVetorRecebendoNumeros += numeros[i]
        }        

        return numeroBase * somandoVetorRecebendoNumeros
    }

}

console.log(multiplicaremos(2)(2,3))

const somei = somaremos(10)(10,10)
const multipliquei = multiplicaremos(2)(2,10)
const usandoAsDuasFuncoes = somei + multipliquei

console.log(`A soma das funções reaproveitadas foi: ${usandoAsDuasFuncoes}`)