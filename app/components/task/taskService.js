import config from '../config';

export default class TaskService {
    constructor($http) {
        this.http = $http;
        this.config = new config();
    }

    taskDataValidator(task) {
        let errors = {};
        let hasErrors = false;
        if (!task.title) {
            errors.title = 'Title field is required.';
            hasErrors = true;
        }
        if (!task.body) {
            errors.body = 'Body field is required.';
            hasErrors = true;
        }
        return hasErrors ? errors : false;
    }

    getAllTasks() {
        return this.http.get(`${this.config.apiUrl}/task/all`);
    }

    deleteTask(id) {
        return this.http.delete(`${this.config.apiUrl}/task/${id}`);
    }

    getTask(id) {
        return this.http.get(`${this.config.apiUrl}/task/${id}`);
    }

    updateTask(task) {
        return this.http.put(`${this.config.apiUrl}/task/${task._id}`, task);
    }

    storeTask(task) {
        return this.http.post(`${this.config.apiUrl}/task/`, task);
    }
}

TaskService.$inject = ['$http'];
