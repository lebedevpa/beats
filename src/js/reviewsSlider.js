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