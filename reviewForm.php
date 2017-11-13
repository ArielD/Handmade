<?php
if($_POST)
    {
    $to = "yulia8stark@gmail.com"; //куда отправлять письмо
    $subject = "Отзыв"; //тема
    $message = '<span style="font-weight:bold;color:#000;font-size:18px;">Юльк, отримано відгук с:</span><br><br>
    Имя: <span style="font-weight:bold;color:#000;">'.$_POST['name-review'].'</span><br>
	Email: <span style="font-weight:bold;color:#000;">'.$_POST['mail-review'].'</span><br>
    Текст: <span style="font-weight:bold;color:#000;"> '.$_POST['comment-review'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <handmade@yuliiapanasovska.zzz.com.ua>\r\n";
    $result = mail($to, $subject, $message, $headers);

    if ($result){
        echo '<center>Спасибо, '.$_POST['name-review'].'! Ваш отзыв будет рассмотрен и добавлен в ближайшее время. </center>';
    }

    }
?>
