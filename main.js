// Importar o estilo no nosso javascript principal
require("./style.css")

console.log("Meu software!")




const { somaDoisNumerosExterno } = require("./calculadora")
const numeroUm = 10
const numeroDois = 20

// const resultado = somaDoisNumerosInterno(numeroUm, numeroDois)
const resultado = somaDoisNumerosExterno(numeroUm, numeroDois)

console.log(resultado)
