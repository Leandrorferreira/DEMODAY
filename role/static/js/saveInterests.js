let roles = [];
let cont = 0;
let text = document.getElementById('txtAna');
let botao2 = document.querySelector('.botao2');

function createRoleList(item) {
    if (cont<=3) {
        roles.push(item);
        cont = cont + 1;
    }
    if (cont == 3 ) {
        container.style.display = 'flex';
        fundo.style.display = 'flex';
        text.innerHTML = "Agora sim! Já temos uma ideia do que você curte.<br>Bora ver uns rolês?";
        botao.style.display = 'none';
        botao2.classList.add('verBotao');
    }
}

function saveUserInterest() {
    xhttp.open("POST", "", true);
    xhttp.send();
}