<?php include 'dischi-db.php'; ?>

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
                 <!-- soluzione Cristina il GET prende il valore di name -->
                 <select name="author" id="choose">
                     <option value="All">All</option>
                     <?php foreach ($database as $cd) { ?>
                         <option value="<?php echo $cd['author']; ?>"><?php echo $cd['author']; ?></option>
                     <?php } ?>
                 </select>
             </div>
         </header>

         <div class="cds-container container">


         </div>
         <script id="entry-template" type="text/x-handlebars-template">
             <div class="cd">
                 <img src="{{poster}}" alt="{{title}}{{author}}">
                 <h3>{{title}}</h3>
                 <span class="author">{{author}}</span>
                 <span class="year">{{year}}</span>
             </div>
         </script>
         <script src="../dist/app.js" charset="utf-8"></script>

     </body>
 </html>
