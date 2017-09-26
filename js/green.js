$(function(){
	$('html, body, #header').css({
		'background-color':'#264736'
	});
	$('#header').css({
		'border-bottom':'1px solid #155a36'
	});
	$('#content nav div h2').css({
		'border-bottom':'3px solid #155a36'
	});
	$('#content nav div h2, #content section.info>a').css({
		'background-color':'#4e9470'
	});
	$('#content nav div div a').css({
		'background-color':'#27704a',
		'border-top':'3px solid #155a36',
		'border-bottom':'3px solid #155a36',
		'border-right':'1px solid #155a36'
	}).eq(2).css('border-right','0');
	$('#content section.info tr').css({
		'border-bottom':'1px solid #155a36'
	});
	$('#footer a').css({
		'background-color':'#4e9470'
	});
	$('#content section h2').css({
		'color':'#4e9470'
	});
	$('#content section span.square').css({
		'background-color':'#155a36'
	});
});