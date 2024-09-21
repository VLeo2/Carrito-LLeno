let indiceActual = 0;
const ofertas = document.querySelector('.ofertas');
const ofertasTotales = document.querySelectorAll('.oferta').length;
const ofertasVisibles = 4; // Mostrar solo 4 ofertas a la vez
let autoSlide;

/* Navegación manual con las flechas */
document.getElementById('flecha-derecha').addEventListener('click', () => {
    moverAdelante();
});

document.getElementById('flecha-izquierda').addEventListener('click', () => {
    moverAtras();
});

function moverAdelante() {
    if (indiceActual < ofertasTotales - ofertasVisibles) {
        indiceActual++;
    } else {
        indiceActual = 0; // Volver al inicio si llegamos al final
    }
    moverCarrusel();
}

function moverAtras() {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = ofertasTotales - ofertasVisibles; // Ir al final si estamos en el inicio
    }
    moverCarrusel();
}

function moverCarrusel() {
    const desplazamiento = -(indiceActual * (100 / ofertasVisibles));
    ofertas.style.transform = `translateX(${desplazamiento}%)`;
}

/* Carrusel automático */
function iniciarAutoSlide() {
    autoSlide = setInterval(() => {
        moverAdelante();
    }, 2000); // Avanzar cada 3 segundos
}

/* Detener el carrusel al poner el mouse sobre una oferta */
document.querySelector('.ofertas-container').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

/* Reanudar el carrusel cuando el mouse salga */
document.querySelector('.ofertas-container').addEventListener('mouseout', () => {
    iniciarAutoSlide();
});

/* Iniciar el carrusel automático al cargar la página */
iniciarAutoSlide();

/* Funcionalidad del logo */
document.getElementById('logo').addEventListener('click', () => {
    if (window.location.pathname === '/index.html') {
        window.location.reload(); // Recargar si ya estás en la página principal
    } else {
        window.location.href = 'index.html'; // Redireccionar a la página principal
    }
});
function volverAPaginaPrincipal() {
    const currentPath = window.location.pathname;

    if (currentPath.includes('alimentos.html')) {
        window.location.href = 'index.html'; // Redirige a la página principal
    } else if (currentPath.includes('index.html') || currentPath === '/') {
        // Si ya estás en la principal, no recargues
        console.log('Ya estás en la página principal');
    } else {
        window.location.href = 'index.html'; // Carga la página principal si no estás en alimentos
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal-locales");
    const buttonLocales = document.querySelector(".button-locales");
    const localOptions = document.querySelectorAll(".local-option");
    const seleccionarLocalBtn = document.getElementById("seleccionar-local");
    const verEnMapsBtn = document.getElementById("ver-en-maps");
    let direccionSeleccionada = "";
    let linkMaps = "";

    // Mostrar el modal al hacer clic en el botón de locales
    buttonLocales.addEventListener("click", function() {
        modal.classList.add("active");
    });

    // Seleccionar un local
    localOptions.forEach(option => {
        option.addEventListener("click", function() {
            localOptions.forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");
            direccionSeleccionada = option.getAttribute("data-direccion");
            linkMaps = option.getAttribute("data-maps");
        });
    });

    // Cambiar el texto del botón de locales y cerrar el modal
    seleccionarLocalBtn.addEventListener("click", function() {
        if (direccionSeleccionada) {
            buttonLocales.innerHTML = `<img src="https://cdn.icon-icons.com/icons2/622/PNG/512/facebook-placeholder-for-locate-places-on-maps_icon-icons.com_57151.png" alt="Ubicación"> ${direccionSeleccionada}`;
            modal.classList.remove("active");
        }
    });

    // Redireccionar a Google Maps
    verEnMapsBtn.addEventListener("click", function() {
        if (linkMaps) {
            window.open(linkMaps, "_blank");
        }
    });

    // Por defecto, seleccionar el local matriz
    const defaultOption = document.querySelector(".local-option");
    defaultOption.classList.add("selected");
    direccionSeleccionada = defaultOption.getAttribute("data-direccion");
    linkMaps = defaultOption.getAttribute("data-maps");
});

