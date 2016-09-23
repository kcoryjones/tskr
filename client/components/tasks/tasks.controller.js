class TasksController {
	constructor(taskService) {
		this.name = 'tasks';
		this.taskService = taskService;
		this.getTasks();
	}

	getTasks() {
		this.taskService.get();
	}

	addTask() {
		this.taskService.add();
	}
}

export default TasksController;