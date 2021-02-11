function gerarNumeros(fn)
{

    let num = 0
    setInterval(() => {

        fn(num++)

    }, 1000)

}

gerarNumeros(numero => {

    console.log(`#1: ${numero * 2}`)

}) // Sempre que um novo dado é gerado, essa função é chamada

gerarNumeros(a => {

    console.log(`#2: ${a + 100}`)

}) // Agora temos um streaming de dados