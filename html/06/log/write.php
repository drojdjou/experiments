<?php

date_default_timezone_set('America/Los_Angeles');

$level = $_GET['lv'];
$message = $_GET['ms'];
$time = date("m/d/y H:i:s");

$log = "<li class='" . $level . "'>[" . $time . "] " . $message . "</li>\n";

$logfile = fopen("log.txt", "a");
fwrite($logfile, $log)

?>