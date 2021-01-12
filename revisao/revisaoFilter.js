const CampeonatoBrasileiro = [

    {clube: 'São paulo', position: 1},
    {clube: 'Internacional',position: 2},
    {clube: 'Grêmio',position: 3},
    {clube: 'Atlético-MG',position: 4},
    {clube: 'Flamengo',position: 5},
    {clube: 'Palmeiras',position: 6},
    {clube: 'Fluminense',position: 7},
    {clube: 'Santos',position: 8},
    {clube: 'Corinthians',position: 9},
    {clube: 'Athlético-PR',position: 10},
    {clube: 'Ceará',position: 11},
    {clube: 'Atlético-GO',position: 12},
    {clube: 'Bragantino',position: 13},
    {clube: 'Sport',position: 14},
    {clube: 'Fortaleza',position: 15},
    {clube: 'Bahia',position: 16},
    {clube: 'Vasco',position: 17},
    {clube: 'Goiás',position: 18},
    {clube: 'Botafogo',position: 19},
    {clube: 'Coritiba',position: 20},

]

const libertadores = classificadosLibertadores => classificadosLibertadores.position <= 8
const sulamericana = classificadosSulamericana => classificadosSulamericana.position > 8 && classificadosSulamericana.position < 15
const rebaixados = clubesRebaixados => clubesRebaixados.position > 16
const geral = classificacaoGeral => classificacaoGeral.clube

const getLibertadores = clubesLibertadores => clubesLibertadores.clube
const getSulamericana = clubesSulamericana => clubesSulamericana.clube
const getRebaixados = clubesRebaixados => clubesRebaixados.clube

const libertadores2021 = CampeonatoBrasileiro
    .filter(libertadores)
    .map(getLibertadores)

const sulamericana2021 = CampeonatoBrasileiro
    .filter(sulamericana)
    .map(getSulamericana)

const serieB2021 = CampeonatoBrasileiro
    .filter(rebaixados)
    .map(getRebaixados)

const brasileiro2020 = CampeonatoBrasileiro    
    .map(geral)

console.log('\n')
console.log(`Classificados para Taça Libertadores 2021: ${libertadores2021}`)
console.log('\n')
console.log(`Classificados para a Copa Sulamericana 2021: ${sulamericana2021}`)
console.log('\n')
console.log(`Clubes rebaixados para a Série B 2021: ${serieB2021}`)
console.log('\n')
console.log('Classificação Geral Campeonato Brasileiro 2020')
console.log('\n')
console.log(`${brasileiro2020}`)
console.log('\n')