/*
  Checking out my source?  
  Why not just go here:
  https://github.com/shertle

  Your welcome.
*/

// Apply JS only after HTML finishes loading
$(document).ready(function() {
    //console.log("works woohoo!");

    // Darken Nav Bar after scrolling down
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      // Mobile with small screen height
      if ($(window).height() < 490) {
        if (scroll >= 50 && scroll <= 1100) {
          $("nav").addClass("nav-opac");
        } 
        else {
          $("nav").removeClass("nav-opac");
        }
      }
      // Shrunken desktop and mobile layout
      else if ($(window).width() < 800) {
        if (scroll >= 50 && scroll <= 1350) {
          $("nav").addClass("nav-opac");
        } 
        else {
          $("nav").removeClass("nav-opac");
        }
      }
      // Regular desktop
      else {
        if (scroll >= 50 && scroll <= 1200) {
          $("nav").addClass("nav-opac");
        } 
        else {
          $("nav").removeClass("nav-opac");
        }
      }

    });

    // Enable smooth scroll from nav-bar links
    $('a').smoothScroll();
});