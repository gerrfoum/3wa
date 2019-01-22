

<?php
session_start();



include 'applibdconexion.php';

$query = $pdo->prepare(
	    'SELECT
	        *
	     FROM Author'
);

$query->execute();
$authors = $query->fetchAll(PDO::FETCH_ASSOC);


$query = $pdo->prepare(
	    'SELECT
	        *
	     FROM Category'
);

$query->execute();
$categories = $query->fetchAll(PDO::FETCH_ASSOC);

if (empty($_POST) == false) {
	
	var_dump($_POST);
    $title = $_POST['title'];
    $content = $_POST['contents'];
    $author_id = $_POST['author'];
    $category_id = $_POST['category'];
    
    $query = $pdo->prepare
	(
	    '
            INSERT INTO
                Post
                (Title, Contents, Author_Id, Category_Id, CreationDate)
            VALUES
                (?, ?, ?, ?, NOW())
        '

	);
    
    $query->execute( [ $title, $content, $author_id, $category_id ] );
    
    header('Location: index.php');
    exit();
    

}




$template = 'formulaire';

include 'layout.phtml';  


?>
