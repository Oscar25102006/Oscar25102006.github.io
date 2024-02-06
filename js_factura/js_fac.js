// factura.js
document.addEventListener('DOMContentLoaded', function () {
    const productosSeleccionados = JSON.parse(localStorage.getItem('productosSeleccionados')) || [];

    if (productosSeleccionados.length > 0) {
        generarReporte(productosSeleccionados);
    } else {
        alert('No hay productos seleccionados.');
        window.location.href = 'index.html';
    }
});

function generarReporte(productos) {
    const reporteHTML = `
        <div class="reporte">
            <h1>Reporte de Venta - VISION STUDIO</h1>
            <div class="detalle">
                <p>Cantidad de Productos: ${productos.length}</p>
                <p>Subtotal: $${calcularSubtotal(productos)}</p>
                <p>ITBIS (18%): $${calcularITBIS(productos)}</p>
                <p>Total: $${calcularTotal(productos)}</p>
            </div>
        </div>
    `;

    const reporteContainer = document.getElementById('reporte-container');
    reporteContainer.innerHTML = reporteHTML;
}

function calcularSubtotal(productos) {
    // Simplemente devuelve la suma de los precios de los productos seleccionados
    return productos.length * 20; // Supongamos que cada producto tiene un precio de $20
}

function calcularITBIS(productos) {
    const subtotal = calcularSubtotal(productos);
    const itbis = subtotal * 0.18; // 18% de ITBIS
    return itbis.toFixed(2);
}

function calcularTotal(productos) {
    const subtotal = calcularSubtotal(productos);
    const itbis = calcularITBIS(productos);
    const total = subtotal + parseFloat(itbis);
    return total.toFixed(2);
}
