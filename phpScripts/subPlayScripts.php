<?php
$level = $_GET['level'];
$dir = '../' . $level . '/';
$files = scandir($dir);
echo implode(",", $files);
?>
