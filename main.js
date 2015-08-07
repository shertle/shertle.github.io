// Check that jQuery is working properly
/*window.onload = function() {
    alert( "welcome" ); 
};
*/

    $("body").click(function() {
        alert( "Handler for .click() called." );
    });

$(document).ready(function() {

    // Controls Fading of Menu Bar
    $("section").scroll(function() {    
        var scroll = $(window).scrollTop();
        alert("scrolled");
        console.log('scrolled');

        if (scroll >= 5) {
            $("nav").addClass("navOpac");
        } 
        else {
            $("nav").removeClass("navOpac");
        }

    });

    $("body").click(function() {
        alert( "Handler for .click() called." );
    });
});