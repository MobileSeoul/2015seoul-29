var latlng = new google.maps.LatLng(37.620976, 127.041047);
var latlng2 = new google.maps.LatLng(37.571041, 127.009650);
var latlng3 = new google.maps.LatLng(37.559995, 126.975272);
var latlng4 = new google.maps.LatLng(37.571551, 126.988157);

//궁 위치 정보
var changduck=new google.maps.LatLng(37.579631, 126.990994);//창덕궁
var changkyung=new google.maps.LatLng(37.579051, 126.994923);//창경궁
var ducksu=new google.maps.LatLng(37.566000, 126.975168);//덕수궁
var kyunghee=new google.maps.LatLng(37.571450, 126.968169);//경희궁
var kyungbuk=new google.maps.LatLng(37.579889, 126.977116);//경복궁
var goongmarker=["창덕궁","창경궁","덕수궁","경희궁","경복궁"];//궁 배열
//박물관 위치 정보(GPS)
var gwanse=new google.maps.LatLng(37.518353, 127.034417);//관세박물관
var amsadong =new google.maps.LatLng(37.518353, 127.034417);//암사동 선사
var gugag=new google.maps.LatLng(37.477514, 127.009405);//국립국악박물관
var mongcon=new google.maps.LatLng(37.523857, 127.124294);//몽촌역사관
//var centerchildren=new google.maps.LatLng(37.523876, 126.980502);//국립중앙박물관(어린이 박물관)
var hangul=new google.maps.LatLng(37.521182, 126.980884);//국립한글박물관
var center=new google.maps.LatLng(37.581707, 126.978992);//국립중앙박물관
var minsug=new google.maps.LatLng(37.582160, 126.979086);//국립민속만물관
var gogung=new google.maps.LatLng(37.576498, 126.974959);//국립고궁박물관
var koreahistory =new google.maps.LatLng(37.573909, 126.978121);//대한민국역사박물관
var policemuseum=new google.maps.LatLng(37.568945, 126.969594);//경찰박물관
//var sciencemuseum=new google.maps.LatLng(37.581553, 126.996724);//국립서울과학관
var sarangchae=new google.maps.LatLng(37.582839, 126.973297);//청와대사랑체	
var bankkorea =new google.maps.LatLng(37.562032, 126.980574);//한국은행화폐박물관
var seoul284=new google.maps.LatLng(37.555814, 126.971639);//문화역서울284
var performingarts=new google.maps.LatLng(37.552412, 126.999915);//공연예술박물관
var musmarker=["관세박물관","암사동 선사","국립국악박물관","몽촌역사관","국립한글박물관","국립중앙박물관","국립민속만물관","국립고궁박물관","대한민국역사박물관","경찰박물관","청와대사랑체","한국은행화폐박물관","문화역서울284","공연예술박물관"];

//문화재 위치 정보(GPS)
var heunginjimun=new google.maps.LatLng(37.571084, 127.009615);//흥인지문
var sunglyemun=new google.maps.LatLng(37.559992, 126.975291);//숭례문
var sibcheungseogtab=new google.maps.LatLng(37.571538, 126.988163);//원각사지 십층석탑
var Hanyang=new google.maps.LatLng(37.581961, 126.958276);//한양도성
var sajigdan=new google.maps.LatLng(37.575778, 126.967731);//서울사직단
var hwangudan=new google.maps.LatLng(37.565042, 126.979735);//환구단(원구단)
var ocheungseogtab=new google.maps.LatLng(37.522879, 126.981692);//홍제동 오층석탑
var doglibmun=new google.maps.LatLng(37.572395, 126.959530);//독립문 
var jongmyo=new google.maps.LatLng(37.574579, 126.994095);//종묘
/*
var amsadongyujeog=new google.maps.LatLng(37.560536, 127.130172);//암사동 유적
var daehanuiwon=new google.maps.LatLng(37.578452, 126.999288);//서울 대한의원 
var seodaemun=new google.maps.LatLng(37.574258, 126.956098);//서울 구 서대문형무소
var jeongdong=new google.maps.LatLng(37.565411, 126.972343);//정동교회
var wonhyolo =new google.maps.LatLng(37.534248, 126.953746);//서울 원효로 예수성심성당(성심여자고등학교에 위치)
var myeongdongseongdang=new google.maps.LatLng(37.563256, 126.987221);//명동성당
var gwangtong=new google.maps.LatLng(37.567670, 126.983118);//관통관
var seouldaehaggyo=new google.maps.LatLng(37.579935, 127.002801);//구 서울 대학교 본관 
var gugong=new google.maps.LatLng(37.577364, 127.002928);//구공업전습소본관(구 중앙시험소 청사)
var gyeonggyojang=new google.maps.LatLng(37.568176, 126.968026);//서울 경교장
var leosiagongsagwan=new google.maps.LatLng(37.568252, 126.971462);//서울 구 러시아공사관 
var gobungun=new google.maps.LatLng(37.507801, 127.118793);//서울 방이동 고분군
var mongchontoseong=new google.maps.LatLng(37.521905, 127.122827);//몽촌토성
var seonleung=new google.maps.LatLng(37.508446, 127.045931);//선릉
var jeongleung=new google.maps.LatLng(37.508225, 127.051440);//정릉*/

