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

//validateForm



//accordeon

(function(){
    
    let button = document.querySelectorAll('.slider__name');
    let desc_wrap = document.querySelectorAll('.slider__description--wrap');

    let toggleAccordeon = function () {
        button.classList.toggle('slider__name--active');
        desc_wrap.classList.toggle('slider__description--wrap--active');

    }

    button.addEventListener('click', toggleAccordeon);   

})();


// (function(){
//     let button = document.querySelectorAll('.slider__name');
    
//     let desc = document.querySelectorAll('slider__description')
//     let desc_wrap = document.querySelectorAll('.slider__description--wrap')

//     function hideAccordeon(){

//     }

//     function showAccordeon(i){
//         let display = get(desc[i]).display
//         desc_wrap[i].style.display = `${display}`
//         desc_wrap[i].classList.add('slider__description--wrap--active')
//     }

//     for (let i=0; i<button.length; i++) {
//         let current = button[i];

//         current.addEventListener('click', () => {
//             showAccordeon(i)
//         })
//     }
// })();




//owl-carousel




