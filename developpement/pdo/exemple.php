<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT 
    	contactLastName, contactFirstName 
    
     FROM 
     	customers 
        
     WHERE 
     	country="France"'
);

$query->execute();

article class="order-form-customer">
            <h2><?= $customer['customerName'] ?></h2>
            <h3><?= $customer['contactFirstName'] ?> <?= $customer['contactLastName'] ?></h3>
            <p><?= $customer['addressLine1'] ?></p>
            <p><?= $customer['addressLine2'] ?></p>
            <p><?= $customer['city'] ?></p>
        </article>
        <hr>
        

var_dump($offices);


?>
