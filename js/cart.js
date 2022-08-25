/*Crear función para mostrar productos en carrito*/
const totalCarrito = document.getElementById ("total-carrito")
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
                         <button class="btn btn-danger btn-sm" id="delete${product.id}" >X</button>
                         `
        cartContainer.appendChild(div);
        let buttonEliminar = document.getElementById(`delete${product.id}`);
        buttonEliminar.addEventListener('click', (e) => {
            deleteProduct(e);
            Swal.fire('Eliminaste un producto del carrito')
        })
        /*SUMA PRODUCTOS Y DA TOTAL */
        totalCarrito.innerText = shoppingCart.reduce((acc,product) => acc+ product.price, 0)
    }
    mostrar();
    cantElementosCarrito();
}

/* ELIMINAR PRODUCTOS */
function deleteProduct(e){
    let btnClicked = e.target;
    btnClicked.parentElement.remove();
}

/* CONTADOR CARRITO */
function cantElementosCarrito() {
    let cantidad = document.querySelector(".cantidad-carrito");
    cantidad.innerText = shoppingCart.length;
}


