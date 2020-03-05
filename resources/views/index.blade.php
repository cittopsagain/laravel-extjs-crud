<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<title>Laravel</title>
		
        <link href="{{ asset('css/theme-classic/resources/theme-classic-all.css') }}" rel="stylesheet" type="text/css">
		<script type="text/javascript" src="{{ asset('js/ext-all.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/jquery-3.4.1.min.js') }}"></script>
    </head>
	<body>
		
	</body>
</html>

<script type="text/javascript" src="{{ asset('js/employee/dashboard.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/employee/controller.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/employee/add-employee.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/employee/employee-list.js') }}"></script>
