var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)
    //Criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = 'mosquito1'

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}