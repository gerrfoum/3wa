<?php

class MealModel {
 
	public function listAll() {

		$database = new Database();
		$meals =$database->query('SELECT * FROM Meal', []);
		return $meals;
		
	}

}


