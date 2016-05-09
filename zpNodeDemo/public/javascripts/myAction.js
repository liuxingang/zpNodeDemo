$(document).ready(function(){
	$(window).scroll(function(){
		var vtop=$(document).scrollTop();
		console.log(vtop);
		if(vtop>=100){
			$("#menu").css({"position":"fixed","z-index":"1000","left":"0px","top":"0px","box-shadow":"0 0 20px rgba(0,0,0,0.27)"});
		}else{
			$("#menu").css({"position":"relative","margin-top":"0px","box-shadow":"none","z-index":"0"});
		}
	});
});