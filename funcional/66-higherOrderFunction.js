function executar(fn, ...params)//os ... indicam que estamos usando o operador rest, podemos através dele passar os parâmetros todos espalhados e ele vai juntar tudo em um array.
{

   return fn(...params)

}

function somar(a, b, c)
{

    return a + b + c

}

function multiplicar(a, b)
{

    return a * b

}

const resultado1 = executar(somar, 4, 5, 6) 
const resultado2 = executar(multiplicar, 30, 40) 

console.log(resultado1, resultado2) // 15, 1200

// Note que acima nós criamos a função executar que recebe uma função como parâmetro e parâmetros variados via rest. 

// Abaixo criamos uma função para somar e uma função para multiplicar.

// as constantes chamam a função executar, passam como parâmetro as funções somar e multiplicar nessa ordem, e seus parâmetros para realização da operação 

// Dessa forma acabamos de criar uma higher-order function


// Abaixo vamos criar uma função que retorna outra função

function executar(fn, ...params)
{

    return function(textoInicial)
    {

        return `${textoInicial} ${fn(...params)}!`

    }    

}

function somar(a, b, c)
{

    return a + b + c

}

function multiplicar(a, b)
{

    return a * b

}

const resultado3 = executar(somar, 4, 5, 6)('O resultado da soma é: ') 
const resultado4 = executar(multiplicar, 30, 40)('O resultado da multiplicação é: ')

console.log(`${resultado3} ${'\n'}${resultado4}`) // O resultado da soma é:  15! O resultado da multiplicação é:  1200!