<?php
$fulfilled = $_POST[fulfilled];
$showed = $_POST[showed];
$gameFolder = $_POST[gameFolder];
$fileName = $_POST[fileName];

$value = $fulfilled . "\r\n" . $showed;
$myfile = file_put_contents("../" . $gameFolder. "/" . $fileName, $value.PHP_EOL , FILE_APPEND | LOCK_EX);
?>