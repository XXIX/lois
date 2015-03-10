$(document).ready(function() {

	// hide/show nav
   $('nav').mouseenter(function() {
		$('.nav-extended').slideDown('fast');
	});
   $('nav').mouseleave(function() {
		$('.nav-extended').slideUp('fast');
	});

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