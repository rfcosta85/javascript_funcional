const nomes = ['Ana', 'Bia', 'Carlos', 'Daniel']

const primeiroNome = nome => nome[0]
const primeiraLetra = letra => letra[0]
const letraMinuscula = minusculo => minusculo.toLowerCase()

new Promise(function(resolve){

    resolve(nomes)

})

    .then(primeiroNome)    
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)