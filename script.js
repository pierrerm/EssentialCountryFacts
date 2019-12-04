var positionButton = document.getElementById("positionButton");

function searchLocation() {
  var location = document.getElementById("location");
  var value = location.value;
  console.log(value);
  var jsonObj = $.getJSON(
    "https://restcountries.eu/rest/v2/name/" + value,
    updateSuggestions
  ).error(function() {
    var countryInfo = document.getElementById("countryInfo");
    countryInfo.style = "display: none;";
    var value = document.getElementById("location").value;
    document.getElementById("errorMessage").innerHTML =
      "Error! The country '" + value + "' could not be found...";
    document.getElementById("ErrorBox").style = "display: inline-block;";
  });
}

function updateSuggestions(jsonObj) {
  document.getElementById("ErrorBox").style = "display: none;";
  var city = jsonObj[0].capital;
  console.log(city);
  document.getElementById("countryName").innerHTML = jsonObj[0].name;
  document.getElementById("flag").src = jsonObj[0].flag;
  document.getElementById("continent").innerHTML =
    "Region: " + jsonObj[0].subregion;
  document.getElementById("capital").innerHTML =
    "Capital: " + jsonObj[0].capital;
  document.getElementById("population").innerHTML =
    "Population: " + jsonObj[0].population;
  document.getElementById("demonym").innerHTML =
    "Demonym: " + jsonObj[0].demonym;
  document.getElementById("language").innerHTML =
    "Language: " + jsonObj[0].languages[0].name;
  document.getElementById("currency").innerHTML =
    "Currency: " +
    jsonObj[0].currencies[0].code +
    ", " +
    jsonObj[0].currencies[0].name;
  var countryInfo = document.getElementById("countryInfo");
  countryInfo.style = "display: inline-block;";
}

function getWeather() {
  searchLocation();
}

$(document).ready(function() {
  $("iframe").load(function() {
    $(this)
      .contents()
      .on("mousedown, mouseup, click", function() {
        alert("Click detected inside iframe.");
      });
  });
});
