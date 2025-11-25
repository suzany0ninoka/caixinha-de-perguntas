// Seleciona todos os cartões
const cartoes = document.querySelectorAll(".cartao");

// Adiciona evento de clique para virar o cartão
cartoes.forEach(cartao => {
    cartao.addEventListener("click", () => {
        cartao.classList.toggle("virado");
    });
});
