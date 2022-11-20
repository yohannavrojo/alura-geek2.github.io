import { diversoServices } from "../service/diversos.services.js"; 

const nuevoDiversos = (titulo,descripcion,precio,img)=>{
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

const diversos = document.querySelector("[datos-diversos]")

const renderD = async () =>{
    try{
        const listaDiversos = await diversoServices.listaDiversos()
        listaDiversos.forEach(element => {
           diversos.appendChild(nuevoDiversos(element.titulo,element.descripcion,element.precio,element.img))
        });
    }catch(error){
    console.log(error)
    }
}

renderD()