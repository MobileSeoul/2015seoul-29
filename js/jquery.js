//사이드메뉴
$(function(){
	var width = $('#list').width();
	$('#list').css('right',(width*-1));
	$('#list div div').css('right',width*-1);
	$('#dim').hide();
	$('#header button').click(function(){
		$('#list div div').animate({
			right:0
		});
		$('#list').animate({
			right:0
		});
		$('#dim').show().animate({
			'opacity':'0.6'
		});
		$('html, body').css('overflow-y','hidden');
	});
	$('#list button').click(function(){
		$('#list div div').animate({
			right:'-'+width+'px'
		});
		$('#list').animate({
			right:'-'+width+'px'
		});
		$('#dim').animate({
			'opacity':'0'
		},function(){
			$('#dim').hide()
		});
		$('html, body').css('overflow-y','scroll');
	});
});


//이미지슬라이드
$(function(){
	var width = $('.photo ul li img').width();
	function setting(){
		$('.photo ul li').each(function(i){
			var pos = (width*i)-width;
			$(this).css({'left':pos});
			console.log(width);
		});
	}
	setting();
	$('.photo button').click(function(){
		var has = $(this).attr('class');
		if(has == 'left'){
			setting();
			$('.photo ul li').stop().animate({
				left:'+='+width+'px'
			});
			$('.photo ul li:last').prependTo('.photo ul');
		}else{
			setting();
			$('.photo ul li').stop().animate({
				left:'-='+width+'px'
			});
			$('.photo ul li:first').appendTo('.photo ul');
		}
	});
	
	//게시판
	$('#content section.subject').click(function(){
		//$('#content section.subject p').removeClass('show');
		//$('#content section.subject ul').removeClass('show');
		if($(this).children('p').attr('class') == 'show'){
			$('#content section.subject p').removeClass('show');
			$('#content section.subject ul').removeClass('show');
			$(this).children('p').removeClass('show');
			$(this).children('ul').removeClass('show');
		}else{
			$('#content section.subject p').removeClass('show');
			$('#content section.subject ul').removeClass('show');
			$(this).children('p').addClass('show');
			$(this).children('ul').addClass('show');
		}		
	});
	$('#content section.search input').focusin(function(){
		if($(this).attr('value') == '검색하실 아이디를 적어주세요.') $(this).attr('value','');
	});
	$('#content section.search input').focusout(function(){
		if($(this).attr('value') == '' || $(this).attr('value') == null) $(this).attr('value','검색하실 아이디를 적어주세요.');
	});
	//삭제팝업
	$('#content div a').click(function(){
		$('div.dim').css('display','block');
		$('section.pop').css('display','block');
	});
	$('section.pop div button.cancle').click(function(){
		$('div.dim').css('display','none');
		$('section.pop').css('display','none');
	});
});
function finish(obj){
	var name = obj.name;
	if(name.value == null || name.value == ""){
		alert("아이디를 작성해주세요");
		name.value = "";
		name.focus;
		return false;
	}

	var pw = obj.password;
	if(pw.value == null || pw.value == ""){
		alert("비밀번호를 작성해주세요");
		pw.value = "";
		pw.focus();
		return false;
	}
	if(isNaN(pw.value)){
		alert("숫자만 입력해주세요");
		pw.value = "";
		pw.focus();
		return false;
	}
	var content = obj.content;
	if(content.value == null || content.value == ""){
		alert("내용을 작성해주세요");
		content.value = "";
		content.focus();
		return false;
	}
	obj.submit();
}
function xTrim(f, n){
	var i, j, l, s;
	for(i=l=0, s=f.value; i<s.length; i++){
		l += (j=s.charCodeAt(i) < 128?1:2);
		if (l > n){
			l -= j;
			if(isNaN(f.value)){
        alert((n/2)+"자 이상 쓸 수 없습니다.");
      }else{
        alert(n+"자 이상 쓸 수 없습니다.");
      }
			document.body.focus();
			f.focus();
			f.value = s.substr(0, i);
			break;
		}
	}
	return l;
}