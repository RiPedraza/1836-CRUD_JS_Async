import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value;
    
    clientServices.crearCliente(nombre,email)
    .then(() => {
        window.location.href = "/screens/registro_completado.html"; //redirecciona a otra página
    })
    .catch(err => console.log(err));
});