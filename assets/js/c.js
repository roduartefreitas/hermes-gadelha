function blink(_id) {
	$("#talk" + _id).removeClass("talk-blink").addClass("talk-blink");
	$('html, body').animate({scrollTop: $("#talk" + _id).offset().top}, 1000);
}

function goto(_id) {
	$('html, body').animate({scrollTop: $("#" + _id).offset().top}, 1000);
}