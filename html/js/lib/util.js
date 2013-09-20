Math.clamp = function(v, s, e) {
	return Math.max(Math.min(v, e), s);
}

var Loader = {
	 loadJSON: function(path, onLoadedFunc) {
		var request = new XMLHttpRequest();
		request.open("GET", path);
		request.onreadystatechange = function(){
			if (request.readyState == 4) {
				onLoadedFunc.call(null, JSON.parse(request.responseText));
			}
		}
		request.send();
	}
}