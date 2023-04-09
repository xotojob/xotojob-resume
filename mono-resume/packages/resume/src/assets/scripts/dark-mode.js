/* Dependency: js-cookie plugin - Ref: https://github.com/js-cookie/js-cookie */

$(document).ready(function () {

	$('body').addClass("dark-mode");
	$('#darkmode').attr('checked', true);
	//setThemeFromCookie();


	function setThemeFromCookie() {
		// Check if the cookie is set 
		if (typeof Cookies.get('mode') !== "undefined") {
			$('body').removeClass("dark-mode");
			$('#darkmode').attr('checked', false); // toggle change
		} else {
			$('body').addClass("dark-mode");
			$('#darkmode').attr('checked', true); // toggle change
			console.log('Cookie: dark mode');
		}
	}

	$('#darkmode').on('change', function (e) {
		if ($(this).is(':checked')) {
			$('body').addClass('dark-mode');
			//Set cookies for 165 days 
			Cookies.set('mode', 'dark-mode', { expires: 165 });
		} else {
			$('body').removeClass('dark-mode');
			//Remove cookies
			Cookies.remove('mode');
		}
	});



});	