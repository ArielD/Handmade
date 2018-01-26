$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
			
        })
		
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(document).ready(function(){


     $(window).scroll(function(){
	  if ($(window).scrollTop() > 300) {
      $("#nav").removeClass("opacity").removeClass("start-opacity").addClass("non-opacity");
	  /* css({
	  'background-color' : 'rgba(0,0,0, 0.95)'
	  }) */
	   }
	   else if ($(window).scrollTop() < 300) {
		 $("#nav").removeClass("non-opacity").removeClass("start-opacity").addClass("opacity");
		 
		 /* css({
	  'background-color' : 'rgba(0,0,0, 0.7)'
	  }); */
	   }
	   
   });
});