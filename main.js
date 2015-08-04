// Controls Fading of Menu Bar
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("nav").addClass("navOpac");
    } else {
        $("nav").removeClass("navOpac");
    }
});