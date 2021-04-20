// hamburger-menu toggle on/off

let button = document.querySelector('#toggle');
let menu = document.querySelector('#burger-menu');  
let hamburger = document.querySelector('#hamburger')
let body = document.querySelector('body');

let toggleMenu = function() {
    button.classList.toggle('hamburger-container--active');
    hamburger.classList.toggle('hamburger--active')
    menu.classList.toggle('burger-menu--open');
    body.classList.toggle('body-active-menu');
}

button.addEventListener('click', toggleMenu);   

// OPS

const sections = $("section");
const display = $(".main-content")

const performTransition = sectionEq => {
    const position = sectionEq * -10;

    display.css({
        transform: `translateY(${position}%)`
    })
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        performTransition(2);

    }

    if (deltaY < 0) {


    }

});