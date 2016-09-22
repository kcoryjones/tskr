import angular from 'angular';
import tasksComponent from './tasks.component';

let tasksModule = angular.module('tasks', [])
.directive('tasks', tasksComponent);

export default tasksModule;