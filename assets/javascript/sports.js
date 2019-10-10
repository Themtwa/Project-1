  var week = "04";

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nfl/official/trial/v5/en/games/2019/REG/" + week + "/schedule.json?api_key=zjdgsqf346kgnng7vy4fa4ss";
    $(document).ready(function(){
    $.ajax({
      url: queryURL,
      dataType: 'json',
      method: "GET" }).then(function(response) {

        for (var i = 0; i < response.week.games.length; i++) {
          var game = response.week.games[i];
          console.log(game.scheduled);
          console.log(game.home.name);
          console.log(game.away.name);
          console.log(game.scoring.home_points);
          console.log(game.scoring.away_points);
        

        $("#Schedule > tbody").append("<tr><td>" + game.scheduled + "</td><td>" + game.home.name + "</td><td>" + game.away.name + "</td><td>" + game.scoring.home_points + "</td><td>" + game.scoring.away_points + "</td></tr>");

        }


      
      });

    });
     