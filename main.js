let latitude = 28.641922,
	longtiude = 77.351326;

$("document").ready(function () {
	alert("Please allow the device to know your location");
	initGeolocation()
});
function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	} else {
		alert("Your browser does not support location services");
	}
}
$(function () {
    $("#weather-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longtiude}&destination=${destination[1]};${destination[0]}`
    })
})
function success(position) {
	latitude = position.coords.latitude;
	longtiude = position.coords.longitude;
	mapboxgl.accessToken =
		"pk.eyJ1IjoicG9vamFjaGhpa2FyYWRhaGl5YSIsImEiOiJja25lZmJseGIwM3FuMnltZXEwODViZzlqIn0.0D5qwe7i_qXTqR193jgrGw";

	var map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/mapbox/streets-v11",
		center: [longtiude, latitude],
		zoom: 4,
	});

	var img1 = document.querySelector("#amber");
	var marker = new mapboxgl.Marker({
		element: img1,
	})
		.setLngLat([75.85133, 26.98547])
		.addTo(map);

	var img2 = document.querySelector("#gateway");
	// Create a  Gateway of India, Mumbai Marker and add it to the map.
	var marker2 = new mapboxgl.Marker({
		element: img2,
	})
		.setLngLat([72.835163, 18.92018])
		.addTo(map);

	var img3 = document.querySelector("#gate");
	// Create a India Gate Marker and add it to the map.
	var marker3 = new mapboxgl.Marker({
		element: img3,
	})
		.setLngLat([77.22931, 28.61495])
		.addTo(map);

	var img4 = document.querySelector("#lotus");

	// Create a Lotus Temple, Delhi Marker and add it to the map.
	var marker4 = new mapboxgl.Marker({
		element: img4,
	})
		.setLngLat([77.2588, 28.553501])
		.addTo(map);

	//Create a Victoria Memorial, Kolkata Marker and add it to the map.
	var img5 = document.querySelector("#victoria");

	var marker5 = new mapboxgl.Marker({
		element: img5,
	})
		.setLngLat([88.342785, 22.54617])
		.addTo(map);

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl,
		}).on('result', function (e) {
			destination = e.result.center
		})
	);
}
