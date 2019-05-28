let container = document.querySelector('.popup');
let fundo = document.querySelector('.fundoPopup');
let botao = document.querySelector('.botao');

let tecnologia = document.querySelector('#id_choices li:nth-child(1)');
let diversao = document.querySelector('#id_choices li:nth-child(2)');
let fotografia = document.querySelector('#id_choices li:nth-child(3)');
let gastronomia = document.querySelector('#id_choices li:nth-child(4)');
let bonsDrinks = document.querySelector('#id_choices li:nth-child(5)');
let musica = document.querySelector('#id_choices li:nth-child(6)');
let moda = document.querySelector('#id_choices li:nth-child(7)');
let viagem = document.querySelector('#id_choices li:nth-child(8)');

botao.onclick = fecharPopup;

function fecharPopup(){
    container.style.display = 'none';
    fundo.style.display = 'none';
}	

tecnologia.style.background= 'url(/static/images/interesses/tecnologia.png)';
tecnologia.style.display= 'flex';
tecnologia.style.alignItems= 'center';
tecnologia.style.justifyContent= 'center';
tecnologia.style.backgroundSize = 'cover';
let tec_check = document.querySelector('section form ul li:nth-child(1) label');
tec_check.addEventListener("click", function(){
    let check = document.getElementById("id_choices_0"); 
 
    if(check.checked == true){
        tec_check.style.backgroundColor = '#000000de';           
    }   
    else{
        tec_check.style.backgroundColor = '#ffffff00'; 
    }
});

diversao.style.background= 'url(/static/images/interesses/diversao.png)';
diversao.style.backgroundSize = ' cover';
diversao.style.display= 'flex';
diversao.style.alignItems= 'center';
diversao.style.justifyContent= 'center';
let div_check = document.querySelector('section form ul li:nth-child(2) label');
div_check.addEventListener("click", function(){
    let check = document.getElementById("id_choices_1"); 
 
    if(check.checked == true){
        div_check.style.backgroundColor = '#000000de';           
    }   
    else{
        div_check.style.backgroundColor = '#ffffff00'; 
    }
});


fotografia.style.background= 'url(/static/images/interesses/fotografia.png)';
fotografia.style.backgroundSize = ' cover';
fotografia.style.display= 'flex';
fotografia.style.alignItems= 'center';
fotografia.style.justifyContent= 'center';
let fot_check = document.querySelector('section form ul li:nth-child(3) label');
fot_check.addEventListener("click", function(){
    let check = document.getElementById("id_choices_2"); 
 
    if(check.checked == true){
        fot_check.style.backgroundColor = '#000000de';           
    }   
    else{
        fot_check.style.backgroundColor = '#ffffff00'; 
    }
});

gastronomia.style.background= 'url(/static/images/interesses/gastronomia.png)';
gastronomia.style.backgroundSize = ' cover';
gastronomia.style.display= 'flex';
gastronomia.style.alignItems= 'center';
gastronomia.style.justifyContent= 'center';
let ga_check = document.querySelector('section form ul li:nth-child(4) label');
ga_check.addEventListener("click", function(){
    let check = document.getElementById("id_choices_3"); 
 
    if(check.checked == true){
        ga_check.style.backgroundColor = '#000000de';           
    }   
    else{
        ga_check.style.backgroundColor = '#ffffff00'; 
    }
});

bonsDrinks.style.background= 'url(/static/images/interesses/bonsDrinks.png)';
bonsDrinks.style.backgroundSize = ' cover';
bonsDrinks.style.display= 'flex';
bonsDrinks.style.alignItems= 'center';
bonsDrinks.style.justifyContent= 'center';
let bd_check = document.querySelector('section form ul li:nth-child(5) label');
bd_check.addEventListener("click", function(){
    let check = document.getElementById("id_choices_4"); 
 
    if(check.checked == true){
        bd_check.style.backgroundColor = '#000000de';           
    }   
    else{
        bd_check.style.backgroundColor = '#ffffff00'; 
    }
});

musica.style.background= 'url(/static/images/interesses/musica.jpg)';
musica.style.backgroundSize = ' cover';
musica.style.display= 'flex';
musica.style.alignItems= 'center';
musica.style.justifyContent= 'center';
let msc_check = document.querySelector('section form ul li:nth-child(6) label');
msc_check.addEventListener("click", function(){
    let check = document.getElementById("id_choices_5"); 
 
    if(check.checked == true){
        msc_check.style.backgroundColor = '#000000de';           
    }   
    else{
        msc_check.style.backgroundColor = '#ffffff00'; 
    }
});

moda.style.background= 'url(/static/images/interesses/moda.png)';
moda.style.backgroundSize = ' cover';
moda.style.display= 'flex';
moda.style.alignItems= 'center';
moda.style.justifyContent= 'center';
let md_check = document.querySelector('section form ul li:nth-child(7) label');
md_check.addEventListener("click", function(){
    let check = document.getElementById("id_choices_6"); 
 
    if(check.checked == true){
        md_check.style.backgroundColor = '#000000de';           
    }   
    else{
        md_check.style.backgroundColor = '#ffffff00'; 
    }
});

viagem.style.background= 'url(/static/images/interesses/viagem.png)';
viagem.style.backgroundSize = ' cover';
viagem.style.display= 'flex';
viagem.style.alignItems= 'center';
viagem.style.justifyContent= 'center';
let via_check = document.querySelector('section form ul li:nth-child(8) label');
via_check.addEventListener("click", function(){
    let check = document.getElementById("id_choices_7"); 
 
    if(check.checked == true){        
        via_check.style.backgroundColor = '#000000de';           
    }   
    else{
        via_check.style.backgroundColor = '#ffffff00';
    }
});