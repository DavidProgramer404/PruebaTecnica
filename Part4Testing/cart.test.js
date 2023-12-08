// Archivo de prueba unitaria para cart.js (cart.test.js)
import { calculateTotal } from './cart';

test('calcula el total de los productos en el carrito', () => {
    const products = [
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 30 },
    ];

    const total = calculateTotal(products);
    expect(total).toBe(60); // Esperamos que el total sea 60 (10 + 20 + 30)
});
