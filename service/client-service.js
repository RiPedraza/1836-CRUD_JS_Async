//Abrir http (método,url)
// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

//Usando Fetch API (sin usar llaves y el return dentro de la funcion anonima)
const listaClientes = () => 
fetch("http://localhost:3000/perfil").then((repuesta) => repuesta.json()); //aca solo tomamos el exito de la repuesta.

//para el formulario
const crearCliente = (nombre,email) => {
 return fetch("http://localhost:3000/perfil", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({nombre,email,id:uuid.v4()})
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:"DELETE" //Borrar un cliente utilizando el verbo http DELETE
  })
}

const detalleCliente = (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`).then((repuesta) => repuesta.json());
}

const actualizarCliente = (nombre,email,id) => {
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({nombre,email})
  })
  .then((repuesta) => repuesta)
  .catch((err) => console.log(err));
}


//ejemplos de verbo HTTP: GET, POST, PUT (edita/reemplaza datos), PATCH (actualiza parcialmente los datos), DELETE
//Todos estos verbos se utilizan ampliamente en el mundo web. Especialmente cuando usamos el modelo REST.

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
}