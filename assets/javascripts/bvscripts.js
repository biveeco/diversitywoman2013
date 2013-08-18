/*
 * Misc jqueries - Slidetoggle to show mobile menu
 */
  $('#showmenu').click(function() {
    $('ul#menu').slideToggle('fast', function() {
    });
  });

$(".expanded").slideUp("slow");
$(".toggle").click(function(){
    $(this).next(".expanded").slideToggle("slow");
  });

/*
 * Map
 */

var map;
var office = new google.maps.LatLng(38.782494,-77.016485);

function initialize() {

  var mapOptions = {
    zoom:16,
    center: office,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'div']
    }
  };
  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

  var styledMapOptions = {
      name: "Diversity Woman 2013"
  }

  var jayzMapType = new google.maps.StyledMapType(
      styles, styledMapOptions);

  map.mapTypes.set('div', jayzMapType);
  map.setMapTypeId('div');


				var companyImage = new google.maps.MarkerImage('/wp-content/themes/div/img/pin.png',
					new google.maps.Size(250.0, 100.0),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(125.0, 50.0)
				);

				var companyShadow = new google.maps.MarkerImage('/wp-content/themes/div/img/shadow.png',
					new google.maps.Size(301.0, 100.0),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(125.0, 50.0)
				);

				var companyPos = office;

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					shadow: companyShadow,
					title:"div",
					zIndex: 3});

}