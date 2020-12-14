// Função construtora 
function Produto(nome, preco, desconto = 0.3)
{

    this.nome = nome 
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = function()
    {

        return this.preco * (1 - this.desconto)

    }

}

const p1 = new Produto('Caneta', 8.59)
console.log(p1.nome)
const p2 = new Produto('Geladeira', 2345.98)
console.log(p2.preco)

console.log(p2.precoFinal())
