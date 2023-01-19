import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

//Con Async:
const obtenerInformacion = async () =>{
    const url = new URL(window.location); //una clase predefinida, devuelve un objeto.
    const id = url.searchParams.get('id');
    if(id === null){
        window.location.href = "/screens/error.html";
    }
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    
    //manejador de error
    try{
        //al colocar "async" a esta funcion, podemos usar el "await",
        //y eliminamos el .then ya que lo contiene el "await":
        const perfil = await clientServices.detalleCliente(id);
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre,
            email.value = perfil.email
        }else{
            throw new Error();
        }
    }catch(error){
        //console.log("catch Error - ",error);
        //alert("hubo un error");
        window.location.href="/screens/error.html";
    }    
}

obtenerInformacion();

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const url = new URL(window.location); //una clase predefinida, devuelve un objeto.
    const id = url.searchParams.get('id');

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientServices.actualizarCliente(nombre,email,id).then(()=>{
        window.location.href = "/screens/edicion_concluida.html";
    })
});

