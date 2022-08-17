const Pessoa = require('./pessoa')
const moduloB = require('./modulos/moduloA')
const css = require('./assets')
// import css from './assets/css/estilo.css'

const atendente = new Pessoa
console.log(atendente.cumprimentar())
