// hamburger-menu toggle on/off

let button = document.querySelector('#toggle');
let menu = document.querySelector('#burger-menu');
let plank = document.querySelector('#plank');
let body = document.querySelector('body');

let toggleMenu = function() {
    button.classList.toggle('hamburger-container--active');
    plank.classList.toggle('.hamburger__plank--open');
    menu.classList.toggle('burger-menu--open');
    body.classList.toggle('body-active-menu');

}

button.addEventListener('click', toggleMenu);   

// hamburger-menu toggle on/off