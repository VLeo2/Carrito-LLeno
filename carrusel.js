let indiceActual = 0;
const ofertas = document.querySelector('.ofertas');
const ofertasTotales = document.querySelectorAll('.oferta').length;
const ofertasVisibles = 4; // Mostrar solo 4 ofertas a la vez

document.getElementById('flecha-derecha').addEventListener('click', () => {
    if (indiceActual < ofertasTotales - ofertasVisibles) {
        indiceActual++;
    } else {
        indiceActual = 0; // Volver al inicio si llegamos al final
    }
    moverCarrusel();
});

document.getElementById('flecha-izquierda').addEventListener('click', () => {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = ofertasTotales - ofertasVisibles; // Ir al final si estamos en el inicio
    }
    moverCarrusel();
});

function moverCarrusel() {
    const desplazamiento = -(indiceActual * (100 / ofertasVisibles)); // Asegurar que solo se desplacen 4 ofertas
    ofertas.style.transform = `translateX(${desplazamiento}%)`;
}
