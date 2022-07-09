const mesureWidth = item => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".products-menu");
    const titlesBlocks = container.find(".products-menu__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isTablets = window.matchMedia("(max-width:768px)").matches;
    // const isPhones = window.matchMedia("(max-width:480px)").matches;

    if (isTablets) {

        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingRight - paddingLeft
    }

};

const closeEveryItemInContainer = container => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");

    const isPhones = window.matchMedia("(max-width:480px)").matches;



    items.removeClass("active");
    content.width(0);

}




const openItemProd = item => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".products-menu__container");
    const isPhones = window.matchMedia("(max-width:480px)").matches;

    item.addClass("active");

    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);

}


$('.products-menu__title').on("click", e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu");




    if (itemOpened) {
        closeEveryItemInContainer(container);
    }

    else {
        closeEveryItemInContainer(container);
        openItemProd(item);

    }


});

// const itemsHide = itemOpened.siblings('.products-menu__item').css;


// else {

//     if(isPhones) {
//         closeEveryItemInContainer(container);

//         openItemProd(item);

//     } else {

//         closeEveryItemInContainer(container);
//         openItemProd(item);
//     }
// }