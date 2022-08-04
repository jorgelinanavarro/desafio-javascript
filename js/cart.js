/*Crear función para mostrar productos en carrito*/
const shoppingCart = [];
const cart = (productId) => {
    const cartContainer = document.getElementById('cart-container');
    const mostrar = () => {
        let product = products.find(product => product.id == productId);
        shoppingCart.push(product);
        localStorage.setItem("products", JSON.stringify(shoppingCart));
        let div = document.createElement('div');
        div.classList.add('productInCart');
        div.innerHTML = `<p>${product.name}</p>
                         <p>Precio: ${product.price}</p>
                         <p id="quantity${product.id}">Quantity: ${product.quantity}</p>
                         <button class="btn btn-danger btn-sm" id="delete${product.id}" >x</button>
                         `
        cartContainer.appendChild(div);
        let buttonEliminar = document.getElementById(`delete${product.id}`);
        buttonEliminar.addEventListener('click', (e) => {
            deleteProduct(e);
        })
    }
    mostrar();
    cantElementosCarrito();
}

/* CONTADOR CARRITO */
function cantElementosCarrito() {
    let cantidad = document.querySelector(".cantidad-carrito");
    cantidad.innerText = shoppingCart.length;
}