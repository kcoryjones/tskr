import angular from 'angular';
import 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/components';

let appModule = angular.module('app', [
	'ui.router',
	Components.name
])
.directive('app', AppComponent);

// manually bootstrap
var container = document.createElement('div');
container.id ='app-container';
var appNode = document.createElement('app');
container.appendChild(appNode);
var noAngularDOM = container.cloneNode(true);

document.body.appendChild(container);

angular.element(document).ready(() => {
	angular.bootstrap(container, [appModule.name]), {
		strictDi: true
	}
});

export default appModule;

export function __unload() {
	container = document.getElementById('app-container');
	container.remove();
	document.body.appendChild(noAngularDOM.cloneNode(true));
}