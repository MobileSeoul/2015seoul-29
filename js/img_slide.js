$(function(){
	var width = $('.photo ul li').width();
	function setting(){
		$('.photo ul li').each(function(i){
			var pos = (width*i)-width;
			$(this).css({'left':pos});
		});
	}
	setting();
	$('.photo button').click(function(){
		var has = $(this).attr('class');
		if(has == 'left'){
			setting();
			$('.photo ul li').stop().animate({
				left:'-='+width+'px'
			});
			$('.photo ul li:first').appendTo('ul');
		}else{
			setting();
			$('.photo ul li').stop().animate({
				left:'+='+width+'px'
			});
			$('.photo ul li:last').prependTo('ul');
		}
	});
});