// Teremos a lógica do nosso sistema

const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados','legendas') // dirname nos informa a pasta atual, ... para sairmos desse diretorio, legendas para entrarmos na pasta legendas

fn.lerDiretorio(caminho)

    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    .then(console.log)

