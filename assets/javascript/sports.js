var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl/official/trial/v5/en/games/2019/REG/04/schedule.json?api_key=zjdgsqf346kgnng7vy4fa4ss";

$(document).ready(function () {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response)
        // loops through the games
        response.week.games.forEach(element => {
            var game = element
            var city = element.venue.city
            var queryURL2 = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e29ea1b3f3abb4e7a3da0066b8afbb2e"
            $.ajax({
                url: queryURL2,
                method: "GET",
                async: false
            }).done(function (response) {
                //logging weather for each game
                var tempAsF = ((response.main.temp - 273.15) * 1.80 + 32)
                var roundTemp = tempAsF.toFixed(2)

                $("#Schedule > tbody").append("<tr><td>" + game.scheduled + "</td><td>" + "F: " + roundTemp + "<br>" + 'Weather: ' + response.weather[0].description + "<br>" + 'Wind speed: ' + response.wind.speed + ' m/s' + "</td><td>" + game.home.name + "</td><td>" + game.away.name + "</td><td>" + game.scoring.home_points + "</td><td>" + game.scoring.away_points + "</td></tr>");

            });

        });

    });
});