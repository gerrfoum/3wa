<?php

class PaymentController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	

        if(array_key_exists('user', $_SESSION) == false) {
            $http->redirectTo('/user/login');
        }
     

    }
    
    public function httpPostMethod(Http $http, array $formFields)
    {
    	var_dump($_POST);
    	$orders = json_decode($_POST['order']);
        
        var_dump($orders);
        
        $mealModel = new MealModel();
        
        
      	foreach($orders as $order) {
        	$meal = $mealModel->find($order->mealId);
        
        	$order->safeSalePrice = $meal['SalePrice'];
        }
        
        $orderModel = new OrderModel();
        
         $orderId    = $orderModel->validate
        (
            $_SESSION['user']['userId'],
            $orders
        );
        
        /*paiement par carte*/
        
        
        
        $http->redirectTo('/success');
    }

}

?>
