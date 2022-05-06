function Feldkirher() {
    this.gosadas = 0

    setInterval(() => {
        this.gosadas++
        console.log(this.gosadas)
    }, 500)
}

new Feldkirher