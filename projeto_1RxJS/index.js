// Teremos a lógica do nosso sistema

const path = require('path')
const fn = require('./funcoes')
const { first, toArray } = require('rxjs/operators')
const caminho = path.join(__dirname, '..', 'dados','legendas') // dirname nos informa a pasta atual, ... para sairmos desse diretorio, legendas para entrarmos na pasta legendas

const simbolos = [

    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .pipe(

        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        toArray(),
        fn.agruparElementos()
        
    )
    .subscribe(console.log)

/*f
    .then(fn.MesclarElementos)   
    
    
    
    
    .then(fn.removerElementosSeApenasNumero)    
    .then(fn.agruparElementos)
    .then(fn.ordernarPorAtributoNumerico('qtde', 'desc'))
    .then(console.log)*/
