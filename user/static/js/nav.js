let menuzito = document.querySelector(".menu");
let uls = document.getElementById("navbar");
menuzito.onclick = menuResponsivo;

function menuResponsivo() {
    uls.classList.toggle("mostrarUl");
}