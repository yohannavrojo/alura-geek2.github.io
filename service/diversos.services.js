//GET

const listaDiversos = () => fetch("http://localhost:3000/diversos").then(respuesta=>respuesta.json());

export const diversoServices = {
    listaDiversos,
}
  