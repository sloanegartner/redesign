$(window).scroll(function(){
    $scroll = $(window).scrollTop();
    
    if ($scroll > 0) {
        $('#navbar').css('background', '#1e0a0a');
    } else {
        $('#navbar').css('background', 'Transparent');
    }
});

//images
$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    smartSpeed: 600,
    autoplay:true,
    autoplayTimeout:4100,
    autoplayHoverPause:true,
    autoplaySpeed: 1500,
    animateOut: 'fadeOut',

})

//Reviews
$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    smartSpeed: 900,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    autoplaySpeed: 2000,

})
