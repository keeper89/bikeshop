$(document).ready(function() {
    $("#bs-gallery-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        itemsDesktop : false,
        itemsDesktopSmall : [1080, 2],
        itemsTablet : [750, 1],
        itemsMobile : false
    });
});

$(document).ready(function(){
    $('.bs-scroll-down').click(function(){
        $('html, body').animate({ scrollTop: $(".bs-categories").offset().top }, 500);
        return false;
    });
});
