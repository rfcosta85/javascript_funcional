function soma(a, b, c)
{

    return a + b + c

}

console.log(soma(1, 2, 3)) // 6

// Aplicando a regra do currying

function soma2(a)
{

    return function(b)
    {

        return function(c)
        {

            return a + b + c

        }
    }

}

console.log(soma2(1)(2)(3)) // 6

// Aqui temos um ganho de flexibilidade difícil de provar, com um exemplo tão simples, mas ele existe, para tentar provar, vamos a um exemplo mais complexo.

function textoComTamanhoEntre(min, max, erro, texto)
{

    const tamanho = (texto || '').trim().length

    if(tamanho < min || tamanho > max)
    {

        throw erro

    }

}

const produto1 = { nome: 'A', preco: 14.99, desc: 0.25 }
textoComTamanhoEntre(4, 244, 'Nome inválido!', produto1.nome)
