<?php
if($_POST)
    {
    $to = "yulia8stark@gmail.com"; //куда отправлять письмо
    $subject = "Заказ"; //тема
    $message = '<span style="font-weight:bold;color:#000;font-size:18px;">Юльк, хочуть шось замовити</span><br><br>
    Имя: <span style="font-weight:bold;color:#000;">'.$_POST['name-order'].'</span><br>
	Email: <span style="font-weight:bold;color:#000;">'.$_POST['mail-order'].'</span><br>
	Телефон: <span style="font-weight:bold;color:#000;">'.$_POST['phone-order'].'</span><br>
    Пожелания: <span style="font-weight:bold;color:#000;"> '.$_POST['message-order'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <handmade@yuliiapanasovska.zzz.com.ua>\r\n";
    $result = mail($to, $subject, $message, $headers);

    if ($result){
        echo '<center>Спасибо, '.$_POST['name-order'].'! Я свяжусь с Вами в ближайшее время. </center>';

    }
    }
?>
