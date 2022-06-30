$(document).ready(function () {

    $('.team__player-link').on("click", e => {
        e.preventDefault();
        let showHide =$(e.currentTarget).siblings('.team__player-text').slideToggle(300);
        let toggleClass = $(e.currentTarget).toggleClass('team__player-link--active');
        let another = $(e.currentTarget).closest('.team__list').find('.team__player-link');
  
        
   })

});
