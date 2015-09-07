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
  $(window).scroll(navBarScrollOpacity);

});

/* Darken the Nav Bar based on how far the user scrolls down.  Change
 * the required scroll distance based on the screen proportions.
 */
var navBarScrollOpacity = function() {    
  
  // Mobile layout
  if ($(window).width() < 500) {

    // Mobile with small screen height
    if ($(window).height() < 500) {
      breakpointNavBarOpacity(500, true);
    }
    // Mobile layout
    else if ($(window).height() < 600) {
      breakpointNavBarOpacity(600, true);
    }
    // Tall mobile layout
    else if ($(window).height() < 700) {
      breakpointNavBarOpacity(700, true);
    }
    // Taller mobile layout
    else if ($(window).height() < 800) {
      breakpointNavBarOpacity(800, true);
    }
  }
  // Desktop layout
  else {
    var scroll = $(window).scrollTop();
    // Smaller Desktop layout
    if ($(window).width() < 800) {
      breakpointNavBarOpacity(800, false);
    }
    // Regular desktop
    else if ($(window).width() < 1500) {
      breakpointNavBarOpacity(1500, false);
    }
  }
  
  console.log("width: " + $(window).width());
  console.log("height: " + $(window).height());

  // Enable smooth scroll from nav-bar links
  $('a').smoothScroll();
};

/* Taking an input screen height break point, darken the Nav Bar accordingly.
 */
var breakpointNavBarOpacity = function (screenSizeBreakpoint, mobileLayout) {
  var scroll = $(window).scrollTop();

  // Map the screen height break point to the required scroll distance
  var screenHeightToScrollDistance = {
    500: 1100,
    600: 1200,
    700: 1350,
    800: 1550
  }

  // Map the screen width break point to the required scroll distance
  var screenWidthToScrollDistance = {
    800: 1300,
    1500: 1200
  }

  var scrollDistance = screenWidthToScrollDistance[screenSizeBreakpoint];

  if (mobileLayout) {
    scrollDistance = screenHeightToScrollDistance[screenSizeBreakpoint];
  }

  // Darken Nav Bar when scrolled past a certain point
  if ($(window).width() < screenSizeBreakpoint) {
    if (scroll >= 50 && scroll <= scrollDistance) {
      $("nav").addClass("nav-opac");
    } 
    else {
      $("nav").removeClass("nav-opac");
    }
  }

}
