// JavaScript Document
$(document).ready(function(){
	var s=window.innerHeight;
	if(s>720){
		$(".login").height(s);
	}
	
	windowH=window.innerHeight-100;//控制图片轮番高度
	$(".item img").height(windowH);
	
	//资料编辑
	$(".right-basic-column div form p input").attr("readonly","readonly");
	$(".right-basic-column div a").click(function(){
		if($(this).parent("div").find("input[type=submit]").css("display") =="none"){
		
			$(this).parent("div").find("input").css("border-bottom","1px solid #ccc");
			$(this).parent("div").find("input[type=submit]").css("display","block");
			$(this).parent("div").find("input[type=submit]").attr("readonly",false);
		}else{
			$(this).parent("div").find("input").css("border-bottom","none");
			$(this).parent("div").find("input[type=submit]").css("display","none");
		}
		
	
	});
	// 页面跳转
	$('.to-head').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); 
	$('.to-howToUse').click(function(){$('html,body').animate({scrollTop:$('#howToUse').offset().top}, 800);});
	$('.to-feedback').click(function(){$('html,body').animate({scrollTop:$('#feedback').offset().top}, 1000);});
	$('.to-download-links').click(function(){$('html,body').animate({scrollTop:$('#download-links').offset().top}, 1000);});
	$('.scroll_bottom').click(function(){$('html,body').animate({scrollTop:$('.bottom').offset().top}, 800);});


});
/*发布需求弹出*/ 
function feedback(){
	$(".J_pup").fadeIn(200);
}
function hide(){
	$(".J_pup").fadeOut(200);
}

/*确认下单弹出*/
function makedill(){
	$(".J_sure").fadeIn(200);
}
function noagree(){
	$(".J_sure").fadeOut(200);
}

