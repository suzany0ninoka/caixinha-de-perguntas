function CriarCartão(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('artictle')
    cartao.className = 'cartao'
    cartao.innerHTML =
        <div class="cartão_conteudo">
            <h3>Gato de botas</h3>
            <div class="cartão_conteudo_pergunta">
                <p>Onde Gato de Botas apareceu pela primeira vez?</p>
            </div>
            <div class="cartão_conteudo_resposta">
                <p> Ele fez sua primeira aparição no filme "Shrek 2", de 2004, como um caçador de ogros
                    contratado
                    pelo Rei Harold para capturar Shrek.</p>
            </div>
        </div>
}