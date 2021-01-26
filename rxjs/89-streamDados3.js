const { interval } = require('rxjs') // Quando temos as {} do lado esquerdo do objeto, nós temos o destructuring e as {} do lado direito nós temos o objeto literal. Aqui então temos o destructuring.

const gerarNumeros = interval(500) // O interval é um operador de criação e nos retorna um observable. O observable implementa o padrão observer. Aqui o interval vai gerar números de meio e meio segundo

const sub1 = gerarNumeros.subscribe(num => {

    console.log(Math.pow(2, num))

}) // ele vai retornar um observable. O subscribe é uma forma que temos de nos registrar no observable

// Através do subscribe nós conseguimos também receber uma subscrição.

setTimeout(() => sub1.unsubscribe(), 8000) // O unsubscribe é para parar de receber o registro de interesse Aqui no código, depois de 8 segundos teremos a subscrição da geração automática de números