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

const hourArray = [ 'nine', 'ten', 'eleven', 'noon', 'one', 'two', 'three', 'four', 'five' ];

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

renderTodos();
