<?php
$str = file_get_contents('gallery.json');
$json = json_decode($str, true);

if(isset($_POST['num'])){
   $num = $_POST['num'];
   $counter = 0;
   $output = array_slice($json, $num-4, $num);
foreach($output as $key => $one)
{
  echo '<label for="'.$one['pic'].'" class="grid-gallery-element">
  <figure class="gallery-effect">
  <img class="small-img" src="'.$one['small_url'].'">
  <figcaption>
  <div>
  	<h2>'.$one['name'].'</h2>
  	<p class="date"> '.$one['date'].'</p>
  	<p class="fest"> Khanifest</p>
  	<p>'.$one['description'].'</p>
  </div>
  </figcaption>
  </figure>
  </label>';
  // echo '<div class="row"><div class="span6">'.$one['url'].'</div><div class="span3">'.$one['name'].'</div></div>';
$id=$one['id'];
if($id==$num) break;
   }

 }




?>
