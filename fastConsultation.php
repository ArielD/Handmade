<?php
if($_POST)
    {
    $to = "tovdariaolegovna@gmail.com"; //куда отправлять письмо
   /*  $from = 'Заказ Монопод'; // от кого */
    $subject = "Быстрая консультация"; //тема
    $message = '<span style="font-weight:bold;color:#000;font-size:18px;">Заказ звонка </span><br><br>
    Имя: <span style="font-weight:bold;color:#000;">'.$_POST['name-cons'].'</span><br>
    Телефон: <span style="font-weight:bold;color:#000;"> '.$_POST['phone-cons'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <handmade@yuliiapanasovska.adr.com.ua>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    if ($result){
        echo '<center>Спасибо, '.$_POST['name-cons'].'! Вам перезвонят в ближайшее время.</center>';
		
    }
    }
?>