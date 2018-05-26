<?php
$arr = json_decode($_POST[arr]);

$fn= "../highscores.txt";
$fh = fopen($fn, 'w');

foreach ($arr as  $value) {
	fwrite($fh, $value . PHP_EOL);
}

fclose($fh);

?>