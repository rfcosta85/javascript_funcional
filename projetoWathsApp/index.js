const path = require('path')
const functions = require('./funcoes')

const way = path.join(__dirname, '..','dados', 'talks')

const symbols = [

    '.', '?', '-',',','"','_','\r','[',']','(',')'    

]


functions.readDirectory(way)
    .then(functions.elementsEndingWith('.txt'))
    .then(functions.readFiles)
    .then(functions.mergeElements)
    //.then(functions.removeElementIfEmpty)
    //.then(functions.removeElementsIfInclude('-'))
    //.then(functions.removeElementsIfOnlyNumbers)
    //.then(functions.removeSymbols(symbols))
    .then(functions.separateTextBy(' '))
    .then(functions.bunchElements)
    .then(functions.orderElementsByNumericAttribute('amount', 'downward'))
    .then(console.log)