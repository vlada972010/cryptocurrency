$(document).ready(function () {
    $('#buy-parsec').on('click', function () {
        $('#first-page').fadeOut(500).css({
            display: 'none',
        });
        $('#second-page').fadeIn(500).css({
            display: 'block',
        });
    });
    $('#next-page').on('click', function () {
        $('#second-page').fadeOut(500).css({
            display: 'none',
        });
        $('#third-page').fadeIn(500).css({
            display: 'block',
        });
    });


    $('#next2').on('click', function () {
        $('#third-page').fadeOut(500).css({
            display: 'none',
        });
        $('#fourth-page').fadeIn(500).css({
            display: 'block',
        });
    });
    $('#finish').on('click', function () {
        $('#fourth-page').fadeOut(500).css({
            display: 'none',
        });
        $('#first-page').fadeIn(500).css({
            display: 'block',
        });
    });

});