(function () {


const validateFields = (form, fieldArray) => {
    fieldArray.forEach(field => {
        field.removeClass("input-error");
        if (field.val().trim() == "") {
            field.addClass("input-error");
        }
    });


    const errorFields = form.find(".input-error")
    return errorFields.length == 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name ='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $('.modal__container');
    const content = modal.find('.modal__content');

    modal.removeClass("error-modal");

    const isValid = validateFields(form, [name, phone, comment, to]);



    if (isValid) {
        document.body.classList.add('stop-scrolling');
        const request = $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val()
            },


        });
        request.done(data => {
            content.text(data.message);
          

        })

        request.fail(data => {
            const message = data.responseJSON.message;
            content.text(message);
            modal.addClass("error-modal");
        })
        
        request.always(() => {
            $.fancybox.open({
                src: ".modal__container",
                type: "inline"
            });
            
        })
    };
})


$('.app-submit-btn').click(e => {
    e.preventDefault();
    $.fancybox.close();
    document.body.classList.remove('stop-scrolling');
})  


}())