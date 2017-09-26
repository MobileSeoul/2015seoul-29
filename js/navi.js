$(function(){
	var loc=$("#content section dd span").text();

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	var map;

	 function initialize() {
		 directionsDisplay = new google.maps.DirectionsRenderer();

		navigator.geolocation.getCurrentPosition (function (posOption){
					lat = posOption.coords.latitude;
					lng = posOption.coords.longitude;
					var latlng= new google.maps.LatLng(lat, lng);
		var start = new google.maps.LatLng(lat, lng);
		var end = loc;
		var mode = 'TRANSIT'           
		var request = {
			origin:start,
			destination:end,
			travelMode: eval('google.maps.DirectionsTravelMode.'+mode)
		};        
	   
		directionsService.route(request, function(response, status) {
						
						if (status == google.maps.DirectionsStatus.OK) {
							directionsDisplay.setDirections(response);
						}
					});

		
		   var mapProp = {
			 center:new google.maps.LatLng(lat, lng),
			 zoom:10,
			 radius:20000,
			 
			 mapTypeId:google.maps.MapTypeId.ROADMAP

		   };
			
		  map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		  var myCity = new google.maps.Circle({
		  center:new google.maps.LatLng(lat, lng),
		  radius:500,
		  strokeColor:"#0000FF",
		  strokeOpacity:0.8,
		  strokeWeight:2,
		  fillColor:"#0000FF",
		  fillOpacity:0.4
		  });

		 directionsDisplay.setMap(map);
		// Zoom to 9 when clicking on marker

	  });
	}

	 google.maps.event.addDomListener(window, 'load', initialize);


});
