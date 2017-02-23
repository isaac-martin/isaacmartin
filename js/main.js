

//	HISTORICIZE AND AJAXIFY OUR SITE
$(document).ready(function() {
	var siteUrl = 'http://'+(document.location.hostname||document.location.host);

	//	Catch all internally-focused links and push a new state.
	//	Note: External links will not be affected by this behavior.
	$(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
		e.preventDefault();
		History.pushState({}, "", this.pathname);
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	History.Adapter.bind(window, 'statechange', function(){
		var State = History.getState();
		$.get(State.url, function(data){	// Use AJAX to get the new content.
			document.title = data.match(/<title>(.*?)<\/title>/)[1];
			$('.ajax').html($(data).find('.ajax').parent());

			//_gaq.push(['_trackPageview', State.url]);
			// This updates Google Analytics with a visit to the new page.
		});
	});
		initMap();
});
// Custom JS
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});


$(document).ajaxComplete(function(){
	initMap();
});

// var feed = new Instafeed({
// 				target: 'instagram'
//         get: 'user',
//         userId: 'sportsclinicmelb',
//         clientId: 'f75587d885b54a9ba9453d07f36c9055'
//     });
// feed.run();


$.fn.resizer = function(){
	var wide = $('.service-bg').css('width');
	var calculate = parseInt(wide, 10)* 0.6;
	$('.service-bg').css('height', calculate);
};

$(document).ready(function(){
	 	$().resizer();
 $("input,textarea").focus(function(){
   $(this).parent().addClass("focused");
  }).blur(function(){
       $(this).parent().removeClass("focused");
  })
});


$(window).on('resize',function() {
 	$().resizer();
});
