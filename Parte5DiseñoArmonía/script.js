// script.js

// Lógica para el carrito de compras interactivo
document.addEventListener('DOMContentLoaded', function () {
    // Actualizar el total y subtotal al modificar las cantidades
    const quantityInputs = document.querySelectorAll('.cart-item input[type="number"]');
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateSubtotal);
    });

    // Botón de eliminar producto
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeProduct);
    });

    // Botón de vaciar carrito
    const clearButton = document.querySelector('.clear-btn');
    clearButton.addEventListener('click', clearCart);

    // Función para actualizar los subtotales al modificar la cantidad de productos
    function updateSubtotal() {
        // Lógica para actualizar los subtotales de los productos
        // ...

        // Ejemplo: Actualizar el total de productos, costo de envío y total final
        const totalItems = document.querySelectorAll('.cart-item input[type="number"]');
        const totalAmount = document.querySelector('.total-amount');
        const totalItemsSpan = document.querySelector('.total-items');
        const shippingCost = document.querySelector('.shipping-cost');

        let itemsCount = 0;
        totalItems.forEach(item => {
            itemsCount += parseInt(item.value);
        });

        totalItemsSpan.textContent = itemsCount;
        shippingCost.textContent = itemsCount > 0 ? '5' : '0'; // Costo de envío fijo de $5 si hay productos
        totalAmount.textContent = itemsCount * 20 + parseInt(shippingCost.textContent); // Precio fijo de $20.000 por producto
    }

    // Función para eliminar un producto del carrito
    function removeProduct(event) {
        const product = event.target.closest('.cart-item');
        product.remove();
        updateSubtotal();
    }

    // Función para vaciar completamente el carrito
    function clearCart() {
        const cartItems = document.querySelector('.cart-items');
        cartItems.innerHTML = '';
        updateSubtotal();
    }
});
