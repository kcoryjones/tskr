<?php

//load up fat free
$f3 = require __DIR__.'/../f3/3.5.0/lib/base.php';
$f3->set('DEBUG',3);

//set some routes
$f3->route('GET *', function() { echo json_encode(array()); });

//kick everything off
$f3->run();
