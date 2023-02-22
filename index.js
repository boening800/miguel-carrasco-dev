// ABRIR MENU
document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('sidenav').classList.remove('right-[-380px]')
    document.getElementById('sidenav').classList.add('right-0')
})
// CERRAR MENU
document.getElementById('exit-menu').addEventListener('click', () => {
    document.getElementById('sidenav').classList.remove('right-0')
    document.getElementById('sidenav').classList.add('right-[-380px]')
})