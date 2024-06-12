// script.js
window.onload = function() {
    mostrarAlerta();
};

function mostrarAlerta() {
    var alerta = document.getElementById('alerta');
    alerta.style.display = 'block';
}

function cerrarAlerta() {
    var alerta = document.getElementById('alerta');
    alerta.style.display = 'none';
}