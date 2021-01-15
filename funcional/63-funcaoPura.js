let PI = 3.14

function areaCirc(raio)
{

    return (raio ** 2) * PI 
}

console.log(areaCirc(10)) // 314

// Aqui temos uma função impura, pq o PI está externo a função, ou seja, a função depende de algo que está fora dela, e não apenas dos valores que foram passados como parâmetros para essa função

// Note que ao alterarmos o valor de teremos um valor diferente que tínhamos anteriormente 

PI = 3.141592

console.log(areaCirc(10)) // 314,1592

// Note que os valores foram diferentes mesmo passando o mesmo valor de entrada na função como referência, e o resultado foi diferente, justamente por termos modificado um valor externo a função. 

// Se realizamos a seguinte operação, ainda teremos uma função impura, veja:

function areaCirc2(raio)
{

    return (raio ** 2) * Math.PI

}

console.log(areaCirc2(10)) // 314.1592653589793

// Note um terceiro valor, a biblioteca Math.PI também é externa a função e por mais que seja um nível de impureza baixo, devido a dificilmente termos uma mudança do valor de PI na ciência matemática, isso não torna a nossa função pura. Ou seja, temos ainda uma dependência externa e isso fera o conceito de pureza da função. Depender de algo externo você terá uma instabilidade muito grande na função, por você depender de algo externo.

// Vamos criar uma função pura com o mesmo exemplo 

function areaCircPura(raio, pi)
{

    return (raio ** 2) * pi

}

console.log(areaCircPura(10, 3.14)) // 314
console.log(areaCircPura(10, 3.141592)) // 314.1592
console.log(areaCircPura(10, Math.PI)) // 314.1592653589793

// Agora a nossa função não depende de nada externamente, visto que ambos os valores foram passados a ela como referência. 