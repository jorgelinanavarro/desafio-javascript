
const boton = document.querySelector('#btn')
const contenedorOpinion = document.querySelector('#opiniones')

const traerDatos = () => {
    fetch('./datos.json')
    .then(response => response.json())
    .then(result => {
        let datos = result;
        datos.forEach(persona => {
            contenedorOpinion.innerHTML += `
            <div>
              <h3>${persona.nombre}</h3>
              <p>Edad: ${persona.edad}</p>
              <p>Opinion: ${persona.opinion}</p>
            </div>
            `
        
        });
    })
}



boton.onclick = () => {
    traerDatos();
}