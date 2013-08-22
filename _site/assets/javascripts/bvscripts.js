/*
 * Scrollto (WIP)
 */




/*
 * Slidetoggle to show mobile menu
 */
 
//Closes mobile menu on link click (WIP)
/* $(window).resize(function(){
	var width = $(window).width();
	if (width < 768) {
	  $('ul#menu a').click(function() {
      $('ul#menu li').slideUp('fast');
    });	
  } else {
	}
});
*/

//Mobile menu toggle
$('#showmenu').click(function() {
  $('ul#menu').slideToggle('fast');
});


/*
 * Slidetoggle to for expanded Schedule information
 */
$(document).on("click", ".toggle", function(event){
    event.preventDefault();
    $(this).closest('span').next('.expanded').slideToggle('slow');
});

/*
 * Tabbed browsing for Day Events
 */
 
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
var address = new google.maps.LatLng(38.782494,-77.016485);

function initialize() {

  var mapOptions = {
    zoom:13,
    center: address,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'div']
    }
  };
  
  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

	var marker = new google.maps.Marker({
		position: address,
		map: map,
		title:"div",
		zIndex: 3
  });

}