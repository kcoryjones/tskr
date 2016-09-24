class TaskController {
	constructor(taskService) {
		this.name = 'task';
		this.taskService = taskService;
		this.newLabel = this.task.label;
	}

	edit() {
		this.newLabel = this.task.label;
		this.taskService.edit(this.task.id);
	}

	delete() {
		this.taskService.delete(this.task.id);
	}

	save() {
		let updatedTask = {id: this.task.id, label: this.newLabel};
		this.taskService.update(updatedTask);
	}
}

export default TaskController;