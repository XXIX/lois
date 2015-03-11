$(document).ready(function() {

	// hide/show nav
   $('nav').mouseenter(function() {
		$('.nav-extended').slideDown('fast');
	});
   $('nav').mouseleave(function() {
		$('.nav-extended').slideUp('fast');
	});

	// set the min height of each section
	//if (($(window).innerWidth()) > 480) {

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

/*
	} else {

	}
*/




	$(window).trigger('resize');

/*
	$('.section-left').each(function(){
		var padding = 160;
		var sectionHeight = $(this).height() + padding;
		$(this).next('.section-right').find('.img-container').css('height',sectionHeight);
		$(this).next('.section-right .img-container').css('height',sectionHeight);
		console.log(sectionHeight);
	});
*/


	//console.log(sectionHeight);

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

	function verticalCenter() {
		var parent = $('.section-right');
		var child = parent.find('.img-container');
		var topMargin = (parent.height() - child.height()) / 2;
	  $(parent).each(function(){
	    child.css('margin-top', topMargin);
	  });
	}

	$(document).ready(function () {

		verticalCenter();

		$(window).resize(function() {

			verticalCenter();

	});
	});