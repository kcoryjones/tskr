import controller from './tasks.controller';
import template from './tasks.html!text';

let tasksComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default tasksComponent;