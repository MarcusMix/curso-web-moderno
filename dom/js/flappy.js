
// função de criação de elemento no HTML pelo
// Javascript
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem;
}


// criar barreiras
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira');

    const borda = novoElemento('div', 'borda');
    const corpo = novoElemento('div', 'corpo');
    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);


    //altura
    this.setAltura = altura => corpo.style.height = `${altura}px`;
}

// teste
// const b = new Barreira(true)
// b.setAltura(600)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)


//funcao criar barreiras tamanhos...
function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div' , 'par-de-barreiras');

    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);


    //sorteador da abertura (variar a abertura)
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;
        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    }


    //posição do x
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setX = x => this.elemento.style.left = `${x}px`;
    this.getLargura = () => this.elemento.clientWidth;

    // sortear abertura
    this.sortearAbertura();
    this.setX(x);
}


//teste
// const b = new ParDeBarreiras(700, 200, 400);
// document.querySelector('[wm-flappy]').appendChild(b.elemento)


//criar varias barriras
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3),
    ]

    const deslocamento = 3;
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento);

            //quando elemento sair da área do jogo
            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length);
                par.sortearAbertura();
            }

            const meio = largura / 2;
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio;
                if(cruzouOMeio) notificarPonto();
        })
    }
}


function Passaro(alturaJogo) {
    let voando = false;

    this.elemento = novoElemento('img', 'passaro');
    this.elemento.src = 'imgs/passaro.png';

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;

    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5);
        const alturaMaxima = alturaJogo - this.elemento.clientWidth;

        if(novoY <= 0) {
            this.setY(0);
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima);
        }else {
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo / 2);
}





function Progresso() {
    this.elemento  = novoElemento('span', 'progresso');
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos;
    }
    this.atualizarPontos(0);
}


// const barreiras = new Barreiras(700, 1200, 200, 400);
// const passaro = new Passaro(700);

// const areaDoJogo = document.querySelector('[wm-flappy]');

// areaDoJogo.appendChild(passaro.elemento);
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));
// setInterval(() => {
//     barreiras.animar();
//     passaro.animar();

// },20)

function FlappyBird() {
    let pontos = 0;

    const areaDoJogo = document.querySelector('[wm-flappy]');
    const altura = areaDoJogo.clientHeight;
    const altura = areaDoJogo.client;
}