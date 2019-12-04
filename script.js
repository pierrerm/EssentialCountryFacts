var positionButton = document.getElementById("positionButton");

function searchLocation(){
  var location = document.getElementById("location");
  var value = "https://www.metaweather.com/api/location/search/?query=" + location.value;
  console.log(value);
  var jsonObj = $.getJSON(
    value,
    updateSuggestions
  );
}

function updateSuggestions(jsonObj) {
  var city = jsonObj[0].title;
  console.log(city);
  // var gmap_canvas = document.getElementById("gmap_canvas");
  // var latitude = jsonObj.latitude;
  // var longitude = jsonObj.longitude;
  // gmap_canvas.src = "https://www.arcgis.com/home/webscene/viewer.html?viewpoint=cam:" + latitude + "," + longitude + ",35000000;0,0&ui=min";
  // document.getElementById("issPicture").style.display = "inline-block";
}

$(document).ready(function(){
    $("iframe").load(function(){
        $(this).contents().on("mousedown, mouseup, click", function(){
            alert("Click detected inside iframe.");
        });
    });
});