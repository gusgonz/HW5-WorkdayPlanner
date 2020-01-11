$('.saveBtn').click(function() {
	var time = $(this).attr('data-hour');
	// console.log(typeof time);

	var todoHourClass = '.todo.' + time;
	// console.log(todoHourClass);

	var todoItem = $(todoHourClass).val().trim();
	// console.log(todoItem.length);

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
		console.log(todoItem);

		if (todoItem !== null) {
			var todoHourClass = '.todo.' + x;
			$(todoHourClass).text(todoItem);
		}
	}
}

renderTodos();
