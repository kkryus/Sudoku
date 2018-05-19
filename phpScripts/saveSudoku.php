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
$fn= "../" . $gameFolder. "/" . $fileName;
$fh = fopen($fn, 'w');
fwrite($fh, $string);
fclose($fh);


//$value = print_r($myArray, true);

//$value = print_r($fulfilled, true) . "\r\n" . print_r($showed, true);
//$myfile = file_put_contents("../" . $gameFolder. "/" . $fileName, $value.PHP_EOL , FILE_APPEND | LOCK_EX);
?>