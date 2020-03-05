<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Employee;

class EmployeeController extends Controller
{
	
	private $employee = null;
	
	public function __construct()
	{
		$this->employee = new Employee();
	}
	
	public function create(Request $request) 
	{
		$this->employee->fname = $request['fname'];
		$this->employee->lname = $request['lname'];
		
		return response()->json([
			'success' => $this->employee->save()
		]);
	}
	
	public function get()
	{
		
	}
}
