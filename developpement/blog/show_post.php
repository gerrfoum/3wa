<?php
session_start();
if(array_key_exists('id', $_GET) == false || ctype_digit($_GET['id']) == false) {
    header('Location: index.php');
    exit();
}

include 'applibdconexion.php';


$query = $pdo->prepare(
	' SELECT
            Post.Id,
            title,
            contents,
            CreationDate,
            FirstName,
            LastName
        FROM
            Post
        INNER JOIN
            Author
        ON
            Post.Author_id = Author.Id
        WHERE
            Post.id = ?'
	);

$query->execute( [ $_GET['id'] ] );
$post = $query->fetch(PDO::FETCH_ASSOC);

// -----------------------------------------    

// include 'applibdconexion.php';


// $query = $pdo->prepare(
// 	' INSERT INTO
//             Comment
//             (Pseudo, Contents, Post_Id, CreationDate)
//         VALUES
//             (?, ?, ?, NOW())'
// 	);

// $query->execute( [ $_POST['nickName'], $_POST['contents'], $_POST['postId'] ] );

// header('Location: show_post.php?id='.$_POST['postId']);
// exit();

// ----------------------------------------



$query = $pdo->prepare(
	'SELECT
            Pseudo,
            Contents,
            CreationDate
        FROM
            Comment
        WHERE
            Post_Id = ?'
	);
    
$query->execute( [ $_GET['id'] ] );  
$comments = $query->fetchAll(PDO::FETCH_ASSOC);    
    

$template = "show_post";

include 'layout.phtml';

?>