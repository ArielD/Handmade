
function callCons() {
 	  var msg   = $('#form-cons').serialize();
        $.ajax({
          type: 'POST',
          url: 'fastConsultation.php',
          data: msg,
          success: function(data) {
            $('#response').html(data);
			$('#response-button').css({"display" : "block"});
			$(".response-form").removeClass("response-form-hide").addClass("response-form-show");
      $("body").addClass("stop-scrolling").removeClass("start-scrolling");
          },
          error:  function(xhr, str){
	    alert('�������� ������: ' + xhr.responseCode);
          }
        });
    }

	 function callReview() {
 	  var msg   = $('#form-review').serialize();
        $.ajax({
          type: 'POST',
          url: 'reviewForm.php',
          data: msg,
          success: function(data) {
            $('#response').html(data);
			$('#response-button').css({"display" : "block"});
			$(".response-form").removeClass("response-form-hide").addClass("response-form-show");
    $("body").addClass("stop-scrolling").removeClass("start-scrolling");
          },
          error:  function(xhr, str){
	    alert('�������� ������: ' + xhr.responseCode);
          }
        });
    }

	function callOrder() {
 	  var msg   = $('#form-order').serialize();
        $.ajax({
          type: 'POST',
          url: 'orderForm.php',
          data: msg,
          success: function(data) {
            $('#response').html(data)
			$('#response-button').css({"display" : "block"});
			 $(".response-form").removeClass("response-form-hide").addClass("response-form-show");
      $("body").addClass("stop-scrolling").removeClass("start-scrolling");
          },
          error:  function(xhr, str){
	    alert('�������� ������: ' + xhr.responseCode);
          }
        });
    }

	$(function(){
            $('.review-button-element').click(function(){
                 $(".review-form").removeClass("review-form-hide").addClass("review-form-show");
                 $("body").addClass("stop-scrolling").removeClass("start-scrolling");

            });
        });

 $(function(){
            $('.order-button-element').click(function(){
                 $(".order-form").removeClass("order-form-hide").addClass("order-form-show");
                 $("body").addClass("stop-scrolling").removeClass("start-scrolling");
            });
        });


            $('.review-form-button').click(function(){
                $("#form-review").submit();
                $("body").addClass("stop-scrolling").removeClass("start-scrolling");
            });



            $('.order-form-button').click(function(){
                $("#form-order").submit();
                $("body").addClass("stop-scrolling").removeClass("start-scrolling");
            });


		 $('.consultation-button-element').click(function(){
                $('#form-cons').submit();
                $("body").addClass("stop-scrolling").removeClass("start-scrolling");
            });




   function clearFunc(){
  $(".response-form").removeClass("response-form-show").addClass("response-form-hide");
	$('#response-button').css({"display" : "none"});
	$('#form-cons')[0].reset();
	$('#form-review')[0].reset();
	$('#form-order')[0].reset();
	$(".order-form").removeClass("order-form-show").addClass("order-form-hide");
	$(".review-form").removeClass("review-form-show").addClass("review-form-hide");
  $("body").removeClass("stop-scrolling").addClass("start-scrolling");

	}

	   function cancelFunc(){
	$(".review-form").removeClass("review-form-show").addClass("review-form-hide");
	$(".order-form").removeClass("order-form-show").addClass("order-form-hide");
  $("body").removeClass("stop-scrolling").addClass("start-scrolling");

	}
