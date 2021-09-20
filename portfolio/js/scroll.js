$.fn.monscroll=function(params_appel){
	var params={
		attr:'href',
		direction:'top',
		duree:1000,
		balise:'html,body',
		loadpage:true,
	},
	animscroll_=function(params,href){
		if( $(href).length > 0 ){
			if(params.direction=='top'){
				$(params.balise).animate({scrollTop:$(href).offset().top},{duration:params.duree});
			}else if(params.direction=='left'){
				$(params.balise).animate({scrollLeft:$(href).offset().left},{duration:params.duree});
			}else{
				$(params.balise).animate({scrollTop:$(href).offset().top,scrollLeft:$(href).offset().left},{duration:params.duree});
			}
			return false;
		}
		return true;
	};
	if(typeof params_appel == 'object'){
		$.each(params,function(key,val){
			$.each(params_appel,function(key_appel,val_appel){
				if(key == key_appel){
					params[key]=val_appel;
				}
			});
		});
	}

	$(this).click(function(){
		var href = $(this).attr(params.attr);
		if( href.indexOf('#') > 0 ){
			var hrefArray = href.split('#');
			if(hrefArray.length == 2){
				if(window.location.href.indexOf(hrefArray[0]) > -1){
					href='#'+hrefArray[1];
				}else{
					return true;
				}
			}
		}
		return animscroll_(params,href);
	});

	if(params.attr == 'href' && params.loadpage){
		var url = window.location.href;
		if( url.indexOf('#') > -1 ){
			var hrefArray = url.split('#');
			if(hrefArray.length == 2){
				if( $(params.balise).length > 0 ){
					$(params.balise).scrollTop(0).scrollLeft(0);
					animscroll_(params,'#'+hrefArray[1]);
				}
			}
		}

	}

};

$('a[href*="#"]').monscroll();
$('[attr-scroll]').monscroll({
	attr:'attr-scroll',
	duree:90,
});
$('.truc').monscroll({
	attr:'data',
});