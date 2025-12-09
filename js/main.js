$(document).ready(function () {
    $('.burger-menu').on('click', function () {
        $('.main-menu').toggleClass('show');
    });

    $('.lang-wrapper a').on('click', function(e) {
        e.preventDefault();
        $('.lang-wrapper a').removeClass('is-active');
        $(this).addClass('is-active');
    });

    const $slickElement = $('#news .news-cards');

    $slickElement.not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'ease-in-out',

        prevArrow: "<button type='button' class='slick-prev pull-left' aria-label='Previous arrow'><i class='fa fa-angle-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right' aria-label='Next arrow'><i class='fa fa-angle-right'></i></button>",

        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    });

});