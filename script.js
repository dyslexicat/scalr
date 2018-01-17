var scaleName = {
	"ion" : [2, 2, 1, 2, 2, 2, 1],
	"dor" : [2, 1, 2, 2, 2, 1, 2],
	"phyr" : [1, 2, 2, 2, 1, 2, 2],
	"lyd" : [2, 2, 2, 1, 2, 2, 1],
	"mixo" : [2, 2, 1, 2, 2, 1, 2],
	"aeol" : [2, 1, 2, 2, 1, 2, 2],
	"loc" : [1, 2, 2, 1, 2, 2, 2],
	"mma" : [2, 1, 2, 2, 2, 2, 1],
	"mmd" : [2, 1, 2, 2, 1, 2, 2],
	"harmd" : [2, 1, 2, 2, 1, 3, 1],
	"wtone" : [2, 2, 2, 2, 2, 2],
	"aug" : [3, 1, 3, 1, 3, 1],
	"prom" : [2, 2, 2, 3, 1, 2],
	"blue": [3, 2, 1, 1, 3, 2],
	"majp" : [2, 2, 3, 2, 3],
	"minp" : [3, 2, 2, 3, 2],
	"egypt" : [2, 3, 2, 3, 2],
	"bluemaj" : [2, 3, 2, 2, 3],
	"bluemin" : [3, 2, 3, 2, 2]
};


$(document).ready(function(){

	//initializing global variables
	var keys = document.getElementById("set").children;
	var keyboardLen = keys.length;
	var currentScale = null;
	var root = 0;
  var currentScale = ""

	//global iterators
	//will be reset after each significant event, via resetThings()
	var a = 0;
	var i = 0;

	//oglobal variable for the timer
	var timer = null;

	// scale name clicked
	$(".button").click(function(e) {
		resetThings(true);
		currentScale = e.target.id;
    //let's insert the div
    $(".currentScale").html("<p>" + $("#" + currentScale).text() + "</p>");
	});

	// keyboard key clicked
	$("#set li").click(function() {
		resetThings(true);

		root = $(this).parent().children().index(this);
		a = root;

    if (currentScale != "") {
      colorKeys();
    }
	});

	function colorKeys() {
		$(keys[a % keyboardLen]).css("backgroundColor", "#C2EFEB");

		a += scaleName[currentScale][i % scaleName[currentScale].length];
		i++;

		//if done coloring:
		if (a % keyboardLen == root) {
			resetThings(false);
			return;
		}

		//else, keep recurring:
		else {
			timer = setTimeout(colorKeys, 230);
		}
	}

	function resetThings(resetColorsToo) {

		//reset global iterators
		i = 0;
		a = 0;

		//terminate the stopwatch
		clearTimeout(timer);

		if (resetColorsToo) {
			$("#set").children().css("backgroundColor", "");
		}
	}

});
