

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl/official/trial/v5/en/games/2019/REG/05/schedule.json?api_key=zjdgsqf346kgnng7vy4fa4ss";

    $.ajax({
      url: queryURL, 
      method: "GET" }).then(function(response) {
        // console.log(response.week.games);
        for (var i = 0; i < response.week.games.length; i++) {
          var game = response.week.games[i];
          console.log(game.scheduled);
          console.log(game.home.name);
          console.log(game.away.name);
          console.log(game.scoring.home_points);
          console.log(game.scoring.away_points);

        }
      });

     