const display = document.getElementById('display')
const displayText = document.getElementById('display').textContent
const porc = document.getElementById('porc')
const limparCalculo = document.getElementById('limparCalculo')
const limparTudo = document.getElementById('limparTudo')
const apagar = document.getElementById('apagar')
const divisaoUm = document.getElementById('divisaoUm')
const potencia = document.getElementById('potencia')
const raiz = document.getElementById('raiz')
const maismenos = document.getElementById('maismenos')
const virg = document.getElementById('virg')
const igual = document.getElementById('igual')

const nums = document.querySelectorAll('[id*=num]')
const operadores = document.querySelectorAll('[id*=sinal]')

let primeiro = true
let operador
let numeroAnterior
let numeroAtual
let apagarIgual


