<?php
$level = $_GET['level'];
$dir = '../' . $level . '/';
$files = scandir($dir);
//implode(",", $files)
//print_r(implode(",", $files));
echo implode(",", $files);
?>