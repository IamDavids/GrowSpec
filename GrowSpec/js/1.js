$(function(){
	$(".small-picture li").mouseenter(function(){
		$(".big-picture img").eq($(this).index()).show().siblings(".big-picture img").hide();
	  $(this).addClass("active").siblings("li").removeClass("active");
	})

  







})