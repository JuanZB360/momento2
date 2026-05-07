import { profileEvent } from "../profile/profileEvent.js";
import { logedHomeView } from "./logedHomeView.js";
import { logOutEvent } from "./logOutEvent.js";

export function logedHomeEvent() {

    const body = document.querySelector('#app');
    body.innerHTML = logedHomeView();

    logOutEvent();

    profileEvent();
    
}