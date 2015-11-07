
var locations = [
	['Arundel Street', 53.374420, -1.470980, "images/map/arundelstreet.png"],
	['Rutland Arms', 53.376540, -1.467584, "images/map/rutlandarms.png"],
	['Slyvester Street', 53.373807, -1.471809, "images/map/slyvesterstreet.png"]
];

function initialize() {
	// var myLatLng = {lat: 53.380908, lng: -1.47017};

	var map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom: 14,
		center: new google.maps.LatLng(53.380908, -1.47017),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	// 	setMarkers( map, locations );

	// }

	var infowindow = new google.maps.InfoWindow();

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				map: map
				// ,
				// icon: locations[i][3]
		});

		google.maps.event.addListener(marker, 'click', (function (marker,i) {
			return function () {
				var html = '<div><h4>' + locations[i][0] + '</h4>';
				html += '<img src="' + locations [i] [3] + '" /></div>';

				infowindow.setContent(html);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
google.maps.event.addDomListener(window, "load", initialize);


