//funçao que formata os segundos
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos *1000); //ele inicia com milessimos de segundos, por isso a multiplicaçao por 1000
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar');
const zerar   = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

//capturar o click do botao e mudar a cor do timer
document.addEventListener('click', function(e) {
    const el = e.target; //mostra o que está sendo capturado com o click

    if(el.classList.contains('zerar')) {
        relogio.classList.remove('pausado'); //remove a classe pausado do css 
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    }
    
    if(el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado'); //remove a classe pausado do css 
        clearInterval(timer);
        iniciaRelogio();
    }
    if(el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado')//adiciona a cor vermelha do css
    }

})




