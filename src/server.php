<?php
    include 'dischi-db.php';

    //per trasformare il database in json
    header('Content-Type: application/json');

    echo json_encode($database);
