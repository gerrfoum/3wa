<?php
/*
* Add support for title tag.
*/
add_theme_support('title-tag');
/*
* Remove meta generator tag.
*/
remove_action("wp_head", "wp_generator");
?>