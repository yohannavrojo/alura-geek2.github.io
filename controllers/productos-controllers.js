import { productoServices } from "../service/productos.servicios.js";

const nuevoProducto = (titulo,descripcion,precio,img)=>{
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

const producto = document.querySelector("[datos-productos]")

const render = async () =>{
    try{
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(element => {
            producto.appendChild(nuevoProducto(element.titulo,element.descripcion,element.precio,element.img))
        });
    }catch(error){
    console.log(error)
    }
}

render()