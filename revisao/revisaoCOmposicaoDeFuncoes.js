function composicao(...funcoes)
{

    return function(valor)
    {

        return funcoes.reduce((acumulado, funcao) => {

            return funcao(acumulado)

        }, valor)

    }

}

function somar(numeroBase)
{

    return function(...numeros)
    {
        
        let somandoNumeros = 0

        for(let i = 0; i < numeros.length; i++)
        {

            somandoNumeros += numeros[i]

        }

        return numeroBase + somandoNumeros        

    }    

}

function multiplicar(numeroBase)
{

    return function(...numeros)
    {

        let multiplicandoNumeros = 1

        for(let i = 0; i < numeros[i]; i++)
        {

            multiplicandoNumeros *= numeros[i]

        }

        return  numeroBase * multiplicandoNumeros

    }

}

const resultadoSoma = somar(2)(2, 2) // 6
const resultadoMultiplicacao = multiplicar(1)(5, 2) // 10
const somarResultados = resultadoSoma + resultadoMultiplicacao // 16

function elevadoAoQuadrado(numero)
{

    return numero ** 2  // 256

}

function dividindoPorDois(numero)
{

    return numero / 2 

}

const resultado = composicao(

    elevadoAoQuadrado,
    dividindoPorDois

)(somarResultados)

console.log(resultado) //128

