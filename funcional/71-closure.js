const somarXMais3 = require('./closureEscopo')

const x = 1000
console.log(somarXMais3()) // O resultado continuará sendo 6, pq closure lembra do seu escopo léxico, onde x tem valor de 3

// Toda função de JavaScript lembra de onde ela foi definida 