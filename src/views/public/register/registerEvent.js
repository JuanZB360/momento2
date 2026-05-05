/*
    let user = {
        name: "",
        email: "",
        password: '...',
        transactions: [
            {
                type: "",
                name: "",
                category: "",
                value: 0,
                date: ""
            },
        ],
        savingsGoals: [
            {
                name: "",
                target: 0,
                current: 0
            }
        ]
    }
*/

import { seePassword } from "../login/seePassword.js";
import { registerView } from "./registerView.js";
import { back } from "../home/back.js";
import { saveUser } from "../../../dataBase/db.js";
import { session } from "../../../authentication/authentication.js";
import { logedHomeEvent } from "../../private/home/logedHomeEvent.js";

export function registerEvent() {
    
    const contenedor = document.querySelector('#contenedorInicio');
    contenedor.classList.replace('py-20', 'py-10');

    contenedor.innerHTML = registerView();
    seePassword();
    back();

    const form = document.querySelector('.formRegister');
    const errorEmail = document.querySelector('#error-email');
    const errorPassword = document.querySelector('#error-password');
    const errorName = document.querySelector('#error-name');

    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        const formData = new FormData(form);

        const checkEmail = formData.get('email').trim() == '';

        const checkPassword = formData.get('password').trim() == '';

        const checkName = formData.get('name').trim() == '';

        contenedor.classList.add("scale-0","opacity-0","transition-all","duration-600");

        if (!checkEmail && !checkName && !checkPassword) {

            let user = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password'),
                transactions: [],
                savingsGoals: []
            }

            console.log(user);

            if(!saveUser(user)){
                setTimeout(() => {
                    errorEmail.innerText = `*** Este Correo Ya Existe ***`;
                    errorEmail.classList.remove('hidden');
                    form.email.value = ``;
                    setTimeout(() => {
                        errorEmail.classList.add('hidden');
                    }, 2000);
                }, 600);
            } else {
                session(user.name, user.email);
                logedHomeEvent();
                setTimeout(() => {
                    form.reset();
                }, 600);
            };

        }


        setTimeout(() => {

            contenedor.classList.add("scale-100","opacity-100");

            if (checkEmail) {
                errorEmail.innerText = `*** Debes agregar tu Correo ***`;
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

            if (checkName) {
                errorName.classList.remove('hidden');
                setTimeout(() => {
                    errorName.classList.add('hidden');
                }, 2000);
            }

        }, 600);
        
        contenedor.classList.remove("scale-100","opacity-100")

    });

}