class TasksController {
	constructor() {
		this.name = 'tasks';
		this.tasks = [
			{id:1,label:'Task One'},
			{id:2,label:'Task Two'}
		];
	}

	addTask() {
		alert('add task');
	}
}

export default TasksController;