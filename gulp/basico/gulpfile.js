const gulp = require('gulp')
// const { series } = require('gulp')
const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()
}

function copiar(cb) {
    console.log('Tarefa de copiar')
    return cb()
}

module.exports.default = series(antes1, copiar)