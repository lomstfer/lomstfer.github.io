const header = document.getElementById('header');
const header_nav = document.getElementById('header_nav');
const menuButton = document.getElementById('menu_button');

menuButton.addEventListener('click', () => {
    header.classList.toggle('menu_open');
    header_nav.classList.toggle('menu_open');
    menuButton.classList.toggle('menu_button_open');
});