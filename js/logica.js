function irA(destino) {
    const rutaActual = window.location.href;
    if (rutaActual.includes('productos')) {
        window.location.href = destino === 'index' ? '../index.html' : `${destino}.html`;
    } else {
        window.location.href = destino === 'index' ? 'index.html' : `productos/${destino}.html`;
    }
}

function anyadirACesta() {
    alert('Perfecto! El producto se añadió a la cesta');
}