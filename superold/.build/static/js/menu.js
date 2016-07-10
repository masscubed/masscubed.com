function toggle(div) {
	var className = div.getAttribute("class");
	if (className.search("shown") > 0) {
		div.className = className.replace("shown", "hidden");
	} else {
		div.className = className.replace("hidden", "shown");
	}
}