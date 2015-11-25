$(function() {
    console.log( "ready!" );
// slick slider function for testimonials
    $('.slider').slick({
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed:5000,
      prevArrow:"<div class='icon-arrowleft'></div>",
      nextArrow:"<div class='icon-arrowright'></div>"
      // prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/Testimonial-LEFTArrow-HOVER.png'>",
      // nextArrow:"<img class='a-right control-c next slick-next' src='../assets/Testimonial-RIGHTArrow-HOVER.png'>"
    });


// cta popup
  $('.cta-button').on('click', function(){
    // var popupHeight = $('#cta .popup').outerHeight();
    // $('#cta').outerHeight(popupHeight + 60);
    $('#cta .popup').addClass('showup');
    $('#cta .cta-button').addClass('hide');
  });

  $('#cta .popup .close').on('click', function(){
    $('#cta .popup').removeClass('showup');
    // $('#cta').removeAttr('style');
    $('#cta .cta-button').removeClass('hide');
  });

// back to top
  $('.icon-backtotop').on('click', function(){
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });

  $(document).on("scroll", onScroll);

  		$('a[href^="#"]').on('click', function (e) {
  			e.preventDefault();
  			$(document).off("scroll");

  			$('.nav-item a').each(function () {
  				$(this).removeClass('active');
  			});
  			$(this).addClass('active');

  			var target = this.hash;
  			$target = $(target);
  			$('html, body').stop().animate({
  				'scrollTop': $target.offset().top-130
  			}, 900, 'swing', function () {
  				window.location.hash = target;
  				$(document).on("scroll", onScroll);
  			});
  		});

// inserting iframe
  $('.video-play-button').on('click', function(){
    $('#video-play-button-container').fadeOut(800, function(){
      $('#video-player').html('<iframe src="https://player.vimeo.com/video/88905553?autoplay=1&title=0&byline=0&portrait=0" width="500" height="366" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    });
  });

});// end document ready


//scroll on top of section activates.
function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.nav-item a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top-140 <= scrollPosition && refElement.position().top-140 + refElement.height() > scrollPosition) {
				$('nav ul li .nav-item a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
	}
