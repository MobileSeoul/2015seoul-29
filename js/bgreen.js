$(function(){
	$('html, body, #header').css({
		'background-color':'#006a6e'
	});
	$('#content nav div h2').css({
		'border-bottom':'3px solid #007a7f'
	});
	$('#content nav div h2, #content section.info>a').css({
		'background-color':'#00b1b7'
	});
	$('#content nav div div a').css({
		'background-color':'#008f94',
		'border-top':'3px solid #007a7f',
		'border-bottom':'3px solid #007a7f',
		'border-right':'1px solid #007a7f'
	}).eq(2).css('border-right','0');
	$('#content section.info tr').css({
		'border-bottom':'1px solid #007a7f'
	});
	$('#footer a').css({
		'background-color':'#00b1b7'
	});
});