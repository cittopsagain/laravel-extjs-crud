// https://hdtuto.com/article/jquery-ajax-post-request-example-in-laravel-57
Ext.define('Employee', {
	extend: 'Ext.app.Controller',
	create: function(form) {
		$.ajax({
			url: 'employee/create',
			method: 'POST',
			data: {
				fname: $('#fname-inputEl').val(),
				lname: $('#lname-inputEl').val()
			},
			headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }, // If no token it will throw an error Internal Server Error 500
			beforeSend: function(request) {
				
			},
			success: function(response) {
				if (response.success) {
					alert('Record successfully saved!');
					form.reset();
				}
			},
			error: function(response) {
				console.log(response.responseText);
			}
		});
	}
});
