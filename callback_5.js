const carrinho = 
[

    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},

]

// Realizar o total de cada um dos elementos, multiplicando a quantidade x preço. 
// No final somar todos os itens do carrinho para dar um valor geral da quantidade dos produtos e preços do carrinho de compra

// Criar uma função para fazer o mapeamento de cada um dos elementos

const getTotal = item => item.qtde * item.preco
const somar = (acumulador, elemento) => acumulador + elemento

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)

