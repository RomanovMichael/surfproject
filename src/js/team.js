(function () {



const openItem = item => { 
 const container = item.closest('.team__item');
 const contentBlock = container.find(".team__player-text");
 const textBlock = contentBlock.find(".team__player-block");
 const reqHeight = textBlock.height();
 const activeLink = container.find('.team__player-link');

 activeLink.addClass('team__player-link--active');

 contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.team__player-text');

     const removeLink = container.find('.team__player-link');
    removeLink.removeClass('team__player-link--active');
   

    items.height(0);
}

$('.team__player-link').click(e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const container = $this.closest(".team__list");


    if ( $this.hasClass('team__player-link--active')) {
        closeEveryItem(container);
    } else {

        closeEveryItem(container);
        openItem($this);
    }
});



}());