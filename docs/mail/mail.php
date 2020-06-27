<?php

// $recepient = "vo.site@mail.ru" . ", ";
// $recepient .= "develop@dj-store.ru";
$recepient = "vo.site@mail.ru";
$siteName = "test DJ-Store";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$letter = "Name: $name \nPhone: $phone";

$pagetitle = "Тема письма: test DJ-Store";
mail($recepient, $pagetitle, $letter, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

$file = file_get_contents('data.json');
$list = json_decode($file); 
unset($file);
$list[] = array ($_POST['name'], $_POST['phone']);
file_put_contents('data.json',json_encode($list, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));

?>
