// Aqui teremos as funções que podem ser utilizadas em outros projetos no futuro

const fs = require('fs')
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

module.exports = 
{

    lerDiretorio

}