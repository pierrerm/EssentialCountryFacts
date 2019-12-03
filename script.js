var positionButton = document.getElementById("positionButton");

function getISSData() {
  var jsonObj = $.getJSON(
    "https://api.wheretheiss.at/v1/satellites/25544",
    updatePosition
  );
}

function updatePosition(jsonObj) {
  var gmap_canvas = document.getElementById("gmap_canvas");
  var latitude = jsonObj.latitude;
  var longitude = jsonObj.longitude;
  gmap_canvas.src = "https://www.arcgis.com/home/webscene/viewer.html?viewpoint=cam:" + latitude + "," + longitude + ",35000000;0,0&ui=min";
  document.getElementById("issPicture").style.display = "inline-block";
}

function findISS() {
  getISSData();
}

$(document).ready(function(){
    $("iframe").load(function(){
        $(this).contents().on("mousedown, mouseup, click", function(){
            alert("Click detected inside iframe.");
        });
    });
});