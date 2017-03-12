$(document).ready(function() {
						
				
		
		
			$('#fullpage').fullpage({
				anchors: ['secondPage' , 'thirdPage'],
				loopHorizontal: false,
				slidesNavigation: false,
				scrollingSpeed: 1300,
				easing: 'easeInOutQuad',
				keyboardScrolling: false,
				menu: '#menu'
				
				
			});
			
			$.fn.fullpage.setAllowScrolling(false);
			
			        
   
			 $(".close-button").click(function(){
			$(".intro-box").addClass("intro-reveal");
		     $(".materalise-button").addClass("image-reveal");
		    
		    
		     });
		     
		     $(".dambura-link").hover(function () {
    $(".dambura-thumb").toggleClass("image-reveal");
});




		     $(".kite-link").hover(function () {
    $(".kite-thumb").toggleClass("image-reveal");
});

   $(".fly-button").click(function () {
    $(".fly-image").addClass("fly-image-shift");
    $(".fly-text").addClass("fly-text-shift");
     $(".fly-icon").addClass("remove-invisibile");
    setTimeout(function(){
    $(".fly-icon").addClass("icon-reveal");
     }, 700);
    

});

$(".fly-close-button").click(function () {
    $(".fly-image").removeClass("fly-image-shift");
    $(".fly-text").removeClass("fly-text-shift");
    $(".fly-icon").removeClass("icon-reveal");
    $(".play-image").removeClass("fly-image-shift");
    $(".play-text").removeClass("fly-text-shift");
    
    
});

  $(".play-button").click(function () {
    $(".play-image").addClass("fly-image-shift");
    $(".play-text").addClass("fly-text-shift");
    $(".fly-icon").addClass("remove-invisible");
      setTimeout(function(){
    $(".fly-icon").addClass("icon-reveal");
     }, 700);
    

});


$(".to-nav-button").click(function () {
    $(".intro-top").addClass("shift-intro-top");
    $(".intro-bottom").addClass("shift-intro-bottom");
    setTimeout(function(){
	$(".intro-box").addClass("z-reset");
     }, 1300);
    
});

$(".involve-close").click(function () {
    $(".involved-top").removeClass("shift-involved-top");
    $(".involved-bottom").removeClass("shift-involved-bottom");
    setTimeout(function(){
	$(".involved-box").removeClass("z-increase");
	}, 1300);
    
});

$(".get-involved").click(function () {
    $(".involved-top").addClass("shift-involved-top");
    $(".involved-bottom").addClass("shift-involved-bottom");
    $(".involved-box").addClass("z-increase");
    
    
});

$(".involve-close").click(function () {
    $(".involved-top").removeClass("shift-involved-top");
    $(".involved-bottom").removeClass("shift-involved-bottom");
    setTimeout(function(){
	$(".involved-box").removeClass("z-increase");
	}, 1300);
    
});



$(".materialise-button").click(function () {
    $(".intro-top").removeClass("shift-intro-top");
    $(".intro-bottom").removeClass("shift-intro-bottom");
	$(".intro-box").removeClass("z-reset");
    
});


   
  			   
	   			



var illustration_slider = $("#illustration-slider");
 
 
  illustration_slider.owlCarousel({
	  autoPlay: true,
	  lazyLoad : true,
      slideSpeed : 600,
      pagination:false,
      touchDrag:false,
      singleItem:true
  
  });


 var dambura_slider = $("#dambura-slider");
 
 
  dambura_slider.owlCarousel({
 
      slideSpeed : 600,
      lazyLoad : true,
      pagination:false,
      rewindNav:false,
      singleItem:true
  
  });
  
    // Custom Navigation Events
  $(".dam-next , .dam-slide").click(function(){
    dambura_slider.trigger('owl.next');
  })
  $(".dam-prev").click(function(){
   dambura_slider.trigger('owl.prev');
  })
  
  $('.dam-button').click(function(){
    dambura_slider.trigger('owl.goTo', 0)
  });
  
  
  $('.dam-gather').click(function(){
    dambura_slider.trigger('owl.goTo', 1)
  });
  
  
  $('.dam-make').click(function(){
   dambura_slider.trigger('owl.goTo', 3)
  });
  
  
  var kite_slider = $("#kite-slider");
 
 
  kite_slider.owlCarousel({
 
      slideSpeed : 600,
      lazyLoad : true,
      pagination:false,
      rewindNav:false,
      singleItem:true
  
  });
  
    // Custom Navigation Events
    
  

  $(".kite-next ,.kite-slide").click(function(){
    kite_slider.trigger('owl.next');
  })
  $(".kite-prev").click(function(){
   kite_slider.trigger('owl.prev');
  })
  
  
   $('.kite-button').click(function(){
   kite_slider.trigger('owl.goTo', 0)
  });

   $('.kite-gather').click(function(){
   kite_slider.trigger('owl.goTo', 1)
  });
  
  
  $('.kite-make').click(function(){
    kite_slider.trigger('owl.goTo', 3)
  });



$(".back-to-m-button").click(function () {
setTimeout(function(){
	dambura_slider.trigger('owl.goTo', 0);
	kite_slider.trigger('owl.goTo', 0);
		    }, 1300);
    
   
});


var originalText = $('.involved-share p').text();

$('.involved-share').hover(function() {

var $p = $(this).find('p');

$p.fadeOut(300, function () {
    $(this).text('#mate_rialise').fadeIn(300);
});  
}, function(){
  $(this).find('p').fadeOut(300,function(){
    $(this).text(originalText).fadeIn(300);
  });
});

var firstText = $('.involved-follow p').text();

$('.involved-follow').hover(function() {

var $p = $(this).find('p');

$p.fadeOut(300, function () {
    $(this).text('the change').fadeIn(300);
});  
}, function(){
  $(this).find('p').fadeOut(300,function(){
    $(this).text(firstText).fadeIn(300);
  });
});

				
});
				 
		
		
			
