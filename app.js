$(document).ready(function(){
	$("#accordion h3").click(function(){
		$("#accordion ul ul").slideUp();
		$(".plus", this).html("+");
		if(!$(this).next().is(":visible")) {
			$(this).next().slideDown();
			$(".plus").html("+");
			$(".plus", this).html("_");
		}
	})
})
