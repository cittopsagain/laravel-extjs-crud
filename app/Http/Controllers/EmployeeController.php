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
	
	public function get(Request $request)
	{
		$data = DB::select(
			sprintf('SELECT SQL_CALC_FOUND_ROWS * FROM %s WHERE 1 %s LIMIT %d, %d', 
				'employees', 
				isset($request['fname']) ? $request['fname'] : '', 
				$request['start'], $request['limit']
			)
		);
		print_r($data);
		/* $total = DB::select(DB::raw('select found_rows() as total'))[0]->total;
		
		return response()->json([
			'data' => $data,
			'total' => $total
		]); */
	}
}
