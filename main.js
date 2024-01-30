$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    
    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newImageUrl = $('#url-new-image').val();
        const newItem = $('<li style="display: none"></li>');

        $(`<img src="${newImageUrl}">`).appendTo(newItem);
        $(`<div class="overlay-image-link"><a href="${newImageUrl}" target="_blank" title="View full size image">View full size image</a></div>`).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#url-new-image').val('');
    })
})