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

  function displayTeamInfo(){

    var team = $(this).attr("data-name");

    var queryURL = "https://api.sportradar.us/nfl/official/trial/v5/en/games/2019/REG/schedule.json?/api_key=zjdgsqf346kgnng7vy4fa4ss";

    $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
      console.log(response)
      
    });
    var teamDiv = $("<div class='team'>");

    var 

}