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





/*priorita

Protect your partner
Ensure they have everything they need if you pass away first.


Secure your children’s future
Appoint guardians if they’re under 18 and make sure everyone gets a fair share.


Choose who inherits your home
Split your estate between friends, family and even charities.


////////////////////////

//partner
Leave gifts and messages
Give your loved ones something to remember you by.

//deti
Set out your funeral wishes
Choose everything from the music to your final resting place.

//domov
Share out your estate
Divide everything up between friends, family and even charities.

*/


// onboarding appka

let triVeci = [
  {
    "h2": "",
    "p": ""
  },
  {
    "h2": "",
    "p": ""
  },
  {
    "h2": "",
    "p": ""
  }
];

const update3Veci = (triVeci) => {

  $(".triVeci1 h2").text(triVeci[0].h2);
  $(".triVeci2 h2").text(triVeci[1].h2);
  $(".triVeci3 h2").text(triVeci[2].h2);

  $(".triVeci1 p").text(triVeci[0].p);
  $(".triVeci2 p").text(triVeci[1].p);
  $(".triVeci3 p").text(triVeci[2].p);
}

update3Veci(triVeci);



// 1 fáze

$(".zacatek .faze1 button").click(function() {
  $(".faze1").addClass("schovat");
  $(".faze2").removeClass("schovat");
});


// 2 fáze

  // Zpět tlačítko

  $(".zacatek .faze2 .otazka1 .zpet").click(function() {
    $(".faze2").addClass("schovat");
    $(".faze1").removeClass("schovat");
  });

  $(".zacatek .faze2 .otazka2 .zpet").click(function() {
    $(".otazka2").addClass("schovat");
    $(".otazka1").removeClass("schovat");
  });

  $(".zacatek .faze2 .otazka3 .zpet").click(function() {
    $(".otazka3").addClass("schovat");
    $(".otazka2").removeClass("schovat");
  });

  $(".zacatek .faze2 .otazka4 .zpet").click(function() {
    /*$(".otazka4").addClass("schovat");
    $(".otazka3").removeClass("schovat");*/

    window.location.href = "https://mojezavet.cz";
  });




  // Dál tlačíka

  $(".zacatek .faze2 .otazka1 .otazky button").click(function() {
    $(".otazka2").removeClass("schovat");
    $(".otazka1").addClass("schovat");

    // Mate partnera?
    
    if ($(this).attr('class') === "ano") {
      triVeci[0] = {
        "h2": "Myslete na svého partnera",
        "p": "Postarejte se, že dostane vše, co potřebuje, v případě, že zemřete jako první."
      }

      update3Veci(triVeci);
    }

    else {
      triVeci[0] = {
        "h2": "Ulehčete situaci svým blízkým",
        "p": "Popište svá poslední přání týkající se pohřbu, domácích mazlíčků nebo vytvořte přehledný soupis vašeho majetku."
      }

      update3Veci(triVeci);
    }
  });

  $(".zacatek .faze2 .otazka2 .otazky button").click(function() {
    $(".otazka3").removeClass("schovat");
    $(".otazka2").addClass("schovat");

    // Mate deti?
    
    if ($(this).attr('class') === "ano") {
      triVeci[1] = {
        "h2": "Zajistěte budoucnost vašim dětem",
        "p": "Jmenuje poručníka pro nezletilé a postarejte se, aby každý dostal spravedlivý díl."
      }

      update3Veci(triVeci);
    }

    else {
      triVeci[1] = {
        "h2": "Zanechte svým blízkým dárky a vzkazy",
        "p": "Odkažte lidem okolo vás různé věci a osobní zprávy."
      }

      update3Veci(triVeci);
    }
  });

  $(".zacatek .faze2 .otazka3 .otazky button").click(function() {
    $(".otazka4").removeClass("schovat");
    $(".otazka3").addClass("schovat");

    // Mate domov?
    
    if ($(this).attr('class') === "ano") {
      triVeci[2] = {
        "h2": "Vyberte kdo zdědí Váš domov",
        "p": "Rozdělte svůj matejek mezi rodinu, přátele nebo dokonce i charity."
      }

      update3Veci(triVeci);
    }

    else {
      triVeci[2] = {
        "h2": "Vyberte kdo zdědí Váš majetek",
        "p": "Rozdělte ho mezi rodinu, přátele nebo charitu."
      }

      update3Veci(triVeci);
    }
  });

  $(".zacatek .faze2 .otazka4 .otazky button").click(function() {
    // Je z EU?
    
    if ($(this).attr('class') === "ano") {
      
      /*
      $(".faze3 .fail").addClass("schovat");
      $(".faze3 .success").removeClass("schovat");
      */

      window.location.href = "https://zavet.mojezavet.cz";


    }

    else {
      // sorry jako nejsi z eu tak nic nedostanes

      $(".faze3 .success").addClass("schovat");
      $(".faze3 .fail").removeClass("schovat");

      $(".faze3").removeClass("schovat");
      $(".faze2").addClass("schovat");
    }

    /*
    
    */
  });


// 3 fáze


$(".zacatek .faze3 button").click(function() {
  $(".faze3").addClass("schovat");
  $(".faze2").removeClass("schovat");
});