<?php
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


function removeTasks(array $allTasks, array $indexes)
{
	$tasks = [];
    
    foreach($allTasks as $index => $value)
    {
    	if(in_array($index, $indexes) == false)
        {
        	array_push($tasks, $value);
        }
    
    }
    
    return $tasks;

}

function saveTasks(array $tasks)
{
	$file = fopen('tasks.csv', 'w');
    
    foreach($tasks as $taskData)
	{
    	fputcsv($file, $taskData);
    }
    
    fclose($file);

}

if(empty($_POST) == false) {

	var_dump($_POST["indexes"]);
	$allTasks = recup();
    
    $tasks = removeTasks($allTasks, $_POST['indexes']);

	saveTasks($tasks);



}
header('Location: exnouv.php');


?>


