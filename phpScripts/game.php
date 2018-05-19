<?php
$level = $_GET['level'];
$number = $_GET['number'];
$dir = '../' . $level . '/' . $number;


$str = file_get_contents($dir);
$arr = unserialize($str);
for($i =0;$i<81;$i++)
{
	echo $arr[$i]->fulfilled . $arr[$i]->green . ",";
}
?>