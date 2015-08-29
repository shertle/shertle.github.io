/*
  Checking out my source?  
  Why not just go here:
  https://github.com/shertle

  Your welcome.
*/

// Check that jQuery is working properly
/*
window.onload = function() {
    alert( "welcome" ); 
};
*/

// Apply JS only after HTML finishes loading
$(document).ready(function() {
    //console.log("works woohoo!");

    // Darken Nav Bar after scrolling down
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50 && scroll <= 1200) {
            $("nav").addClass("nav-opac");
        } 
        else {
            $("nav").removeClass("nav-opac");
        }
    });

    // Enable smooth scroll from nav-bar links
    $('a').smoothScroll();
});