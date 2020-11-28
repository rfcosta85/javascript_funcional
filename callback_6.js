const carrinho = 
[

    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},

]

Array.prototype.meuReduce = function(fn, inicial)
{

    let acumulador = inicial

    for(let i = 0; i < this.length; i++)
    {

        if(!acumulador && i === 0)
        {

            acumulador = this[i]
            continue

        }

        acumulador = fn(acumulador, this[i, i, this])

    }

    return acumulador

}


const getTotal = item => item.qtde * item.preco
const somar = (acumulador, elemento) => acumulador + elemento
const totalGeral = carrinho
    .map(getTotal)
    .meuReduce(somar)

console.log(totalGeral)