// Ruta en el backend a testear
// Supongamos que esta ruta se encuentra en un archivo llamado products.js
const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
    // Lógica para obtener los productos de la base de datos u otro lugar
    const products = [
        { id: 1, name: 'Producto A', price: 10 },
        { id: 2, name: 'Producto B', price: 20 },
        { id: 3, name: 'Producto C', price: 30 },
    ];
    res.json(products);
});

module.exports = app;
