window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-FBJFKJY6N3');

function irA(destino) {
    const rutaActual = window.location.href;
    if (rutaActual.includes('productos')) {
        window.location.href = destino === 'index' ? '../index.html' : `${destino}.html`;
    } else {
        window.location.href = destino === 'index' ? 'index.html' : `productos/${destino}.html`;
    }
}