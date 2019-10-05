var queryURL = "https://api.darksky.net/forecast/[cc202cd492093c30bf98858baf250d00]/[20],[20]"
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response){
    console.log(response)
})