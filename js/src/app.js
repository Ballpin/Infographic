$(document).ready(function () {

    $('.withInfo').click(function (e) {
        $(this).css('max-height', '999px');
    });

    $('section.headline, section.coke-info').fadeIn('fast').css('display', 'flex');

    $('.content').append('<section class="bottom"></section>');

    $('section.bottom').append('<button onclick="location.reload()">Reload</button>')

});