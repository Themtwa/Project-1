var teams = [
    "Arizona Cardinals",
    "Atlanta Falcons",
    "Baltimore Ravens",
    "Buffalo Bills",
    "Carolina Panthers",
    "Chicago Bears",
    "Cincinnati Bengals",
    "Cleveland Browns",
    "Dallas Cowboys",
    "Denver Broncos",
    "Detroit Lions",
    "Green Bay Packers",
    "Houston Texans",
    "Indianapolis Colts",
    "Jacksonville Jaguars",
    "Kansas City Chiefs",
    "Los Angeles Chargers",
    "Los Angeles Rams",
    "Miami Dolphins",
    "Minnesota Vikings",
    "New England Patriots",
    "New Orleans Saints",
    "New York Giants",
    "New York Jets",
    "Oakland Raiders",
    "Philadelphia Eagles",
    "Pittsburgh Steelers",
    "San Francisco 49ers",
    "Seattle Seahawks",
    "Tampa Bay Buccaneers",
    "Tennessee Titans",
    "Washington Redskins",
];
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl/official/trial/v5/en/games/2019/REG/06/schedule.json?api_key=zjdgsqf346kgnng7vy4fa4ss";

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    console.log(response)
    // loops through the games
    response.week.games.forEach(element => {
        //console.log(element)

        var city = element.venue.city
        var queryURL2 = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e29ea1b3f3abb4e7a3da0066b8afbb2e"

        $.ajax({
            url: queryURL2,
            method: "GET",
            async: false
        }).done(function (response) {
            //logging weather for each game (working just need to uncomment after finishing other weather results)
            var tempAsF = ((response.main.temp - 273.15) * 1.80 + 32)
            var roundTemp = tempAsF.toFixed(2)
            // console.log(roundTemp)
            //console.log(response.weather[0].description)
            //console.log(response)
            
                var weatherDiv = $('<div>');
                var tempF = $('<p>').text('F: ' + roundTemp);
                var weather = $('<p>').text ('Weather: ' + response.weather[0].description);
                var wind = $('<p>').text('Wind speed: ' + response.wind.speed + ' m/s')
                weatherDiv.append(tempF);
                weatherDiv.append(weather)
                weatherDiv.append(wind)
                $('.test-div').append(weatherDiv);
            
        });

    });

});