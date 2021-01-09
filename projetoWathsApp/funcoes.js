const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

function readDirectory(way)
{

    return new Promise((resolve, reject) => {

        try{

            let files = fs.readdirSync(way)

            files = files.map(file => path.join(way, file))

            resolve(files)
        }catch(e){

            reject(e)

        }
    })
}

function readFile(way)
{

    return new Promise((resolve, reject) => {

        try{

            const content = fs.readFileSync(way, {encoding: 'utf-8'})

            resolve(content.toString())
        }catch(e)
        {

            reject(e)

        }
    })
}

function readFiles(ways)
{

    return Promise.all(ways.map(way => readFile(way)))

}

function elementsEndingWith(textualPattern)
{

    return function(array)
    {

        return array.filter(el => el.endsWith(textualPattern))

    }
}

function removeElementIfEmpty(array)
{

    return array.filter(el => el.trim())

}

function removeElementsIfInclude(textualPattern)
{

    return function(array)
    {

        return array.filter(el => !el.includes(textualPattern))

    }
}

function removeElementsIfOnlyNumbers(array)
{

    return array.filter(el => {

        const number = parseInt(el.trim())
        return number !== number

    })
}

function removeSymbols(symbols){
    return function(array){
        return array.map(el => {

            return symbols.reduce((acc, symbol) => {

                return acc.split(symbol).join('')

            },el)
        })
    }
}

function mergeElements(array)
{

    return array.join(' ')

}

function separateTextBy(symbol)
{

    return function(text)
    {

        return text.split(symbol)

    }
}

function bunchElements(words)
{

    return Object.values(words.reduce((acc, words) => {

        const el = words.toLowerCase()
        const amount = acc[el] ? acc[el].amount + 1 : 1
        acc[el] = {Palavra: el, amount}

        return acc 

    }, {}))
}

function orderElementsByNumericAttribute(attr, order = 'upward')
{

    return function(array)
    {

        const upward = (operator1, operator2) => operator1[attr] - operator2[attr]
        const downward = (operator1, operator2) => operator2[attr] - operator1[attr]

        return array.sort(order ==='upward' ? upward : downward)
    }
}


module.exports = {

    readDirectory,
    readFile,
    readFiles,
    elementsEndingWith,
    removeElementIfEmpty,    
    removeElementsIfInclude,
    removeElementsIfOnlyNumbers,
    removeSymbols,
    mergeElements,
    separateTextBy,
    bunchElements,
    orderElementsByNumericAttribute
}
