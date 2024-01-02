// main.js

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 2,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
});


function redirigir(nuevoLink) {
    window.open(nuevoLink, '_blank');
}
