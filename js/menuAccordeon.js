// const measureWidth = () => {
//     return 524;
// }

// const openProduct = item => {
//     const hiddenContent = item.find('.product__content');
//     const reqWidth = measureWidth();
    
//     hiddenContent.width(reqWidth);
// }

// $(".product").on('click', e => {
//     e.preventDefault();
//     console.log();
//     const $this = $(e.currentTarget);
//     const item = $this.closest(".product")

//     openProduct(item);
// })



const list = $('.products-menu__list');

list.on('click', '.product', function (e) {
    e.preventDefault();
    $(this).siblings('li').removeClass('product--active');
    $(this).toggleClass('product--active');
})