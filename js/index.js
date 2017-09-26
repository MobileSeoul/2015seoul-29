var onDeviceReady = function(){

    $("#key").click(function(){

        //var ref = window.open('http://www.naver.com', 
        //    '_black', 'location=no');
		var ref = window.open('html/page1.html', 
            '_black', 'location=no');

    }); 
 
}
var init = function(){

     document.addEventListener('deviceready',onDeviceReady, false);
}
$(document).ready(init);