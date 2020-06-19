<?php

$recepient = "vo.site@mail.ru";
$siteName = "test DJ-Store";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$letter = "Name: $name \nPhone: $phone";

$pagetitle = "Тема письма: test DJ-Store";
mail($recepient, $pagetitle, $letter, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>