var culmarker=["흥인지문","숭례문","원각사지 십층석탑","한양도성","서울사직단","환구단(원구단)","홍제동 오층석탑","서울 독립문 ","종묘"];

//공원 위치 정보(GPS)
var bugseou=new google.maps.LatLng(37.620963, 127.041079);//북서울 꿈의 숲 //
var bolamae =new google.maps.LatLng(37.492579, 126.919072);//보라매 공원//
//var siminsup=new google.maps.LatLng(37.470677, 127.035632);//시민의 숲
var seoulsup=new google.maps.LatLng(37.544816, 127.039248);//서울숲//
//var ollimpig=new google.maps.LatLng(37.520644, 127.121494);//올림픽 공원
//var seoulhosu=new google.maps.LatLng(37.527667, 126.829835);//서서울호수공원
var yeouido=new google.maps.LatLng(37.525908, 126.922126);//여의도 공원//
var seonyudo =new google.maps.LatLng(37.543352, 126.900095);//선유도 공원//
var namsan=new google.maps.LatLng(37.553797, 126.980975);//남산공원//
var woldeukeob=new google.maps.LatLng(37.565268, 126.889506);//월드컵 공원//
var children=new google.maps.LatLng(37.548217, 127.080730);//서울 어린이 대공원 //
var nagsan=new google.maps.LatLng(37.580464, 127.007417);//낙산공원//
var mongma=new google.maps.LatLng(37.494943, 127.003726);//몽마르뜨 공원//
//var songpanalu=new google.maps.LatLng(37.508464, 127.100487);//송파나루공원(석촌호수)
//var yongsan=new google.maps.LatLng(37.521532, 126.984131);//용산가족공원
//var gildongsaeng=new google.maps.LatLng(37.540554, 127.155130);//길동생태공원
//var seodaemun=new google.maps.LatLng(37.574078, 126.956382);//서대문독립공원
//var gandeme=new google.maps.LatLng(37.573358, 127.048693);//간데메공원
//var dosan=new google.maps.LatLng(37.524410, 127.035111);//도산공원

var sukchon=new google.maps.LatLng(37.510665, 127.106073);//석촌호수//
var chungkye=new google.maps.LatLng(37.570629, 127.006187);//청계천//



var parkmarker=["북서울 꿈의 숲","보라매 공원","서울숲","여의도 공원","선유도 공원 ","남산공원","월드컵 공원","서울 어린이 대공원 ","낙산공원","몽마르뜨 공원","석촌호수","청계천"];


var goong =[changduck,changkyung,ducksu,kyunghee,kyungbuk];
var mus=[gwanse,amsadong,gugag,mongcon,hangul,center,minsug,gogung,koreahistory,policemuseum,sarangchae,bankkorea,seoul284,performingarts];
var cul=[heunginjimun,sunglyemun,sibcheungseogtab,Hanyang,sajigdan,hwangudan,ocheungseogtab,doglibmun,jongmyo];
var parks=[bugseou,bolamae,seoulsup,yeouido,seonyudo,namsan ,woldeukeob,children,nagsan,mongma,sukchon,chungkye];

//현재위치 맵
function getGeolocation(){

	if(navigator.geolocation){
		//콜백 메소드이므로 각각의 메소드들 위치를 잘 잡아야함
		navigator.geolocation.getCurrentPosition(showLocation); 
	}
}

