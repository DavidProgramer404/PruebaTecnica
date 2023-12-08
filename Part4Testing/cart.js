// Función en el frontend a testear
// Supongamos que esta función se encuentra en un archivo llamado cart.js
export function calculateTotal(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
