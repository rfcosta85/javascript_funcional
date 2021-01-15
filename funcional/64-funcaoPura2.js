// Temos aqui uma função impura, pois quando tratamos com dados aleatórios não temos como ter um valor determinístico. E assim não poderemos ter uma função pura. Repare que os valores não são determinados por seus valores de entradas. O fator de aleatório do JS irá variar muito e isso torna que os valores não sejam determinados pelas suas entradas. Sempre que você tiver uma função aleatória ela será impura, você não tem como determinar um valor de saída, a partir dos valores de entrada. 


function gerarNumeroAleatorio(min, max)
{

    const fator = max - min + 1

    return parseInt(Math.random() * fator) + min

}

console.log(gerarNumeroAleatorio(1, 1000)) 