function showLocation(location){

	var x = location.coords.latitude;	//GPS의 위도 가져옴
	var y = location.coords.longitude;	//GPS의 경도 가져옴


	var myCenter = new google.maps.LatLng(x,y);		//(위도, 경도)
	var mapProp = {
		center:myCenter,	//가운데에 위치적용
		zoom:13				//확대 및 축소
		//mapTypeId:google.maps.MapTypeId.HYBRID	//위성맵적용
	};
	
	//해당<div>에 map속성적용 
	var map = new google.maps.Map(document.getElementById("localMap"),mapProp); 
	
	//이미지아이콘
	var castle = {
	  url:"../images/icon/castle.png",
	 // size: new google.maps.Size(50, 50),
	  origin: new google.maps.Point(0, 0),
	  anchor: new google.maps.Point(25, 34),
	  scaledSize: new google.maps.Size(30, 30)
	};
	var top = {
	  url:"../images/icon/top.png",
	 // size: new google.maps.Size(50, 50),
	  origin: new google.maps.Point(0, 0),
	  anchor: new google.maps.Point(25, 34),
	  scaledSize: new google.maps.Size(30, 30)
	};
	var meseum = {
	  url:"../images/icon/meseum.png",
	//  size: new google.maps.Size(71, 71),
	  origin: new google.maps.Point(0, 0),
	  anchor: new google.maps.Point(25, 34),
	  scaledSize: new google.maps.Size(30, 30)
	};
	var park = {
	  url:"../images/icon/park.png",
	//  size: new google.maps.Size(71, 71),
	  origin: new google.maps.Point(0, 0),
	  anchor: new google.maps.Point(25, 34),
	  scaledSize: new google.maps.Size(30, 30)
	};
	//지역 마커
	var castle2 = new Array();
	for(var i=0;i<goong.length;i++){
		castle2[i] = new google.maps.Marker({
			position:goong[i],
			map:map,
			icon:castle
		});
	}
	var top2 = new Array();
	for(var i=0;i<cul.length;i++){
		top2[i] = new google.maps.Marker({
			position:cul[i],
			map:map,
			icon:top
		});
	}
	var meseum2 = new Array();
	for(var i=0;i<mus.length;i++){
		meseum2[i] = new google.maps.Marker({
			position:mus[i],
			map:map,
			icon:meseum
		});
	}
	var park2 = new Array();
	for(var i=0;i<parks.length;i++){
		park2[i] = new google.maps.Marker({
			position:parks[i],
			map:map,
			icon:park
		});
	}

	
	//현재 위치 마커

	var marker = new google.maps.Marker({
		position:myCenter,
		animation:google.maps.Animation.BOUNCE
	});

	//클릭 이벤트
	var infowindow = new Array();
	for(var i=0;i<goongmarker.length;i++){
		infowindow[i] = new google.maps.InfoWindow({
		  content:goongmarker[i]
		});

		eval("google.maps.event.addListener(castle2["+i+"],'click',function() {infowindow["+i+"].open(map,castle2["+i+"]);});");

	}
	var infowindow2 = new Array();
	for(var i=0;i<musmarker.length;i++){
		infowindow2[i] = new google.maps.InfoWindow({
		  content:musmarker[i]
		});

		eval("google.maps.event.addListener(meseum2["+i+"],'click',function() {infowindow2["+i+"].open(map,meseum2["+i+"]);});");

	}



	var infowindow3 = new Array();
	for(var i=0;i<culmarker.length;i++){
		infowindow3[i] = new google.maps.InfoWindow({
		  content:culmarker[i]
		});
		eval("google.maps.event.addListener(top2["+i+"],'click',function() {infowindow3["+i+"].open(map,top2["+i+"]);});");
		
	}
	var infowindow4 = new Array();
	for(var i=0;i<parkmarker.length;i++){
		infowindow4[i] = new google.maps.InfoWindow({
		  content:parkmarker[i]
		});
		eval("google.maps.event.addListener(park2["+i+"],'click',function() {infowindow4["+i+"].open(map,park2["+i+"]);});");
		
	}

	marker.setMap(map);
	for(i=0;i<castle2.length;i++){
		castle2[i].setMap(map);
	}
	for(i=0;i<meseum2.length;i++){
		meseum2[i].setMap(map);
	}
	for(i=0;i<top2.length;i++){
		top2[i].setMap(map);
	}
	for(i=0;i<park2.length;i++){
		park2[i].setMap(map);
	}


	// 현재 위치 기준 원 그리기
	var populationOptions = {
		strokeColor: '#000000',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: '#808080',
		fillOpacity: 0.5,
		map: map,
		center: new google.maps.LatLng(x,y) ,
		radius: 3000
	};
	cityCircle = new google.maps.Circle(populationOptions);

	//모든페이지가 로딩될때까지 대기시켜주는 메소드
//	google.maps.event.addDomListener(window, 'load', getGeolocation);
}

getGeolocation();

