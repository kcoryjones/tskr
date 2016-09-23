import angular from 'angular';
import TaskService from './task.service';

let TaskServiceModule = angular.module('app.services.task', [])
.service('taskService', TaskService);

export default TaskServiceModule;