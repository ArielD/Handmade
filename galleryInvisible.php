<?php
$str = file_get_contents('gallery.json');
$json = json_decode($str, true);

if(isset($_POST['num'])){
   $num = $_POST['num'];
   $counter = 0;
   $output = array_slice($json, $num-4, $num);
foreach($output as $key => $one)
{
  echo '<input type="checkbox" id="'.$one['pic'].'"/>
  <label for="'.$one['pic'].'" class="lightbox"><div class="bg"> <img src="'.$one['url'].'"/> </div></label>';
  // echo '<div class="row"><div class="span6">'.$one['url'].'</div><div class="span3">'.$one['name'].'</div></div>';
$id=$one['id'];
if($id==$num) break;
   }

 }




?>
