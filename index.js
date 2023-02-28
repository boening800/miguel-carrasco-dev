const btnArrowUp = document.getElementById('arrow-up-bottom');
const socialOptions = document.getElementById('social-options');
const nav = document.getElementById('nav');
// console.log(nav.querySelectorAll('ul')[0].classList.add('bg-gray-100'))
ValidateScrollTop();

function ValidateScrollTop() {
        if (window.scrollY === 0) {
            btnArrowUp.classList.add('bottom-[-100px]');
            socialOptions.classList.remove('left-[-100px]');
            // nav.classList.remove('bg-gray-100')
            nav.querySelectorAll('ul')[0].classList.remove('bg-primary')
        } else {
            btnArrowUp.classList.remove('bottom-[-100px]');
            socialOptions.classList.add('left-[-100px]');
            // nav.classList.add('bg-gray-100')
            nav.querySelectorAll('ul')[0].classList.add('bg-primary')
        }
}
window.addEventListener('scroll', () => { ValidateScrollTop(); });

// CONFIGURACION DE BOTON PARA SUBIR TODO EL SCROLL
btnArrowUp.addEventListener('click', () => {
    window.scroll(0, 0);
})

// ABRIR MENU
document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('sidenav').classList.remove('right-[-380px]')
    document.getElementById('sidenav').classList.add('right-0')
});

// CERRAR MENU
document.getElementById('exit-menu').addEventListener('click', () => {
    document.getElementById('sidenav').classList.remove('right-0')
    document.getElementById('sidenav').classList.add('right-[-380px]')
});

window.addEventListener('click', (e) => {
    // CERRAR MENU DESDE AFUERA Y DENTRO
    if (e.target != true) {
        document.getElementById('sidenav').classList.remove('right-0')
        document.getElementById('sidenav').classList.add('right-[-380px]')
    }
}, true);

// ENVIO DE FORMULARIO DE CONTACTO
const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    console.log('se envcio')
    event.preventDefault();

    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        this.reset();
        Swal.fire(
            'Envio satisfactorio',
            'Gracias por contactarme, te escribiré pronto.',
            'success'
        )
    }
}