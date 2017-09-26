$(function(){
	$('html, body, #header').css({
		'background-color':'#ffecde'
	});
	$('#content nav div h2').css({
		'border-bottom':'3px solid #000'
	});
	$('#content nav div h2, #content section.info>a').css({
		'background-color':'#ffecde'
	});
	$('#content nav div div a').css({
		'background-color':'#ffecde',
		'border-top':'3px solid #000',
		'border-bottom':'3px solid #000',
		'border-right':'1px solid #000'
	}).eq(2).css('border-right','0');
	$('#content section.info tr').css({
		'border-bottom':'1px solid #000'
	});
	$('#footer a').css({
		'background-color':'#ffecde'
	});
	$('#content section h2').css({
		'color':'#000'
	});
});