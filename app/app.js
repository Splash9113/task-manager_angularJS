import 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-toastr';
import './components/task/task';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import '../node_modules/angular-toastr/dist/angular-toastr.css';

angular.module('myApp', [
    'ui.router',
    'ngAnimate',
    'toastr',
    'myApp.task'
]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '/task');
    $urlRouterProvider.otherwise('/task');
    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: 'layout.html'
        })
        .state('app.task-list', {
            url: 'task',
            templateUrl: 'components/task/list/task-list.html',
            controller: 'TaskListCtrl'
        })
        .state('app.task-show', {
            url: 'task/:id',
            templateUrl: 'components/task/show/task-show.html',
            controller: 'TaskShowCtrl'
        })
        .state('app.task-add', {
            url: 'task/add',
            templateUrl: 'components/task/show/task-show.html',
            controller: 'TaskStoreCtrl'
        });
}]);
