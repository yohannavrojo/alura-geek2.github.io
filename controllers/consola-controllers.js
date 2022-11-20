import { consolaServices } from "../service/consola.servicios.js";


const nuevoConsola = (titulo,descripcion,precio,img)=>{
    const card = document.createElement("div")
    const contenido = `
    <div class="produto " >
    <img  src="${img}" id="img" alt="caneca">
    <p class="descrição">${titulo}</p>
    <p class="descrição">${descripcion}</p>
    <p class="preco">${precio}</p>
    <a href="">Ver Producto</a>
   
</div>
    `

    card.innerHTML = contenido;
    card.classList.add("card")
    return card
}

const consola = document.querySelector("[datos-consola]")

const renderC = async () =>{
    try{
        const listaConsolas = await consolaServices.listaConsolas()
        listaConsolas.forEach(element => {
            consola.appendChild(nuevoConsola(element.titulo,element.descripcion,element.precio,element.img))
        });
    }catch(error){
    console.log(error)
    }
}

renderC()