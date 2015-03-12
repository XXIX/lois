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

		var sectionWidth = ($('.section-right').width()) * .7;
		var sectionMaxHeight = sectionMinHeight * .5;
		var imgContainer = $('.img-container');

		// set height of sections
		$('.section-inner').css('min-height', sectionMinHeight);

		// set size and position of featured image
		$(imgContainer).css('height', sectionMinHeight);
		$(imgContainer).css('width', sectionWidth);
		$(imgContainer).css('max-height', sectionMaxHeight);

	});

	// vertical center
	function verticalCenter() {
		var parent = $('.section-right');
		var child = parent.find('.img-container');
		var topMargin = (parent.height() - child.height()) / 2;
	  $(parent).each(function(){
	    child.css('margin-top', topMargin);
	  });
	}

	// scroll to top
	$(document).ready(function(){
		$('#top').click(function() {
			$("html, body").animate({ scrollTop: 0 }, "fast");
		});
	});

	verticalCenter();
		$(window).resize(function() {
			verticalCenter();
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

