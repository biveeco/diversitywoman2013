/*
 * Misc jqueries - Slidetoggle to show mobile menu
 */
  $('#showmenu').click(function() {
    $('ul#menu').slideToggle('fast');
  });

$(document).on("click", ".toggle", function(event){
    event.preventDefault();
    $(this).closest('span').next('.expanded').slideToggle('slow');
});

$('#day1, #day2').fadeOut('fast');
$('a#trig-day0').addClass('active');
$('a#trig-day0').click(function(event) {
  event.preventDefault();
  $('a#trig-day0').addClass('active');
  $('a#trig-day1, a#trig-day2').removeClass('active');
  $('#day1, #day2').slideUp('400');
  $('#day0').delay(400).slideDown('slow');
});

$('a#trig-day1').click(function(event) {
  event.preventDefault();
  $('a#trig-day0, a#trig-day2').removeClass('active');
  $('#day0, #day2').slideUp('400');
  $('#day1').delay(400).slideDown('slow');
  $('a#trig-day1').addClass('active');
});

$('a#trig-day2').click(function(event) {
  event.preventDefault();
  $('a#trig-day0, a#trig-day1').removeClass('active');
  $('#day0, #day1').slideUp('400');
  $('#day2').delay(400).slideDown('slow');
  $('a#trig-day2').addClass('active');
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

  map.mapTypes.set('div');
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


