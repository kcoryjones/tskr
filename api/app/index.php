<?php

//load up fat free
$f3 = require __DIR__.'/../f3/3.5.0/lib/base.php';

// debug and erroring
$f3->set('DEBUG',3);
$f3->set('ONERROR', function($f3) {
	var_dump($f3->get('ERROR'));
});

// set up temp directory, cache directory
$f3->set('TEMP', '../tmp/');
$f3->set('CACHE', 'folder=/var/www/api/tmp/cache/');

// start cachd-based session and assign unique id
new Session();
if ($f3->devoid('SESSION.id')) {
	//ok for now, v4 uuid later
	$f3->set('SESSION.id', uniqid(null, true)); 
}

// enable basic CORS support
$f3->set('CORS.origin', 'http://tskr.dev');
$f3->set('CORS.headers', 'Origin, X-Requested-With, Content-Type, Accept');
$f3->set('CORS.credentials', true);

// set folder(s) to autoload classes from
$f3->set('AUTOLOAD', '../models/');

// db connection
$f3->set('DB', new DB\SQL(
	'mysql:host=localhost;port=3306;dbname=tskr',
	'root',
	'tskrdev'
));

// create response object
$f3->set('response', array('meta'=>array(),'rows'=>array()));

// map rest routes to dynamic model
$f3->map('/rest/@model', '@model');
$f3->map('/rest/@model/@id', '@model');

//kick everything off
$f3->run();
