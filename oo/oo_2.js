class Produto 
{

    constructor(nome, preco, desconto = 0.5) 
    {

        this.nome = nome
        this.preco = preco
        this.desconto = desconto

    } // Aqui inicializamos as variáveis que foram passadas na construção do objeto

    get precoFinal()
    {

        return this.preco * (1 - this.desconto)

    }

}

const p1 = new Produto('Caneta', 8.59)
console.log(p1.nome)
const p2 = new Produto('Geladeira', 10000, 0.8)
console.log(p2.preco)

console.log(p2.precoFinal.toFixed(2))