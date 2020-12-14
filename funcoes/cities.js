/*Sorteio Champions League 2022*/

function clubsDraw(min, max)
{

   if(min > max) [max, min] = [min, max]

    return new Promise((resolve) => {


        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        resolve(aleatorio)

    })    

}

async function teste(numero)
{

    const numeros = []
    for(let _ of Array(numero). fill())
    {

        numeros.push(await clubsDraw(1, 6, numeros))

    }    
    

    var city

   if(numeros == 1)
   {
        
       city = console.log('Bienvenidos a Madrid!')

   }else if(numeros == 2)
   {

       city = console.log('Bem vindo a Lisbon!')

   }else if(numeros == 3 )
   {

        city = console.log('Bienvenue à Paris!')

   }else if(numeros == 4)
   {

        city = console.log('willkommen in Zürich!')

   }else if(numeros == 5)
   {

        city = console.log('Willkommen in Berlin!')

   }else if(numeros == 6)
   {

        city = console.log('Welcome to London!')

   }

    return city

}

teste(1)
    .then(console.log)