const carrinho = 
[

    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},

]

// filter, map , reduce
//1. Apresentar apenas os elementos fragil: true
// 2. Pegar o preço total de cada elemento
// 3. media totais dos valores de cada um dos elementos, calcular a média dentro da função - 174,89


// Number One

const getFragile = fragile => fragile.fragil == true
const getName = names => names.nome

const products_fragile = carrinho
    .filter(getFragile)
    .map(getName)


console.log('\n')
console.log(products_fragile)
console.log('\n')

// Number Two

const getPrices = prices => prices.qtde * prices.preco
const getName2 = names_2 => names_2.nome
 
const total_prices = carrinho
    .map(getPrices)

console.log('\n')
console.log(total_prices)
console.log('\n')

// Number three

const total = carrinho
    .map(getPrices)
    .reduce((accumulator, element) => 
    {
    
        const novaQtde = accumulator.qtde + 1
        const novoTotal = accumulator.total + element

        return {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        }  
    
    }, {qtde: 0, total: 0, media: 0})   

    console.log('\n')
    console.log(total)
    console.log('\n')