let authenticated = null;

export function session(name, email) {

    authenticated = {
        name: name,
        email: email,
        loginDate: new Date().toLocaleTimeString()
    };
    console.log("Sesión activa:", authenticated);

}

export function userSession() {
    return authenticated;
}

export function logOut() {
    authenticated = null;
    return true;
}