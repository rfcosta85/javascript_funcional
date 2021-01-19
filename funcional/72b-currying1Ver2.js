function textoComTamanhoEntre(min) // A ordem dos parâmetros influenciam diretamente, o texto foi chamado por último, justamente por ele ser o mais volátil, deixando o min e o max que usaremos com mais frequência na frente. 
{

   return function(max)
   {

        return function(erro)
        {

            return function(texto)
            {

                const tamanho = (texto || '').trim().length

                if(tamanho < min || tamanho > max)
                {
                
                    throw erro
                
                }
            }
        }

   }   

}

// Quando você quebra a sua função por parâmetros parcialmente, usando currying, você recebe o lazy Evaluation que é você avaliar parte do código ou completamente de forma tardia. Isso porque nós temos versões parciais da nossa função. Antecipar o processamento não é bom, o ideal é usar o processamento somente quando necessário. O processamento aqui só ocorrerá quando chegamos na função que recebe o texto como argumento.

const produto1 = { nome: 'A', preco: 14.99, desc: 0.25 }
textoComTamanhoEntre(4)(244)('Nome inválido!')(produto1.nome)

// A vantagem em se trabalhar dessa forma, é que agora poderemos criar versões intermediárias das funções.

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome do produto inválido!')

// Note como pudemos reaproveitar as funções para outras versões

