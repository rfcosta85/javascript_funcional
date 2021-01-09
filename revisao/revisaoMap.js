const libertadores = [

    {clube: 'São paulo'},
    {clube: 'Internacional'},
    {clube: 'Grêmio'},
    {clube: 'Atlético-MG'},
    {clube: 'Flamengo'},
    {clube: 'Palmeiras'},
    {clube: 'Fluminense'},
    {clube: 'Santos'}

]

const sulamericana = [

    {clube: 'Corinthians'},
    {clube: 'Athlético-PR'},
    {clube: 'Ceará'},
    {clube: 'Atlético-GO'},
    {clube: 'Bragantino'},
    {clube: 'Sport'}
]

const rebaixados = [

    {clube: 'Vasco'},
    {clube: 'Goiás'},
    {clube: 'Botafogo'},
    {clube: 'Coritiba'}
]

const excluidos = [

    {clube: 'Fortaleza'},
    {clube: 'Bahia'}

]

const clubesLibertadores = liberta => liberta.clube
const clubesSulamericana = sula => sula.clube
const segundaDivisao = z4 => z4.clube
const zonaMorta = neutros => neutros.clube

const geral = [libertadores.map(clubesLibertadores), sulamericana.map(clubesSulamericana), excluidos.map(zonaMorta), rebaixados.map(segundaDivisao)]

function posicaoFinal()
{

    for(let i = 0; i < libertadores.length; i++)
    {

        console.log(`${i+1}° ${libertadores.map(clubesLibertadores)[i]}`)                      

    }

    for(let j = 0; j < sulamericana.length; j++)
    {
        
        console.log(`${j + 9}° ${sulamericana.map(clubesSulamericana)[j]}`)

    }  

     for(let neutros = 0; neutros < excluidos.length; neutros++)
     {

        console.log(`${neutros + 15}° ${excluidos.map(zonaMorta)[neutros]}`)

     }

     for(let reb = 0; reb < rebaixados.length; reb++)
     {

        console.log(`${reb + 17}° ${rebaixados.map(segundaDivisao)[reb]}`)
     }

}

console.log('\n')
console.log(`Classificados para Libertadores 2021: ${libertadores.map(clubesLibertadores)}`)
console.log('\n')
console.log(`Classificados para a sulamericana 2021: ${sulamericana.map(clubesSulamericana)}`)
console.log('\n')
console.log(`Rebaixados para a segunda divisão em 2021: ${rebaixados.map(segundaDivisao)}`)
console.log('\n')
console.log('Classificação final do campeonato Brasileiro 2020: ')
console.log('\n')
posicaoFinal()
console.log('\n')
