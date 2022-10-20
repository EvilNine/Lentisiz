$(document).ready(function(){
    $('.main_slider--wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: $('.main_slider--slick-prev'),
        nextArrow: $('.main_slider--slick-next'),
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).find('.main_slider--icon').html(),
                category= $(slider.$slides[i]).data('category');
            return '<a><span class="icon">'+thumb+'</span><span class="txt">'+category+'</span></a>';
        },
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    autoplay: false,
                    dots: false,
                    adaptiveHeight: true
                }
            }
        ]

    });
    $('.projects_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: $('.projects_slider--slick-prev'),
        nextArrow: $('.projects_slider--slick-next'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                }
            }
        ]
    });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.gallery_wrap').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.slider_for--item a, .certificates_item--img a').featherlight('image');

    $('.hamburger').click(function(){
        
        if($('body').is('.menu-open')){
            $('body').removeClass('menu-open');
            $('.header_mobile--wrap').fadeOut(300);
        } else {
            $('body').addClass('menu-open');            
            $('.header_mobile--wrap').fadeIn(300);
        }
        
    });
    $('.mobile_sub--link').click(function(){
        $(this).toggleClass('open').next().slideToggle(300);

    });

});