const pessoa = 
{
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo'

}

/*pessoa.nome = 'João'
pessoa.cidade = 'Fortaleza'*/

// Na situação acima os objetos são mutáveis, o que representa dizer que ao chamarmos o console.log, o retorno não será mais maria e também não será mais São Paulo, tendo assim destruído o array literal.

//console.log(pessoa) // { nome: 'João', altura: 1.76, cidade: 'Fortaleza' }

// Passagem por Referência não torna o objeto imutável

/*const novaPessoa = pessoa

novaPessoa.nome = 'João'
novaPessoa.cidade = 'Fortaleza'

console.log(pessoa) // { nome: 'João', altura: 1.76, cidade: 'Fortaleza' }*/

// Isso acontece pq houve uma cópia de uma referência, ou seja, de um endereço de memória de uma variável para outra, há uma economia de memória pois temos duas variáveis apontando para o mesmo endereço de memória, contudo isso gera problemas quando pensamos no ponto de vista de dados mutáveis. 

// É possível solucionar esse problema utilizando-se do clone do objeto

function alterarPessoa(pessoa)
{

    const novaPessoa = {...pessoa }
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'

    return novaPessoa

}

console.log(alterarPessoa(pessoa)) // { nome: 'João', altura: 1.76, cidade: 'Fortaleza' }
console.log(pessoa) // { nome: 'Maria', altura: 1.76, cidade: 'São Paulo' }

// Passagem por valor

let a = 3 
let b = a 

a++ 
b--

// b tem uma cópia do valor de a

console.log(a, b) // 4 2 repare que b tem seu valor independente de a

