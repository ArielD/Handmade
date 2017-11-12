$(document).ready(function(){
   $("#imgLoad").hide();  //Скрываем прелоадер
});
var num = 4; //чтобы знать с какой записи вытаскивать данные
$(function() {
   $("#load div").click(function(){ //Выполняем если по кнопке кликнули
   $("#imgLoad").show(); //Показываем прелоадер
   $.ajax({
          url: "galleryVisible.php",
          type: "POST",
          data: {"num": num},
          cache: false,
          success: function(response){
              if(response == 0){  // смотрим ответ от сервера и выполняем соответствующее действие
                 alert("Больше нет записей");
                 $("#imgLoad").hide();
              }else{
                 $("#gallery").append(response);
                 num = num + 4;
                 $("#imgLoad").hide();
              }
           }
        });

        $.ajax({
               url: "galleryInvisible.php",
               type: "POST",
               data: {"num": num},
               cache: false,
               success: function(response){
                      $("#invisible_gallery").append(response);
                   }

             });
    });
});
