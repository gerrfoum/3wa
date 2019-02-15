<?php

class UserModel {

	public function sendUser( $lastname, $firstname, $address, $zipcode, $city, $email, $password, $phone ) {
    	$database = new Database();
    	
        $codpassword = $this->codPassword($password);
        
    	$sql = 'INSERT INTO User (  LastName,
									FirstName,
									Address,
									ZipCode,
									City,
									Email,
									Password,
									CreationTimestamp,
									Phone )
				VALUES (?, ?, ?,?, ?, ?, ?, NOW(), ?)';
                
                
         $values = [$lastname, $firstname, $address, $zipcode, $city, $email, $codpassword, $phone];
         
         $database->executeSql($sql, $values);
    
    }


	private function codPassword($password)
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


	    		$_SESSION['id'] = $user['id'];
				$_SESSION['lastname'] = $user['LastName'];
				$_SESSION['firstname'] = $user['FirstName'];
				$_SESSION['address'] = $user['Address'];
				$_SESSION['zipcode'] = $user['ZipCode'];
				$_SESSION['city'] = $user['City'];
				$_SESSION['email'] = $user['Email'];
				$_SESSION['password'] = $user['Password'];
				$_SESSION['creationtimestamp'] = $user['CreationTimestamp'];
				$_SESSION['phone'] = $user['Phone'];
				
				var_dump($_SESSION);
				//$http = new Http();
				//$http->redirectTo('/');
			}

	    }

	}


	private function verifyPassword($password, $hashedPassword){

     return crypt($password, $hashedPassword) == $hashedPassword;
   }

}

?>