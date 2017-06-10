angular.module('myApp.task.store', [])
    .controller('TaskStoreCtrl', ['$scope', 'toastr', 'TaskService', '$state',
        function ($scope, toastr, TaskService, $state) {

            $scope.action = 'Create new';

            $scope.save = function (task) {
                if ($scope.errors = TaskService.taskDataValidator(task)) {
                    return false;
                }
                TaskService.storeTask(task)
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