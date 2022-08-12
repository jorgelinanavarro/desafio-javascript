
const boton = document.getElementById('btn')
const contenedorOpinion = document.getElementById('opiniones')

const traerDatos = () => {
    fetch('./datos.json')
    .then(response => response)
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

traerDatos()

boton.onclick = () => {
    traerDatos()

}
