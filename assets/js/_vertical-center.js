// window height
// center an object within its parent
// give the parent container a class of .js-va-parent
// give the child container a class of .js-va-child
// &#169; XXIX / Jacob Heftmann

$(document).ready(function () {
	$(window).resize(function() {
	    $('.js-va-parent').each(function(){
	      var parent = $(this);
	      var child = $(this).find('.js-va-child');
	      var topMargin = (parent.height() - child.height()) / 2;

	      child.css('margin-top', topMargin);
	    });
	  });
	  $(window).trigger('resize');
});