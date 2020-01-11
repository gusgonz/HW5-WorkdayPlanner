$('.saveBtn').click(function() {
	var time = $(this).attr('data-hour');
	// console.log(typeof time);

	var todoHourClass = '.todo.' + time;
	console.log(todoHourClass);

	var todoItem = $(todoHourClass).val();
	console.log(todoItem);

	if (todoItem !== '') {
		localStorage.setItem(time, todoItem);
	}
});
