<?php
class User {


	public function addUser($post) {
    
    	$hashPwd = $this->hashPassword($post['psw']);
    
    	$data = new Database();
        
        $data->executeSql('INSERT INTO 
								users(email, psw, firstName, lastName, age) 
							   VALUES 
							   (?, ?, ?, ?, ?)',
                               
                               [
                               	$post['email'],
                               	$hashPwd,
                               	$post['firstName'], 
								$post['lastName'], 
								$post['age'] 
                               ]
                               
                          	);
    
    
    }
    
    private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }

    private function verifyPassword($password, $hashedPassword)
	{
		return crypt($password, $hashedPassword) == $hashedPassword;
	}

	public function conectUser($post){

		
		$data =new Database();
		$user = $data->queryOne('SELECT *
						FROM users
						WHERE email = ?',
						[
							$post['email']
						]);


		var_dump($user);
		if( $user != false && $this->verifyPassword($post['psw'], $user['psw']) == true ) {
        	
            $_SESSION['id'] = $user['id'];
			$_SESSION['email'] = $user['email'];
			$_SESSION['firstName'] = $user['firstName'];
			$_SESSION['lastName'] = $user['lastName'];
			$_SESSION['age'] = $user['age'];
            
            header('Location: index.php');
			exit();
 
        } else {
        	echo 'pas le bon mot de passe ou adresse mail';
        
        }
        public function sendMailForChangePassword($email) {
    	$database = new Database();
		$user = $database->queryOne('SELECT * FROM users WHERE email =?', [ $email ]);

    	if ($user != false) {
        	$message = 'Cliquez sur le lien :<a href=changePassword.php?id="'.$user['psw'].'">cliquez ici</a>';
        
        	//mail('thibaut.monesma@gmail.com', 'change password', $message);
            
            header('Location: changePassword.php?id='.$user['psw']);
			exit();
            
            return 'yes';
        }  else {

			return 'no';

		}
    
    }
    
    

		}


/*

		if( $user['email'] == $email && $user['psw'] == $password ) {

			return echo'vous etes connecté';
    


	}
								
*/					 
							   
   

	

    
   


}

/*if (!empty($_POST)) {
	var_dump($_POST);
	if( $user['email'] == $_POST['email'] && $user['psw'] == $_POST['psw'] ) {
    
    	var_dump('connecté');*/



    ?>
    