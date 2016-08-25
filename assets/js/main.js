
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
	var about_me = doc.find(".js-about-me");
	var java_code_box = doc.find(".js-java");
	var java_code_button = doc.find(".js-java-button");
	var ruby_code_box = doc.find(".js-ruby");
	var ruby_code_button = doc.find(".js-ruby-button");
	var python_code_box = doc.find(".js-python");
	var python_code_button = doc.find(".js-python-button");
	var reading_button = doc.find(".js-reading-button");
	var gaming_button = doc.find(".js-gaming-button");
	var reading_text = doc.find(".js-reading-text");
	var gaming_text = doc.find(".js-gaming-text");
	var current_language;

	hljs.initHighlightingOnLoad();

	java_code_box.toggleClass("css-languages-active"); // Init page with java code box
	current_language = java_code_box;
	setInterval(function(){content_blink(header_cursor);}, 420);

	/**
	 * Button functions to switch languages for code box about me
	 *
	 * TODO: Add JavaScript box 
	 */
	java_code_button.click(function(){
		if (current_language == java_code_box) {
			return;
		}
		current_language.toggleClass("css-languages-active");
		java_code_box.toggleClass("css-languages-active");
		current_language = java_code_box;
		about_me.html("AboutMe.java");
	})

	ruby_code_button.click(function(){
		if (current_language == ruby_code_box) {
			return;
		}
		current_language.toggleClass("css-languages-active");
		ruby_code_box.toggleClass("css-languages-active");
		current_language = ruby_code_box;
		about_me.html("AboutMe.rb");
	})

	python_code_button.click(function(){
		if (current_language == python_code_box) {
			return;
		}
		current_language.toggleClass("css-languages-active");
		python_code_box.toggleClass("css-languages-active");
		current_language = python_code_box;
		about_me.html("AboutMe.py");
	})
})
