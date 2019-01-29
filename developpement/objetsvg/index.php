<?php

include 'shape.class.php';
include 'rectangle.class.php';
include 'program.class.php';
include 'carre.class.php';
include 'circle.class.php';
include 'ellipse.class.php';





$carre= new Carre(200, 150, 45, 'green', 0.5);
$rectangle = new Rectangle('50', '20', '200', '100', 'firebrick', '1');
$circle = new Circle('300', '250', '180', 'gold', '0.33');
$ellipse = new Ellipse('175','125','100','35','red');
$triangle = new Triangle('60 60', '200 250', '60 250', 'purple', '0.75');


$prog = new Program($rectangle, $carre, $circle,$ellipse);

$rec = $prog->drawRectangle();
$car = $prog->drawCarre();
$cir = $prog->drawCircle();
$ellp = $prog->drawEllipse();




var_dump($rec);
var_dump($car);
var_dump($circle);
var_dump($ellp);
var_dump($triangle);



include 'index.phtml';

?>

