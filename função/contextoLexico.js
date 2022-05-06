const valorQualquer = "global"

function funcaoQualquer() {
    console.log(valorQualquer)
}

function cocozinho() {
    const valorQualquer = "local"
    funcaoQualquer()
}

cocozinho() 