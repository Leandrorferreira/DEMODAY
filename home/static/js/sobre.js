(function () {
    var menu = document.querySelector('header div');
    var botao = document.getElementById('login');
    document.addEventListener('DOMContentLoaded', function () {
        menu.classList.add('menuFixo');
        botao.classList.add('botaoFixo');
    });
})();

let janelinhaLateral = document.querySelectorAll("header div nav ul li");
let menuHamburguer = document.querySelector(".menuHamburguer");
let icone = document.querySelector(".menuHamburguer i");

function abrirMenu(){
  for (item of janelinhaLateral) {
    item.classList.toggle("aparecerBotao");
  }
}

menuHamburguer.onclick = abrirMenu;