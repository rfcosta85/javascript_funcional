/*const {Observable, Subscriber} = require('rxjs')

const promise = new Promise(resolve => {

    resolve('Promise é bem legal!') // A promise só podemos chamar uma vez

})

promise.then(console.log)

const obs = new Observable(subscriber => {

    subscriber.next('Observer é bem legal!') // Observable podemos chamar varios e assim podemos criar um streaming de dados.

})

obs.subscribe(console.log)*/

/*const {Observable, Subscriber} = require('rxjs')

const promise = new Promise(resolve => {

    resolve('Promise')
    resolve('é')
    resolve('bem')
    resolve('legal!') 

})

promise.then(console.log)

const obs = new Observable(subscriber => {

    subscriber.next('Observer')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('legal!') 

})

obs.subscribe(console.log)*/

//Lista de títulos brasileiros no século XXI: Utilizando Observable 

const {Observable} = require('rxjs')

const observable = new Observable(subscriber => 
    {

        subscriber.next('\n')
        subscriber.next('Campeões Brasileiros década de 00:')
        subscriber.next('\n')
        subscriber.next(decadaDe00)
        subscriber.next('\n')
        subscriber.next('Campeões Brasileiros década de 10:')
        subscriber.next(decadaDe10)
        subscriber.next('\n')

    })

const decadaDe00 = [

    {Ano: '2000', Clube: 'Vasco'},
    {Ano: '2001', Clube: 'Atlético-Pr'},
    {Ano: '2002', Clube: 'Santos'},
    {Ano: '2003', Clube: 'Cruzeiro'},
    {Ano: '2004', Clube: 'Santos'},
    {Ano: '2005', Clube: 'Corinthians'},
    {Ano: '2006', Clube: 'São Paulo'},
    {Ano: '2007', Clube: 'São Paulo'},
    {Ano: '2008', Clube: 'São Paulo'},
    {Ano: '2009', Clube: 'Flamengo'}
]

const decadaDe10 = [

    {Ano: '2010', Clube: 'Fluminense'},
    {Ano: '2011', Clube: 'Corinthians'},
    {Ano: '2012', Clube: 'Fluminense'},
    {Ano: '2013', Clube: 'Cruzeiro'},
    {Ano: '2014', Clube: 'Cruzeiro'},
    {Ano: '2015', Clube: 'Corinthians'},
    {Ano: '2016', Clube: 'Palmeiras'},
    {Ano: '2017', Clube: 'Corinthians'},
    {Ano: '2018', Clube: 'Palmeiras'},
    {Ano: '2019', Clube: 'Flamengo'}

]

observable.subscribe(console.log)

//Lista de títulos brasileiros no século XXI: Utilizando Promise

const getClubes00 = clube_name => clube_name.Ano + " " + clube_name.Clube
const getClubes10 = clube_name => clube_name.Ano + " " + clube_name.Clube

const clubs_list00 = decadaDe00.map(getClubes00)
const clubs_list10 = decadaDe10.map(getClubes10)
let clubes = []

function clubesPromise00()
{

   

    for(let i = 0; i < 10; i++)
    {

        clubes.push(clubs_list00[i])       

    }

    return clubes

}

function clubesPromiseTotal()
{

    for(let i = 0; i < 10; i++)
    {

        clubes.push(clubs_list10[i])

    }

    return clubes
}


const promise = new Promise(resolve => {

    resolve(clubes)

})

promise
.then(clubesPromise00)
.then(clubesPromiseTotal)
.then(console.log)






