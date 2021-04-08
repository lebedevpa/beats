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

//Accordeon

const openItem = item => {
    const container = item.closest(".slider__item");
    const contentBlock = container.find(".slider__description");
    const textBlock = contentBlock.find(".slider__description--wrap");
    const reqHeight = textBlock.height();


    container.addClass("slider__item--active")
    contentBlock.height(reqHeight);
}   

const closeEveryItem = container => {

    const items = container.find(".slider__description");
    const itemContainer = container.find(".slider__item");

    itemContainer.removeClass(".slider__item--active");
    items.height(0);

}

$('.slider__name').click((e) => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".slider__list");
    const elemContainer = $this.closest(".slider__item");


    if (elemContainer.hasClass("slider__item--active")) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container); 
        openItem($this);
    }

})


//reviews-slider

const findBlockByAlias = alias => {
    return $(".review__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias
    });
}

$(".avatar-round").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const curItem = $this.closest(".usernames__item");
    const itemToShow = findBlockByAlias(target);

    itemToShow.addClass("review__item--active").siblings().removeClass("review__item--active")
    curItem.addClass("username--active").siblings().removeClass("username--active");
})



