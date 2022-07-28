
const carrito = document.querySelector("#carrito");
const cartModalOverlay = document.querySelector(".cart-modal-overlay"); 

/* ABRIR CARRITO */ 
carrito.addEventListener("click", ()=>{
    if(cartModalOverlay.classList.contains("open")) {
        cartModalOverlay.classList.remove("open");
    } else {
        cartModalOverlay.classList.add("open");
    }
})

/* CERRAR CARRITO */ 
const closeBtn = document.querySelector("#cerrar-btn");

closeBtn.addEventListener("click", ()=>{
    cartModalOverlay.classList.remove("open");
})

/* AGREGAR ELEMENTOS */
const agregarCarrito= document.getElementsByClassName("agregar-carrito");
console.log(agregarCarrito)
for(let boton of agregarCarrito) {
    boton.addEventListener("click", compilarDatos)
}
function compilarDatos(e){
    let boton = e.target;
    let producto = boton.parentElement;
    let prodID = producto.getAttribute("id");
    let prodName = producto.querySelector("h3").innerText;
    let precio = producto.querySelector(".precio-producto").innerText;
    let imagen = producto.querySelector(".img-producto").src;
    agregarElemento(prodID,prodName,precio,imagen)
}

function agregarElemento(prodID,prodName,precio,imagen) {
    let productRow = document.createElement("div");
    let contenedorProductos = document.querySelector(".filas-productos");

    let elemProducto = `
        <div class="fila-producto" id="${prodID}">
            <img class="imagen-carrito" src="${imagen}" />
            <span>${prodName}</span>
            <span class="precio-carrito">${precio}</span>
            <button class="borrar-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = elemProducto;
    contenedorProductos.append(productRow);
    let botonesBorrar = productRow.querySelectorAll(".borrar-btn");
    for(let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento);
    }
    cantElementosCarrito();
    localStorage.setItem("items-contenedor",agregarCarrito)
    
}
function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    cantElementosCarrito()
}

function cantElementosCarrito() {
    let cantidad = document.querySelectorAll(".filas-productos > div");
    let cantidadCarrito = document.querySelector(".cantidad-carrito");
    cantidadCarrito.innerText = cantidad.length;

}
