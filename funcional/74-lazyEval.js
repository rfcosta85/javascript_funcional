function eager(a, b)
{

    const valor = Math.pow(a, 3)
    return valor + b

}

console.log(eager(3, 100)) // 127
console.log(eager(3, 200)) // 227
console.log(eager(3, 300)) // 327

//Criando um processamento mais pesado

function eager2(a, b)
{

    const fim = Date.now() + 2500

    while(Date.now() < fim) {}
    const valor = Math.pow(a, 3)
    return valor + b

}

console.time('#1')
console.log(eager2(3, 100)) // 127
console.log(eager2(3, 200)) // 227
console.log(eager2(3, 300)) // 327
console.timeEnd('#1') // O tempo de processamento foi de #1: 7500.800ms


function lazy(a)
{

    const fim = Date.now() + 2500

    while(Date.now() < fim) {}
    const valor = Math.pow(a, 3)

    return function(b)
    {

        return valor + b

    }    

}

console.time('#2')
console.log(lazy(3)(100)) // 127
console.log(lazy(3)(200)) // 227
console.log(lazy(3)(300)) // 327
console.timeEnd('#2') // O tempo de processamento foi de #2: 7500.538ms

// Refatorando para ganhar ganho de tempo

function lazyFaster(a)
{

    const fim = Date.now() + 2500

    while(Date.now() < fim) {}
    const valor = Math.pow(a, 3)

    return function(b)
    {

        return valor + b

    }    

}

console.time('#2')
const lazy3 = lazy(3)
console.log(lazy3(100)) // 127
console.log(lazy3(200)) // 227
console.log(lazy3(300)) // 327
console.timeEnd('#3') // O tempo de processamento foi de #3: 2499.958ms
// Esse ganho de resposta foi feito devido a separação usada no currying, usando a avaliação tardia.
