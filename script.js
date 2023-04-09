const contenedor = document.getElementById("contenedor")
fetch("./database.json")
.then(Response => Response.json())

.then(data =>{
    for (const producto of data) {
        contenedor.innerHTML += `
    <div class="phone" >
        <img class="imgPhone" src=${producto.imagen}/>
        <h2>${producto.name}</h2>
        <h3>${producto.modelo}</h3>
        <h4>$${producto.price}</h4>
        <p>${producto.procesador}</p>
        <p>${producto.camara}</p>
        
        

       
    </div>
        `
    }
})

const formularioHTML = document.getElementById("formulario")
formularioHTML.addEventListener("submit", (event ) =>{
    event.preventDefault()
    console.log(event)
    console.log(formularioHTML.nombreCompleto.value)
    console.log(formularioHTML.correoElectronico.value)
    console.log(formularioHTML.textarea.value)
    formularioHTML.reset()
})