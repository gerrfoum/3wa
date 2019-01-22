<?php
session_start();

include 'applibdconexion.php';

$query = $pdo->prepare(
	' SELECT
        Post.Id,
        Title,
        Contents,
        CreationDate,
        FirstName,
        LastName
    FROM
        Post
    INNER JOIN
        Author
    ON
        Post.Author_Id = Author.Id
    ORDER BY
        CreationDate DESC'

);

$query->execute();
$posts = $query->fetchAll(PDO::FETCH_ASSOC);


$template = 'index';

include 'layout.phtml';
?>