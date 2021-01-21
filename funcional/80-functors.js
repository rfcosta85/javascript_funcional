const numeros = [1, 2, 3, 4, 5, 6]

const novosNumeros = numeros
.map(el => el + 10)
.map(el => el * 2)

console.log(numeros,novosNumeros) // Temos aqui um exemplo muito claro de functor

// Criando o nosso próprio functor

function tipoSeguro(valor)
{

    return {

        valor,
        invalido(){

            return this.valor === null || this.valor === undefined
            
        },

        map(fn){

            if(this.invalido()){

                return tipoSeguro(null)
            }else 
            {

                const novoValor = fn(this.valor)
                return tipoSeguro(fn(novoValor))

            }            

        }// essa função map que vai garantir que tenhamos um functor
    }

}

const resultado = tipoSeguro('Esse é um texto')
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!!!!!!`)
    .map(t => t.split('').join(' '))

console.log(resultado.valor)