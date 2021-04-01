$(document).ready(function () {

    $('a[href*="#"]')
        .click(function (event) {
            var target = $(this.hash);
	    event.preventDefault();
	    $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
	});
});

