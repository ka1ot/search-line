<?php
$text = 0;
unset($text);
$text = $_POST['text'];
require('connect.php');

$dbid ="SELECT * FROM searchlist ";
$resultdbid = mysqli_query($link, $dbid) or die("Ошибка " . mysqli_error($link));
if($resultdbid){
			$resultdb=mysqli_query($link,"SELECT * FROM `searchlist` WHERE `keywords` LIKE '%".$text."%'");
				while($row = mysqli_fetch_array($resultdb)){
					$id=$row['id'];
					$word=$row['word'];
					$url=$row['url'];
					echo $id.'|';
					echo $word.'|';
					echo $url.'|';

		}		
}
unset($text);
?>