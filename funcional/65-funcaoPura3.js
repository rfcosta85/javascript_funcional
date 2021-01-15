//Abaixo temos uma função pura, nós controlamos 100% todos os parâmetros passados pela função e controlamos o retorno pois ele depende somente dos parâmetros de entrada, e isso facilita muito aos testes. Quando não surgem os conceitos de mock, que é quando vc tenta simular uma dependência externa da função, por exemplo uma api que vai consular o valor dólar, ao testar essa função teremos uma dificuldade muito maior, você vai precisar de alguma forma mokar isso para realizar um teste.

let qtdeDeExecucoes = 0

function somar(a, b)
{
    
    return a + b

}

console.log(somar(68,31)) // 99

// Tornando a função impura:

function somar2(a, b)
{

    qtdeDeExecucoes++ //Temos aqui um efeito colateral observáveis
    return a + b
}

console.log(qtdeDeExecucoes)// 0
console.log(somar2(68, 31)) // 99
console.log(somar2(68, 31)) // 99
console.log(somar2(68, 31)) // 99
console.log(qtdeDeExecucoes) // 3

// Quando você torna regra a utilização de funções impuras uma hora você pode perder o completo controle do seu sistema, pois você já não sabe do que a função realmente depende, que possa depender de funções que dependem de outras funções e isso certamente irá impedir o reuso da função. 
