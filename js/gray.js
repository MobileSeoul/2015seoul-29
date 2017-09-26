$(function(){
	$('html, body, #header').css({
		'background-color':'#525252'
	});
	$('#header').css({
		'border-bottom':'1px solid #3b3b3b'
	});
	$('#content nav div h2').css({
		'border-bottom':'3px solid #3b3b3b'
	});
	$('#content nav div h2, #content section.info>a').css({
		'background-color':'#7e7e7e'
	});
	$('#content nav div div a').css({
		'background-color':'#939393',
		'border-top':'3px solid #3b3b3b',
		'border-bottom':'3px solid #3b3b3b',
		'border-right':'1px solid #3b3b3b'
	}).eq(2).css('border-right','0');
	$('#content section.info tr').css({
		'border-bottom':'1px solid #3b3b3b'
	});
	$('#footer a').css({
		'background-color':'#7e7e7e'
	});
	$('#content section h2').css({
		'color':'#7e7e7e'
	});
	$('#content section span.square').css({
		'background-color':'#3b3b3b'
	});
});