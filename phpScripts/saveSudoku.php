<?php
$fulfilled = json_decode($_POST[fulfilled]);
$showed = json_decode($_POST[showed]);
$gameFolder = $_POST[gameFolder];
$fileName = $_POST[fileName];

$value = print_r($fulfilled, true) . "\r\n" . print_r($showed, true);

$myfile = file_put_contents("../" . $gameFolder. "/" . $fileName, $value.PHP_EOL , FILE_APPEND | LOCK_EX);
?>