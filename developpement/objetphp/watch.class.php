<?php

class watch extends Time {

	private $price;
	
    
    public function __construct($hours, $minutes, $seconds,$price)
    {
    	parent::__construct($hours, $minutes, $seconds);
        
		$this->price = $price;
	}

}


?>