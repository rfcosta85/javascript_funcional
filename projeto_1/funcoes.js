// Aqui teremos as funções que podem ser utilizadas em outros projetos no futuro

const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) // Responsável por ler um diretório
{

    let arquivos = fs.readdirSync(caminho) // lerá o arquivo de forma síncrona    
    
    return arquivos.map(arquivo => path.join(caminho, arquivo)) // Aqui iremos retornar o caminho completo do nosso arquivo

}

module.exports = 
{

    lerDiretorio

}