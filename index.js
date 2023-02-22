
//OCULTAR EL MENU SUPERIOR AL HACER SCROLL
const nav = document.querySelector('nav');
function watchMenu() {
    nav.style.top = `-${nav.clientHeight < window.scrollY ?
            nav.clientHeight : 0
        }px`;
}
window.addEventListener('scroll', watchMenu);

//CONFIGURACION DE BOTON PARA SUBIR TODO EL SCROLL
document.getElementById('arrow-up-bottom').addEventListener('click',()=>{
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