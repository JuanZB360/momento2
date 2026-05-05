import { logOut, userSession } from "../../../authentication/authentication.js";
import { Home } from "../../public/home/homeEvent.js";

export function logOutEvent() {
    
    const bottomLogOut = document.querySelector('.bottomLogOut');

    bottomLogOut.addEventListener('click', (e) =>{
        logOut();
        console.log(userSession());
        Home();
    });

}