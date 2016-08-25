
// Function to simulate blinking text for the pseudo cursor
function content_blink(content) {
	var opacity = content.css("opacity");
	if (opacity == 0) {
		content.fadeTo(0, 1);
	} else {
		content.fadeTo(0, 0);
	}
}

// On page load run these functions
$(document).ready(function(){
	var doc = $(document);
	var header_cursor = doc.find(".js-blink");
	setInterval(function(){content_blink(header_cursor);}, 420);
})
