import angular from 'angular';
import 'angular-ui-router';
import 'angular-css';
import AppComponent from './app.component';
import Components from './components/components';
import Services from './services/services';

let appModule = angular.module('app', [
	'ui.router',
	'angularCSS',
	Components.name,
	Services.name
])
.config(($locationProvider) => {
	$locationProvider.html5Mode(true);
})
.directive('app', AppComponent);

// manually bootstrap
let container = document.createElement('div');
container.id ='app-container';
let appNode = document.createElement('app');
container.appendChild(appNode);
let noAngularDOM = container.cloneNode(true);

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