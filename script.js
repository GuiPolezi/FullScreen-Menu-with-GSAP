// GSAP

// Linha do tempo pausada
var tll = gsap.timeline({paused: true});

// animação
tll.to('.menu', {
    duration: 0.7,
    x: "0%",
    ease: "expo.inOut"
});

// Função play - ativa no botão

function toggle() {
    tll.play();
    document.body.classList.add("no-scroll"); // Adicionando um classe no body que bloqueia scroll
};

// Função para fechar menu
function toggleClose() {
    tll.reverse();
    document.body.classList.add("no-scroll"); // removendo um classe no body que bloqueia scroll
}