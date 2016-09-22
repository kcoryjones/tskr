import controller from './task.controller';
import template from './task.html!text';

let taskComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {
			task: '='
		},
		bindToController: true
	};
};

export default taskComponent;