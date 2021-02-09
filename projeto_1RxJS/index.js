// Teremos a lógica do nosso sistema

const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados','legendas') // dirname nos informa a pasta atual, ... para sairmos desse diretorio, legendas para entrarmos na pasta legendas

const simbolos = [

    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
    .pipe(

        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo()
        
    )
    .subscribe(console.log)

/*fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.MesclarElementos) 
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerElementosSeVazio) // Removendo os espaços vazios.
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.MesclarElementos) 
    .then(fn.separarTextoPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeApenasNumero)    
    .then(fn.agruparElementos)
    .then(fn.ordernarPorAtributoNumerico('qtde', 'desc'))
    .then(console.log)*/
