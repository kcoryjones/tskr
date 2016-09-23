import angular from 'angular';
import taskComponent from './task.component';

let taskModule = angular.module('task', [])
.directive('task', taskComponent);

export default taskModule;