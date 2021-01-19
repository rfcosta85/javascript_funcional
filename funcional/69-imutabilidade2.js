// #1 Somando números com dados mutáveis

const numeros = [4, 8, 3, 2, 9, 1, 9, 3]

let total = 0

for(let i = 0; i < numeros.length; i++)
{

    total += numeros[i]

}

console.log(total) // 39 // Temos aqui um código bastante imperativo e nem um pouco imutável e funcional 

// #2 Somando números usando Reduce, ou seja, não vai modificar o array original e assim temos dados imutáveis, funcional e código declarativo

const somar = (a, b) => a + b
const total2 = numeros.reduce(somar)
console.log(total2) // 39


// #3- Somando os números do Array Usando recursividade. Podemos substituir um laço e mutabilidade através de um método recursivo, veja.

function somarArray(array, total3 = 0)
{
    if(array.length === 0)
    {

        return total3

    } 

    return somarArray(array.slice(1), total3 + array[0])

}

const resultado = somarArray(numeros)
console.log(resultado) // 39