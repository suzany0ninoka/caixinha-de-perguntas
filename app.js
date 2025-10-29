function CriarCartão(categoria,pergunta,resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartão_conteudo">
            <h3>$(categoria)</h3>
            <div class="cartão_conteudo_pergunta">
                <p>$(pergunta)</p>
            </div>
            <div class="cartão_conteudo_resposta">
                <p>$(resposta)</p>
            </div>
        </div>
`
    container.appendChild(cartao)


    let respostaEstaVisivel = false
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('ative', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)

}