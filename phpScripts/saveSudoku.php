<?php
$fulfilled = json_decode($_POST[fulfilled]);
$showed = json_decode($_POST[showed]);
$gameFolder = $_POST[gameFolder];
$fileName = $_POST[fileName];


$myArray;

for ($i = 0; $i < 81; $i++) {
	$object = new stdClass();
	$object->fulfilled = $fulfilled[$i];
	if($showed[$i] != "0")
	{
		$object->green = "true";
	}
	else
	{
		$object->green = "false";
	}
	$myArray[] = $object;
}
$string = serialize($myArray);
$fn= "../" . $gameFolder. "/" . $fileName . ".txt";
$fh = fopen($fn, 'w');
fwrite($fh, $string);
fclose($fh);
?>