import angular from 'angular';
import Task from './task/task';

let serviceModule = angular.module('app.services', [
	Task.name
]);

export default serviceModule;