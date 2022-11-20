//GET

const listaConsolas = () => fetch("http://localhost:3000/consolas").then(respuesta=>respuesta.json());

export const consolaServices = {
    listaConsolas,
}
  
