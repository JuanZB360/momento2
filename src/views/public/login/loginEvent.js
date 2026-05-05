import { session } from "../../../authentication/authentication.js";
import { findUser } from "../../../dataBase/db.js";
import { logedHomeEvent } from "../../private/home/logedHomeEvent.js";
import { back } from "../home/back.js";
import { espia } from "./espia.js";
import { loginView } from "./loginView.js";
import { seePassword } from "./seePassword.js";


export function loginEvent(params) {
    const contenedor = document.querySelector('#contenedorInicio');

    contenedor.classList.remove('py-20');
    contenedor.classList.add('pt-20','pb-10');

    contenedor.innerHTML = loginView();
    espia();
    seePassword();
    back();

    const form = document.querySelector('.formLogin');
    const errorEmail = document.querySelector('#error-email');
    const errorPassword = document.querySelector('#error-password')

    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        const formData = new FormData(form);

        let User = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        const checkEmail = formData.get('email').trim() == '';

        const checkPassword = formData.get('password').trim() == '';

        contenedor.classList.add("scale-0","opacity-0","transition-all","duration-600");

        setTimeout(() => {

            contenedor.classList.add("scale-100","opacity-100");

            if (checkEmail) {
                errorEmail.innerHTML = `*** Debes agregar tu Correo ***`;
                errorEmail.classList.remove('hidden');
                setTimeout(() => {
                    errorEmail.classList.add('hidden');
                }, 2000);
            }

            if (checkPassword) {
                errorPassword.classList.remove('hidden');
                setTimeout(() => {
                    errorPassword.classList.add('hidden');
                }, 2000);
            }

            if (!checkEmail && !checkPassword) {
                let logedUser = findUser(User);
                if (logedUser) {
                    session(logedUser.name, logedUser.email);
                    form.reset();
                    logedHomeEvent();
                }else{
                    errorEmail.innerHTML = `*** EL USUARIO NO EXISTE ***`;
                    errorEmail.classList.remove('hidden');
                    setTimeout(() => {
                        errorEmail.classList.add('hidden');
                    }, 2000);
                }
                
            }

        }, 600);
                
        
        contenedor.classList.remove("scale-100","opacity-100")

    });
}