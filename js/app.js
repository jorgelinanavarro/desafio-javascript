let acumulador = 0


//Modal
const modalContainer = document.getElementById('modal_container');
const openCart = document.getElementById('open');
const closeCart = document.getElementById('close');
const modalCart = document.getElementById('modalCart')

openCart.addEventListener('click', () => {
    modalContainer.classList.add('modal-active')
});
closeCart.addEventListener('click', () => {
    modalContainer.classList.remove('modal-active')
});
modalContainer.addEventListener('click', () => {
    closeCart.click()
});
modalCart.addEventListener('click', (e) => {
    e.stopPropagation();
})


// Inventario de productos

class Productos {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

const products = []
const prod1 = new Productos("1", "Curso Bolsitas Sorpresa", 3500, "css/img/curso-bolsitas.png");
const prod2 = new Productos("2", "Curso Letras 3D", 3800, "css/img/curso-letras3d.png");
const prod3 = new Productos("3", "Curso Pinatas", 3100, "css/img/curso-pinatas.png");
const prod4 = new Productos("4", "Curso Tarjetas", 3200, "css/img/curso-tarjetas.png");

products.push(prod1, prod2, prod3, prod4);

/*Crear una función para traer los productos*/

const mostrarProductos = (products) => {
    const productsContainer = document.getElementById('product-container');
    products.forEach( product => {
        const card = document.createElement('card');
        card.innerHTML += `<div class="card" style="width:18rem; background-color: #e1fce2;">
                           <img src="${product.img}" class="card-img-top" alt="imagen curso">
                           <div class="card-body">
                               <h5 class="card-title">${product.name}</h5>
                               <p class="card-text">Price:$ ${product.price}</p>
                               <button class="btn-add btn btn-primary" id="button${product.id}">Agregar al carrito</button>
                           </div>
                        </div>`

        productsContainer.appendChild(card);
        const button = document.getElementById(`button${product.id}`);
        button.addEventListener('click',() => {
            cart (product.id) 
            Swal.fire('Agregaste un producto al carrito')
        });
    });
}

mostrarProductos(products);
