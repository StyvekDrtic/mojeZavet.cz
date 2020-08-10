// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// faqs

$(".otazka .tlacitko").click(function() {
  if ($(this).parent().hasClass("zavreno")) {


    $(this).parent().removeClass("zavreno");
  }

  else {

    $(this).parent().addClass("zavreno");
  }
});


// menu

$(".otevritMenu").click(function() {
  if ($(".mobilniMenu").hasClass("mobilniMenuZavrit")) {
    $(".mobilniMenu").removeClass("mobilniMenuZavrit");
    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeInDown");
  }

  else {
    $(".mobilniMenu").removeClass("animated");
    $(".mobilniMenu").removeClass("fadeInDown");

    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeOutUp");

    setTimeout(function(){
      $(".mobilniMenu").addClass("mobilniMenuZavrit");
      $(".mobilniMenu").removeClass("animated");
      $(".mobilniMenu").removeClass("fadeOutUp");
    }, 1000);
  }
});

$(".zavritMenu").click(function() {
  if ($(".mobilniMenu").hasClass("mobilniMenuZavrit")) {
    $(".mobilniMenu").removeClass("mobilniMenuZavrit");
    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeInDown");
  }

  else {
    $(".mobilniMenu").removeClass("animated");
    $(".mobilniMenu").removeClass("fadeInDown");

    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeOutUp");

    setTimeout(function(){
      $(".mobilniMenu").addClass("mobilniMenuZavrit");
      $(".mobilniMenu").removeClass("animated");
      $(".mobilniMenu").removeClass("fadeOutUp");
    }, 1000);
  }
});

$(".mobilniMenu nav ul a").click(function() {
  if ($(".mobilniMenu").hasClass("mobilniMenuZavrit")) {
    $(".mobilniMenu").removeClass("mobilniMenuZavrit");
    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeInDown");
  }

  else {
    $(".mobilniMenu").removeClass("animated");
    $(".mobilniMenu").removeClass("fadeInDown");

    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeOutUp");

    setTimeout(function(){
      $(".mobilniMenu").addClass("mobilniMenuZavrit");
      $(".mobilniMenu").removeClass("animated");
      $(".mobilniMenu").removeClass("fadeOutUp");
    }, 1000);
  }
});
