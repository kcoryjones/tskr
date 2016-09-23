import angular from 'angular';

class TaskService {

	constructor($http, $q) {
		this.name = "task";
		this.$http = $http;
		this.$q = $q;
	}

	get() {
		alert('getting tasks');
	}

	edit(id) {
		alert('editing task ' + id);
	}

	add() {
		alert('adding new task');
	}

	update(id) {
		alert('updating task ' + id);
	}

	delete(id) {
		alert('deleting task ' + id);
	}

}

export default TaskService;