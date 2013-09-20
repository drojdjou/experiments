<?php

$dir = 'photos';
$imgs = scandir($dir);

$max = -1;
$min = -1;

foreach($imgs as $img) {
	if(strpos($img, 'image') !== false) {
		$img = explode(".jpg", $img);
		$img = explode("image", $img[0]);
		$num = intval($img[1]);

		if($min == -1 || $min > $num) $min = $num;
		if($max == -1 || $max < $num) $max = $num;
	}
}

echo "{\"min\":" . $min . ", \"max\":" . $max . "}";

?>