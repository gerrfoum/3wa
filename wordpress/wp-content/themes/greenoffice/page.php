<?php get_header();?>
<!--MAIN CONTENT-->
    <main>
    <?php if(have_posts()):?>
        <?php while(have_posts()):the_post()?>
        <article>
            <h2><i class="fa fa-pagelines"></i> <?php the_title(); ?> </h2> <?php the_content(); ?>
            <img src="<?php bloginfo('template_url');?>/img/who.jpg" alt="photo de l'équipe"
            <a href="<php the_permalink();?>">Read more</a>
            <div class="clear"></div>
        </article>
    <?php endwhile ;?>
   <?php else:?>
   <?php endif ;?>
       <p>Aucun article !</p>
    </main>
    
<?php get_footer();?>
    


