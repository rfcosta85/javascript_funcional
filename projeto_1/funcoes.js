// Aqui teremos as funções que podem ser utilizadas em outros projetos no futuro

const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

function lerDiretorio(caminho) // Responsável por ler um diretório
{

    return new Promise((resolve,reject) => {

        try{


            let arquivos = fs.readdirSync(caminho) // lerá o arquivo de forma síncrona    
            
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo)) // Aqui iremos retornar o caminho   completo do nosso arquivo, pois em join temos a junção do arquivo mais o caminho

            resolve(arquivos)

        }catch(e){

            reject(e)

        }

    } )  

}

function lerArquivo(caminho) // Assíncrona para ler um arquivo apenas
{

    return new Promise((resolve, reject) => {

        try{

            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})

            resolve(conteudo.toString())

        }catch(e)
        {
            
            reject(e)
        }
    })
}
function lerArquivos(caminhos) // recebemos um conjunto de caminhos, quando todos os arquivos forem lidos ele irá retornar um array com todos os conteúdos dos arquivos que foram lidos
{

    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))

}

function elementosTerminadosCom(padraoTextual)
{

    return function(array)
    {

        return array.filter(el => el.endsWith(padraoTextual))

    }
    

} // Essa função irá retornar um array com todos os arquivos que atendam a condição determinada em padrão

function removerElementosSeVazio(array)
{

    return array.filter(el => el.trim()) // O método trim vai retirar os espaços em branco
    
}

function removerElementosSeIncluir(padraoTextual)
{

    return function(array) // refatorando... agora somente se tivermos um array é que ele fará o processamento para pegar o valor textual
    {

        return array.filter(el => !el.includes(padraoTextual)) // Se não incluir o padrão textual, manter o elemento no array final, caso contrário remova

    }
    
}

function removerElementosSeApenasNumero(array)
{

    return array.filter(el => {

        const num = parseInt(el.trim())
        return num !== num // Aqui teremos false quando o resultado de num for um not a number. Ou seja se n for um número
    })
}

module.exports = 
{

    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumero

} // Aqui estamos criando um atributo chamado lerDiretorio que aponta para a função ler diretório, o mesmo acontece com as demais funções. Esse método é conhecido como objetos literais.