var positionButton = document.getElementById("positionButton");

function searchLocation(){
  var location = document.getElementById("location");
  var value = location.value;
  console.log(value);
  var jsonObj = $.getJSON(
    "https://restcountries.eu/rest/v2/name/" + value,
    updateSuggestions
  );
}

function updateSuggestions(jsonObj) {
  var city = jsonObj[0].capital;
  console.log(city);
  document.getElementById("flag").src = jsonObj[0].flag;
  document.getElementById("continent").innerHTML += jsonObj[0].subregion;
  document.getElementById("capital").innerHTML = jsonObj[0].capital;
  document.getElementById("population").innerHTML = jsonObj[0].population;
  document.getElementById("demonym").innerHTML = jsonObj[0].demonym;
  document.getElementById("language").innerHTML = jsonObj[0].languages[0].name;
  document.getElementById("currency").innerHTML = jsonObj[0].currencies[0].code + ", "+ jsonObj[0].currencies[0].name;
  var countryInfo = document.getElementById("countryInfo");
  countryInfo.style = "display: inline-block;";
  // var gmap_canvas = document.getElementById("gmap_canvas");
  // var latitude = jsonObj.latitude;
  // var longitude = jsonObj.longitude;
  // gmap_canvas.src = "https://www.arcgis.com/home/webscene/viewer.html?viewpoint=cam:" + latitude + "," + longitude + ",35000000;0,0&ui=min";
  // document.getElementById("issPicture").style.display = "inline-block";
}

function getWeather(){
  searchLocation();
}

$(document).ready(function(){
    $("iframe").load(function(){
        $(this).contents().on("mousedown, mouseup, click", function(){
            alert("Click detected inside iframe.");
        });
    });
});