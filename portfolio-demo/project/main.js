const menuBtn = document.getElementsByClassName('menu-btn');
const hamburger = document.getElementsByClassName('menu-btn-burger');
const nav = document.getElementsByClassName('nav');
const menuNav = document.getElementsByClassName('menu-nav');

let showMenu = false;

menuBtn.addEventListener('click', () => { if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');

    showMenu = true;
} else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    remove

    showMenu = false;
}});