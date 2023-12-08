const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let products = [
    { id: 1, name: 'Producto 1', price: 15.990 },
    { id: 2, name: 'Producto 2', price: 299.990},
    { id: 3, name: 'Producto 3', price: 12.990},
    { id: 4, name: 'Producto 4', price: 4.990 },
    { id: 5, name: 'Producto 5', price: 29.990},
    { id: 6, name: 'Producto 6', price: 20.990 },
    { id: 7, name: 'Producto 7', price: 9.990 },
    { id: 8, name: 'Producto 8', price: 9.990 },
    { id: 9, name: 'Producto 9', price: 38.990},
    { id: 10, name: 'Producto 10', price: 25.990 },
    // ... otros productos
];

// Obtener todos los productos
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Obtener un producto por su ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) return res.status(404).send('Producto no encontrado');
    res.json(product);
});

// Crear un nuevo producto
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Actualizar un producto existente
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;
    const index = products.findIndex(p => p.id === productId);
    if (index === -1) return res.status(404).send('Producto no encontrado');
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
});

// Eliminar un producto
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.sendStatus(204);
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
