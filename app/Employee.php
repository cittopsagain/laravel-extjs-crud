<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
	// https://stackoverflow.com/questions/34462190/laravel-model-looks-to-old-table-name
	// If you dont want to use the default table name (plural name of the class)
	// protected $table = 'employee';
	
	protected $fillable = [
        'fname',
        'lname'      
    ];
}
