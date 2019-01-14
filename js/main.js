
(function($) {

    "use strict";

    $('.filter .btn').on('click', function(event) {
       $(this).siblings('.active').removeClass('active');
       $(this).addClass('active');
       event.preventDefault();
    });

	$('.filter #list').click(function(event) {
		event.preventDefault();
		$('#latest-post').addClass('list-post-wrapper').removeClass('grid-post-wrapper');
	});

	$('.filter #grid').click(function(event) {
		event.preventDefault();
		$('#latest-post').removeClass('list-post-wrapper').addClass('grid-post-wrapper');
	});

})(jQuery);