<?php
session_start();
include 'applibdconexion.php';
$query = $pdo->prepare(
	'SELECT
            Post.Id,
            Title,
            Contents,
            CreationDate,
            FirstName,
            LastName,
            Category.Name AS Category_Name
        FROM
            Post
        INNER JOIN
            Author
        ON
            Post.Author_Id = Author.Id
        INNER JOIN
            Category
        ON
            Post.Category_Id = Category.Id
        ORDER BY
            CreationDate DESC'
	);

$query->execute();
$posts = $query->fetchAll(PDO::FETCH_ASSOC);



$template = 'admin';

include 'layout.phtml';
$query = $pdo->prepare(
    'SELECT*
        FROM
           Category'
);

$query->execute();
$categories = $query->fetchAll(PDO::FETCH_ASSOC);

$query = $pdo->prepare(
    'SELECT*
        FROM
           Author'
);

$query->execute();
$authors = $query->fetchAll(PDO::FETCH_ASSOC);
//var_dump($authors);


$query = $pdo->prepare(
    'SELECT*
        FROM
           utilisateurs'
);

$query->execute();
$users = $query->fetchAll(PDO::FETCH_ASSOC);


/*header('Location: register.php');
    exit();*/

?>