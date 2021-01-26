/*const variavel = 4

variavel = 6 

console.log(variavel)*/

/*const objeto = {aluno: 'Rodrigo', nota: 10}

console.log(`Agora a nota de ${objeto.aluno} será: ${objeto.nota = 8}`)*/

/*const array = [2, 3, 4, 6]

const maioresQueQuatro = maiores => maiores * 2

let result = array.map(maioresQueQuatro)

console.log(result)*/

/*const array = Object.freeze([2, 3, 4, 6])
const array2 = [2, 3, 4, 6]

array[0] = 'Opa! Fui alterado!'
array2[0] = 'Opa! Fui alterado!'

console.log(array)
console.log(array2)*/

const curso = {
    
    nome: 'Curso de Paradigma Funcional em JavaScript',
    level: 'Intermediário',
    cidade: 'Bueno Aires'

}

/*curso.nome = 'Curso de JavaScript'
curso.level = 'Básico'
curso.cidade = 'Lisboa'

console.log(curso)

const novoCurso = curso 

novoCurso.nome = 'Curso de Java'
novoCurso.level = 'Avançado'
novoCurso.cidade = 'São Paulo'

console.log(curso)*/

function alterarCurso(curso)
{

    const novoCurso = {...curso}
    novoCurso.nome = 'Curso de Lógica de Programação'
    novoCurso.level = 'Básico'
    novoCurso.cidade = 'Madrid'

    return novoCurso
}

console.log(alterarCurso(curso))
console.log(curso)