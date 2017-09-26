$(function(){
	$('html, body, #header').css({
		'background-color':'#99212a'
	});
	$('#header').css({
		'border-bottom':'1px solid #85131c'
	});
	$('#content nav div h2').css({
		'border-bottom':'3px solid #85131c'
	});
	$('#content nav div h2, #content section.info>a').css({
		'background-color':'#cb2733'
	});
	$('#content section table').css({
		'background-color':'#ef3441'
	});
	$('#content nav div div a').css({
		'background-color':'#ff4c59',
		'border-top':'3px solid #85131c',
		'border-bottom':'3px solid #85131c',
		'border-right':'1px solid #85131c'
	}).eq(2).css('border-right','0');
	$('#content section.info tr').css({
		'border-bottom':'1px solid #85131c'
	});
	$('#footer a').css({
		'background-color':'#cb2733'
	});
	$('#content section h2').css({
		'color':'#ffa200'
	});
	$('#content section dl span.square').css({
		'background':'#cb2733'
	});
});