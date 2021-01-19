/*const numeros = [3, 1, 7, 9, 4, 6]

numeros.sort()

console.log(numeros) // [ 1, 3, 4, 6, 7, 9 ]*/

// É importante que você perceba que a situação acima, o sort irá causar uma alteração dos dados no array original, significa que alteramos o array de forma destrutiva, sendo assim não temos o conceito de imutabilidade sendo aplicado aqui. 

// Podemos corrigir esse problema da seguinte forma: 

function ordenar(array)
{

    return [...array].sort() // Aqui quando colocamos o array dentro do colchetes, significa que estamos clonando o array original, e utilizamos o operador spread que são os ... que tem a função de pegar todos os elementos e colocar dentro de um novo array. 

}

const numeros = [3, 1, 7, 9, 4, 6]

console.log(numeros) //  [ 3, 1, 7, 9, 4, 6 ] Note que o array original, numeros ficou exatamente da mesma forma. 

let novoArray = ordenar(numeros)

console.log(novoArray) // [ 1, 3, 4, 6, 7, 9 ] Repare que o que foi alterado foi justamente o array clonado pela função e passado para a variável novoArray para que nos fosse ilustrada essa diferença. Aqui temos uma função pura sem gerar efeito colateral. 

// É possível ainda proteger de uma forma extremamente segura os dados do seu array, utilizando o método Object.freeze, veja. 

const numeros2 = Object.freeze([3, 1, 7, 9, 4, 6])
numeros2[0] = 1000
numeros[0] = 2000

console.log(numeros) // [ 2000, 1, 7, 9, 4, 6 ]
console.log(numeros2) // [ 3, 1, 7, 9, 4, 6 ]

// Repare que conseguimos destruir o array numeros sem qualquer dificuldades, mas o array numeros2 que conta com a proteção do Object.frezze não sofreu qualquer alteração, sendo a nossa solicitação de inclusão do 1000 na primeira posição do array sendo completamente ignorada. 