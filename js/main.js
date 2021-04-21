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

let inScroll = false;

sections.first().addClass("section--active");

const performTransition = sectionEq => {

    if (inScroll === false) {
        inScroll = true;
        const position = sectionEq * -100;

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr("data-sidemenu-theme");
        const sideMenu = $(".fixed-menu");


        if (menuTheme === "white") {
            sideMenu.addClass("fixed-menu__link--theme--light");
        } else {
            sideMenu.removeClass("fixed-menu__link--theme--light");
        }

        display.css({
            transform: `translateY(${position}%)`
        })
    
        sections.eq(sectionEq).addClass("section--active").siblings().removeClass("section--active");
        
        

        setTimeout(() => {
            inScroll = false;

            sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");

        }, 1300);
    }

   
};

const scrollViewport = direction => {

    const activeSection = sections.filter(".section--active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
};


$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");

    }

    if (deltaY < 0) {
        scrollViewport("prev");

    }

});

 $(window).on("keydown", (e) => {
    const tagName = e.target.tagName.toLowerCase();

    if (tagName != "input" && tagName != "textarea") {
        switch (e.keyCode){
            case 38:
                scrollViewport("prev");
                break;
    
            case 40:
                scrollViewport("next");
                break;
        }
    }


});

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());

});

// https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

$("body").swipe({
    swipe: function (event, direction) {
        const scroller = viewportScroller();
        let scrollDirection = "";

        if (direciton === "up")scrollDirection = "next";
        if (direciton === "down")scrollDirection = "prev";
        
        scroller[scrollDirection]();
    },
});
    