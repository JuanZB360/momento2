import { logedHomeView } from "./logedHomeView.js";
import { logOutEvent } from "./logOutEvent.js";

export function logedHomeEvent() {

    const body = document.querySelector('body');
    body.innerHTML = logedHomeView();

    logOutEvent();
    
}