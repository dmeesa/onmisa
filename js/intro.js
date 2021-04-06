$(document).ready(function(){

    var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i),
    isTablet = navigator.userAgent.toLowerCase().match(/tablet/i),
    isAndroid = navigator.userAgent.toLowerCase().match(/android/i),
    isiPhone = navigator.userAgent.toLowerCase().match(/iphone/i),
    isiPad = navigator.userAgent.toLowerCase().match(/ipad/i);

    var mobile = false;

    if (isMobile || isTablet || isAndroid || isiPhone || isiPad){
	mobile = true;
	$('#main').css("margin-top","30%");
    }


    	$('#main').on('click', function(){
	    $("#main").toggleClass("hoverClass");
    	});
});

