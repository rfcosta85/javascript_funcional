// Somar(3)(4)(5) Utilizando funções dentro de funções

function sum(number1, number2)
{

    return function(number3)
    {

        return number1 + number2 + number3

    }

}

const total = sum(3, 4)
console.log(total(5))
