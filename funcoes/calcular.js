// Calcular(3)(7)(fn) A função será responsável por calcular 3 e 7 
// Exemplo fn -> 3 * 7 ; fn -> 3 + 7 ; fn -> 3 - 7

function calculate(x)
{

    return function(y)
    {

        return function(fn)
        {

            return fn(x, y)

        }

    }

}

function subtract(a, b)
{

    return a - b

}

function multiply(a, b)
{

    return a * b 

}

function sum(a, b)
{

    return a + b

}

const result1 = calculate(7)(3)(subtract)
const result2 = calculate(7)(3)(multiply)
const result3 = calculate(7)(3)(sum)

console.log(result1 + '\n' + result2 + '\n' + result3)
 
