// Datos(productos)
const products = [
    { nombre: 'Camiseta', categoria: 'ropa', precio: 15.990, imagen: 'Camiseta.jpg' },
    { nombre: 'Teléfono celular', categoria: 'electronicos', precio: 299.990, imagen: 'Teléfono_celular.jpg' },
    { nombre: 'Libros', categoria: 'escolar', precio: 12.990, imagen: 'Libros.jpg' },
    { nombre: 'Lamparas', categoria: 'hogar', precio: 4.990, imagen: 'Lamparas.jpg' },
    { nombre: 'Camaras', categoria: 'articulosExteriores', precio: 29.990, imagen: 'Camara.jpg' },
    { nombre: 'Comida para perros', categoria: 'mascotas', precio: 20.990, imagen: 'Comida_para_perros.jpg' },
    { nombre: 'Espejos', categoria: 'autos', precio: 20.990, imagen: 'Espejos.jpg' },
    { nombre: 'Pijamas', categoria: 'niños', precio: 9.990, imagen: 'Pijamas.jpg' },
    { nombre: 'Carcasas', categoria: 'accesoriosCelular', precio: 9.990, imagen: 'Carcasas.jpg' },
    { nombre: 'Zapatos', categoria: 'ropa', precio: 38.990, imagen: 'Zapatos.jpg' },
    { nombre: 'articulosExteriores', categoria: 'articulosExteriores', precio: 25.990, imagen: 'CamaraExteriores.jpg' },
];

function showProducts(productsToShow) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    productsToShow.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = `img/${product.imagen}`; // Ajusta la ruta de la imagen
        productImage.alt = product.nombre;

        const productName = document.createElement('h3');
        productName.textContent = product.nombre;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Precio: $${product.precio}`;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);

        productList.appendChild(productDiv);
    });
}

//filtrar productos por categoría
document.getElementById('category-filter').addEventListener('change', function () {
    const category = this.value;
    let filteredProducts = [];

    if (category === 'todos') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.categoria === category);
    }

    showProducts(filteredProducts);
});

// ordenar productos por precio
function sortProducts() {
    const sortedProducts = [...products].sort((a, b) => a.precio - b.precio);
    showProducts(sortedProducts);
}

// Mostrar todos los productos al cargar la página
showProducts(products);