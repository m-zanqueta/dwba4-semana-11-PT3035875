document.addEventListener("DOMContentLoaded", function () {
    var track   = document.querySelector('.carrossel-track');
    var btnPrev = document.querySelector('.btn-prev');
    var btnNext = document.querySelector('.btn-next');
    var dots    = document.querySelectorAll('.carrossel-dots .dot');
    var slides  = document.querySelectorAll('.carrossel-track .slide');

    if (!track || !btnPrev || !btnNext || slides.length === 0) {
        console.error("Carrossel não encontrado.");
        return;
    }

    var total = slides.length;
    var atual = 0;
    var intervalo;

    function irPara(index) {
        atual = (index + total) % total;
        track.style.transform = 'translateX(-' + (atual * 100) + '%)';

        dots.forEach(function (d, i) {
            d.classList.toggle('ativo', i === atual);
        });
    }

    function iniciarAutoPlay() {
        intervalo = setInterval(function () {
            irPara(atual + 1);
        }, 5000);
    }

    function reiniciarAutoPlay() {
        clearInterval(intervalo);
        iniciarAutoPlay();
    }

    btnPrev.addEventListener('click', function () {
        irPara(atual - 1);
        reiniciarAutoPlay();
    });

    btnNext.addEventListener('click', function () {
        irPara(atual + 1);
        reiniciarAutoPlay();
    });

    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            irPara(i);
            reiniciarAutoPlay();
        });
    });

    irPara(0);
    iniciarAutoPlay();
});