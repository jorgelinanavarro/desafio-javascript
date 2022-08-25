
const contenedorOpinion = document.querySelector('#opiniones')

const traerDatos = () => {
    fetch('./datos.json')
    .then(response => response.json())
    .then(result => {
        let datos = result;
        datos.forEach(persona => {
            const card = document.createElement('card')
            contenedorOpinion.innerHTML += `
            <div class="card card-opinion" style="width:18rem; background-color: #e1fce2;">
              <h2>${persona.nombre}</h2>
              <p>Edad: ${persona.edad}</p>
              <p>${persona.opinion}</p>
            </div>
            </div>
            `
        
        });
    })
}

traerDatos()
