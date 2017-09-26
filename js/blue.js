$(function(){
	$('html, body, #header').css({
		'background-color':'#1f2d49'
	});	
	$('#header').css({
		'border-bottom':'1px solid #294376'
	});
	$('#content nav div h2').css({
		'border-bottom':'3px solid #294376'
	});
	$('#content nav div h2, #content section.info>a').css({
		'background-color':'#4b6495'
	});
	$('#content nav div div a').css({
		'background-color':'#809fdc',
		'border-top':'3px solid #294376',
		'border-bottom':'3px solid #294376',
		'border-right':'1px solid #294376'
	}).eq(2).css('border-right','0');
	$('#content section.info tr').css({
		'border-bottom':'1px solid #35466a'
	});
	$('#footer a').css({
		'background-color':'#4b6495'
	});
	$('#content section h2').css({
		'color':'#4b6495'
	});
	$('#content section span.square').css({
		'background-color':'#35466a'
	});
});