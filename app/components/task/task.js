import './list/task-list';
import './show/task-show';
import './store/task-store';
import TaskService from './taskService';

angular.module('myApp.task', [
    'myApp.task.list',
    'myApp.task.show',
    'myApp.task.store'
]).service('TaskService', TaskService);