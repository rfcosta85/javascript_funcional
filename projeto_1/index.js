// Teremos a lógica do nosso sistema

const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados','legendas') // dirname nos informa a pasta atual, ... para sairmos desse diretorio, legendas para entrarmos na pasta legendas

const simbolos = [

    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[, ]', '(', ')'
]

fn.lerDiretorio(caminho)

    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(conteudos => conteudos.join('\n')) // Aqui juntamos todos os arquivos em uma única String
    .then(todoConteudo => todoConteudo.split('\n')) // Aqui iremos gerar a quebra de linha
    .then(fn.removerElementosSeVazio) // Removendo os espaços vazios.
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(console.log)
