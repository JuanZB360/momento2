import { userSession } from "../../../authentication/authentication.js";
import { getSavings, getSubtotal } from "../../../dataBase/db.js";
import { containerSavings } from "./containerSavings.js";
import { profileView } from "./profileView.js";

export function profileEvent() {
    
    let usuario = userSession();
    let balance = getSubtotal(usuario);

    const contenedorPrincipal = document.querySelector('#contenedorPrincipal');
    contenedorPrincipal.innerHTML = profileView();

    const nombreUsuarioLogueado = document.querySelector('#usuarioLogueado');
    const correoUsuarioLogueado = document.querySelector('#correoLogueado');
    const perfilBalanceTotal = document.querySelector('#perfil-balance-total');
    const contenedorBalance = document.querySelector('.contenedorBalance');
    const mensajeBalance = document.querySelectorAll('.mensajeBalance');
    const perfilIngresos = document.querySelector('#perfil-ingresos');
    const perfilGastos = document.querySelector('#perfil-gastos');
    const contenedorAhorrosPerfil = document.querySelector('.contenedorAhorrosPerfil');

    //usuario logueado
    console.log(usuario);
    nombreUsuarioLogueado.innerText = usuario.name;
    correoUsuarioLogueado.innerText = usuario.email;

    if (balance.subtotal > 0) {
        contenedorBalance.classList.add('bg-emerald-500/5','border-2', 'border-emerald-500', 'text-emerald-700');
        mensajeBalance.forEach((u) => {
            u.classList.add('text-emerald-700', 'border-emerald-800')
        });
        perfilBalanceTotal.innerText = `$${balance.subtotal}`;
    } else {
        contenedorBalance.classList.add('bg-rose-500/5','border-2','border-rose-500', 'text-rose-500');
        mensajeBalance.forEach((u) => {
            u.classList.add('text-rose-500','border-rose-800')
        });
        perfilBalanceTotal.innerText = `$${balance.subtotal}`;
    }

    perfilIngresos.innerText = `$${balance.income}`;
    perfilGastos.innerText = `$${balance.expense}`;
    
    let allSavings = getSavings(usuario);

    allSavings.forEach((u) => {
        let percentage = (u.current * 100) / u.target;

        const div = document.createElement('div');
        
        div.classList.add("space-y-4");
        
        div.innerHTML = containerSavings(u.name, u.target, percentage);
        
        contenedorAhorrosPerfil.append(div);
        
    });
    

    

}