export function seePassword() {

    const checkbox = document.querySelector('#seePassword');
    const inputPassword = document.querySelector('#password');
    checkbox.checked = false;
    inputPassword.type = 'password';

    checkbox.addEventListener('change', (e) => {
        
        if (inputPassword.getAttribute('type') == 'password'){
            inputPassword.setAttribute('type','text');
        } else {
            inputPassword.setAttribute('type','password');
        }

    });
    
}