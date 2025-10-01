function CriarCartão(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('artictle')
    let respostaEstaVisivel = false
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
    }
    let respostaEstaVisivel = true
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

}