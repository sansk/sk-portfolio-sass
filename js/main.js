const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menuNav = document.querySelector('.nav');
const menuItem = document.querySelector('.menu-nav__item a');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuItem.addEventListener('click', itemHandler);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        menuNav.classList.remove('close');
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        menuNav.classList.add('close');
        showMenu = false;
    }
}

