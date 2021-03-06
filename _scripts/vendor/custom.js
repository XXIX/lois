$(document).ready(function() {

	// hide/show nav
   $('nav').mouseenter(function() {
		$('.nav-extended').slideDown('fast');
	});
   $('nav').mouseleave(function() {
		$('.nav-extended').slideUp('fast');
	});

	// set the min height of each section
	$(window).resize(function() {
		var sectionMinHeight = $(window).height();

		var sectionWidth = ($('.section-right').width()) * .8;
		var sectionMaxHeight = sectionMinHeight * .6;
		var imgContainer = $('.img-container');

		// set height of sections
		if (($(window).innerWidth()) > 480) {
			$('.hero .section-inner').css('min-height', sectionMinHeight);
		} else {
			//
		}
	});

	// scroll to top
	$(document).ready(function(){
		$('#top').click(function() {
			$("html, body").animate({ scrollTop: 0 }, "fast");
		});
	});

	$(window).trigger('resize');

	// scrolling nav
	var section_margins = 80;
	var top_offset = $('nav').height() + section_margins;  // get height of fixed navbar
	$('#nav-list').onePageNav({
	    currentClass: 'current',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    scrollOffset: top_offset,
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});
});