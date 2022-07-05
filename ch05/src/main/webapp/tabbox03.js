// jQuery로 작성하기

$(function(){
	$("ul li")
	.click(function(){
		$("ul li").removeClass("selected");
		$(this).addClass("selected");
	})
}); 