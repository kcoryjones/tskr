import angular from 'angular';

class TaskService {

	constructor($http, $q) {
		this.name = "task";
		this.apiUrl = 'http://api.tskr.dev';
		this.$http = $http;
		this.$q = $q;
		this.tasks = [];
		this.editing = null;
	}

	edit(id) {
		this.editing = id;
	}

	get() {
		let $that = this;
		let deferred = this.$q.defer();
		//this.$http.get(this.apiUrl + '/tasks').then((response) => {
			// MOCKUP
			if (!$that.tasks.length) {
				$that.tasks = [
					{id:1,label:'Task One, eh'},
					{id:2,label:'Task Two, hoser'}
				]
			}
			// MOCKUP
			deferred.resolve();
		//}, (err) => {
			//deferred.reject(err);
		//});

		return deferred.promise;
	}

	add() {
		let $that = this;
		let deferred = this.$q.defer();
		//this.$http.post(this.apiUrl + '/tasks', {label:null}).then((response) => {
			this.get().then((response) => {
				// MOCKUP
				let id = Math.floor(Math.random()*(500-2)+2);
				$that.tasks.push({id,label:''});
				$that.edit(id);
				// MOCKUP
				deferred.resolve();
			}, (err) => {
				deferred.reject(err);
			});
		//}, (err) => {
			//deferred.reject(err);
		//});

		return deferred.promise;
	}

	update(task) {
		let $that = this;
		let deferred = this.$q.defer();
		//this.$http.post(this.apiUrl + '/tasks', task).then((response) => {
			this.get().then((response) => {
				// MOCKUP
				angular.forEach(this.tasks, function(value, key) {
					if (value.id == task.id) {
						$that.tasks[key] = task;
						$that.edit(null);
					}
				});
				// MOCKUP
				deferred.resolve();
			}, (err) => {
				deferred.reject(err);
			});
		//}, (err) => {
			//deferred.reject(err);
		//});

		return deferred.promise;
	}

	delete(id) {
		let $that = this;
		let deferred = this.$q.defer();
		//this.$http.delete(this.apiUrl + '/tasks/'+id).then((response) => {
			this.get().then((response) => {
				// MOCKUP
				angular.forEach(this.tasks, function(value, key) {
					if (value.id == id) {
						$that.tasks.splice(key, 1);
						$that.edit(null);
					}
				});
				// MOCKUP
				deferred.resolve();
			}, (err) => {
				deferred.reject(err);
			});
		//}, (err) => {
			//deferred.reject(err);
		//});

		return deferred.promise;
	}

}

export default TaskService;