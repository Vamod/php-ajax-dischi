<?php include 'dischi-db.php' ?>

 <!DOCTYPE html>
 <html lang="en" dir="ltr">
     <head>
         <meta charset="utf-8">
         <title>php-ajax-dischi</title>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
         <link rel="stylesheet" href="../dist/app.css">
     </head>
     <body>
         <header>
             <div class="container">
                 <img src="logo.png" alt="logo" />
             </div>
         </header>

         <div class="cds-container container">
             <?php foreach ($database as $cd) { ?>
                 <div class="cd">
                     <img src="<?php echo $cd['poster']; ?>" alt="<?php echo $cd['title'].' '.$cd['author']; ?>">
                 </div>
             <?php } ?>

         </div>

     </body>
 </html>
