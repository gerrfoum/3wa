<?php



function saveTask(array $taskData)
{
	$file = fopen('tasks.csv', 'a');
    
    fputcsv($file, $taskData);
    
    fclose($file);
    
}





if(empty($_POST) == false) {


    $description = $_POST['taches'];
    $date = $_POST['annee'].'-'.$_POST['mois'].'-'.$_POST['jour'];
    $priority  = $_POST['priorite'];
    $title = $_POST['titre'];

    
	addTask($title, $description, $date, $priority);
    

}

function addTask($title, $description, $date, $priority) {
	
    $taskData =
    [
        $title,
        $description,
        $date,
        $priority
    ];
    
    saveTask($taskData);


}

function loadTasks()
{
	$file = fopen('tasks.csv', 'a+');
		
	$tasks = array(); // []
    
    while(true)
	{

		$taskData = fgetcsv($file);
        
		if($taskData == false)
		{
			break;
		}
		array_push($tasks, $taskData);
	}
    
    fclose($file);

	return $tasks;

}

function recup(){
	
	$file = fopen('tasks.csv', 'a+');
		
	$tasks = array(); // []
    
    while(true)
	{

		$taskData = fgetcsv($file);
        
		if($taskData == false)
		{
			break;
		}
		array_push($tasks, $taskData);
	}
    
    fclose($file);

	return $tasks;


}


$now = date_create();

$tasks = recup();



include 'exnouv.phtml';

?>