<?php

class UserModel {

	public function signUp( $lastname, $firstname, $email, $password, $birthDate, $address, $city, $zipCode, $phone ) {
    	$database = new Database();
    	
        $hashPassword = $this->hashPassword($password);
        
    	$sql = 'INSERT INTO User (  LastName,
									FirstName,
									Email,
									Password,
									BirthDate,
									CreationTimestamp,
									Adress,
									City,
									ZipCode,
									Phone )
				VALUES (?, ?, ?,?, ?, NOW(), ?, ?, ?, ?)';
                
                
         $values = [$lastname, $firstname, $email, $hashPassword, $birthDate, $address, $city, $zipCode, $phone];
         
         $database->executeSql($sql, $values);
    
    }


	private function hashPassword($password)
    {
        
        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }


	public function connect($post){

		$database = new Database();
	    	
	   

	    $user = $database->queryOne('SELECT
		       *
		     FROM User Where Email = ?',  [  $post['email'] ] );

	    if ($user==false){
	    	echo 'votre email est incorrect';

	    } else{
	    		 if($this->verifyPassword($post['password'],$user['Password'])==true){


	    		$_SESSION['Id'] = $user['Id'];
				$_SESSION['lastName'] = $user['LastName'];
				$_SESSION['firstName'] = $user['FirstName'];
				$_SESSION['email'] = $user['Email'];
				$_SESSION['birthDay'] = $user['BirthDate'];
				$_SESSION['adress'] = $user['Adress'];
				$_SESSION['city'] = $user['City'];
				$_SESSION['zipCode'] = $user['ZipCode'];
				$_SESSION['phone'] = $user['Phone'];
				$_SESSION['Country'] = $user['Country'];


					$http = new Http();
					$http->redirectTo('/');








	    }



	    



	    }
	 
	   





	}


	private function verifyPassword($password, $hashedPassword){

     return crypt($password, $hashedPassword) == $hashedPassword;
   }







		






	}








?>