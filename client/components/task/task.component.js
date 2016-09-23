import controller from './task.controller';
import template from './task.html!text';
import './task.scss!';

let taskComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {
			task: '<',
			editing: '<'
		},
		bindToController: true
	};
};

export default taskComponent;