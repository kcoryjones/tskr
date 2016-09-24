<?php

class task {

	public function __construct($f3) {
		$this->task = new \DB\SQL\Mapper(F3::get('DB'), 'task');
	}

	public function get($f3) {
		$id = $f3->get('PARAMS.id');
		if (!empty($id)) {
			$tasks = $this->task->find(['id=? and session_id=?', $id, $f3->get('SESSION.id')]);
		} else {
			$tasks = $this->task->find(['session_id=?', $f3->get('SESSION.id')]);
		}
		$f3->set('response.meta.success', true);
		foreach ($tasks as $key => $task) {
			$task->copyTo('response.rows.'.$key);
		}
	}

	public function post($f3) {
		$task = json_decode($f3->get('BODY'));
		$this->task->label = $task->label;
		$this->task->session_id = $f3->get('SESSION.id');
		if ($this->task->save()) {
			$f3->set('response.meta.success', true);
			$f3->set('response.meta.id', $this->task->id);
		}
	}

	public function put($f3) {
		$id = $f3->get('PARAMS.id');
		$task = json_decode($f3->get('BODY'));
		$this->task->load(array('id=? and session_id=?',$id, $f3->get('SESSION.id')));
		if (!$this->task->dry()) {
			$this->task->label = $task->label;
			if ($this->task->save()) {
				$f3->set('response.meta.success', true);
			}
		}
	}

	public function delete($f3) {
		$id = $f3->get('PARAMS.id');
		$this->task->load(array('id=? and session_id=?',$id, $f3->get('SESSION.id')));
		if (!$this->task->dry()) {
			if ($this->task->erase()) {
				$f3->set('response.meta.success', true);
			}
		}
	}

	public function afterRoute() {
		echo json_encode(F3::get('response'));
	}

}