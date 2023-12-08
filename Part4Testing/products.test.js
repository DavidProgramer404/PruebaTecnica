// Archivo de prueba de integración para products.js (products.test.js)
const request = require('supertest');
const app = require('./products');

test('obtiene todos los productos', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3); // Esperamos que se devuelvan 3 productos
});
