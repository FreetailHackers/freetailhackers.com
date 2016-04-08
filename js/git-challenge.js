$(document).ready(function() {
	var githubUrl = "https://www.github.com/";
	function getStreak(username) {
		$.get(githubUrl + username, function(data) {
			var div = $('<div>');
			div.html(data);
			var streak = div.find('.contrib-number').last().text();
			alert(streak);
		});
	}

	$('.btn').click(function() {
		username = $('.form-control').val().trim();
		getStreak(username);
	});
});