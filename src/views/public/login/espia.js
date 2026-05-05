export function espia() {
    
    const espia = document.querySelector('.espia');
    const abajo = './img/sinFondo/juan_avatar_espiando_mirando_abajo-removebg-preview.png';
    const frente = './img/sinFondo/juan_avatar_espiando_mirando_al_frente-removebg-preview.png';
    const lado = './img/sinFondo/juan_avatar_espiando_mirando_a_un_lado-removebg-preview.png';


    document.addEventListener('click', (e) => {
        const email = e.target.matches('.email');
        const password = e.target.matches('.password');

        if (email) {
            espia.setAttribute('src',abajo);
        }else if (password) {
            espia.setAttribute('src',lado);
        } else {
            if (espia.getAttribute('src') !== frente) {
                espia.setAttribute('src',frente);   
            }
        }
    });
}