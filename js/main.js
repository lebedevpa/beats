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

// form and modal

const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach(field => {
        field.removeClass("input-error");
        if(field.val().trim() == "") {
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");

    return errorFields.length == 0;

}

$('.form').submit(e => {
    e.preventDefault();
    
    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const content = modal.find("modal__content");

    modal.removeClass("error-modal");

    const isValid = validateFields(form, [name, phone, comment, to]);

    if (isValid) {
        const request = $.ajax({
            url:"https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name:name.val(),
                phone: phone.val(),
                comment:comment.val(),
                to:to.val(),
            },
            
        });

        request.done(data => {
            content.text(data.message)
            
        });

        request.fail(data => {
            const message = data.responseJSON.message;
            content.text(message);
            modal.addClass("error-modal");
                
                
        });
        
        request.always(() => {
            $.fancybox.open({
                src: "#modal",
                type: "inline"
            });
        })
    }
    
});

$(".app-submit-btn").click(e => {
    e.preventDefault();

    $.fancybox.close();
})