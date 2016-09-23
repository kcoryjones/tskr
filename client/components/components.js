import angular from 'angular';
import Home from './home/home';
import Tasks from './tasks/tasks';
import Task from './task/task';

let componentModule = angular.module('app.components', [
	Home.name,
	Tasks.name,
	Task.name
]);

export default componentModule;