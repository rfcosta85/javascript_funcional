const CampeonatoBrasileiro = [

    {clube: 'São paulo', titulos: 6},
    {clube: 'Internacional', titulos: 3},
    {clube: 'Grêmio', titulos: 2},
    {clube: 'Atlético-MG', titulos: 1},
    {clube: 'Flamengo', titulos: 7},
    {clube: 'Palmeiras', titulos: 10},
    {clube: 'Fluminense', titulos: 4},
    {clube: 'Santos', titulos: 8},
    {clube: 'Corinthians', titulos: 7},
    {clube: 'Athlético-PR', titulos: 1},
    {clube: 'Ceará', titulos: 0},
    {clube: 'Atlético-GO', titulos: 0},
    {clube: 'Bragantino', titulos: 0},
    {clube: 'Sport', titulos: 1},
    {clube: 'Fortaleza', titulos: 0},
    {clube: 'Bahia', titulos: 2},
    {clube: 'Vasco', titulos: 4},
    {clube: 'Goiás', titulos: 0},
    {clube: 'Botafogo', titulos: 2},
    {clube: 'Coritiba', titulos: 1},

]


const somaDeTitulos = totalDeTitulos =>  totalDeTitulos.titulos 

const soma = (acumulador, elemento) => acumulador + elemento

const apenasUm = solitario => solitario.titulos === 1

const doisTitulos = biCampeao => biCampeao.titulos === 2

const tresTitulos = triCampeao => triCampeao.titulos === 3

const quatroTitulos = tetraCampeao => tetraCampeao.titulos === 4

const seisTitulos = hexaCampeao => hexaCampeao.titulos === 6

const seteTitulos = heptaCampeao => heptaCampeao.titulos === 7

const oitoTitulos = octaCampeao => octaCampeao.titulos === 8

const dezTitulos = decaCampeao => decaCampeao.titulos === 10

const getApenasUm = menor => menor.clube

const getBicampeao = bi => bi.clube

const getTricampeao = tri => tri.clube

const getTetraCampeao = tetra => tetra.clube

const getHexaCampeao = hexa => hexa.clube

const getHeptaCampeao = hepta => hepta.clube

const getOctaCampeao = octa => octa.clube

const getDecaCampeao = deca => deca.clube

const final = CampeonatoBrasileiro
    .map(somaDeTitulos)
    .reduce(soma)   

const menosTitulos = CampeonatoBrasileiro
    .filter(apenasUm)
    .map(getApenasUm)


const biCampeonato = CampeonatoBrasileiro
    .filter(doisTitulos)
    .map(getBicampeao)
    
const triCampeonato = CampeonatoBrasileiro
    .filter(tresTitulos)
    .map(getTricampeao)

const tetraCampeoanato = CampeonatoBrasileiro
    .filter(quatroTitulos)
    .map(getTetraCampeao)

const hexaCampeonato = CampeonatoBrasileiro
    .filter(seisTitulos)
    .map(getHexaCampeao)

const heptaCampeonato = CampeonatoBrasileiro
    .filter(seteTitulos)
    .map(getHeptaCampeao)

const octaCampeoato = CampeonatoBrasileiro
    .filter(oitoTitulos)
    .map(getOctaCampeao)

const decaCampeonato = CampeonatoBrasileiro
    .filter(dezTitulos)
    .map(getDecaCampeao)

console.log('\n')
console.log(`O campeonato brasileiro de 2020 tinham ${final} títulos brasileiros em campo`)
console.log('\n')
console.log(`Clubes com apenas 1 título Brasileiro: ${menosTitulos}`)
console.log('\n')
console.log(`Bicampeões: ${biCampeonato}`)
console.log('\n')
console.log(`Tricampeões: ${triCampeonato}`)
console.log('\n')
console.log(`TetraCampeões: ${tetraCampeoanato}`)
console.log('\n')
console.log(`HexaCampeões: ${hexaCampeonato}`)
console.log('\n')
console.log(`HeptaCampeões: ${heptaCampeonato}`)
console.log('\n')
console.log(`OctaCampeões: ${octaCampeoato}`)
console.log('\n')
console.log(`DecaCampeões: ${decaCampeonato}`)
console.log('\n')