// Check that jQuery is working properly
/*
window.onload = function() {
    alert( "welcome" ); 
};
*/


$(document).ready(function() {
    //console.log("works woohoo!");

    // Darken Nav Bar after scrolling down
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $("nav").addClass("navOpac");
        } 
        else {
            $("nav").removeClass("navOpac");
        }

    });

});