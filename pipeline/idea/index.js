for (var i = 0; i < 8; i++) {
	$(".leader").first().clone().appendTo(".leadership");
}

$("#hackathons .main a").tilt({
	perspective: 200,
	maxTilt: 3,
	glare: true,
	maxGlare: .5
});