// $(document).ready(function () {

//     $('.team__player-link').on("click", e => {
//         e.preventDefault();
//         let showHide =$(e.currentTarget).siblings('.team__player-text').slideToggle(300);
//         let toggleClass = $(e.currentTarget).toggleClass('team__player-link--active');
//         let another = $(e.currentTarget).closest('.team__list').find('.team__player-link');


        
//    })

// });

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

    removeLink = container.find('.team__player-link');
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
