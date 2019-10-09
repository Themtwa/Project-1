var Schedule = "";
var Home = "";
var Away = "";
var Scoring = "";
var HomePoints = "";
var AwayPoints

$("#add-team").ready(function() {

  Schedule = $("#Schedule-input").val();
  Home = $("#Home-input").val();
  Away = $("#Away-input").val();
  Scoring = $("#Scoring-input").val();
  HomePoints = $("#HomePoints-input").val();
  AwayPoints = $("#AwayPoints-input").val();

  dataRef.ref().push({

    Schedule: Schedule,
    Home: Home,
    Away: Away,
    Scoring: Scoring,
    HomePoints: HomePoints,
    AwayPoints: AwayPoints,
});

console.log("Team Added")


  function displayTeamInfo(){

    var team = $(this).attr("data-name");

    var queryURL = "https://api.sportradar.us/nfl/official/trial/v5/en/games/2019/REG/05/schedule.json?api_key=zjdgsqf346kgnng7vy4fa4ss";

    $.ajax({
      url: queryURL, 
      method: "GET" }).done(function(response) {
      console.log(response)

    });

  }