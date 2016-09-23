class TasksController {
	constructor(taskService) {
		this.name = 'tasks';
		this.taskService = taskService;
		this.tasks = [
			{id:1,label:'Task One'},
			{id:2,label:'Task Two'}
		];
	}

	addTask() {
		this.taskService.add();
	}
}

export default TasksController;