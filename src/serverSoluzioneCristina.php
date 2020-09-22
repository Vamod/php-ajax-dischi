<?php
    include 'dischi-db.php';

    if (!empty($_GET['author'])){
        $dbFilter = [];
        $searchAuthor = $_GET['author'];

        foreach ($database as $cd) {

            if($searchAuthor == $cd['author']){
                // popolo array con $cd della condizione
                $dbFilter[] = $cd;
            }
        }
        header('Content-Type: application/json');
        echo json_encode($database);
        
    } else {
        //se non metto niente mi da il database
        header('Content-Type: application/json');
        echo json_encode($database);
    }
