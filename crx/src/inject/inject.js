//Just some fun: 
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
        /*
        var Title = document.title
        var NewTitle = Title + " in my butt"
        document.title = NewTitle
        */
        //console.log("DONE!")
	}
	}, 10);
});
