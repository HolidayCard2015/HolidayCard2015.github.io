$(function() {
    console.log( "ready!" );
// slick slider function for testimonials
    $('.slider').slick({
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed:5000,
      prevArrow:"<img class='a-left control-c prev slick-prev' src='../assets/Testimonial-LEFTArrow-HOVER.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='../assets/Testimonial-RIGHTArrow-HOVER.png'>"
    });


// cta popup
  $('.cta-button').on('click', function(){
    $('#cta .popup').addClass('showup');
    $('#cta .cta-button').addClass('hide');
  });

  $('#cta .popup .close').on('click', function(){
    $('#cta .popup').removeClass('showup');
    $('#cta .cta-button').removeClass('hide');
  });

});
