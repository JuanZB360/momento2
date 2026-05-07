import { userSession } from "./authentication/authentication.js";
import { logedHomeEvent } from "./views/private/home/logedHomeEvent.js";
import { Home } from "./views/public/home/homeEvent.js";

if (userSession()) {
    logedHomeEvent();
} else {
    Home();
}
