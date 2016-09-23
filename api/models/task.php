<?php

class task {

	public function __construct($f3) {
		$this->db = new \DB\SQL\Mapper(F3::get('DB'), 'task');
	}

	public function get($f3) {
		echo 'get ' . !empty($f3)*1;
	}

	public function post($f3) {
		echo 'post ' . !empty($f3)*1;
	}

	public function put($f3) {
		echo 'put ' . !empty($f3)*1;
	}

	public function delete($f3) {
		echo 'delete ' . !empty($f3)*1;
	}

}