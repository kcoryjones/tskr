import template from './app.html!text';
import 'purecss/build/pure.css!';
import 'font-awesome/css/font-awesome.min.css!';
import './app.scss!';

let appComponent = ()=> {
	return {
		template, // because we have a variable name template we can use the shorcut here
		restrict: 'E'
	};
};

export default appComponent;