import { loginEvent } from "../login/loginEvent.js";
import { registerEvent } from "../register/registerEvent.js";
import { homeView } from "./homeView.js";

export function Home() {
    
    const body = document.querySelector('#app');
    body.innerHTML = homeView();

    const login = document.querySelector('.login');
    const register = document.querySelector('.registro')
    const contenedor = document.querySelector("#contenedorInicio");    

    if (!contenedor.classList.contains("opacity-0")) {
        contenedor.classList.add("scale-0","opacity-0","transition-all","duration-600")

        setTimeout(() => {
            contenedor.classList.add("scale-100","opacity-100");
        }, 400);
    }

    document.addEventListener("click",(e)=>{

        let buttonStart = e.target.matches('.login') || e.target.matches('.registro');

        if (buttonStart) {
            
            contenedor.classList.add("scale-0","opacity-0","transition-all","duration-600")

            if (e.target.classList.contains('login')) {
                setTimeout(() => {
                    contenedor.classList.add("scale-100","opacity-100");
                    loginEvent();
                }, 600);
                
            } else {
                setTimeout(() => {
                    contenedor.classList.add("scale-100","opacity-100");
                    registerEvent();
                }, 600);
            }
        
            

            contenedor.classList.remove("scale-100","opacity-100")

        }

        
    
    });
}