(function($) {
  "use strict";
  var width = $(window).width();
  var resizez = function(){
    width = $(window).width();
    };

    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-dark bg-dark");
            $("#menu-rapido").addClass("invisible");
            $("#mainNav").removeClass("mt-5");

          }
        else {
          $("#mainNav").removeClass("navbar-dark bg-dark");
            $("#mainNav").addClass("mt-5");
            $("#menu-rapido").removeClass("invisible");
          }
      };

      var navbarCollapseWM = function() {
              $("#mainNav").addClass("navbar-dark bg-dark");
              $("#menu-rapido").addClass("invisible");
              $("#mainNav").removeClass("mt-5");
        };
      if (width > 980) {
        navbarCollapse();
        $(window).scroll(navbarCollapse);
      }
      else {
        navbarCollapseWM();
        $(window).scroll(navbarCollapseWM);
      }

      resizez();
      $(window).resize(resizez);


      var $doc =$('html, body');
      $('li a div a').click(function(){
        $doc.animate({
          scrollTop:$($.attr(this,'href')).offset().top + $(this).height()-200},600);
          return false;
      });
      $('div a').click(function(){
        $doc.animate({
          scrollTop:$($.attr(this,'href')).offset().top + $(this).height()-200},600);
          return false;
      });

})(jQuery);
