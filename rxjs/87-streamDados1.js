/*function gerarNumeros()
{

    let num = 0
    setInterval(() => {

        console.log(num++)

    }, 1000)

}

gerarNumeros()*/ // Temos aqui uma espécie de streaming de dados

/*function gerarNumeros(fn)
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
    
})*/ // Agora temos um streaming de dados

/*function gerarNumeros(fn)
{

    return {

        iniciar(fn, intervalo = 1000)
        {

            let num = 0

            setInterval(() => {
            
                fn(num++)
            
             }, intervalo)
        }
    }    

}

const temp1 = gerarNumeros()
temp1.iniciar(numero => {

    console.log(`#1: ${numero * 2}`)

}, 1000)

const temp2 = gerarNumeros()
temp2.iniciar(a => {

    console.log(`#2: ${a + 100}`)
    
}, 2000)*/

function gerarNumeros(fn)
{

    return {

        iniciar(fn, intervalo = 1000)
        {

            let num = 0

            const interval = setInterval(() => {
            
                fn(num++)
            
             }, intervalo)

             return{

                parar()
                {

                    clearInterval(interval)

                }
             }
        }
    }    

}

const temp1 = gerarNumeros()
const exec1 = temp1.iniciar(numero => {

    console.log(`#1: ${numero * 2}`)

}, 1000)

const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(a => {

    console.log(`#2: ${a + 100}`)
    
}, 2000)

setTimeout(() => {

    exec1.parar()
    exec2.parar()

}, 10000) // Criamos um temporizador para finalizar o streaming de dados em 10 segundos