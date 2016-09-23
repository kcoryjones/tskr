<?php

//load up fat free
$f3 = require __DIR__.'/../f3/3.5.0/lib/base.php';
$f3->set('DEBUG',3);
$f3->set('ONERROR', function($f3) {
	//var_dump($f3->get('ERROR'));
});

// enable basic CORS support
$f3->set('CORS.origin', '*.tskr.dev');

// set folder(s) to autoload classes from
$f3->set('AUTOLOAD', '../models/');

// db connection
$f3->set('DB', new DB\SQL(
	'mysql:host=localhost;port=3306;dbname=tskr',
	'root',
	'tskrdev'
));

// map rest routes to model
$f3->map('/rest/@model', '@model');
$f3->map('/rest/@model/@id', '@model');

//kick everything off
$f3->run();
