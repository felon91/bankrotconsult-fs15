$(document).ready(function() {
	var owl = $('.owl-carousel');
		owl.owlCarousel({
			margin: 30,
		nav: true,
		dots: false,
		loop: true,
		navText: [],
		responsive: {
  			0: {
    			items: 1
  			},
  			860: {
  				items: 2
  			}
		}
		});


    var isAnimated = false;
    $(".hamburger img").on("click", function(e) {
      e.preventDefault();
      if(isAnimated === false) {
        isAnimated = true;
        if($(".top-menu").hasClass("top-menu-active")) {
          $(".top-menu").removeClass('top-menu-active');
          $(".top-menu").slideUp(300);

          setTimeout(function(){
            isAnimated = false;
          }, 300);

        } else {
          isAnimated = true;
          $(".top-menu").addClass('top-menu-active');
          $(".top-menu").slideDown(300);

          setTimeout(function(){
            isAnimated = false;
          }, 300);

        }
        
      }

    });

    $(".top-menu__close").on("click", function(e) {
      e.preventDefault();
      if(isAnimated === false) {
        isAnimated = true;
        if($(".top-menu").hasClass("top-menu-active")) {
          $(".top-menu").removeClass('top-menu-active');
          $(".top-menu").slideUp(300);

          setTimeout(function(){
            isAnimated = false;
          }, 300);

        } else {
          isAnimated = true;
          $(".top-menu").addClass('top-menu-active');
          $(".top-menu").slideDown(300);

          setTimeout(function(){
            isAnimated = false;
          }, 300);

        }
        
      }

    });

    $(".tablet-phone__close").on("click", function(e) {
      e.preventDefault();
       $(".tablet-phone").slideUp(300);
    });

     $(".faq-all-row .faq-all__element").on("click", function(e) {
      e.preventDefault();
      if(isAnimated === false) {
        isAnimated = true;
        if($(this).hasClass("faq-all__element-active")) {
          $(this).removeClass('faq-all__element-active');
          $(".faq-all__answer", this).slideUp(700);

          setTimeout(function(){
            isAnimated = false;
          }, 300);

        } else {
          isAnimated = true;
          $(this).addClass('faq-all__element-active');
          $(".faq-all__answer", this).slideDown(700);

          setTimeout(function(){
            isAnimated = false;
          }, 300);

        }
        
      }

    });
    

});

$(window).resize(function(){

  if(window.innerWidth >= 780) {
    $(".top-menu").removeAttr('style');
     $(".top-menu").removeClass('top-menu-active');
  }

});