(function () {
    var menu = document.querySelector('header div');
    var botao = document.getElementById('login');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
        if (window.scrollY > 0) botao.classList.add('botaoFixo');
        else botao.classList.remove('botaoFixo');
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