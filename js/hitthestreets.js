var locations = [
['Arundel Street', 53.374356, -1.471044, 2],
['Rutland Arms', 53.376540, -1.467600, 1]
];
var map;
var markers [];

function intit(){
	map = new google.maps.Map(document.getElementByID('map'), {
		zoom: 10,
		center: new google.maps.LatLng(53.378812, -1.472911),
		mapTypeId: google.maps.mapTypeId.ROADMAP
	});

	var num_markers = locations.length;
	for (var i = 0; i <num_markers; i++) {
		markers [i] = new google.maps.Marker({
			position: {lat: locations[i][1], lng: locations[i][2]},
			map: map,
			html: locations [i][0],
			id: i,
		});

		google.maps.event.addListener(markers[i], 'click' function (){
			var infowindow = new google.maps.infowindow( {
				id: this.id,
				content:this.html,
				position:this.getPosition()
		});
		google.maps.event.addListenerOnce(infowindow, 'closeclick', function (){
			markers[this.id] .setVisible(true);
		});
		this.setVisible(false);
		infowindow.open(map);
		});
	}
}

google.maps.event.addDomListener(window, 'load', init);