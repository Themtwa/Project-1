var queryURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/cc202cd492093c30bf98858baf250d00/42.3601,-71.0589"
var lat = ""
var long = ""
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(response)
})