angular.module('myApp.task.show', [])
    .controller('TaskShowCtrl', ['$scope', 'toastr', 'TaskService', '$state', '$stateParams',
        function ($scope, toastr, TaskService, $state, $stateParams) {

            $scope.action = 'Update';

            getTask();

            function getTask() {
                TaskService.getTask($stateParams.id)
                    .then((result) => {
                        if (result.data.result === 'OK') {
                            $scope.task = result.data.task;
                        } else {
                            toastr.error('Server error', 'Error');
                        }
                    }, (error) => {
                        console.log(error);
                        toastr.error('Error connection', 'Error');
                    });
            }

            $scope.save = function (task) {
                if ($scope.errors = TaskService.taskDataValidator(task)) {
                    return false;
                }
                TaskService.updateTask(task)
                    .then((result) => {
                        if (result.data.result === 'OK') {
                            $state.go('app.task-list');
                        } else {
                            toastr.error('Server error', 'Error');
                        }
                    }, (error) => {
                        console.log(error);
                        toastr.error('Error connection', 'Error');
                    });
            };
        }]);