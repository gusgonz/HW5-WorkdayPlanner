$('.saveBtn').click(function() {
	var time = $(this).attr('data-hour');

	var todoHourClass = '.todo.' + time;

	var todoItem = $(todoHourClass).val().trim();

	if (todoItem !== '') {
		localStorage.setItem(time, todoItem);
		$(todoHourClass).addClass('saved-bold');
	} else {
		localStorage.removeItem(time);
	}
});

var hourArray = [ 'nine', 'ten', 'eleven', 'noon', 'one', 'two', 'three', 'four', 'five' ];

function renderTodos() {
	for (x of hourArray) {
		var todoItem = localStorage.getItem(x);

		if (todoItem !== null) {
			var todoHourClass = '.todo.' + x;
			$(todoHourClass).text(todoItem);
			$(todoHourClass).addClass('saved-bold');
		}
	}
}
var hourNumsArray = [ '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ];

function renderTime() {
	var currentDay = moment().format('dddd, MMMM Do');
	$('#currentDay').text(currentDay);
}

function renderColors() {
	var currentHour = moment().format('h');
	var ampm = moment().format('a');

	// FOR TESTING
	// var currentHour = '3';
	// var ampm = 'pm';

	var both = currentHour + ampm;
	var isequalFlag = false;
	var flag = false;

	// this one is a doozy
	for (var i = 0; i < hourNumsArray.length; i++) {
		if (both === hourNumsArray[i]) {
			isequalFlag = true;

			var todoHourClass = '.todo.' + hourArray[i];
			$(todoHourClass).addClass('present');

			for (var n = 0; n < hourArray.length; n++) {
				if (flag) {
					var futureClass = '.todo.' + hourArray[n];
					$(futureClass).addClass('future');
				} else if (both === hourNumsArray[n]) {
					flag = true;
				} else {
					var pastClass = '.todo.' + hourArray[n];
					$(pastClass).addClass('past');
				}
			}
		}
	}

	if (!isequalFlag) {
		if (ampm === 'am') {
			for (var m = 0; m < hourArray.length; m++) {
				var futureClass = '.todo.' + hourArray[m];
				$(futureClass).addClass('future');
			}
		} else {
			for (var p = 0; p < hourArray.length; p++) {
				var pastClass = '.todo.' + hourArray[p];
				$(pastClass).addClass('past');
			}
		}
	}

	console.log(currentHour);
	console.log(ampm);
}

renderTime();
renderTodos();
renderColors();
