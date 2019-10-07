var queryURL = "https://api.sportradar.us/nfl/official/trial/v5/en/games/2019/REG/05/schedule.json?api_key=zjdgsqf346kgnng7vy4fa4ssx";

  $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
    console.log(response)
  });