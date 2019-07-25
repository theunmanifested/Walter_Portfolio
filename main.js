$(document).ready(function() {
    // nav menu drops down
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    // // nav menu functionality
    // $('.top-nav .nav-link').on('click', function () {
    //     $('.menu-toggler').removeClass('open');
    //     $('.top-nav').removeClass('open');
    // });

    // // nav menu scrolling
    // $('nav a[href*="#"]').on('click', function () {
    //     $('html, body').animate( keyframes: {
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, options:2000);
    // });
});