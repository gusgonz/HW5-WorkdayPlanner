$('.saveBtn').click(function() {
	var time = $(this).attr('data-hour');
	// console.log(typeof time);

	var todoHourClass = '.todo.' + time;
	console.log(todoHourClass);

	var todoItem = $(todoHourClass).val().trim();
	console.log(todoItem.length);

	if (todoItem !== '') {
		localStorage.setItem(time, todoItem);
		$(todoHourClass).addClass('saved-bold');
	}
});

const hourArray = [ 'nine', 'ten', 'eleven', 'noon', 'one', 'two', 'three', 'four', 'five' ];

function renderTodos() {}
