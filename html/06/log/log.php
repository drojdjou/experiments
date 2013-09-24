<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style.css">

	<script type="text/javascript">

		var logs, btns;

		window.onload = function() {
			logs = document.querySelectorAll("ul.log li");
			btns = document.querySelectorAll("ul.menu li");

			for(var i = 0; i < btns.length; i++) {
				
				btns[i].addEventListener('click', function(e) {
					var id = e.target.getAttribute('id');

					for(var j = 0; j < logs.length; j++) {
						var cl = logs[j].getAttribute("class");

						if(cl == id || id == "all") logs[j].style.display = "block";
						else logs[j].style.display = "none";
					}
				})
			}
		}

	</script>
</head>
<body>
<ul class="menu">
	<li id="info">Info</li>
	<li id="warn">Warn</li>
	<li id="error">Error</li>
	<li id="all">All</li>
</ul>
<ul class="log">
<?php

$logs = array_reverse(file("log.txt"));

foreach ($logs as $line) {
	echo $line;
}

?>
</ul>
</body>
<script>
    if (location.host == "localhost") {
        document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
    }
</script>
</html>