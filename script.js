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

function renderTime() {
	var currentDay = moment().format('dddd, MMMM Do');
	$('#currentDay').text(currentDay);

	var currentHour = moment().format('h');
	var ampm = moment().format('a');
	// console.log(currentHour);
	// console.log(ampm);
}

renderTime();
renderTodos();
