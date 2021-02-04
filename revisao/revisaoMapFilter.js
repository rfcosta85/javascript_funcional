let = campeonatoBrasileiro2020 = [{name: 'Internacional', position: 1}, {name: 'Flamengo', position: 2}, {name: 'Atlético-Mg', position: 3},{name: 'São Paulo', position: 4}, {name:'Fluminense', position: 5}, {name:'Palmeiras', position: 6}, {name:'Grêmio', position: 7}, {name:'Santos', position: 8}, {name:'Atlético-Pr', position: 9}, {name:'Ceará', position: 10}, {name:'Corinthians', position: 11}, {name:'Atlético-Go', position: 12}, {name:'Bragantino', position: 13}, {name:'Vasco', position: 14},{name:'Bahia', position: 15}, {name:'Sport', position: 16}, {name:'Fortaleza', position: 17}, {name:'Goiás', position: 18}, {name:'Coritiba', position: 19}, {name:'Botafogo', position: 20}]

const libertadores = classificados => classificados.position > 0 && classificados.position < 9
const getName = clubsNames => clubsNames.name
const sulamericana = classificados => classificados.position > 8 && classificados.position < 14
const rebaixados = serieB2021 => serieB2021.position > 16

const classificadosLibertadores = campeonatoBrasileiro2020
    .filter(libertadores)    
    .map(getName)

const classificadosSulamericana = campeonatoBrasileiro2020
    .filter(sulamericana)
    .map(getName)

const serieB2021 = campeonatoBrasileiro2020
    .filter(rebaixados)
    .map(getName)

console.log(`Libertadores 2021: ${classificadosLibertadores}`)
console.log(`Sulamericana 2021: ${classificadosSulamericana}`)
console.log(`Série B 2021: ${serieB2021}`)

