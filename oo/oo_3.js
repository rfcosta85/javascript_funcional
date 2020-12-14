// Função construtora 
function Produto(nome, preco, _desconto = 0.3)
{

    this.nome = nome 
    this.preco = preco
    this._desconto = _desconto

    this.precoFinal = function()
    {

        return this.preco * (1 - this._desconto)

    }

    Produto.prototype.log = function() // Podemos ter um prototype para adicionar uma funcionalidade a produto que não existia anteriormente, ou seja, não foi definida dentro da função construtora.
    {

        console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)

    }

}

Object.defineProperty(Produto.prototype, 'desc', {

    get: function(){

        return this._desconto

    }

}) // Aqui usamos o prototype para essa propriedade estar disponível para todos os produtos criados


Object.defineProperty(Produto.prototype, 'descString', {

    get: function(){

        return `${this._desconto * 100}% de desconto`

    }

}) 

const p1 = new Produto('Caneta', 8.59)
console.log(p1.nome)
p1.log()
const p2 = new Produto('Geladeira', 2345.98)
console.log(p2.preco)

console.log(p2.precoFinal())
console.log(p2.desc)
console.log(p2.descString)
