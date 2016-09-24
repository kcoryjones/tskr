import angular from 'angular';

class TaskService {

	constructor($http, $q) {
		this.name = "task";
		this.apiUrl = 'http://api.tskr.dev/rest';
		this.$http = $http;
		this.$q = $q;
		this.tasks = [];
		this.editing = null;
		this.defautlTaskLabel = 'New Task';
	}

	edit(id) {
		this.editing = id;
	}

	get() {
		let $that = this;
		let deferred = this.$q.defer();
		this.$http.get(this.apiUrl + '/task', {withCredentials:true}).then((response) => {
			if (response.data.meta.success) {
				$that.tasks = response.data.rows;
				deferred.resolve();
			} else {
				deferred.reject();
			}
		}, (err) => {
			deferred.reject(err);
		});

		return deferred.promise;
	}

	add() {
		let $that = this;
		let deferred = this.$q.defer();
		this.$http.post(this.apiUrl + '/task', {label:this.defautlTaskLabel}, {withCredentials:true}).then((response) => {
			if (response.data.meta.success) {
				this.get().then(() => {
					$that.edit(response.data.meta.id);
					deferred.resolve();
				}, (err) => {
					deferred.reject(err);
				});
			} else {
				deferred.reject();
			}
		}, (err) => {
			deferred.reject(err);
		});

		return deferred.promise;
	}

	update(task) {
		let $that = this;
		let deferred = this.$q.defer();
		this.$http.put(this.apiUrl + '/task/'+task.id, task, {withCredentials:true}).then((response) => {
			if (response.data.meta.success) {
				this.get().then(() => {
					$that.edit(null);
					deferred.resolve();
				}, (err) => {
					deferred.reject(err);
				});
			} else {
				deferred.reject();
			}
		}, (err) => {
			deferred.reject(err);
		});

		return deferred.promise;
	}

	delete(id) {
		let $that = this;
		let deferred = this.$q.defer();
		this.$http.delete(this.apiUrl + '/task/'+id, {withCredentials:true}).then((response) => {
			if (response.data.meta.success) {
				this.get().then(() => {
					$that.edit(null);
					deferred.resolve();
				}, (err) => {
					deferred.reject(err);
				});
			} else {
				deferred.reject();
			}
		}, (err) => {
			deferred.reject(err);
		});

		return deferred.promise;
	}

}

export default TaskService;