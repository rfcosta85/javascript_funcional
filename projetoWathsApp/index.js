const path = require('path')
const fn = require('./funcoes')

const way = path.join(__dirname, '..','dados', 'talks')

const symbols = [

    '.', '?', '-',',','"','_','\r','[',']','(',')' , '=','\t', '{', '}', '+', ';'   

]


fn.readDirectory(way)
    .then(fn.elementsEndingWith('.txt'))
    .then(fn.readFiles)
    .then(fn.mergeElements)
    .then(fn.separateTextBy('\n'))
    .then(fn.removeElementIfEmpty)
    .then(fn.removeElementsIfInclude('-'))
    .then(fn.removeElementsIfOnlyNumbers)
    .then(fn.removeSymbols(symbols))
    .then(fn.mergeElements)
    .then(fn.separateTextBy(' '))
    .then(fn.removeElementIfEmpty)    
    .then(fn.removeElementsIfOnlyNumbers)
    .then(fn.bunchElements)
    .then(fn.orderElementsByNumericAttribute('amount', 'downward'))
    .then(console.log)