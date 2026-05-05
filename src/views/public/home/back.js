import { Home } from "./homeEvent.js";

export function back() {

    const contenedor = document.querySelector('#contenedorInicio');
    const back = document.querySelector('.botonAtras');

    back.addEventListener('click', (e) => {
        
        contenedor.classList.replace("scale-100","scale-0");
        contenedor.classList.replace("opacity-100","opacity-0");

        console.log(contenedor.classList);

         setTimeout(() => {
            Home();
        }, 600);
        
        
        
    });
    
}