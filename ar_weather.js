var coordinates = {};

$("document").ready(function () {
	get_coordinates();
});
function get_coordinates() {
	const searchParams = new URLSearchParams(window.location.search);
	if (searchParams.has("source") && searchParams.has("destination")) {
		var source = searchParams.get("source");
		var destination = searchParams.get("destination");

		coordinates.source_lat = source.split(";")[0];
		coordinates.source_long = source.split(";")[1];
		coordinates.destination_lat = destination.split(";")[0];
		coordinates.destination_long = destination.split(";")[1];
		get_weather(coordinates)

		console.log(coordinates);
	}
}

function get_weather(coords) {
	var apikey = "a72f8c855e050afa35301f92898b970e"
	var url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.source_lat}&lon=${coords.source_long}&appid=${apikey}`
	$.ajax({
		url: url,
		type: 'get',
		success: function (response) {
			console.log(response)
			let name = response.name
			let weather = response.weather[0].main
			$("#scene_container").append(
				`
				<a-entity>
					<a-entity height="50" text="value: Weather forcast is ${weather} at ${name};"></a-entity>
				</a-entity>
				`
			)
		}
	})
	
}